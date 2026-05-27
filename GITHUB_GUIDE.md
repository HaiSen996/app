# GreenBeat 项目上传到 GitHub 指南

## 前置准备

### 1. 安装必要软件
由于当前系统未安装 Git 和 Node.js，请先安装：

**Git**
- 下载地址：https://git-scm.com/download/win
- 安装后重启命令行，运行 `git --version` 验证

**Node.js**
- 下载地址：https://nodejs.org/（建议 LTS 版本）
- 安装后运行 `node --version` 和 `npm --version` 验证

### 2. 准备 GitHub 仓库
1. 登录 GitHub 账号
2. 点击右上角 + 号 → "New repository"
3. 仓库名称填写 "greenbeat"（或你喜欢的名称）
4. 选择 Public 或 Private
5. **不要**初始化 README、.gitignore 或 License（我们已有）
6. 点击 "Create repository"

## 上传步骤

### 方式一：使用 GitHub Desktop（推荐，更简单）

1. 下载安装 GitHub Desktop：https://desktop.github.com/
2. 打开 GitHub Desktop，登录你的 GitHub 账号
3. 点击 "File" → "Add Local Repository"
4. 选择 `C:\Users\许永生\Desktop\44` 文件夹
5. 如果提示 "This repository is not a Git repository"，点击 "Create a Git Repository"
6. 在左侧填写提交信息：
   - Summary: "Initial commit - GreenBeat music player"
7. 点击 "Commit to main"
8. 点击 "Publish repository"（或 "Push repository"）
9. 在弹出框中选择你的 GitHub 账号，点击 "Publish"

### 方式二：使用命令行

安装 Git 和 Node.js 后，按以下步骤操作：

```bash
# 1. 进入项目目录
cd C:\Users\许永生\Desktop\44

# 2. 初始化 Git 仓库
git init

# 3. 添加所有文件
git add .

# 4. 首次提交
git commit -m "Initial commit - GreenBeat music player"

# 5. 关联远程仓库（替换 YOUR_USERNAME 和 REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 6. 推送到 GitHub
git branch -M main
git push -u origin main
```

如果提示登录，按提示输入 GitHub 账号和 Personal Access Token。

## 项目说明

### 项目结构
```
44/
├── src/                    # React Native 版本源文件
│   ├── components/         # 通用组件
│   ├── pages/              # 页面组件
│   ├── store/              # Zustand 状态管理
│   ├── data/               # 模拟数据
│   ├── types/              # TypeScript 类型定义
│   └── App.tsx             # 应用入口
├── web-src/                # Web 版本源文件
│   ├── components/         # Web 组件
│   ├── pages/              # Web 页面
│   ├── store/              # Web 状态管理
│   ├── data/               # Web 数据
│   └── App.tsx             # Web 应用入口
├── package.json            # RN 项目依赖
├── web-package.json        # Web 项目依赖
└── README.md               # 项目说明
```

### 运行 Web 版本（推荐先运行这个）

```bash
# 复制配置文件
copy web-package.json package.json
copy web-vite.config.ts vite.config.ts
copy web-tsconfig.json tsconfig.json
copy web-tailwind.config.js tailwind.config.js
copy web-postcss.config.js postcss.config.js
copy web-index.html index.html

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

然后在浏览器中打开显示的地址（通常是 http://localhost:3000）

### 运行 React Native 版本

```bash
# 确保使用 RN 版本的 package.json
npm install

# 启动 Expo 开发服务器
npm start
```

## 功能特性

- 🎵 **首页**：趋势歌单、推荐歌曲、分类浏览
- 🔍 **搜索**：搜索歌曲、按流派筛选
- 📚 **音乐库**：我的歌单、收藏、最近播放
- ▶️ **播放器**：播放控制、进度条、循环/随机播放
- 👤 **个人中心**：用户信息、设置、快捷操作

## 技术栈

- React 18 + TypeScript
- Vite（Web 版本）
- Expo + React Native（移动版本）
- Tailwind CSS / NativeWind
- Zustand 状态管理

## 注意事项

1. Web 版本和 RN 版本共享相同的逻辑，但使用不同的 UI 组件
2. 所有图片使用 Unsplash 真实图片，可以正常加载
3. 播放功能是模拟的，不播放真实音频文件
4. 建议优先运行 Web 版本查看效果
