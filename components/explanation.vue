<script setup lang="ts">
const isModalOpen = ref(false);
const isVisible = ref(false);

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
            }
        },
        {
            threshold: 1,
        }
    );

    observer.observe(document.querySelector('.explanation-area'));
});
</script>

<template>
    <div class="explanation-area" :class="{ 'fade-in': isVisible }">
        <div class="explanation-text">
            <h1>地域に愛される、宅配<span>弁当</span>。</h1>
            <div class="text-area">
                <p>埼玉県蕨市にある、就労継続支援B型(障がいのある方が就労訓練を行える事業所)の宅配弁当。</p>
                <p>すべて手作業で美味しいお弁当作りをしています。</p>
                <p>手作りの割りばし袋や、 かわいらしいお弁当包みで地域の皆さんにご愛顧を賜っております。</p>
                <br>
                <p>地域の密着取材
                    <a href=" https://www.youtube.com/@catvwink" target="_blank">(蕨市ケーブルテレビウインクチャンネル)</a>の取材を受けさせて頂きました。
                </p>
            </div>
        </div>
        <div class="explanation-movie">
            <button @click="isModalOpen = true">
                <p>↓画像をクリックで再生</p>
                <img src="@/assets/images/mainImg.png" alt="">
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
}

.explanation-area h1 {
    font-family: Zen Old Mincho;
    padding-right: 150px;
    padding-top: 30px;
}

.explanation-area span {
    color: #FB710E;
}

.text-area {
    width: auto;
    height: 600px;
    padding: 30px;
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

.explanation-movie img {
    position: absolute;
    top: 100px;
    width: 600px;
    transition: transform 0.5s ease-in-out;
    border: solid 1px #FB710E;
    margin-right: 25px;
}

.explanation-movie img:hover {
    transform: scale(1.05);
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>
