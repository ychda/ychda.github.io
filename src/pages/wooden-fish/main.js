import { Howl } from "howler";
import soundSrc from "../../assets/audio/sound.mp3";
import bgmSrc from "../../assets/audio/bgm.mp3";

// 🔥 用 Howler 重构音频（支持自动播放、跨浏览器、打包无路径问题）
const sound = new Howl({
    src: [soundSrc],
});

const bgm = new Howl({
    src: [bgmSrc],
    loop: true,
    volume: 0.3,
});

function hideLoading() {
    const loadingElement = document.querySelector("#loading");
    const mainContent = document.querySelector(".center-content");
    if (loadingElement) {
        loadingElement.remove();
        mainContent.style.display = "block";
    }
}

const loadingElement = document.querySelector("#loading");
const mainContent = document.querySelector(".center-content");
loadingElement.style.display = "block";
mainContent.style.display = "none";

window.onload = () => {
    hideLoading();

    let count = 0;
    let autoClick = false;
    let autoClickInterval = null;
    let localStorageCount = localStorage.getItem("count");

    const logoElement = document.querySelector(".logo");
    const countElement = document.querySelector(".count");
    const woodenFishElement = document.querySelector(".wooden-fish");
    const centerElement = document.querySelector("#center");
    const autoClickElement = document.querySelector("#auto-click");

    // Logo 点击播放/暂停 BGM
    logoElement.addEventListener("click", () => {
        if (bgm.playing()) {
            bgm.pause();
        } else {
            bgm.play();
        }
    });

    // 读取本地记录
    if (localStorageCount) {
        count = Number(localStorageCount);
        countElement.innerText = count;
    }

    // 动画初始化
    function initAnimate() {
        countElement.style.transform = "scale(1.0)";
        woodenFishElement.style.transform = "scale(1.0)";
    }

    // 点击动画 + 文字上浮
    function startAnimate() {
        countElement.style.transform = "scale(1.1)";
        woodenFishElement.style.transform = "scale(0.95)";

        const div = document.createElement("div");
        div.classList.add("subtitle-count-tip");
        div.innerHTML = "功德 + 1<br>佛祖保佑你！";
        centerElement.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 1000);
    }

    // 计数核心
    function counter() {
        count++;
        countElement.innerText = count;
        startAnimate();
        sound.play(); // Howler 播放音效
        localStorage.setItem("count", count);
    }

    // 木鱼点击
    woodenFishElement.addEventListener("mousedown", () => {
        setTimeout(() => {
            initAnimate();
        }, 200);
    });

    woodenFishElement.addEventListener("mouseup", () => {
        counter();
    });

    // 空格敲击
    document.onkeyup = (e) => {
        if (e.key === " ") {
            initAnimate();
            counter();
        }
    };

    // 自动点击
    autoClickElement.addEventListener("click", () => {
        autoClick = !autoClick;
        autoClickElement.classList.toggle("confirm");

        if (autoClick) {
            autoClickInterval = setInterval(() => {
                counter();
                setTimeout(initAnimate, 200);
            }, 500);
        } else {
            clearInterval(autoClickInterval);
        }
    });
};
