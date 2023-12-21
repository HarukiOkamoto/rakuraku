<template>
    <div class="menu-content">
        <div class="title">
            <h1 class="fade-in">メニュー</h1>
        </div>
        <div class="intro fade-in" style="--delay: 1s;">
            <p>ご注文はお電話にて承っております。
                <br>
                メニューは日替わりで、1日1種類しかございません。<br><span>(※写真は過去のお弁当です。)</span>
                <br>
                お電話にて当日のメニューをご確認ください。
                <br>
                <br>
                お電話番号：<a href="tel:048-431-8815">048-431-8815</a>
            </p>
        </div>
        <div class="menu-area">
            <div class="content fade-in" style="--delay: 2s;">
                <div class="menu-item">
                    <img src="@/assets/images/obentou.png" alt="" class="menu-image">
                    <h5>〇〇弁当<br><span>12月23日</span></h5>
                    <p>鮭とブロッコリーのボイルが特徴的なお弁当です</p>
                </div>
                <div class="menu-item">
                    <img src="@/assets/images/obentou.png" alt="" class="menu-image">
                    <h5>〇〇弁当<br><span>12月23日</span></h5>
                    <p>鮭とブロッコリーのボイルが特徴的なお弁当です</p>
                </div>
                <div class="menu-item">
                    <img src="@/assets/images/obentou.png" alt="" class="menu-image">
                    <h5>〇〇弁当<br><span>12月23日</span></h5>
                    <p>鮭とブロッコリーのボイルが特徴的なお弁当です</p>
                </div>
                <div class="menu-item">
                    <img src="@/assets/images/obentou.png" alt="" class="menu-image">
                    <h5>〇〇弁当<br><span>12月23日</span></h5>
                    <p>鮭とブロッコリーのボイルが特徴的なお弁当です</p>
                </div>
                <div class="menu-item">
                    <img src="@/assets/images/obentou.png" alt="" class="menu-image">
                    <h5>〇〇弁当<br><span>12月23日</span></h5>
                    <p>鮭とブロッコリーのボイルが特徴的なお弁当です</p>
                </div>
                <div class="menu-item">
                    <img src="@/assets/images/obentou.png" alt="" class="menu-image">
                    <h5>〇〇弁当<br><span>12月23日</span></h5>
                    <p>鮭とブロッコリーのボイルが特徴的なお弁当です</p>
                </div>
            </div>
        </div>
    </div>
    <Fotter />
</template>

<style scoped>
.menu-content {
    width: 100%;
    padding-bottom: 40px;
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

.intro {
    padding-top: 60px;
    text-align: left;
    display: flex;
    justify-content: center;
}

.intro p {
    font-family: 'Zen Old Mincho';
    display: inline-block;
    text-align: left;
    font-size: 16px;
}

.intro span {
    color: #e95295;
    font-size: 14px;
}

.menu-area {
    padding: 40px;
}

.content {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
}

.menu-item {
    width: 300px;
    text-align: center;
    margin: 10px;
}

.menu-item p {
    font-family: 'Zen Old Mincho';
    font-size: 14px;
}

.menu-item h5 {
    font-family: 'Zen Old Mincho';
    font-size: 18px;
}

.menu-item span {
    font-size: 14px;
}

.menu-image {
    width: 100%;
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
</style>

