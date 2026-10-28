# 星河好困 · CTF Misc 工具箱

XingHeHaoKun.github.io 站点源码：纯手写静态 HTML/CSS/JS，零框架、零构建、零第三方依赖。内容主题为 CTF Misc 方向工具笔记。

## 目录结构

```
.
├── index.html                     # 首页（文章列表）
├── about.html                     # 关于页（工具箱清单）
├── 404.html                       # GitHub Pages 自定义 404
├── favicon.svg                    # 站点图标
├── .nojekyll                      # 禁用 Jekyll 处理
├── assets/
│   ├── style.css                  # 全站样式（含深浅色主题）
│   └── theme.js                   # 主题切换 + 文章目录高亮
└── posts/                         # 文章目录，每篇一个 HTML 文件
    ├── misc-workflow.html         # Misc 标准动作与工具分工总表
    ├── hex-and-meta.html          # 010 Editor / Strings / Exif Pilot
    ├── stego.html                 # StegSolve / zsteg / QR
    ├── traffic-and-router.html    # Wireshark / RouterPassView
    ├── archive-crack.html         # ZipCenOp / ARCHPR / RailsInstaller
    └── encoding-toolkit.html      # [随波逐流]CTF编码工具
```

## 部署

1. 在 GitHub 创建名为 `XingHeHaoKun.github.io` 的仓库（用户名必须与账号一致，否则 Pages 不会自动生效）；
2. 本目录初始化并推送：

```bash
git init
git add .
git commit -m "init: misc toolbox blog"
git remote add origin https://github.com/XingHeHaoKun/XingHeHaoKun.github.io.git
git branch -M main
git push -u origin main
```

3. 仓库 `Settings → Pages` 确认来源为 `main` 分支根目录，访问 <https://xinghehaokun.github.io>。

## 如何写一篇新文章

1. 复制 `posts/` 下任意一篇 HTML 作为模板（保留 `../` 相对路径引用样式）；
2. 写好后在 `index.html` 的 `<ul class="post-list">` 里加一张文章卡片；
3. `git push` 即完成发布。

## 本地预览

直接双击 `index.html` 用浏览器打开即可；或在本目录运行：

```bash
python -m http.server 8000
```

访问 <http://localhost:8000>。
