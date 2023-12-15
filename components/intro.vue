<script setup lang="ts">
const isModalOpen = ref(false);

const openModal = () => {
    isModalOpen.value = true;
}

const closeModal = () => {
    isModalOpen.value = false;
}
</script>
<template>
    <div class="intro-area">
        <div class="intro-title">
            <h1>らくらく<span>弁当</span>とは...？</h1>
        </div>
        <div class="intro-movie">
            <button @click="isModalOpen = true"><img src="@/assets/images/thumb.jpg" alt=""></button>
            <Modal v-if="isModalOpen" @close="closeModal"></Modal>
            <div class=" intro-textarea">
                <div class="text-content">
                    <p>埼玉県蕨市にある、就労継続支援B型(障がいのある方が就労訓練を行える事業所)の宅配弁当!!
                        すべて手作業で美味しいお弁当作りをしています。
                        手作りの割りばし袋や、かわいらしいお弁当包みで地域の皆さんに愛されています。地域の密着取材<a href="https://www.youtube.com/@catvwink"
                            target="_blank">(蕨市ケーブルテレビ
                            ウインクチャンネル)</a>
                        が取材に来てくれました！</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.intro-area {
    width: 100%;
    background-color: #fff;
    margin: 15vh auto 15vh auto;
    padding-bottom: 5vh;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}

.intro-title {
    text-align: center;
    padding: 10vh;
}

.intro-title h1 {
    animation: sway 2s infinite ease-in-out;
    font-size: 40px;
    font-family: "Noto Sans JP";
    font-weight: bold;
}

.intro-movie {
    text-align: center;
}

.intro-movie img {
    margin: 0 auto;
    max-width: 800px;
    height: auto;
    transition: transform .6s ease;
}

.intro-movie img:hover {
    transform: scale(1.1);
}

.intro-textarea {
    width: 60%;
    padding: 10vh;
    margin: 0 auto;
}

.text-content {
    text-align: left;
}

.text-content p {
    font-size: 18px;
    font-family: "Noto Sans JP";
    font-weight: bold;
}

span {
    color: #FB710E;
}

@keyframes sway {
    0% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(-5px);
    }

    100% {
        transform: translateX(0);
    }
}
</style>