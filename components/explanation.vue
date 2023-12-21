<script setup lang="ts">
const isModalOpen = ref(false);
const isVisible = ref(false);
const isScrollDisabled = ref(true);

const openModal = () => {
    isModalOpen.value = true;
}

const closeModal = () => {
    isModalOpen.value = false;
}

onMounted(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (!isVisible.value) {
                isVisible.value = entry.isIntersecting;
                if (isVisible.value) {
                    // スクロールを無効にする
                    document.body.style.overflow = 'hidden';
                }
            }
        },
        {
            threshold: 0.96,
        }
    );

    observer.observe(document.querySelector('.explanation-area'));
});

watch(isVisible, (newVal) => {
    if (newVal) {
        setTimeout(() => {
            // フェードインが完了したらスクロールを再度有効にする
            document.body.style.overflow = '';
        }, 7000); // フェードインの遅延時間に合わせて調整
    }
});
</script>

<template>
    <div class="explanation-area" :class="{ 'fade-in': isVisible }">
        <div class="explanation-text">
            <h1 :class="{ 'fade-in': isVisible }" style="--delay: 0s;">地域に愛される、宅配<span>弁当</span>。</h1>
            <div class="text-area">
                <p :class="{ 'fade-in': isVisible }" style="--delay: 1s;">埼玉県蕨市にある、就労継続支援B型(障がいのある方が就労訓練を行える事業所)の宅配弁当。</p>
                <p :class="{ 'fade-in': isVisible }" style="--delay: 2s;">すべて手作業で美味しいお弁当作りをしています。</p>
                <p :class="{ 'fade-in': isVisible }" style="--delay: 3s;">手作りの割りばし袋や、 かわいらしいお弁当包みで地域の皆さんにご愛顧を賜っております。</p>
                <br>
                <p :class="{ 'fade-in': isVisible }" style="--delay: 4s;">地域の密着取材
                    <a href="https://www.youtube.com/watch?v=6szqRF7RIlg"
                        target="_blank">(蕨市ケーブルテレビウインクチャンネル)</a>の取材を受けさせて頂きました。
                </p>

            </div>
        </div>
        <div class="explanation-movie">
            <button @click="isModalOpen = true">
                <div class="main-img">
                    <img src="@/assets/images/mainImg.png" :class="{ 'fade-in': isVisible }" style="--delay: 5s;" alt="">
                </div>
                <div class="icon-img">
                    <img src="@/assets/images/icon.svg" :class="{ 'fade-in': isVisible }" style="--delay: 5s;" alt="">
                </div>
            </button>
            <Modal v-if="isModalOpen" @close="closeModal"></Modal>
        </div>
    </div>
</template>

<style scoped>
.explanation-area {
    width: 100%;
    height: 800px;
    background-color: #f8f4e6;
    margin: 0 auto;
    writing-mode: vertical-rl;
    padding: 30px;
    position: relative;
    opacity: 0;
}

.explanation-area h1 {
    font-family: Zen Old Mincho;
    padding-right: 150px;
    padding-top: 50px;
    font-size: 32px;
}

.explanation-area span {
    color: #FB710E;
}

.text-area {
    width: auto;
    height: 600px;
    padding: 50px;
}


.text-area p {
    font-family: 'Zen Old Mincho';
    font-size: 18px;
    padding: 1px;
}

.explanation-movie {
    position: relative;
    width: 100%;
}

.explanation-movie p {
    padding-top: 100px;
}

.main-img img {
    position: absolute;
    top: 100px;
    width: 600px;
    transition: transform 0.5s ease-in-out;
    margin-right: 40px;
}

.icon-img {
    width: 20px;
    transition: transform 0.5s ease-in-out;
    position: absolute;
    top: 30%;
    right: 320px;
}


.icon-img:hover {
    transform: scale(1.2);
}

.fade-in {
    opacity: 0;
    animation: fade-in 2s ease forwards;
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

@media (max-width: 767px) {
    .explanation-area {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .explanation-area h1 {
        font-family: Zen Old Mincho;
        padding-right: 40px;
        padding-top: 50px;
        font-size: 25px;
    }

    .explanation-movie {
        display: none;
    }



    .text-area {
        padding: 30px;
    }

}
</style>
