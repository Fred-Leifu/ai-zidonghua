
# Git 和 GitHub Pages 使用指南

---

## 一、常用 Git 命令

### 基础操作

```bash
# 查看当前仓库状态
git status

# 添加所有文件到暂存区
git add .

# 添加指定文件到暂存区
git add 文件名

# 提交更改（必须写有意义的提交信息）
git commit -m "提交信息描述"

# 推送到远程仓库
git push

# 从远程仓库拉取最新代码
git pull

# 查看提交历史
git log
```

### 分支操作

```bash
# 查看所有分支
git branch

# 创建新分支
git branch 分支名

# 切换到指定分支
git checkout 分支名

# 创建并切换到新分支
git checkout -b 分支名

# 合并分支（当前分支合并指定分支）
git merge 分支名

# 删除分支
git branch -d 分支名
```

### 其他常用命令

```bash
# 撤销工作区修改
git checkout -- 文件名

# 撤销暂存区修改
git reset HEAD 文件名

# 查看远程仓库配置
git remote -v

# 更新远程仓库URL
git remote set-url origin 新URL
```

---

## 二、启用 GitHub Pages（生成互联网访问地址）

### 步骤：

1. **访问仓库设置**
   - 打开浏览器访问：https://github.com/Fred-Leifu/ai-zidonghua
   - 点击顶部的 **"Settings"** 选项卡

2. **找到 Pages 设置**
   - 在左侧菜单栏中找到并点击 **"Pages"**

3. **配置发布源**
   - 在 **"Source"** 部分：
     - 点击下拉菜单，选择 **"master"** 分支
     - 选择 **"/ (root)"** 作为目录
   - 点击 **"Save"** 按钮

4. **等待部署**
   - GitHub会自动构建并部署你的页面
   - 等待时间通常为1-5分钟

5. **获取访问地址**
   - 部署完成后，页面顶部会显示访问地址：
     ```
     https://fred-leifu.github.io/ai-zidonghua/
     ```

### 访问地址格式

```
https://<用户名>.github.io/<仓库名>/
```

例如：
```
https://fred-leifu.github.io/ai-zidonghua/
```

---

## 三、部署流程总结

```
1. 修改本地代码
    ↓
2. git add .
    ↓
3. git commit -m "描述更改"
    ↓
4. git push
    ↓
5. GitHub自动同步代码
    ↓
6. GitHub Pages自动重新部署
    ↓
7. 访问地址：https://fred-leifu.github.io/ai-zidonghua/
```

---

## 四、注意事项

1. **提交信息**：请使用有意义的提交信息，便于追溯历史
2. **文件结构**：确保根目录有 `index.html` 文件作为入口
3. **部署时间**：每次push后，GitHub Pages可能需要几分钟才能更新
4. **访问权限**：确保仓库是公开的（Public），否则Pages无法正常访问
