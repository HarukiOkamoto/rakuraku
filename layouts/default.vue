<template>
    <div class="header-area">
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
</template>

<style scoped>
.header-area {
    z-index: 1000;
    position: fixed;
    opacity: 0.8;
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
</style>