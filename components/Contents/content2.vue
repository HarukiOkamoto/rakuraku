<template>
    <div class="intro-content">
        <div class="sub-title">
            <h2 class="index">二.</h2>
            <h2><span>調</span>理</h2>
        </div>
        <div class="content-area">
            <div class="intro-img">
                <img src="@/assets/images/content2.png" alt="">
            </div>
            <div class="intro-text">
                <p>調理班の調理風景です。</p>
                <p>わからないことや難しいことは社員さんに教えてもらいながらみんなで一緒に、ひとつひとつに心を込めてお弁当を作ります。</p>
                <p>これがとっても優しい味の秘訣です。</p>
            </div>
        </div>
    </div>
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
    padding-right: 3vh;
}

.intro-img {
    width: 50%;
    padding: 1vh;

}

.intro-img img {
    width: 300px;
    height: auto;
    margin: 0 auto;
}
</style>
