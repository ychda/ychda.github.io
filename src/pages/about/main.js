import {debounce, getDeviceInfo, headerScrollShadow, initToTopButton, setNavActive} from '../../common/utils.js'

window.addEventListener('load', () => {
    console.log('✅ 关于页加载完成')

    // 检测访问设备
    const device = getDeviceInfo()
    if (device.isMobile) {
        console.log('📱 当前为移动端访问')
    } else {
        console.log('💻 当前为电脑端访问')
    }

    // 简单卡片入场淡入动画
    const cards = document.querySelectorAll('.about-card, .hobby-item')
    cards.forEach((item, index) => {
        item.style.opacity = '0'
        item.style.transform = 'translateY(20px)'
        item.style.transition = 'all 0.5s ease'

        setTimeout(() => {
            item.style.opacity = '1'
            item.style.transform = 'translateY(0)'
        }, index * 150)
    })
})

// 返回页面顶部
initToTopButton();

// 页面 DOM 加载完成自动执行所有导航相关方法
document.addEventListener('DOMContentLoaded', () => {
    setNavActive();
    headerScrollShadow();
});
