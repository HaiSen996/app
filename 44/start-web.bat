@echo off
echo ========================================
echo  GreenBeat Web 版本启动器
echo ========================================
echo.

echo 正在复制配置文件...
copy web-package.json package.json
copy web-vite.config.ts vite.config.ts
copy web-tsconfig.json tsconfig.json
copy web-tailwind.config.js tailwind.config.js
copy web-postcss.config.js postcss.config.js
copy web-index.html index.html

echo.
echo 正在安装依赖...
call npm install

if %errorlevel% neq 0 (
    echo.
    echo [错误] 依赖安装失败！请检查是否已安装 Node.js
    echo 下载地址: https://nodejs.org/
    pause
    exit /b 1
)

echo.
echo ========================================
echo  启动开发服务器...
echo  请在浏览器中打开 http://localhost:3000
echo ========================================
call npm run dev

pause
