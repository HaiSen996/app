# GreenBeat - Music App

一款基于 Expo + React Native + TypeScript + NativeWind 构建的音乐播放器应用。

## 技术栈

- **框架**: React Native (Expo)
- **语言**: TypeScript
- **样式**: NativeWind (Tailwind CSS)
- **导航**: React Navigation
- **状态管理**: Zustand

## 功能特性

### 页面
- **首页**: 问候文案、趋势歌单、推荐歌单、音乐分类标签
- **搜索页**: 搜索框、流派标签、最近搜索记录、分类入口
- **音乐库**: 歌单列表、收藏歌曲、最近播放、下载管理
- **播放器**: 专辑封面、播放控制、进度条、收藏功能
- **个人中心**: 用户信息、统计数据、快捷操作、设置

### 交互
- 播放/暂停、上一曲/下一曲
- 进度条拖拽
- 循环播放模式（单曲/列表）
- 随机播放
- 歌曲收藏（爱心按钮）
- 页面路由跳转

## 设计规范

- **主背景**: #000000
- **卡片背景**: #121212
- **品牌主色**: #1DB954
- **主文字**: #FFFFFF
- **次要文字**: #B3B3B3
- **圆角设计**: 卡片、按钮使用圆角
- **阴影效果**: 轻微阴影增加层次感

## 项目结构

```
src/
├── components/          # 通用组件
│   ├── SongCard.tsx     # 歌曲卡片
│   ├── PlaylistCard.tsx # 歌单卡片
│   ├── SongListItem.tsx # 歌曲列表项
│   ├── ProgressBar.tsx  # 进度条
│   └── IconButton.tsx   # 图标按钮
├── data/                # 模拟数据
│   └── mockData.ts      # 歌曲、艺人、歌单数据
├── navigation/          # 路由配置
│   └── index.ts         # 底部Tab导航 + Stack导航
├── pages/               # 页面组件
│   ├── HomePage.tsx     # 首页
│   ├── SearchPage.tsx   # 搜索页
│   ├── LibraryPage.tsx  # 音乐库
│   ├── PlayerPage.tsx   # 播放器
│   ├── ProfilePage.tsx  # 个人中心
│   ├── PlaylistDetailPage.tsx  # 歌单详情
│   └── ArtistDetailPage.tsx    # 艺人详情
├── store/               # 状态管理
│   └── playerStore.ts   # 播放器状态
├── types/               # TypeScript类型定义
│   └── index.ts         # 核心类型定义
├── App.tsx              # 应用入口
├── main.tsx             # 主入口
└── index.css            # 全局样式
```

## 安装与运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm start

# 运行到iOS模拟器
npm run ios

# 运行到Android模拟器
npm run android

# 运行到Web
npm run web
```

## 开发说明

1. 所有数据均为本地模拟数据，无需后端接口
2. 使用 Zustand 管理全局播放状态
3. 组件化开发，抽离通用组件便于复用
4. 遵循深色主题设计规范
