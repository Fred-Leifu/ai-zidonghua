@echo off
echo ========================================
echo  GitHub Pages 部署脚本
echo ========================================
echo.

cd /d "%~dp0"

echo [1/4] 检查Git状态...
git status
echo.

echo [2/4] 添加更改...
git add .
echo.

echo [3/4] 创建提交...
git commit -m "Update: %date% %time%"
echo.

echo [4/4] 推送到GitHub...
echo 注意：如果遇到认证问题，请使用GitHub Desktop或配置个人访问令牌
git push -u origin master
echo.

echo ========================================
echo  部署完成！
echo ========================================
echo.
echo 下一步：
echo 1. 访问 https://github.com/Fred-Leifu/ai-zidonghua/settings/pages
echo 2. 启用GitHub Pages（选择master分支）
echo 3. 等待1-2分钟后访问：https://fred-leifu.github.io/ai-zidonghua/
echo.
pause
