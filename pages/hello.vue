<template>
    <div id="data">{{ data }}<br>⬆︎⬆︎<br>LaravelをAPIサーバーにしてaxios.getしてます</div>
</template>


<script>
const axios = require("axios");




export default {
    async asyncData({ app }) {
        const data = await app.$axios.$get(`https://haleru-laravel-api.herokuapp.com/api`)
                     console.log("1");

        return { data };
    }
};
</script>

<style lang="scss">
#data {
  text-align: center;
  padding: 10%;
  font-size: 300%;
}
</style>