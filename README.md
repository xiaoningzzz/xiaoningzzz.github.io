# Xiaoning Zhao 学术个人主页（易编辑版）

这个网站无需安装任何依赖，能直接发布到 GitHub Pages。

## 以后只改一个文件

打开 **`content.js`**，按注释修改：

- `name`, `email`, `github`：基础信息
- `position`、`university`：身份和学校
- `about`：中英文自我介绍（`en` 英文、`zh` 中文）
- `research`：研究方向（可复制条目添加）
- `education`：教育经历
- `projects`：项目和链接（可复制条目添加）
- `publications`：论文；留 `[]` 就自动隐藏
- `avatar`：填 `avatar.jpg` 并将图片放在网站根目录；留空显示 XZ 占位

**注意**：修改文字时要保留引号、逗号和大括号；英文句子如果用单引号包住，内部含 `'` 时请换双引号。

## 文件用途

- `index.html` — 网页结构，不用动
- `style.css` — 网页外观，不用动
- `main.js` — 自动渲染和中英切换，不用动
- `content.js` — **唯一需要经常修改的内容配置文件**

## 本地预览

直接双击 `index.html`，或在 VS Code 使用 Live Server 打开。

## GitHub Pages 发布

将这四个文件放在 `xiaoningzzz.github.io` 仓库根目录（替换旧版 `index.html`），然后运行：

```bash
git add index.html style.css main.js content.js
git commit -m "Make academic website easier to edit"
git push
```

GitHub 仓库 Settings → Pages 使用 `main` / `(root)` 发布。之后编辑 `content.js` 并 `git add content.js && git commit -m "Update homepage" && git push`。
