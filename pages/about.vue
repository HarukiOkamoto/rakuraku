<template>
    <div class="about-content">
        <div class="title fade-in" style="--delay: 0s;">
            <h1>ご紹介</h1>
        </div>
        <div class="content-area">
            <div class="img-area fade-in" style="--delay: 1s;">
                <img src="@/assets/images/rakuraku.jpg" alt="">
            </div>

            <div class="introduction fade-in" style="--delay: 2s;">
                <p>
                    法人名称：特定非営利活動法人障害者の自立を考えるあしたの会<br>
                    法人番号；030005003247<br>
                    住所　　：埼玉県蕨市中央7-21-8<br>
                    電話番号：<a href="tel:048-431-8815">048-431-8815</a><br>
                    施設長　：望月 勇志<br>
                    求人情報：<a href="https://z1uy6v74.jbplt.jp/" target="_blank">こちら</a>
                </p>
            </div>
            <div class="content fade-in" style="--delay: 3s;">
                <p>
                    らくらくは宅配弁当だけでなく、地域のイベントにも積極的に参加しています。<br>
                    お会いすることがありましたら、気兼ねなくお声かけして頂けると幸いです。<br>
                    これからも蕨市に笑顔を届けられるようなお弁当作りをして参りますので、何卒よろしくお願い致します。
                </p>
            </div>
        </div>
    </div>

    <Fotter />
</template>

<style scoped>
.about-content {
    width: 100%;
    padding-bottom: 60px;
    background-color: #f8f4e6;
}

.title {
    padding-top: 100px;
}

.title h1 {
    text-align: center;
    font-family: 'Zen Old Mincho';
    font-size: 36px;
}

.content-area {
    width: 100%;
    font-family: 'Zen Old MIncho';
    padding-top: 60px;
}

.content-area h2 {
    text-align: center;
    font-size: 28px;
}

.content {
    display: flex;
    width: 60%;
    justify-content: center;
    padding: 60px;
    margin: 0 auto;
}

.content p {
    font-size: 18px;
    text-align: left;
}

.introduction {
    padding-top: 40px;
    display: flex;
    justify-content: center;
    /* Change from space-around to center */
}

.introduction p {
    text-align: left;
    /* Change from center to left */
    width: fit-content;
    /* Adjust as needed */
}

.img-area {
    width: 800px;
    margin: 0 auto;
}


.fade-in {
    opacity: 0;
    animation: fade-in 2s ease forwards;
    animation-delay: var(--delay);
}


@keyframes fade-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@media (max-width: 767px) {
    .img-area {
        width: 70%;
        margin: 0 auto;
    }

    .introduction p {
        font-size: 12px;
    }

    .content {
        width: 100%;
        padding: 20px;
    }

    .content p {
        font-size: 15px;
    }
}
</style>