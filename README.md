# Designer Portfolio Website | 设计师作品集网站

A modern designer portfolio website with dark theme and green accent colors, focused on showcasing design works and professional background.

一个现代化的设计师作品集网站，采用深色主题和绿色强调色，专注于展示设计作品和专业背景。

## 🌟 Project Features | 项目特色

### Design Features | 设计特点
- **Minimalist Design**: Dark background (#1F1F21) with green theme color (#226E54)
- **Responsive Layout**: Perfectly adapted for desktop, tablet, and mobile devices
- **Modern Interactions**: Smooth animations and optimized user experience
- **Professional Presentation**: Clear showcase of works and career background

### Technical Features | 技术特点
- **Modern Tech Stack**: HTML5, CSS3, JavaScript, GSAP animation library
- **Performance Optimization**: Image lazy loading, CSS optimization, modular code
- **Rich Interactions**: Smooth scrolling, modal boxes, form validation, etc.
- **Developer Friendly**: Clear code structure, complete comments

### 设计特点
- **极简设计**：深色背景（#1F1F21）搭配绿色主题色（#226E54）
- **响应式布局**：完美适配桌面、平板和移动设备
- **现代交互**：流畅的动画效果和用户体验优化
- **专业展示**：清晰的作品展示和职业背景介绍

### 技术特点
- **现代技术栈**：HTML5、CSS3、JavaScript、GSAP动画库
- **性能优化**：图片懒加载、CSS优化、代码模块化
- **交互丰富**：平滑滚动、模态框、表单验证等
- **开发友好**：代码结构清晰，注释完整

## 📁 File Structure | 文件结构

```
playtest/
├── index.html          # Main page file | 主页面文件
├── style.css           # Stylesheet file | 样式文件
├── script.js           # Interactive script | 交互脚本
└── README.md           # Project documentation | 项目说明文档
```

## 🚀 Quick Start | 快速开始

### 1. Download the Project | 下载项目
```bash
git clone https://github.com/humyongwon/demo_designer_portfolio_template.git
cd demo_designer_portfolio_template
```

### 2. Local Preview | 本地预览
Open the `index.html` file directly in your browser to view the website.

直接在浏览器中打开 `index.html` 文件即可查看网站。

### 3. Deploy to Server | 部署到服务器
Upload the project files to your web server to deploy.

将项目文件上传到您的Web服务器即可部署。

## 🎨 Feature Modules | 功能模块

### Navigation Bar | 导航栏
- Fixed positioning with scroll effects | 固定定位，支持滚动效果
- Smooth scrolling to sections | 平滑滚动到对应板块
- Responsive mobile menu | 移动端响应式菜单
- Green underline animation | 绿色下划线动画效果

### Hero Section | Hero区域
- Full-screen background design | 全屏背景设计
- Gradient animation effects | 渐变动画效果
- Professional positioning display | 职业定位展示
- Call-to-action buttons | 行动引导按钮

### Works Showcase | 作品展示
- Grid layout presentation | 网格布局展示
- Hover zoom effects | 悬停放大效果
- Click to view details | 点击查看详情
- Responsive adaptation | 响应式适配

### About Me | 关于我
- Personal introduction | 个人介绍
- Timeline display | 时间线展示
- Career experience | 职业经历
- Educational background | 教育背景

### Contact Me | 联系我
- Contact information display | 联系信息展示
- Contact form | 联系表单
- Form validation | 表单验证
- Social media links | 社交链接

### Modal Box | 模态框
- Work details display | 作品详情展示
- Design process explanation | 设计流程说明
- Complete project information | 项目信息完整
- Elegant close effects | 优雅关闭效果

## 🛠️ Technical Implementation | 技术实现

### HTML Structure | HTML结构
- Semantic tags | 语义化标签
- Clear module division | 清晰的模块划分
- SEO-friendly structure | SEO友好结构
- Accessibility support | 无障碍访问支持

### CSS Styles | CSS样式
```css
/* Responsive Design | 响应式设计 */
@media (max-width: 768px) {
    /* Mobile styles | 移动端样式 */
}

/* Animation Effects | 动画效果 */
.project-card:hover {
    transform: translateY(-10px);
    transition: all 0.3s ease;
}
```

### JavaScript Functions | JavaScript功能
```javascript
// GSAP Animations | GSAP动画
const tl = gsap.timeline();
tl.from('.hero-title', { opacity: 0, y: 50, duration: 1 });

// Modal Control | 模态框控制
modal.classList.add('active');
```

## 🎯 Custom Configuration | 自定义配置

### Modify Personal Information | 修改个人信息
Modify the following content in `index.html`:

在 `index.html` 中修改以下内容：
- Name and profession | 姓名和职业
- Contact information | 联系方式
- Work content | 作品内容
- Career experience | 职业经历

### Adjust Color Theme | 调整颜色主题
Modify CSS variables in `style.css`:

在 `style.css` 中修改CSS变量：
```css
:root {
    --primary-bg: #1F1F21;
    --accent-color: #226E54;
    --text-color: #ffffff;
}
```

### Add New Works | 添加新作品
Add to the `projects` array in `script.js`:

在 `script.js` 的 `projects` 数组中添加：
```javascript
{
    id: 5,
    title: 'New Project',
    description: 'Project description',
    // ... other properties
}
```

## 📱 Responsive Design | 响应式设计

### Breakpoint Settings | 断点设置
- **Desktop**: > 768px | **桌面端**：> 768px
- **Tablet**: 768px - 1024px | **平板端**：768px - 1024px
- **Mobile**: < 768px | **移动端**：< 768px

### Mobile Optimization | 移动端优化
- Single-column layout | 单列布局
- Touch-friendly interactions | 触摸友好的交互
- Optimized font sizes | 优化的字体大小
- Simplified navigation menu | 简化的导航菜单

## 🌐 Browser Compatibility | 浏览器兼容性

| Browser | Support Status | 支持情况 |
|---------|----------------|----------|
| Chrome | ✅ Fully Supported | ✅ 完全支持 |
| Firefox | ✅ Fully Supported | ✅ 完全支持 |
| Safari | ✅ Fully Supported | ✅ 完全支持 |
| Edge | ✅ Fully Supported | ✅ 完全支持 |
| IE 11 | ⚠️ Partially Supported | ⚠️ 部分支持 |

## 📈 Performance Optimization | 性能优化

### Loading Optimization | 加载优化
- Image lazy loading | 图片懒加载
- CSS and JS compression | CSS和JS压缩
- Font optimization | 字体优化
- Caching strategies | 缓存策略

### Interaction Optimization | 交互优化
- Debouncing and throttling | 防抖和节流
- Animation performance optimization | 动画性能优化
- Memory management | 内存管理
- Error handling | 错误处理

## 🔧 Development Guide | 开发指南

### Code Standards | 代码规范
- Use semantic class names | 使用语义化类名
- CSS follows BEM naming convention | CSS采用BEM命名规范
- JavaScript modular organization | JavaScript模块化组织
- Complete and clear comments | 注释完整清晰

### Extension Suggestions | 扩展建议
- Add multi-language support | 添加多语言支持
- Integrate CMS system | 集成CMS系统
- Add blog functionality | 添加博客功能
- Implement search functionality | 实现搜索功能

## 🐛 FAQ | 常见问题

### Q: How to modify the website title? | 如何修改网站标题？
A: Modify the `<title>` tag in `index.html`. | 在 `index.html` 的 `<title>` 标签中修改。

### Q: How to add new works? | 如何添加新的作品？
A: Add new project data to the `projects` array in `script.js`. | 在 `script.js` 的 `projects` 数组中添加新项目数据。

### Q: How to change the color theme? | 如何更改颜色主题？
A: Modify the color variables and corresponding style rules in `style.css`. | 修改 `style.css` 中的颜色变量和对应的样式规则。

### Q: How to deploy to GitHub Pages? | 如何部署到GitHub Pages？
A: Push the project to a GitHub repository and enable GitHub Pages in the settings. | 将项目推送到GitHub仓库，在设置中启用GitHub Pages。

## 🤝 Contribution Guide | 贡献指南

Welcome to submit Issues and Pull Requests to improve this project. | 欢迎提交 Issue 和 Pull Request 来改进这个项目。

---


**Thank you for using this designer portfolio template!** 🎨 | **感谢使用这个设计师作品集模板！** 🎨
