// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 注册GSAP插件
    gsap.registerPlugin(ScrollTrigger);
    
    // 页面加载动画
    setTimeout(function() {
        document.querySelector('.loading').classList.add('hidden');
        
        // Hero区域动画
        gsap.to('.hero-title', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
        });
        
        gsap.to('.hero-subtitle', {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.3,
            ease: 'power3.out'
        });
        
        gsap.to('.btn-primary', {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.6,
            ease: 'power3.out'
        });
    }, 1000);
    
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // 平滑滚动到对应板块
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // 移动端菜单关闭
                const mobileMenu = document.querySelector('.nav-links');
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    document.querySelector('.menu-toggle').classList.remove('active');
                }
            }
        });
    });
    
    // 移动端菜单切换
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', function() {
        const mobileMenu = document.querySelector('.nav-links');
        mobileMenu.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    // 作品数据
    const projects = [
        {
            id: 1,
            title: '移动银行应用',
            description: '现代化的金融应用界面设计',
            fullDescription: '这是一个为现代银行设计的移动应用界面项目。专注于提供直观、安全的用户体验，同时保持界面的美观性和功能性。项目采用了最新的设计趋势，包括深色模式、手势操作和个性化推荐系统。',
            image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
            details: [
                '设计风格：现代、简约',
                '使用工具：Figma、Sketch、Adobe XD',
                '项目时间：2023年3月-2023年6月',
                '项目类型：移动应用界面设计'
            ],
            designProcess: [
                '用户调研与需求分析',
                '信息架构设计',
                '原型设计与测试',
                '视觉设计与规范制定',
                '开发协作与验收'
            ]
        },
        {
            id: 2,
            title: '电商平台',
            description: '响应式电商网站设计',
            fullDescription: '这是一个完整的电商平台设计项目，涵盖了从商品浏览到结算支付的完整用户流程。设计重点在于提升转化率和用户体验，通过清晰的视觉层次和直观的交互设计来优化购物流程。',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
            details: [
                '设计风格：商务、专业',
                '使用工具：Figma、Adobe Illustrator',
                '项目时间：2023年1月-2023年3月',
                '项目类型：响应式网站设计'
            ],
            designProcess: [
                '竞品分析与市场调研',
                '用户画像与场景分析',
                '交互流程设计',
                '视觉风格定义',
                '响应式适配设计'
            ]
        },
        {
            id: 3,
            title: '品牌视觉系统',
            description: '完整的品牌识别设计',
            fullDescription: '这是一个为新兴科技公司设计的完整品牌视觉系统。项目包括logo设计、色彩系统、字体规范、图标系统以及品牌应用指南，确保品牌在所有触点的一致性。',
            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
            details: [
                '设计风格：科技感、现代',
                '使用工具：Adobe Illustrator、Photoshop',
                '项目时间：2022年10月-2022年12月',
                '项目类型：品牌设计'
            ],
            designProcess: [
                '品牌定位与策略制定',
                '视觉概念探索',
                '核心元素设计',
                '应用系统构建',
                '品牌指南制作'
            ]
        },
        {
            id: 4,
            title: '数据仪表盘',
            description: '企业级数据可视化界面',
            fullDescription: '这是一个为企业管理团队设计的数据仪表盘项目。通过直观的可视化图表和实时数据展示，帮助管理者快速了解业务状况并做出决策。设计注重信息的清晰度和可操作性。',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
            details: [
                '设计风格：专业、数据驱动',
                '使用工具：Figma、Tableau',
                '项目时间：2022年7月-2022年9月',
                '项目类型：数据可视化设计'
            ],
            designProcess: [
                '数据需求分析',
                '信息架构设计',
                '图表类型选择',
                '交互设计优化',
                '用户体验测试'
            ]
        }
    ];
    
    // 作品详情模态框
    const modal = document.getElementById('projectModal');
    const modalBody = document.querySelector('.modal-body');
    const closeModal = document.querySelector('.close-modal');
    
    // 打开模态框
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = parseInt(this.getAttribute('data-project'));
            const project = projects.find(p => p.id === projectId);
            
            if (project) {
                // 填充模态框内容
                modalBody.innerHTML = `
                    <div class="modal-project">
                        <h2>${project.title}</h2>
                        <p class="modal-description">${project.fullDescription}</p>
                        <img src="${project.image}" alt="${project.title}" class="modal-image">
                        
                        <div class="modal-details">
                            <h3>项目详情</h3>
                            <ul>
                                ${project.details.map(detail => `<li>${detail}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="modal-process">
                            <h3>设计流程</h3>
                            <ul>
                                ${project.designProcess.map(step => `<li>${step}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `;
                
                // 显示模态框
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // 关闭模态框
    closeModal.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // 点击模态框外部关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // 表单提交处理
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 简单的表单验证
        const inputs = this.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#e74c3c';
            } else {
                input.style.borderColor = '#e9ecef';
            }
        });
        
        if (isValid) {
            // 模拟表单提交
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = '发送中...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = '发送成功！';
                submitBtn.style.backgroundColor = '#27ae60';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.backgroundColor = '';
                    this.reset();
                }, 2000);
            }, 1000);
        }
    });
    
    // GSAP滚动动画
    // 作品卡片动画
    gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.fromTo(card, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // 时间线动画
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        gsap.fromTo(item, {
            opacity: 0,
            x: -50
        }, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
                trigger: item,
                start: 'top bottom-=100',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // 关于我文本动画
    gsap.fromTo('.about-text', {
        opacity: 0,
        x: 50
    }, {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.about',
            start: 'top bottom-=100',
            toggleActions: 'play none none none'
        }
    });
    
    // 联系表单动画
    gsap.fromTo('.contact-form', {
        opacity: 0,
        x: 50
    }, {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.contact',
            start: 'top bottom-=100',
            toggleActions: 'play none none none'
        }
    });
    
    // 图片懒加载
    const lazyImages = document.querySelectorAll('img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.src;
                    imageObserver.unobserve(image);
                }
            });
        });
        
        lazyImages.forEach(image => {
            imageObserver.observe(image);
        });
    }
});

// 窗口调整大小时的响应式处理
window.addEventListener('resize', function() {
    const mobileMenu = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (window.innerWidth > 768) {
        mobileMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});