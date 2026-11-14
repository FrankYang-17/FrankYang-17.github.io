# 主页底部访客地图

主页末尾的 `Visitors Around the World` 区域已接入 MapMyVisitors 的地图组件模板。尚未填写专属 ID 时，只显示待启用提示，不请求统计服务，也不显示虚构数量。

## 启用

1. 打开 <https://mapmyvisitors.com/add>，填写主页地址 `https://FrankYang-17.github.io/`，按页面提示创建 **Map Counter**。
2. 从生成的 `<script>` 代码中找到 `map.js` 地址里的 `d=` 参数，复制它的完整值，到下一个 `&` 为止。不要复制其他网站的 ID。
3. 编辑 `_config.yml`：

   ```yaml
   visitor_map:
     enabled: true
     widget_id: "粘贴你自己的 d 参数值"
   ```

4. 将修改提交并推送到 GitHub Pages 的发布分支。若使用自定义构建流程，需设置 `JEKYLL_ENV=production`；默认本地开发预览不会加载统计组件，以免将调试访问计入统计。
5. 部署后打开线上主页，滚动到底部检查地图；点击地图进入该站点的统计页，核对累计访问量和各国家、城市的数量明细。地图与总量显示由服务方提供，首次收集及更新可能需要等待。

后续关闭此区域，只需将 `enabled` 改为 `false`。

## 统计口径与限制

- 仅统计启用之后、成功加载组件的访问，无法恢复此前的历史数据。
- 地理位置由 IP 估算，VPN、代理和移动网络可能影响结果。
- 总访问量（visits/pageviews）不等于独立访客人数（unique visitors）。具体字段和去重规则以服务方统计页为准，不把访问次数标记成独立人数。
- 地图和累计数量使用同一服务；国家、城市明细通过点击地图查看，并非独立嵌入主页的列表。
- 网络限制、广告拦截或禁用 JavaScript 可能使组件无法加载或漏计。脚本加载失败时页面会显示提示。
- 为统计访问，访客浏览器会向 MapMyVisitors 发送请求。主页下方保留了服务来源与 IP 定位说明。

## 相关文件

- `_pages/about.md`：在主页内容末尾引入组件。
- `_includes/visitor-map.html`：待启用提示、地图与加载失败提示。
- `_sass/_visitor-map.scss`：响应式布局和样式。
- `_config.yml`：开关与站点专属 ID。

服务说明：<https://mapmyvisitors.com/>。
