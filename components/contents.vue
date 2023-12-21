<template>
    <div class="contents-area">
        <div class="title-area">
            <h1 class="heading">らくらく弁当ができるまで</h1>
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
    background-color: #f3f3f2;
    padding-top: 20px;
    padding-bottom: 70px;
}

.title-area {
    width: 100%;
    padding: 5vh;
}

.title-area h1 {
    text-align: center;
    font-family: 'Zen Old Mincho';
    font-size: 35px;
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

.heading {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.heading::before,
.heading::after {
    content: '';
    width: 40px;
    height: 2px;
    background-color: rgb(60, 60, 60);
}

.heading::before {
    margin-right: 20px;
}

.heading::after {
    margin-left: 20px;
}
</style>