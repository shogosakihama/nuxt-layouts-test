<template>
    <div id="data">{{ data }}<br>⬆︎⬆︎<br>LaravelをAPIサーバーにしてaxios.getしてます</div>
</template>


<script>
const axios = require("axios");




export default {
    async asyncData({ app }) {
        const data = await app.$axios.$get(`/`)

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