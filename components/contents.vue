<template>
    <div class="contents-area">
        <div class="title-area">
            <h1 class="heading03">らくらく弁当ができるまで</h1>
        </div>
        <div class="box">
            <ContentsContent1 />
            <ContentsContent2 />
            <ContentsContent3 />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.contents-area {
    width: 100%;
    background-image: url(@/assets/images/background.jpg);
    padding-top: 10vh;
}

.title-area {
    width: 100%;
    padding: 5vh;
}

.title-area h1 {
    text-align: center;
    font-family: 'Zen Old Mincho';
    font-size: 40px;
    color: rgb(0, 0, 0);
}

.box {
    border-top: 2px solid #aaa;
    border-bottom: 2px solid #aaa;
    padding: 3em 0;
    position: relative;
    margin: 0 auto;
    width: 80%;
}

.box:before,
.box:after {
    content: '';
    position: absolute;
    top: -10px;
    width: 2px;
    height: -webkit-calc(100% + 20px);
    height: calc(100% + 20px);
    background-color: #aaa;
}

.box:before {
    left: 10px;
}

.box:after {
    right: 10px;
}

.box p {
    padding-left: 50px;
}

.heading03 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    text-align: center;
}

.heading03::before,
.heading03::after {
    content: '';
    width: 70px;
    height: 3px;
    background-color: rgb(60, 60, 60);
}

.heading03::before {
    margin-right: 20px;
}

.heading03::after {
    margin-left: 20px;
}
</style>