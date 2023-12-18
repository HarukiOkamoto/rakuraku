
import type content1Vue from './Contents/content1.vue';
<template>
    <div class="contents-area">
        <div class="title-area">
            <h1>らくらく弁当ができるまで</h1>
        </div>
        <div class="inner-line">
            <ContentsContent1 />
            <ContentsContent2 />
            <ContentsContent3 />
        </div>
    </div>
</template>

<style>
.contents-area {
    width: 100%;
    background-color: #FFF496;
}

.inner-line {
    width: 80%;
    border: solid 3px #000;
    margin: 0 auto;
    border-radius: 20px;
}

.title-area {
    width: 100%;
}

.title-area h1 {
    text-align: center;
    font-family: 'Intro';
    font-size: 40px;
}
</style>