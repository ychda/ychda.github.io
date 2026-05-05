import soundSrc from "../../assets/audio/sound.mp3";
import bgmSrc from "../../assets/audio/bgm.mp3";

const sound = new Audio(soundSrc);
const bgm = new Audio(bgmSrc);
bgm.loop = true;
bgm.volume = 0.3;

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

    let logoElement = document.querySelector(".logo");
    let countElement = document.querySelector(".count");
    let woodenFishElement = document.querySelector(".wooden-fish");
    let centerElement = document.querySelector("#center");
    let autoClickElement = document.querySelector("#auto-click");

    logoElement.addEventListener("click", () => {
        bgm.paused ? bgm.play() : bgm.pause();
    });

    if (localStorageCount) {
        count = Number(localStorageCount);
        countElement.innerText = String(count);
    }

    function initAnimate() {
        countElement.style.transform = "scale(1.0)";
        woodenFishElement.style.transform = "scale(1.0)";
    }

    function startAnimate() {
        countElement.style.transform = "scale(1.1)";
        woodenFishElement.style.transform = "scale(0.95)";
        const div = document.createElement("div");
        div.classList.add("subtitle-count-tip");
        div.innerText = "功德 + 1，佛祖保佑你！";
        centerElement.appendChild(div);
        setTimeout(() => {
            div.remove();
        }, 1000);
    }

    function counter() {
        count++;
        countElement.innerText = count;
        startAnimate();
        sound.play();
        localStorage.setItem("count", count);
    }

    woodenFishElement.addEventListener("mousedown", () => {
        setTimeout(() => {
            initAnimate();
        }, 200);
    });

    woodenFishElement.addEventListener("mouseup", () => {
        counter();
    });

    document.onkeyup = (e) => {
        if (e.key === " ") {
            initAnimate();
            counter();
        }
    };

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
