import {debounce, formatDate, headerScrollShadow, initToTopButton, setNavActive} from '../../common/utils.js'

window.addEventListener('load', () => {
    console.log('✅ 动态页加载完成')

    // 统一格式化所有动态时间
    const newsDateList = document.querySelectorAll('.news-date')
    newsDateList.forEach(item => {
        const originTime = item.innerText
        // 追加完整时分秒
        item.innerText = `${originTime} | 更新于 ${formatDate(Date.now(), 'HH:mm:ss')}`
    })

    // 统计用户hover动态卡片次数
    let hoverCount = 0
    const newsCards = document.querySelectorAll('.news-card')
    newsCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            hoverCount++
            console.log(`📰 已浏览动态卡片：${hoverCount} 次`)
        })
    })
});

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
