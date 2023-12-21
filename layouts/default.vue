<template>
    <div class="header-area">
        <div class="header">
            <div class="navtext-container">
                <div class="navtext">
                    <img src="@/assets/images/ume.svg" alt="">らくらく弁当
                </div>
            </div>
            <input type="checkbox" class="menu-btn" id="menu-btn">
            <label for="menu-btn" class="menu-icon"><span class="navicon"></span></label>
            <ul class="menu">
                <li class="top">
                    <NuxtLink :to="{ name: 'index' }" class="N-link">ホーム</NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="{ name: 'menu' }" class="N-link">メニュー</NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="{ name: 'about' }" class="N-link">ご紹介</NuxtLink>
                </li>
            </ul>
        </div>

        <nav class="nav">
            <ul>
                <NuxtLink :to="{ name: 'index' }" class="N-link">
                    <li :class="{ 'active-link': $route.name === 'index' }">
                        <span>ホーム</span>
                    </li>
                </NuxtLink>
                <NuxtLink :to="{ name: 'menu' }" class="N-link">
                    <li :to="{ name: 'menu' }" :class="{ 'active-link': $route.name === 'menu' }">
                        <span>メニュー</span>
                    </li>
                </NuxtLink>
                <NuxtLink :to="{ name: 'about' }" class="N-link">
                    <li :class="{ 'active-link': $route.name === 'about' }">
                        <span>ご紹介</span>
                    </li>
                </NuxtLink>
            </ul>
        </nav>
    </div>
    <div class="company">
        <h3>らくらく弁当</h3>
        <h5><a href="tel:048-431-8815">〇四八ー四三一ー八八一五</a></h5>
    </div>
</template>

<script lang="ts">

export default {
    setup() {
        const isMenuOpen = ref(false);

        return {
            isMenuOpen
        };
    }
};
</script>

<style scoped>
.header-area {
    z-index: 1000;
    position: fixed;
}

.nav {
    width: fit-content;
    margin: 0 auto;
    padding: 30px;
    /* padding-bottom: 800px; */
}

.nav ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.nav li {
    /* その他のスタイル */
    margin-right: 0;
    margin-bottom: 3vh;
}

.nav li:hover {
    color: #FB710E;
    transition: color 0.3s ease, fill 0.3s ease;
}

.nav li:hover path {
    fill: #FB710E;
    transition: color 0.3s ease, fill 0.3s ease;
}

span {
    font-family: 'Zen Old Mincho';
    padding-left: 5px;
    font-size: 16px;
}

svg {
    width: 20px;
    height: 20px;
}

.N-link {
    text-decoration: none;
}

.active-link {
    border-bottom: 2px solid #FB710E;
    color: #FB710E;
}

.header {
    display: none;
}

.navtext-container {
    width: 100%;
    height: 52px;
    position: absolute;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
}

.navtext {
    position: absolute;
    text-transform: uppercase;
    color: #383c3c;
    letter-spacing: 4px;
    font-size: 20px;
    font-family: 'Zen Old Mincho';
    font-weight: bold;
    display: flex;
    /* 追加 */
    align-items: center;
    /* 追加 */
    justify-content: center;
    padding-left: 5px;
    /* 追加 */
}

.navtext img {
    width: 30px;
}

.company {
    position: absolute;
    position: fixed;
    top: 10px;
    right: 40px;
    text-align: right;
    writing-mode: vertical-rl;
    opacity: 1;
    animation: fade-in 2s ease forwards;
    z-index: 999;
}

.company h3 {
    -webkit-writing-mode: vertical-rl;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    font-family: 'Noto Serif JP',
        serif !important;
    font-weight: bold;
    font-size: 25px;
}

.company h3:before {
    content: ' ';
    display: inline-block;
    width: 50px;
    height: 50px;
    background-image: radial-gradient(#E7556A 25%, transparent 0),
        radial-gradient(#E7556A 25%, transparent 0),
        radial-gradient(#E7556A 25%, transparent 0),
        radial-gradient(#E7556A 25%, transparent 0),
        radial-gradient(#E7556A 25%, transparent 0);
    background-position: 50% 0, 5% 40%, 95% 40%, 23% 95%, 78% 95%;
    background-size: 30px 30px;
    background-repeat: no-repeat;
}

.company h5 {
    font-family: 'Zen Old Mincho';
}

@media (max-width: 767px) {
    .nav {
        display: none;
    }

    .N-link {
        font-family: 'Zen Old Mincho';
        color: #383c3c;
    }

    .header {
        position: fixed;
        width: 100%;
        height: 52px;
        display: block;
        background-color: #fff1cf;
    }

    /* Nav items */
    .menu {
        list-style: none;
        position: absolute;
        width: 100%;
        height: auto;
        top: 0;
        margin-top: 52px;
        padding: 0 0 10px 0;
        clear: both;
        background-color: #fff1cf;
        transition: 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
        transform: scale(1, 0);
        transform-origin: top;
    }

    /* Hamburger menu button */
    .menu-btn:checked~.menu {
        transform: scale(1, 1);
        transform-origin: top;
        transition: 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
    }

    /* Hamburger menbu text */
    .menu NuxtLink {
        text-decoration: none;
        font-weight: 500;
        letter-spacing: 2px;
        font-size: 16px;
        text-transform: capitalize;
        color: #383c3c;
        opacity: 0;
        transition: 0.5s;
    }

    .menu li {
        border-top: 1px solid #383c3c;
        padding: 15px 0;
        margin: 0 54px;
        opacity: 0;
        transition: 0.5s;
    }

    .menu-btn:checked~.menu a,
    .menu-btn:checked~.menu li {
        opacity: 1;
        transition: 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.2s;
    }

    .menu-btn {
        display: none;
    }

    .menu-icon {
        display: inline-block;
        position: relative;
        cursor: pointer;
        padding: 24px 14px;
    }

    .navicon {
        background: #383c3c;
        display: block;
        height: 3px;
        width: 26px;
        position: relative;
        transition: 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
    }

    .navicon:before,
    .navicon:after {
        content: "";
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        background: #383c3c;
        transition: 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
    }

    .navicon:before {
        top: 9px;
    }

    .navicon:after {
        bottom: 9px;
    }

    /* Hamburger Menu Animation Start */
    .menu-btn:checked~.menu-icon .navicon:before {
        transform: rotate(-45deg);
    }

    .menu-btn:checked~.menu-icon .navicon:after {
        transform: rotate(45deg);
    }

    .menu-btn:checked~.menu-icon:not(.steps) .navicon:before {
        top: 0;
    }

    .menu-btn:checked~.menu-icon:not(.steps) .navicon:after {
        bottom: 0;
    }

    .menu-btn:checked~.menu-icon .navicon {
        background: rgba(255, 255, 255, 0);
        transition: 0.2192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
    }

    .company {
        top: 50px;
        right: 0px;
    }

    .company h3 {
        font-size: 20px;
    }

    .company h5 {
        font-size: 10px;
    }
}
</style>