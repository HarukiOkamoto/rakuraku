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
            threshold: 0.1,
        }
    );

    observer.observe(document.querySelector('.explanation-area'));
});
</script>

<template>
    <div class="explanation-area" :class="{ 'fade-in': isVisible }">
        <div class="explanation-title fade-in" style="--delay: 0s;">
            <h1>地域に愛される、らくらく<span>弁当</span>。</h1>
        </div>
        <div class="explanation-movie fade-in" style="--delay: 1s;">
            <button @click="isModalOpen = true"><img src="@/assets/images/thumb.jpg" alt=""></button>
            <Modal v-if="isModalOpen" @close="closeModal"></Modal>
        </div>
        <div class="explanation-textarea fade-in" style="--delay: 2s;">
            <div class="text-content inner-line">
                <p>埼玉県蕨市にある、就労継続支援B型(障がいのある方が就労訓練を行える事業所)の宅配弁当!!</p>
                <p>すべて手作業で美味しいお弁当作りをしています。手作りの割りばし袋や、
                    かわいらしいお弁当包みで地域の皆さんに愛されています。</p>
                <br><br>
                <p>地域の密着取材
                    <a href="https://www.youtube.com/@catvwink" target="_blank">(蕨市ケーブルテレビウインクチャンネル)</a>が取材に来てくれました！
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.explanation-area {
    width: 100%;
    background-color: #f8f4e6;
    margin: 0 auto;
    padding-top: 20vh;
    padding-bottom: 10vh;
}

.explanation-title {
    text-align: center;
    padding-top: 10vh;
}

.explanation-title h1 {
    font-size: 40px;
    font-family: 'Zen Old Mincho';
    font-weight: bold;
    color: rgb(0, 0, 0);
}

.explanation-movie {
    text-align: center;
    position: relative;
    padding-top: 5vh;
    width: fit-content;
    margin: 0 auto;
}

.explanation-movie img {
    margin: 0 auto;
    height: auto;
    transition: transform .6s ease;
    width: 700px;
}

.explanation-movie img:hover {
    transform: scale(1.1);
}

.explanation-movie button {
    top: 0;
    left: 0;
}

.explanation-textarea {
    max-width: 50%;
    margin: 0 auto;
    padding-top: 50px;
}

.text-content {
    text-align: left;
}

.text-content p {
    font-size: 20px;
    color: rgb(0, 0, 0);
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

.inner-line {
    padding: 1em 1.5em;
    margin: 2em 0;
    border: double 4px #4a4a4a;
    background-color: #fff;
    /*線*/
}

.inner-line p {
    margin: 0;
    padding: 0;
    font-family: 'Zen Old Mincho';
    font-weight: bold;
}
</style>