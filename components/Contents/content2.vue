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

    observer.observe(document.querySelector('.content2'));
});
</script>

<template>
    <div class="content2" :class="{ 'fade-in': isVisible }">
        <div class="sub-title">
            <h2 class="index fade-in" style="--delay: 5s;">二.</h2>
            <h2 class="fade-in" style="--delay: 5s;"><span>調</span>理</h2>
        </div>
        <div class="content-area">
            <div class="content-img fade-in" style="--delay: 6s;">
                <img src="@/assets/images/content2.png" alt="">
            </div>
            <div class="content-text fade-in" style="--delay: 7s;">
                <p>調理班の調理風景です。</p>
                <p>わからないことや難しいことは社員さんに教えてもらいながらみんなで一緒に、ひとつひとつに心を込めてお弁当を作ります。</p>
                <p>これがとっても優しい味の秘訣です。</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.content2 {
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
    padding-right: 3vh;
}

.content-img {
    width: 50%;
    padding: 1vh;

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
