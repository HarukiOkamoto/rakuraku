<template>
    <div class="main-contens">
        <div class="img-area">
            <img src="@/assets/images/mainImg.png" alt="" class="fade-in-image" style="--delay: 0s;">
        </div>
        <div class="main-title">
            <h1>
                <span v-for="(char, index) in text" :key="index" :style="{ '--delay': `${index * 0.1}s` }"
                    class="fade-in-text">{{ char }}</span>
            </h1>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: 'おいしいお弁当をたくさんの人に。'.split('')
        }
    }
}
</script>

<style scoped>
.main-contens {
    width: 100%;
    padding-top: 50px;
}

.img-area {
    width: 100%;
    height: auto;
}

.img-area img {
    opacity: 0.6;
    position: relative;
    border-radius: 0 0 50% 50%;
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
    /* Add white text shadow */
    font-family: 'Zen Old Mincho';
    /* Set font to Mincho */
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
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