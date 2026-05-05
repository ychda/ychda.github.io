import {debounce, formatDate, initToTopButton, setNavActive, headerScrollShadow} from '../../common/utils.js'

// 页面加载完成提示
window.addEventListener('load', () => {
    console.log('✅ 首页加载完成');
});

// 动态展示当前时间
function setNowTime() {
    const banner = document.querySelector('.banner-content p');
    if (banner) {
        const now = formatDate(Date.now(), 'YYYY年MM月DD日 HH:mm');
        banner.innerText = `热爱生活、热爱技术、持续记录与成长 | 当前时间：${now}`;
    }
}

setNowTime();
// 每秒更新时间
setInterval(setNowTime, 1000);

const header = document.querySelector('.header');
window.addEventListener('scroll', debounce(() => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.12)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
    }
}, 50));

// 返回页面顶部
initToTopButton();

// 挂载全局回到顶部方法（可选）
//window.scrollToTop = scrollToTop;


// 页面 DOM 加载完成自动执行所有导航相关方法
document.addEventListener('DOMContentLoaded', () => {
    setNavActive();
    headerScrollShadow();
});
