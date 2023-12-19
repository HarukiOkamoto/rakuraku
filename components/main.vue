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
        <div class="company fade-in">
            <h3>らくらく弁当</h3>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: ['おいしいお弁当を', 'たくさんの人に。'].map(line => line.split(''))
        }
    },
    mounted() {
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            document.body.style.overflow = '';
        }, 2000 + 1000 + 2000 + this.text.flat().length * 0.1);
    }
}
</script>

<style scoped>
.Higakigara {
    width: 100%;
    height: 700px;
    background:
        linear-gradient(135deg, #fddea5 21px, #fff 22px, #fff 24px, transparent 24px, transparent 67px, #fff 67px, #d9ecff 69px, transparent 69px),
        linear-gradient(225deg, #fddea5 21px, #fff 22px, #fff 24px, transparent 24px, transparent 67px, #fff 67px, #fff 69px, transparent 69px)0 64px;
    background-color: #fddea5;
    background-size: 64px 128px;
    position: relative;
    opacity: 0;
    animation: fade-in 2s ease forwards;
}

.obentou {
    width: 300px;
    height: auto;
    position: absolute;
    top: 500px;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    padding-top: 100px;
    opacity: 0;
    animation: fade-in 2s ease forwards;
    animation-delay: 1s;
}

.main-contens {
    width: 100%;
}

.main-title {
    position: absolute;
    top: 280px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
}

.main-title h1 {
    writing-mode: vertical-rl;
    display: inline-block;
    font-size: 40px;
    /* Increase font size */
    font-weight: 900;
    /* Add white text shadow */
    font-family: 'Zen Old Mincho';
    /* Set font to Mincho */
}

.company {
    position: absolute;
    top: 100px;
    right: 50px;
    text-align: right;
    writing-mode: vertical-rl;
    opacity: 0;
    animation: fade-in 2s ease forwards;
}

.company h3 {
    -webkit-writing-mode: vertical-rl;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    font-family: 'Noto Serif JP',
        serif !important;
    font-weight: bold;
    margin: 1em auto;
    font-size: 25px;
}

.company h3:before {
    content: ' ';
    display: inline-block;
    width: 50px;
    height: 50px;
    background-image: radial-gradient(#E7556A 25%, transparent 0),
        radial-gradient(#E7556A 25%, transparent 0),
        radial-gradient(#E7556A 25%, transparent 0),
        radial-gradient(#E7556A 25%, transparent 0),
        radial-gradient(#E7556A 25%, transparent 0);
    background-position: 50% 0, 5% 40%, 95% 40%, 23% 95%, 78% 95%;
    background-size: 30px 30px;
    background-repeat: no-repeat;
}

.fade-in {
    opacity: 0;
    animation: fade-in 2s ease forwards;
    animation-delay: var(--delay);
}

.fade-in-text {
    opacity: 0;
    animation: fadeInText 5s ease forwards;
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
</style>