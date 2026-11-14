# 实时城市访客地图

主页仍由 GitHub Pages 托管；访问采集和统计查询由独立的 Sites 服务提供。页面首次加载记录一次访问，在页面可见时每 1 秒同时更新总访客数和城市访问量；重新切回页面也会更新。若上一请求尚未完成，则等待下一轮刷新，避免请求堆积。轮询不会增加访问量。

## 展示与统计口径

- 左侧为无国界、无国家/地区名称的陆地轮廓与城市点位。右侧为总访客数、城市访问量降序列表。
- 列表、点位提示与无障碍标签只读取城市名称和数量，不输出国家、地区或旗帜。
- 鼠标悬浮地图点位或通过键盘聚焦时，显示城市名称和访问次数；提示内容随统计更新，按 Escape 可关闭。Contents 目录显示与章节标题一致的 emoji。
- 总访客数按随机浏览器标识去重，不是精确的人数。同一浏览器刷新不会新增独立访客；清理存储、使用不同浏览器或设备可能被视为新访客。
- 城市访问量统计页面访问次数。重复请求使用同一个事件 ID，不重复计数；同一浏览器 5 秒内的连续加载合并计数。
- 浏览器匿名标识保存在本站 localStorage；后端保存其 SHA-256 摘要，不保存原始 IP、国家或地区。浏览器通过 IPWHOIS 官方 CORS 接口查询自身的近似城市，仅请求 city、latitude、longitude，再把这三个字段发给 Sites；本次授权允许向 IPWHOIS 传输访问来源 IP。
- Sites 共享服务器出口的城市查询额度受限，因此使用官方浏览器调用方式。城市查询结果在同一标签页缓存 15 分钟；超时或限流不影响总数统计。城市数据由浏览器报告，后端验证字段和坐标范围，但不将其当作经过身份认证的地理证据。
- 缺少城市信息的访问仍计入总数，不虚构点位。城市访问次数之和不等于独立访客数。

## 配置与维护

`_config.yml` 的 `visitor_map.api_url` 指向统计服务：

`https://frank-homepage-visitor-stats.endearingdhole.chatgpt.site`

- `POST /api/visit`：接收匿名浏览器 UUID 与事件 UUID，返回最新统计。只允许主页 Origin 的浏览器写入。
- `GET /api/stats`：只读公开聚合数据，禁用缓存。
- `GET /api/health`：检查数据库可用性。

Sites 后端源码位于同级目录 `../frank-homepage-visitor-service`，项目身份记录在该目录的 `.openai/hosting.json`。使用 Sites 的源代码、构建、版本发布流程更新；数据库由 D1 持久保存，重新发布前端不会清空统计。

本地预览的 Origin 与配置的正式主页不同，因此不会上报访问。`_data/visitor_stats.yml` 仅保留无 JavaScript 时的静态后备状态；正常浏览时以实时 API 为准。接口失败会明确提示并保留最后一次成功显示的数据，不把失败显示为 0。

## 文件

- `_includes/visitor-map.html`：Visitors 章节的页面结构与后备显示；Contents 中的 Visitors 链接跳转至 `#visitor-map`。
- `assets/js/visitor-map.js`：匿名标识、访问上报、1 秒刷新与城市数据绘制。
- `_sass/_visitor-map.scss`：桌面、手机布局与状态样式。
- `assets/images/visitor-world-map.svg`：Natural Earth 公有领域陆地轮廓。

上线前的历史流量无法恢复；VPN、代理、广告拦截及浏览器存储限制可能影响统计。统计服务为公开匿名接口，来源检查用于约束正常浏览器接入，并非强抗刷认证，数据用于个人主页的近似访问展示。

城市查询使用 [IPWHOIS 免费接口](https://ipwhois.io/documentation)，其额度与可用性会影响城市定位。浏览器对成功查询作短期会话缓存；超时或限流时继续累计总数，保留城市未知，不编造地点。
