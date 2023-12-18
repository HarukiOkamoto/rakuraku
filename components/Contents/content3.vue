<template>
    <div class="intro-content">
        <div class="sub-title">
            <h2 class="index">三.</h2>
            <h2>皆さんの<span>もと</span>へお届け</h2>
        </div>
        <div class="content-area">
            <div class="intro-text">
                <p>完成したお弁当は、地域の皆さんのもとへ配達されます。</p>
                <p>値段は550円。月の第一火曜日は蕨市民会館、第三火曜日は蕨市役所にて出張販売もしています。お気軽にお声掛けください!</p>
            </div>
            <div class="intro-img">
                <img src="@/assets/images/content3.png" alt="">
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
