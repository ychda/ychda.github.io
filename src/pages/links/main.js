import {debounce, headerScrollShadow, initToTopButton, setNavActive} from '../../common/utils.js'

// 返回页面顶部
initToTopButton();

const header = document.querySelector('.header');
window.addEventListener('scroll', debounce(() => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.12)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
    }
}, 50));


// 页面 DOM 加载完成自动执行所有导航相关方法
document.addEventListener('DOMContentLoaded', () => {
    setNavActive();
    headerScrollShadow();
});
