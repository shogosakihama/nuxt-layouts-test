<template>
    <div>
        <ul>
            <li>
                <a href="#">Push</a>
            </li>
            <li>
                <a href="#">Push</a>
            </li>
            <li>
                <a href="#">Push</a>
            </li>
            <li style="float: right">
                <a class="active" @click="isActive = !isActive">Push!</a>
                <a
                    style="transform:scale(2)"
                    class="dropdown-wrapper"
                    @click="isActive = !isActive"
                >︙</a>
                <div class="dropdown-overlay" @click="isActive = !isActive" v-if="isActive"></div>
            </li>
        </ul>
        <transition>
            <template v-if="isActive">
                <div style="position:fixed; left:50%; transform: translate(-65%,80%)">
                    <ul class="dropdown-table">
                        <li
                            @click="$router.push('/post')"
                            v-on:click="isActive = !isActive"
                            class="dropdown-list"
                        >Post</li>
                        <li
                            @click="$router.push('/gridLayout')"
                            v-on:click="isActive = !isActive"
                            class="dropdown-list"
                        >GridLayout</li>
                        <li
                            @click="$router.push('/balance')"
                            v-on:click="isActive = !isActive"
                            class="dropdown-list"
                        >Balance</li>
                        <li
                            @click="$router.push('/hello')"
                            v-on:click="isActive = !isActive"
                            class="dropdown-list"
                        >Hello</li>
                        <li
                            @click="$router.push('/progateEasy')"
                            v-on:click="isActive = !isActive"
                            class="dropdown-list"
                        >Progate</li>
                    </ul>
                </div>
            </template>
        </transition>
        <nuxt />
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            isActive: false
        };
    },
    async asyncData({ app }) {
        const data = await app.$axios.$get(`https://haleru-laravel-api.herokuapp.com/api`)
                     console.log("1");

        return { data };
    }
};
</script>

<style lang="scss">
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    padding-top: 0%;
    @include media(s) {
        padding-top: 1%;
    }
    width: 100%;
    background-color: #2d3946;
    overflow: auto;
    .dropdown-table {
        z-index: 9;
        display: block;
    }
    .dropdown-list {
        width: 100%;
        @include button--green;
    }
    li {
        float: left;
        a {
            bottom: 0;
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 120%;
            font-weight: bold;
        }
        a:hover {
            background-color: #111;
        }
        a.active {
            display: "";
            @include media(s) {
                display: none;
            }
            background-color: rgb(1, 173, 125);
        }
        a.active:hover {
            background-color: rgb(113, 224, 65);
        }
        .dropdown-wrapper {
            display: none;
            @include media(s) {
                display: block;
            }
        }
    }
}

.dropdown-table {
    width: 130%;
    font-size: 150%;
}


.dropdown-overlay {
    z-index: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    background-color: rgba(0, 0, 0, 0.75);
}

html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}

.button--green {
    @include button--green;
}

.button--green:hover {
    color: #fff;
    background-color: #3b8070;
}

.button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
}

.button--grey:hover {
    color: #fff;
    background-color: #35495e;
}
</style>
