
import type content1Vue from './Contents/content1.vue';
<template>
    <div class="contents-area">
        <div class="title-area">
            <h1 class="heading03">らくらく弁当ができるまで</h1>
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
    padding-top: 10vh;
}

/* .inner-line {
    width: 80%;
    border: solid 3px rgb(60, 60, 60);
    margin: 0 auto;
    border-radius: 20px;
} */

.title-area {
    width: 100%;
    padding: 5vh;
}

.title-area h1 {
    text-align: center;
    font-family: 'Intro';
    font-size: 40px;
    color: rgb(60, 60, 60);
}

.inner-line {
    padding: 1em 1.5em;
    margin: 2em 0;
    background-color: #ffffe0;
    /*背景色*/
    border: dotted 6px #ffa500;
    /*線*/
    color: #000000;
    /*文字色*/
    width: 80%;
    margin: 0 auto;
}

.inner-line p {
    margin: 0;
    padding: 0;
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
    background-color: #e3bf00;
}

.heading03::before {
    margin-right: 20px;
}

.heading03::after {
    margin-left: 20px;
}
</style>