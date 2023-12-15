<template>
    <div class="content">
        <Intro />
        <div class="inner-line">
            <div class="main-title">
                <h1>らくらく弁当が<span>できる</span>まで♪</h1>
            </div>
            <Content1 />
            <Content2 />
            <Content3 />
        </div>
    </div>
    <div class="button-area">
        <button>メニューをみる</button>
    </div>
</template>

<style scoped>
.content {
    width: 100%;
    height: auto;
    background-color: #FFF496;
    padding-top: 5vh;
    padding-bottom: 10vh;
}

.inner-line {
    width: 80%;
    margin: 0 auto;
    border: 4px solid #000;
    border-radius: 30px;
}

.main-title {
    font-family: 'Noto Sans JP';
    font-weight: bold;
    text-align: center;
    margin-top: 10vh;
}

.main-title h1 {
    font-size: 40px;
}

span {
    color: #FB710E;
}
</style>

