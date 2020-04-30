<template>
    <div id="container1">
        <div id="itemA">
            <div class="button-box">
                <a class="button">
                    <div class="a">text1</div>
                </a>
                <a class="button">
                    <div class="a">text2</div>
                </a>
                <a class="button">
                    <div class="a">text3</div>
                </a>
                <a class="button">
                    <div class="a">text4</div>
                </a>
            </div>
        </div>
        <div id="itemB">
            <template>
                <div class="sideBlock">
                    <div style="display:inline-block" class="side" v-if="isActive">
                        <table class="sideBar">
                            <tr>
                                <th class="button-left">
                                    <p class="button-left-layout">text1</p>
                                </th>
                            </tr>
                            <tr>
                                <th class="button-left">
                                    <p class="button-left-layout">text2</p>
                                </th>
                            </tr>
                            <tr>
                                <th class="button-left">
                                    <p class="button-left-layout">text3</p>
                                </th>
                            </tr>
                            <tr>
                                <th class="button-left" style="padding-bottom:5px">
                                    <p class="button-left-layout">text4</p>
                                </th>
                            </tr>
                        </table>
                    </div>
                    <div style="display:inline-block" class="side">
                        <a class="menu" @click="doAction">Menu</a>
                    </div>
                </div>
            </template>
            <div class="space1" v-bind:class="{show:isShow, hide:isHide}">
                <p
                    class="itemd"
                >Sass（サース[2][3]、英: Syntactically Awesome Stylesheets）は、ハンプトン・キャトリン[4]が設計しネイサン・バイゼンバウム[5]が開発したスタイルシート言語である。[6][7] 後にSassファイルに用いられる単純なスクリプト言語である SassScript 用の拡張が加えられた。</p>
                <p
                    class="iteme"
                >Vue (発音は / v j u ː / 、 view と同様）はユーザーインターフェイスを構築するためのプログレッシブフレームワークです。他の一枚板(モノリシック: monolithic)なフレームワークとは異なり、Vue は少しずつ適用していけるように設計されています。</p>
                <p
                    class="itemf"
                >Nuxtは、モダンな web アプリケーションを作成する Vue.js に基づいたプログレッシブフレームワークです。Vue.js 公式ライブラリ（vue、vue-router や vuex）および強力な開発ツール（webpack、Babel や PostCSS）に基づいています。 Nuxt の目標は、優れた開発者エクスペリエンスを念頭に置き、Web 開発を強力かつ高性能にすることです。</p>
            </div>
        </div>
        <div id="itemC"></div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            isActive: false,
            isShow: false,
            isHide: true
        };
    },
    methods: {
        doAction: function() {
            this.isActive = !this.isActive;
            this.isShow = !this.isShow;
            this.isHide = !this.isHide;
        }
    }
};
</script>

<style lang="scss">
@mixin mini-objectL {
    background: rgb(255, 136, 225);
    padding: 15px;
    margin: 1.5% 2.5%;
    width: 25%;
    height: 200px;
    bottom: 50%;
    display: inline-block;
    word-wrap: break-word;
    vertical-align: middle;
    overflow: scroll;
}

@include media(xl) {
    #container1 {
        display: grid;
        grid-template-areas:
            "itemA itemB"
            "itemA itemC";
        //     grid-template-rows: 650px 130px;
        //     grid-template-columns: 230px 1fr;
        grid-template-rows: 670px 100px;
        grid-template-columns: 18% 1fr;
    }
    #itemA {
        grid-area: itemA;
        // grid-row: 1 / 3;
        // grid-column: 1 / 2;
        background: #f88;
        .button-box {
            padding: 20px;
            margin-left: auto;
            margin-right: auto;
            .button {
                background: rgb(253, 253, 253);
                display: flex;
                margin: 10%;
                margin-top: 20%;
                padding: 5%;
                border-radius: 4px;
                align-items: center;
                .a {
                    margin: auto;
                }
            }
        }
    }
    #itemB {
        // position: relative;
        grid-area: itemB;
        // grid-row: 1 / 2;
        // grid-column: 2 / 3;
        background: #8f8;
        .button-left {
            display: none;
        }
        .menu {
            display: none;
        }
        .space1 {
            background: rgb(229, 255, 112);
            // position: absolute;
            text-align: center;
            margin: 0 5%;
            margin-top: 425px;
            margin-bottom: -5%;
            height: auto;
            .itemd {
                @include mini-objectL;
            }
            .iteme {
                @include mini-objectL;
            }
            .itemf {
                @include mini-objectL;
            }
        }
    }
    #itemC {
        grid-area: itemC;
        // grid-row: 2 / 3;
        // grid-column: 2 / 3;
        background: #88f;
    }
}

