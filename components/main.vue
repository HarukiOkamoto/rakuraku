<template>
    <div class="main-contens">
        <div class="Higakigara"></div>
        <img class="obentou" src="@/assets/images/obentou.png" alt="">
        <div class="main-title">
            <h1>
                <span v-for="(line, lineIndex) in text" :key="'line' + lineIndex">
                    <span v-for="(char, charIndex) in line" :key="'char' + charIndex"
                        :style="{ '--delay': `${(lineIndex * line.length + charIndex) * 0.1}s` }" class="fade-in-text">{{
                            char }}</span>
                    <br>
                </span>
            </h1>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    setup() {
        const text = ref(['おいしいお弁当を', 'たくさんの人に。'].map(line => line.split('')));

        onMounted(() => {
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                document.body.style.overflow = '';
            }, 7000 + text.value.flat().length * 0.1 * 1000);
        });

        return {
            text
        };
    }
}
</script>

<style scoped>
.Higakigara {
    width: 100%;
    height: 800px;
    background:
        linear-gradient(135deg, #fddea5 21px, #fff 22px, #fff 24px, transparent 24px, transparent 67px, #fff 67px, #ffffff 69px, transparent 69px),
        linear-gradient(225deg, #fddea5 21px, #fff 22px, #fff 24px, transparent 24px, transparent 67px, #fff 67px, #fff 69px, transparent 69px)0 64px;
    background-color: #fddea5;
    background-size: 64px 128px;
    position: relative;
    opacity: 0;
    animation: fade-in 2s ease forwards;
}

.main-contens {
    width: 100%;
}

.main-title {
    position: absolute;
    top: 300px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
}

.main-title h1 {
    writing-mode: vertical-rl;
    display: inline-block;
    font-size: 45px;
    /* Increase font size */
    font-weight: 900;
    /* Add white text shadow */
    font-family: 'Zen Old Mincho';
    /* Set font to Mincho */
}

.obentou {
    width: 300px;
    height: auto;
    position: absolute;
    top: 550px;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    padding-top: 100px;
    opacity: 0;
    animation: fade-in 2s ease forwards;
    animation-delay: 3s;
}

.fade-in {
    opacity: 0;
    animation: fade-in 2s ease forwards;
    animation-delay: var(--delay);
}

.fade-in-text {
    opacity: 0;
    animation: fadeInText 2s ease forwards;
    animation-delay: var(--delay);
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
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

@media (max-width: 767px) {

    /* スマートフォン向けのスタイル */
    .main-title {
        top: 200px;
        left: 50%;
    }

    .main-title h1 {
        font-size: 30px;
    }

    .obentou {
        top: 350px;
        width: 200px;
    }

    .Higakigara {
        height: 600px;
    }
}
</style>