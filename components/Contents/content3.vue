<script setup lang="ts">
const isVisible = ref(false);

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

    observer.observe(document.querySelector('.content3'));
});
</script>
<template>
    <div class="content3" :class="{ 'fade-in': isVisible }">
        <div class="sub-title">
            <h2 class="index fade-in" style="--delay: 8s;">三.</h2>
            <h2 class="fade-in" style="--delay: 8s;"><span>配</span>送</h2>
        </div>
        <div class="content-area">
            <div class="content-text fade-in" style="--delay: 8s;">
                <p>完成したお弁当は、地域の皆さんのもとへ配達されます。</p>
                <p>値段は550円。月の第一火曜日は蕨市民会館、第三火曜日は蕨市役所にて出張販売もしています。お気軽にお声掛けください!</p>
            </div>
            <div class="content-img fade-in" style="--delay: 9s;">
                <img src="@/assets/images/content3.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.content3 {
    width: 70%;
    background-color: white;
    border-radius: 20px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 15vh auto;
}

.sub-title {
    padding-top: 4vh;
    padding-left: 4vh;
}

.sub-title h2 {
    font-size: 30px;
    font-family: 'Zen Old Mincho';
    font-weight: bold;
}

.sub-title span {
    color: #FB710E;
}

.index {
    float: left;
    margin-right: 1vh;
}

.content-area {
    width: 100%;
    margin: 3vh auto;
    display: flex;
    align-items: center;
    padding-bottom: 2vh;
}

.content-text {
    font-family: 'Zen Old Mincho';
    width: 60%;
}

.content-text p {
    font-size: 20px;
    padding-left: 3vh
}

.content-img {
    width: 50%;
    padding: 1vh;
    margin-left: auto;
}

.content-img img {
    width: 300px;
    height: auto;
    margin: 0 auto;
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
