# 主页底部访客地图

桌面端左侧显示世界地图与城市点位，右侧显示总访客数和按访问量降序排列的城市列表。手机端上下排列。

## 展示规则

- 地图只使用陆地轮廓，无国界、国家或地区名称、旗帜。
- 列表、地图悬停提示和无障碍标签仅显示**城市名与访问量**，例如仅显示“台北”。
- 模板只读取城市的 `name`、`visits`、`latitude`、`longitude` 字段；不输出统计服务的国家或地区字段。
- `name` 必须是单独的城市名，不可传入带国家或地区后缀的拼接名称。同名城市也不追加国家或地区用于区分。
- 不加载 MapMyVisitors 或其他外部可视化组件，也不链接到其明细页，避免第三方组件附带无法控制的标签。

## 当前状态与数据接入

尚未连接真实访客统计服务。地图无虚构点位，总数显示 `—`，城市列表显示待接入提示。

数据入口为 `_data/visitor_stats.yml`：

- `total_visitors`：统计服务提供的累计独立访客人数，未知时保持 `null`，真实的 0 会正常显示。
- `updated_at`：数据更新时间；填入带时区的字符串，供页面展示。
- `cities`：城市记录数组。每项的 `name` 是纯城市名，`visits` 是非负整数访问次数。
- 可选 `latitude`、`longitude` 为该城市的近似经纬度。地图采用等距圆柱投影，仅绘制纬度 -70 至 90、经度 -180 至 180 范围内且访问量大于 0 的点位。缺少或超出范围的坐标不会生成点位，城市仍保留在列表中。

填入真实数据后重新构建、发布，地图和列表会从同一份数据生成，不需要 JavaScript。这是**发布时的统计快照**，不会自行采集访问或实时更新。自动更新仍需后续接入统计服务 API/导出流程，并在进入此文件前选取纯城市名、访问量和坐标。

总访客数与城市访问次数不是同一口径：同一访客可能产生多次访问或出现在不同城市，不应把城市访问量相加当作独立访客数。两者应采用同一数据源与统计时间范围。

配置 `_config.yml` 的 `visitor_map.enabled: false` 可以关闭整个区域。旧的 `widget_id` 已不再使用。

## 相关文件

- `_includes/visitor-map.html`：本地 SVG 城市点位、总访客数与城市访问量列表。
- `_sass/_visitor-map.scss`：两栏布局、手机适配与城市列表滚动区域。
- `assets/images/visitor-world-map.svg`：本地地图陆地轮廓。
- `_data/visitor_stats.yml`：真实数据的预留入口。

底图由 [Natural Earth 110m land](https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_110m_land.geojson) 生成，数据为[公有领域](https://www.naturalearthdata.com/about/terms-of-use/)。只使用海岸线和陆地轮廓，不使用行政区划数据。
