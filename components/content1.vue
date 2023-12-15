<template>
    <div class="intro-content">
        <div class="sub-title">
            <h2 class="index">1.</h2>
            <h2><span>前</span>準備</h2>
        </div>
        <div class="content-area">
            <div class="intro-text">
                <p>テストテストテストテスト</p>
                <p>テストテストテストテストテスト</p>
                <p>テストテストテストテストテストテストテストテストテストテストテストテストテスト
                    テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
                </p>
            </div>
            <div class="intro-img">
                <img src="@/assets/images/content1.png" alt="">
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
    font-size: 25px;
    letter-spacing: .1em;
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
    font-family: 'Noto Sans JP';
    width: 50%;
}

.intro-text p {
    font-size: 16px;
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
