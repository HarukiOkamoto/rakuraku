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
            threshold: 0.2,
        }
    );

    observer.observe(document.querySelector('.content1'));
});
</script>

<template>
    <div class="content1" :class="{ 'fade-in': isVisible }">
        <div class="sub-title" :class="{ 'fade-in': isVisible }" style="--delay: 4s;">
            <h2 class="index">二.</h2>
            <h2><span>調</span>理</h2>
        </div>
        <div class="content-area">
            <div class="content-text" :class="{ 'fade-in': isVisible }" style="--delay: 5s;">
                <p>調理班の調理風景です。</p>
                <p>わからないことや難しいことは社員さんに教えてもらいながらみんなで一緒に、ひとつひとつに心を込めてお弁当を作ります。</p>
                <p>これがとっても優しい味の秘訣です。</p>
            </div>
            <div class="content-img" :class="{ 'fade-in': isVisible }" style="--delay: 6s;">
                <img src="@/assets/images/content2.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.content1 {
    width: 80%;
    margin: 0 auto;
    opacity: 0;
}

.sub-title {
    padding-top: 4vh;
}

.sub-title h2 {
    font-size: 30px;
    font-family: 'Zen Old Mincho';
    font-weight: bold;
    border-bottom: 1px solid #ba422b;
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
    flex: 1;
    /* 追加 */
}

.content-text p {
    font-size: 18px;
    padding-left: 3vh
}

.content-img {
    flex: 1;
    /* 追加 */
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

@media (max-width: 767px) {
    .content-area {
        flex-direction: column-reverse;
    }

    .content-img {
        margin: 0 auto;
    }

    .content-img img {
        width: 200px;
    }

    .content-text p {
        font-size: 14px;
        padding: 0;
    }
}
</style>
