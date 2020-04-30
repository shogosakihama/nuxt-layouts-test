<template>
  <div class="form-wrap">
    <div class="input-box">
      <input class="title" v-model="title" type="text" name="title" placeholder="テキスト" />
      <textarea class="content" v-model="b" placeholder="コンテンツ"></textarea>
      <button class="button" @click="$store.commit('title',title)">入力</button>
      <br />
    </div>
    <div class="text-box">
      <p class="showA">{{ title }}</p>
      <p class="fukidashi">インプットに記入したテキストが表示されます。</p>
      <p class="showA">{{ content }}</p>
      <p class="fukidashi">テキストボックスに記入された数字の二乗した数[getter]</p>
      <p class="showA">{{ b }}</p>
      <p class="fukidashi">上に表示された数字の２倍の数[setter]</p>
      <p class="showA">{{ $store.state.title }}</p>
      <p class="fukidashi">$store.sate,mutationの機能を利用</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: ""
    };
  },
  computed: {
    b: {
      get: function() {
        return this.content * 2;
      },
      set: function(value) {
        this.content = value * value;
      }
    }
  }
};
</script>

<style lang="scss">
.form-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 5%;
  .text-box {
    text-align: center;
    font-size: 140%;
    .fukidashi {
      background-color: rgb(21, 216, 3);
      color: rgb(255, 255, 255);
      font-weight: bold;
      border-radius: 6px;
      display: none;
      padding: 5%;
    }
    .showA:hover + .fukidashi {
      display: block;
    }
  }
  .input-box {
    text-align: center;
    font-size: 160%;
    .title {
      border-radius: 4px;
      margin-bottom: 5%;
      width: 100%;
      font-size: 100%;
      -webkit-appearance: none;
    }
    .content {
      border-radius: 4px;
      width: 100%;
      font-size: 100%;
      -webkit-appearance: none;
    }
    .button {
      margin: 10px;
      width: 50%;
      font-size: 60%;
      @include media(s) {
        -webkit-appearance: none;
      }
    }
  }
}
</style>