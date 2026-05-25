# GitHub Pages 部署指南

## 项目信息
- GitHub用户名: Fred-Leifu
- 仓库名: ai-zidonghua
- 预期访问地址: https://fred-leifu.github.io/ai-zidonghua/

## 部署步骤

### 方法一：使用GitHub Desktop（推荐）

1. **下载并安装GitHub Desktop**
   - 访问: https://desktop.github.com/
   - 下载并安装

2. **打开项目文件夹**
   - 在GitHub Desktop中选择 "File" -> "Add Local Repository"
   - 选择文件夹: `g:\擎科生物\销综系统\Ai_axure\deploy`

3. **创建GitHub仓库**
   - 在GitHub Desktop中点击 "Publish repository"
   - 填写仓库名称: `ai-zidonghua`
   - 选择 "Public" 或 "Private"
   - 点击 "Publish Repository"

4. **启用GitHub Pages**
   - 访问: https://github.com/Fred-Leifu/ai-zidonghua/settings/pages
   - 在 "Build and deployment" 部分:
     - Source: 选择 "Deploy from a branch"
     - Branch: 选择 `master` 分支，文件夹选择 `/ (root)`
   - 点击 "Save"

5. **等待部署完成**
   - 大约1-2分钟后，访问: https://fred-leifu.github.io/ai-zidonghua/

### 方法二：使用命令行（需要GitHub个人访问令牌）

1. **创建GitHub个人访问令牌(PAT)**
   - 访问: https://github.com/settings/tokens
   - 点击 "Generate new token" -> "Generate new token (classic)"
   - 勾选 `repo` 权限
   - 生成并复制令牌（只显示一次！）

2. **在deploy目录中执行以下命令**
   ```bash
   cd g:\擎科生物\销综系统\Ai_axure\deploy
   git remote set-url origin https://<你的令牌>@github.com/Fred-Leifu/ai-zidonghua.git
   git push -u origin master
   ```

3. **启用GitHub Pages**（同方法一步骤4）

## 当前项目状态

✅ Git仓库已初始化
✅ 文件已提交
✅ 远程仓库已配置
⏳ 等待推送到GitHub
⏳ 等待启用GitHub Pages

## 项目文件

- index.html - 工作台首页
- bill-management.html - 账单管理页面
- img/ - 图片资源文件夹

## 注意事项

1. 确保GitHub仓库 `ai-zidonghua` 已创建
2. 如果仓库已存在，确保有推送权限
3. GitHub Pages部署可能需要1-2分钟才能生效
4. 首次部署后，后续更新会自动触发重新部署
