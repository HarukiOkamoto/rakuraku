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
            isVisible.value = entry.isIntersecting;
        },
        {
            threshold: 0.1, // adjust this value to control when the observer triggers
        }
    );

    observer.observe(document.querySelector('.intro-area'));
});
</script>

<template>
    <div class="intro-area" :class="{ 'fade-in': isVisible }">
        <div class="intro-title fade-in" style="--delay: 0s;">
            <h1>地域に愛される、らくらく<span>弁当</span>。</h1>
        </div>
        <div class="intro-movie fade-in" style="--delay: 1s;">
            <button @click="isModalOpen = true"><img src="@/assets/images/thumb.jpg" alt=""></button>
            <Modal v-if="isModalOpen" @close="closeModal"></Modal>
        </div>
        <div class="intro-textarea fade-in" style="--delay: 2s;">
            <div class="text-content">
                <p>埼玉県蕨市にある、就労継続支援B型(障がいのある方が就労訓練を行える事業所)の宅配弁当!!
                    すべて手作業で美味しいお弁当作りをしています。手作りの割りばし袋や、かわいらしいお弁当包みで地域の皆さんに愛されています。地域の密着取材<a
                        href="https://www.youtube.com/@catvwink" target="_blank">(蕨市ケーブルテレビウインクチャンネル)</a>が取材に来てくれました！</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.intro-area {
    width: 100%;
    background-color: #fff;
    margin: 0 auto;
    padding-top: 10vh;
    padding-bottom: 10vh;
}

.intro-title {
    text-align: center;
    padding-top: 5vh;
    padding-bottom: 2vh;
}

.intro-title h1 {
    font-size: 40px;
    font-family: 'Zen Old Mincho';
    font-weight: bold;
    color: rgb(60, 60, 60);
}

.intro-movie {
    text-align: center;
    position: relative;
    padding-top: 5vh;
}

.intro-movie img {
    margin: 0 auto;
    width: 700px;
    height: auto;
    transition: transform .6s ease;
}

.intro-movie img:hover {
    transform: scale(1.1);
}

.intro-textarea {
    width: 50%;
    padding-top: 10vh;
    margin: 0 auto;
}

.text-content {
    text-align: left;
}

.text-content p {
    font-size: 20px;
    color: rgb(60, 60, 60);
    font-family: "Noto Sans JP";
    font-weight: 600;
}

span {
    color: #FB710E;
}


.fade-in {
    opacity: 0;
    animation: fadeIn 1s ease forwards;
    animation-delay: var(--delay);
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}
</style>