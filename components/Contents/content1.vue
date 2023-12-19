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

    observer.observe(document.querySelector('.content1'));
});
</script>

<template>
    <div class="content1" :class="{ 'fade-in': isVisible }">
        <div class="sub-title">
            <h2 class="index fade-in" style="--delay: 2s;">一.</h2>
            <h2 class="fade-in" style="--delay: 2s;"><span>班</span>分け</h2>
        </div>
        <div class="content-area">
            <div class="content-text fade-in" style="--delay: 3s;">
                <p>まず、調理班と室内班で分かれます。</p>
                <p>調理班はさらに厨房でそれぞれの役割を分担し、</p>
                <p>室内班はお弁当や割りばしの包み紙などの制作を行います。</p>
                <p>らくらく弁当のメニューは日変わりで、手作りの味にこだわっています。</p>
            </div>
            <div class="content-img fade-in" style="--delay: 4s;">
                <img src="@/assets/images/content1.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.content1 {
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
