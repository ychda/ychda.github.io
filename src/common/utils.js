// 1. 格式化时间
export function formatDate(time, format = 'YYYY-MM-DD HH:mm:ss') {
    const date = new Date(time);
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return format
        .replace('YYYY', year)
        .replace('MM', month)
        .replace('DD', day)
        .replace('HH', hours)
        .replace('mm', minutes)
        .replace('ss', seconds);
}

// 2. 页面滚动平滑置顶
export function scrollToTop() {
    window.scrollTo({
        top: 0, behavior: 'smooth'
    });
}

// 3. 元素防抖函数
export function debounce(fn, delay = 200) {
    let timer = null;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
            timer = null;
        }, delay);
    }
}

// 4. 获取浏览器设备信息
export function getDeviceInfo() {
    const ua = navigator.userAgent;
    return {
        isMobile: /Android|webOS|iPhone|iPad|iPod/i.test(ua), userAgent: ua
    };
}

// ======================
// 新增：回到顶部按钮初始化（公共方法）
// ======================
export function initToTopButton() {
    const toTopButton = document.querySelector('#to-top');
    if (!toTopButton) return;

    // 滚动显示/隐藏
    window.addEventListener('scroll', debounce(() => {
        if (window.scrollY > 200) {
            toTopButton.style.display = 'block';
        } else {
            toTopButton.style.display = 'none';
        }
    }, 100));

    // 点击回到顶部
    toTopButton.addEventListener('click', scrollToTop);
}

// utils.js 公共工具方法

/**
 * 导航菜单自动高亮
 * 适配 vite 打包静态注入 header，无异步、无超时、全页面通用
 */
export function setNavActive() {
    const currentPath = window.location.pathname;
    let currentPage = currentPath.split('/').pop() || '';

    // 空路径（首页）自动视为 index.html
    if (currentPage === '') currentPage = 'index.html';

    const navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach(item => {
        item.classList.remove('active');
        const linkHref = item.getAttribute('href') || '';

        // 统一提取页面名
        const linkPage = linkHref.split('/').pop() || 'index.html';

        if (linkPage === currentPage) {
            item.classList.add('active');
        }
    });
}

/**
 * 导航栏滚动阴影效果（配套常用功能）
 */
export function headerScrollShadow() {
    const header = document.querySelector('.header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.12)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
        }
    });
}