@mixin mini-objectM {
    background: rgb(255, 136, 225);
    padding: 15px;
    margin: 1.5% 2.5%;
    width: 25%;
    height: 200px;
    bottom: 50%;
    display: inline-block;
    word-wrap: break-word;
    vertical-align: middle;
    overflow: scroll;
}

@include media(l) {
    #container1 {
        display: grid;
        grid-template-areas:
          //   "itemA itemB"
          //   "itemA itemC";
            "itemB itemB"
            "itemC itemC";

        //     grid-template-rows: 650px 130px;
        //     grid-template-columns: 230px 1fr;
        grid-template-rows: 700px 100px;
        grid-template-columns: 20% 1fr;
    }
    #itemA {
        display: none;
        grid-area: itemA;
        // grid-row: 1 / 3;
        // grid-column: 1 / 2;
        background: #f88;
        .button-box {
            padding: 20px;
            margin-left: auto;
            margin-right: auto;
            .button {
                background: rgb(253, 253, 253);
                display: flex;
                margin: 10%;
                margin-top: 20%;
                padding: 5%;
                border-radius: 4px;
                align-items: center;
                .a {
                    margin: auto;
                }
            }
        }
    }
    #itemB {
        // position: relative;
        grid-area: itemB;
        // grid-row: 1 / 2;
        // grid-column: 2 / 3;
        background: #8f8;
        padding: 5% 0 15% 0;

        .sideBlock {
            display: inline-block;
            all: initial;
            background-color: #f88;
            .side {
                text-align: center;
                .sideBar {
                    all: initial;
                    width: 40%;
                    text-align: center;
                    tr {
                        th {
                            //    border: 1px solid #35495e;
                            display: block;
                            background-color: #f88;
                            .button-left-layout {
                                border-radius: 4px;
                                font-weight: normal;
                                margin: 15px 40px;
                                padding: 8px 50px;
                                background-color: rgb(255, 255, 255);
                            }
                        }
                    }
                }
            }

            .menu {
                display: inline;
                all: initial;
                background: rgb(3, 223, 3);
                border-left: solid 6px #f88;
                font-size: 200%;
                font-weight: bold;
                padding:8px;
                color:rgb(255, 255, 255);
            }
        }
        .show {
            background: rgb(229, 255, 112);
            // position: absolute;
            text-align: center;
            margin: 0 5%;
            margin-top: 135px;
            margin-bottom: -5%;
            height: auto;
            .itemd {
                @include mini-objectL;
            }
            .iteme {
                @include mini-objectL;
            }
            .itemf {
                @include mini-objectL;
            }
        }
        .hide {
            background: rgb(229, 255, 112);
            // position: absolute;
            text-align: center;
            margin: 0 5%;
            margin-top: 379px;
            margin-bottom: -5%;
            height: auto;
            .itemd {
                @include mini-objectL;
            }
            .iteme {
                @include mini-objectL;
            }
            .itemf {
                @include mini-objectL;
            }
        }
    }
    #itemC {
        grid-area: itemC;
        // grid-row: 2 / 3;
        // grid-column: 2 / 3;
        background: #88f;
    }
}

@mixin mini-object {
    background: rgb(255, 136, 225);
    padding: 15px;
    margin: 30px;
    width: 80%;
    height: 200px;
    bottom: 50%;
    display: inline-block;
    word-wrap: break-word;
    vertical-align: middle;
    overflow: scroll;
}

@include media(s) {
    #container1 {
        display: grid;
        grid-template-areas:
            "itemA"
            "itemB"
            "itemC";
        grid-template-rows: 29% 66% 5%;
        grid-template-columns: 100%;
        justify-content: center;
    }
    #itemA {
        grid-area: itemA;
        // grid-row: 1 / 3;
        // grid-column: 1 / 2;
        background: #f88;
        display: block;
        .button-box {
            padding: 20px;
            margin-left: auto;
            margin-right: auto;
            .button {
                background: rgb(253, 253, 253);
                display: flex;
                margin: 10%;
                padding: 5%;
                border-radius: 4px;
                align-items: center;
                .a {
                    margin: auto;
                }
            }
        }
    }
    #itemB {
        // position: relative;
        grid-area: itemB;
        // grid-row: 1 / 2;
        // grid-column: 2 / 3;
        background: #8f8;
        .sideBlock {
            display: none;
        }
        .menu {
            display: none;
        }
        .space1 {
            background: rgb(229, 255, 112);
            // position: absolute;
            text-align: center;
            margin: 20% 11%;
            height: auto;
            .itemd {
                @include mini-object;
            }
            .iteme {
                @include mini-object;
            }
            .itemf {
                @include mini-object;
            }
        }
    }
    #itemC {
        grid-area: itemC;
        // grid-row: 2 / 3;
        // grid-column: 2 / 3;
        background: #88f;
    }
}
</style>