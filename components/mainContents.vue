<template>
    <div class="main-contens">
        <div class="img-area">
            <img src="@/assets/images/mainImg.png" alt="" class="fade-in-image" style="--delay: 0s;">
        </div>
        <div class="main-title">
            <h1 class="secound">
                <span v-for="(char, index) in 'たくさんの人に。'.split('')" :key="index" class="fade-in-text"
                    :style="{ '--delay': (index + 'おいしいお弁当を'.length + 5) * 0.1 + 's' }">{{ char }}</span>
            </h1>
            <h1 class="first">
                <span v-for="(char, index) in 'おいしいお弁当を'.split('')" :key="index" class="fade-in-text"
                    :style="{ '--delay': (index + 5) * 0.1 + 's' }">{{ char }}</span>
            </h1>
        </div>
    </div>
</template>

<style scoped>
.main-contens {
    position: relative;
    width: 100%;
}

.img-area {
    width: 100%;
    height: auto;
}

.img-area img {
    opacity: 0.6;
}

.main-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
}

.main-title h1 {
    writing-mode: vertical-rl;
    display: inline-block;
    font-size: 60px;
    /* Increase font size */
    font-weight: 900;
    /* Make text bold */
    color: #000000;
    /* Change text color to dark gray */
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.7);
    /* Add white text shadow */
    font-family: 'Zen Old Mincho';
    /* Set font to Mincho */
}

.fade-in-image {
    opacity: 0;
    animation: fadeInImage 1s ease forwards;
    animation-delay: var(--delay);
}

.fade-in-text {
    opacity: 0;
    animation: fadeInText 1s ease forwards;
    animation-delay: var(--delay);
}

@keyframes fadeInImage {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 0.6;
    }
}

@keyframes fadeInText {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>