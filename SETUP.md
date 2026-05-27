# GreenBeat 项目启动指南

## 前置条件

在运行此项目之前，请确保已安装以下软件：

### 1. 安装 Node.js
- 下载地址: https://nodejs.org/
- 推荐版本: 18.x 或 20.x LTS 版本
- 安装后，在终端运行 `node -v` 和 `npm -v` 验证安装

### 2. 安装 Expo CLI (可选，推荐)
```bash
npm install -g expo-cli
```

## 项目设置步骤

### 1. 导航到项目目录
```bash
cd c:\Users\许永生\Desktop\44
```

### 2. 安装依赖
```bash
npm install
```

### 3. 启动项目
```bash
npm start
```

## 运行方式

### 在 Expo Go 中运行（推荐）
1. 安装 Expo Go 应用（iOS 或 Android）
2. 手机和电脑连接同一 Wi-Fi
3. 使用手机扫描终端显示的二维码

### 在模拟器中运行
```bash
# iOS 模拟器 (仅限 macOS)
npm run ios

# Android 模拟器
npm run android
```

### 在浏览器中运行
```bash
npm run web
```

## 项目结构说明

- `package.json` - 项目依赖配置
- `src/App.tsx` - 应用主入口
- `src/navigation/` - 导航配置
- `src/pages/` - 页面组件
- `src/components/` - 通用组件
- `src/data/mockData.ts` - 模拟数据
- `src/store/playerStore.ts` - 全局状态管理

## 常见问题

### npm install 失败
- 尝试使用 `npm install --legacy-peer-deps`
- 或者删除 `node_modules` 文件夹和 `package-lock.json` 后重新安装

### 依赖版本冲突
- 本项目使用 Expo 49.x 版本，请确保安装兼容的依赖

### 端口被占用
- Expo 默认使用 19000 端口，可使用 `npm start -- --port 8081` 指定其他端口
