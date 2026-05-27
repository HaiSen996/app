# 🚀 GreenBeat 快速开始指南

## 最简单的方式：启动 Web 版本

### Windows 用户

1. 双击运行 `start-web.bat`
2. 等待依赖安装和服务器启动
3. 浏览器会自动打开 http://localhost:3000

### 手动启动（所有系统）

```bash
# 1. 复制配置文件
copy web-package.json package.json          # Windows
cp web-package.json package.json            # Mac/Linux

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev
```

## 功能展示

- 🎵 **首页** - 查看趋势歌单和推荐歌曲
- 🔍 **搜索** - 浏览不同音乐流派
- 📚 **音乐库** - 查看你的歌单和收藏
- ▶️ **播放器** - 控制播放、调节进度
- 👤 **我的** - 用户信息和设置

## 项目特色

- 🎨 深色主题设计（Spotify 风格）
- 📱 响应式布局，适配各种屏幕
- ⚡ 使用 Zustand 进行状态管理
- 🎯 TypeScript 类型安全
- 💨 Vite 快速开发体验

## 下一步？

查看 [GITHUB_GUIDE.md](GITHUB_GUIDE.md) 了解如何将项目上传到 GitHub！
