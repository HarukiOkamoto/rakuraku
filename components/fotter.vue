<template>
    <div class="footer">
        <div class="content">
            <div class="company-name">NPO法人障害者の自立を考えるあしたの会 / らくらく</div>
            <div class="query">
                <p>代表者：韮澤 ゆかり</p>
                <p>TEL-FAX：<a href="tel:048-431-8815">048-431-8815</a></p>
                <p>住所：埼玉県蕨市中央7-21-8 ツインズわらび1F <span>〒335-0004</span></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer {
    background-color: #333333;
    color: #fff;
    padding: 20px;
}

.content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.company-name {
    font-size: 16px;
}

.query {
    margin: 0 auto;
    text-align: left;
    padding-top: 5px;
}

.query p {
    font-size: 14px;
}

@media (max-width: 767px) {
    .company-name {
        font-size: 14px;
    }

    .query p {
        font-size: 10px;
    }
}
</style>