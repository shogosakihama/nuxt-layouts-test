<template>
<body>
    <div class="header">
        <div class="header-logo">Progate</div>
        <div class="header-list">
            <ul>
                <li>プログラミングとは</li>
                <li>学べるレッスン</li>
                <li>お問い合わせ</li>
            </ul>
        </div>
    </div>

    <div class="main">
        <div class="copy-container">
            <h1>
                HELLO WORLD
                <span>.</span>
            </h1>
            <h2>プログラミングの世界へようこそ</h2>
        </div>

        <div class="contents">
            <h3 class="section-title">学べるレッスン</h3>
            <div class="contents-item">
                <div class="image_htmlCss"></div>
                <p>HTML & CSS</p>
            </div>
            <div class="contents-item">
                <div class="image_php"></div>
                <p>PHP</p>
            </div>
            <div class="contents-item">
                <div class="image_ruby"></div>
                <p>Ruby</p>
            </div>
            <div class="contents-item">
                <div class="image_swift"></div>
                <p>Swift</p>
            </div>
        </div>

        <div class="contact-form">
            <h3 class="section-title">お問合わせ</h3>
            <p>メールアドレス(必須)</p>
            <input />
            <p>お問い合わせ(必須)</p>
            <textarea></textarea>
            <p>*必須項目は必ずご入力ください</p>
            <input class="contact-submit" type="submit" value="送信" />
        </div>
    </div>

    <div class="footer">
        <div class="footer-logo">Progate</div>
        <div class="footer-list1">
            <ul>
                <li class="h">会社概要</li>
                <li class="h">採用</li>
                <li class="h">お問い合わせ</li>
            </ul>
        </div>
    </div>
</body>
</template>
<script>
export default {
    layout: "progate"
};
</script>
<style lang="scss">
.header {
    background-color: #26d0c9;
    color: #fff;
    height: 80px;
    .header-logo {
        float: left;
        font-size: 36px;
        padding: 10px 40px;
    }
    .header-list {
        float: right;
        padding: 28px 0px;
        li {
            background-color: #26d0c9;
            padding: 0 20px;
        }
    }
}
.main {
    padding: 100px 100px;
    .copy-container {
        h1 {
            font-size: 140px;
            span {
                color: #ff4a4a;
            }
        }
        h2 {
            font-size: 60px;
        }
    }
    .contents {
        height: 500px;
        margin-top: 100px;
        .section-title {
            border-bottom: 2px solid #dee7ec;
            font-size: 28px;
            padding-bottom: 15px;
            margin-bottom: 50px;
        }
        .contents-item p {
            font-size: 24px;
            margin-top: 30px;
        }
        .contents-item {
            float: left;
            margin-right: 40px;
            .image_htmlCss {
                background-color: #e332f3;
                padding: 120px;
                width: 120px;
            }
            .image_php {
                background-color: #32f33c;
                padding: 120px;
                width: 120px;
            }
            .image_ruby {
                background-color: #3255f3;
                padding: 120px;
                width: 120px;
            }
            .image_swift {
                background-color: #e0f332;
                padding: 120px;
                width: 120px;
            }
        }
    }
    .contact-form {
        padding-top: 100px;
        .section-title {
            border-bottom: 2px solid #dee7ec;
            font-size: 28px;
            padding-bottom: 15px;
            margin-bottom: 50px;
        }
        input,
        textarea {
            width: 400px;
            margin-top: 10px;
            margin-bottom: 30px;
            padding: 20px;
            font-size: 18px;
            border: 1px solid #dee7ec;
        }
        .contact-submit {
            background-color: #dee7ec;
            color: #889eab;
        }
    }
    
}
.footer {
        background-color: #2f5167;
        color: #fff;
        height: 120px;
        padding: 40px;
        .footer-logo {
            float: left;
            font-size: 32px;
        }
        .footer-list1 {
            float: right;
            width: 100px;
            position: relative;
            ul {
                 position: absolute;
                background-color: initial;
                padding: initial;
                transform: translate(0, -25%);
                .h {
                    width: 100px;
                }
            }
        }
        //    .footer-list1 li{
        //        padding-bottom: 20px;
        //        width: 20%;
        //    }
    }
</style>