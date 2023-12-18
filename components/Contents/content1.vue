<template>
    <transition name="fade">
        <div class="intro-content">
            <div class="sub-title">
                <h2 class="index">一.</h2>
                <h2><span>班</span>分け</h2>
            </div>
            <div class="content-area">
                <div class="intro-text">
                    <p>まず、調理班と室内班で分かれます。</p>
                    <p>調理班はさらに厨房でそれぞれの役割を分担し、</p>
                    <p>室内班はお弁当や割りばしの包み紙などの制作を行います。</p>
                    <p>らくらく弁当のメニューは日変わりで、手作りの味にこだわっています。</p>
                </div>
                <div class="intro-img">
                    <img src="@/assets/images/content1.png" alt="">
                </div>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.intro-content {
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

.intro-text {
    font-family: 'Zen Old Mincho';
    width: 60%;
}

.intro-text p {
    font-size: 20px;
    padding-left: 3vh
}

.intro-img {
    width: 50%;
    padding: 1vh;
    margin-left: auto;
}

.intro-img img {
    width: 300px;
    height: auto;
    margin: 0 auto;
}
</style>

<style>
/* フェードインアニメーションのスタイル */
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
