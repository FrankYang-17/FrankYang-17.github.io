(function () {
  'use strict';
  var root = document.getElementById('visitor-map');
  if (!root || !root.dataset.apiUrl) return;
  var api;
  try {
    api = new URL(root.dataset.apiUrl);
    // Development previews must not add visits to the live homepage.
    if (new URL(root.dataset.siteUrl).origin !== window.location.origin) return;
    if (api.protocol !== 'https:') return;
  } catch (_) { return; }

  var total = root.querySelector('[data-visitor-total]');
  var status = root.querySelector('[data-visitor-status]');
  var updated = root.querySelector('[data-visitor-updated]');
  var rows = root.querySelector('[data-visitor-city-rows]');
  var table = root.querySelector('[data-visitor-cities]');
  var empty = root.querySelector('[data-visitor-empty]');
  var markers = root.querySelector('[data-visitor-markers]');
  var mapMessage = root.querySelector('[data-visitor-map-message]');
  var format = new Intl.NumberFormat('en-US');
  var hasData = false;
  var refreshing = false;
  var lastResponseTime = 0;
  var svgNS = 'http://www.w3.org/2000/svg';

  function uuid() {
    if (crypto.randomUUID) return crypto.randomUUID();
    var bytes = crypto.getRandomValues(new Uint8Array(16));
    bytes[6] = (bytes[6] & 15) | 64;
    bytes[8] = (bytes[8] & 63) | 128;
    var hex = Array.from(bytes, function (b) { return b.toString(16).padStart(2, '0'); }).join('');
    return hex.slice(0, 8) + '-' + hex.slice(8, 12) + '-' + hex.slice(12, 16) + '-' + hex.slice(16, 20) + '-' + hex.slice(20);
  }

  function visitorID() {
    var id;
    var pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    try {
      id = localStorage.getItem('homepage-visitor-id-v1');
      if (!pattern.test(id || '')) {
        id = uuid();
        localStorage.setItem('homepage-visitor-id-v1', id);
      }
      return id;
    } catch (_) {
      // Restricted storage: keep an identifier for this tab when possible.
      try {
        id = sessionStorage.getItem('homepage-visitor-id-v1');
        if (!pattern.test(id || '')) {
          id = uuid();
          sessionStorage.setItem('homepage-visitor-id-v1', id);
        }
        return id;
      } catch (_) { return uuid(); }
    }
  }

  async function lookupCity() {
    try {
      var cached = JSON.parse(sessionStorage.getItem('homepage-visitor-city-v1') || 'null');
      if (cached && cached.expires > Date.now()) return cached.location;
    } catch (_) { /* Storage is optional. */ }
    var controller = new AbortController();
    var timer = setTimeout(function () { controller.abort(); }, 4000);
    try {
      var response = await fetch('https://ipwho.is/?fields=success,city,latitude,longitude', {credentials: 'omit', signal: controller.signal});
      if (!response.ok) return null;
      var data = await response.json();
      if (data.success !== true || typeof data.city !== 'string' || !data.city || data.city.length > 120 || !Number.isFinite(data.latitude) || !Number.isFinite(data.longitude) || Math.abs(data.latitude) > 90 || Math.abs(data.longitude) > 180) return null;
      var location = {source: 'ipwhois', city: data.city, latitude: data.latitude, longitude: data.longitude};
      try { sessionStorage.setItem('homepage-visitor-city-v1', JSON.stringify({location: location, expires: Date.now() + 15 * 60 * 1000})); } catch (_) { /* Storage is optional. */ }
      return location;
    } catch (_) { return null; }
    finally { clearTimeout(timer); }
  }

  async function request(path, payload) {
    var controller = new AbortController();
    var timer = setTimeout(function () { controller.abort(); }, 10000);
    try {
      var options = {method: payload ? 'POST' : 'GET', mode: 'cors', credentials: 'omit', cache: 'no-store', signal: controller.signal};
      if (payload) {
        options.headers = {'Content-Type': 'application/json'};
        options.body = JSON.stringify(payload);
      }
      var response = await fetch(new URL(path, api).href, options);
      if (!response.ok) throw new Error('Statistics unavailable');
      return await response.json();
    } finally { clearTimeout(timer); }
  }

  function render(data) {
    if (!Number.isSafeInteger(data.total_visitors) || data.total_visitors < 0 || !Array.isArray(data.cities)) throw new Error('Invalid statistics');
    var responseTime = Date.parse(data.generated_at);
    if (!Number.isFinite(responseTime)) throw new Error('Invalid timestamp');
    if (responseTime < lastResponseTime) return;
    lastResponseTime = responseTime;
    var cities = data.cities.filter(function (city) {
      return typeof city.name === 'string' && city.name.trim() !== '' && Number.isSafeInteger(city.visits) && city.visits >= 0;
    }).sort(function (a, b) { return b.visits - a.visits || a.name.localeCompare(b.name); });
    var rowFragment = document.createDocumentFragment();
    var markerFragment = document.createDocumentFragment();
    var mapped = 0;
    cities.forEach(function (city) {
      var tr = document.createElement('tr');
      var name = document.createElement('th');
      var visits = document.createElement('td');
      name.scope = 'row';
      name.textContent = city.name;
      visits.textContent = format.format(city.visits);
      tr.appendChild(name);
      tr.appendChild(visits);
      rowFragment.appendChild(tr);
      if (city.visits > 0 && typeof city.latitude === 'number' && typeof city.longitude === 'number' && Number.isFinite(city.latitude) && Number.isFinite(city.longitude) && city.latitude >= -70 && city.latitude <= 90 && Math.abs(city.longitude) <= 180) {
        var dot = document.createElementNS(svgNS, 'circle');
        var title = document.createElementNS(svgNS, 'title');
        var label = city.name + ': ' + format.format(city.visits) + ' visits';
        dot.setAttribute('class', 'visitor-map__marker');
        dot.setAttribute('cx', String((city.longitude + 180) * 2));
        dot.setAttribute('cy', String((90 - city.latitude) * 2));
        dot.setAttribute('r', '4');
        dot.setAttribute('tabindex', '0');
        dot.setAttribute('role', 'img');
        dot.setAttribute('aria-label', label);
        title.textContent = label;
        dot.appendChild(title);
        markerFragment.appendChild(dot);
        mapped++;
      }
    });
    rows.replaceChildren(rowFragment);
    markers.replaceChildren(markerFragment);
    table.hidden = cities.length === 0;
    empty.hidden = cities.length !== 0;
    empty.textContent = 'No city information available yet.';
    mapMessage.hidden = mapped > 0;
    mapMessage.textContent = 'Visitor cities will appear as location data becomes available.';
    total.textContent = format.format(data.total_visitors);
    status.textContent = 'Live · refreshes every 20s';
    updated.textContent = 'Updated ' + new Date(responseTime).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'});
    updated.hidden = false;
    hasData = true;
  }

  function unavailable() {
    status.textContent = hasData ? 'Connection interrupted · showing last update' : 'Statistics temporarily unavailable';
  }

  async function refresh() {
    if (refreshing || document.hidden) return;
    refreshing = true;
    try { render(await request('/api/stats')); } catch (_) { unavailable(); }
    finally { refreshing = false; }
  }

  status.textContent = 'Loading live statistics…';
  var payload;
  try { payload = {visitor_id: visitorID(), event_id: uuid()}; } catch (_) { payload = null; }
  var locationPromise = lookupCity();
  var locationLoaded = false;
  async function record(attempt) {
    if (!payload) { await refresh(); return; }
    if (!locationLoaded) { payload.location = await locationPromise; locationLoaded = true; }
    try { render(await request('/api/visit', payload)); }
    catch (_) {
      await refresh();
      // Reuse the event ID: a timeout after a successful insert must not double-count.
      if (attempt < 2) setTimeout(function () { record(attempt + 1); }, (attempt + 1) * 3000);
    }
  }
  refresh();
  record(0);
  setInterval(refresh, 20000);
  document.addEventListener('visibilitychange', function () { if (!document.hidden) refresh(); });
})();
