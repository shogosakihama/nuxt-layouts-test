<template>
  <div id="container">
    <div id="itemColorA">
      <p id="text">A</p>
    </div>
    <div id="itemColorB">
      <p id="text">B</p>
    </div>
    <div id="itemColorC">
      <p id="text">C</p>
    </div>
    <div id="itemColorD">
      <p id="text">D</p>
    </div>
    <div id="itemColorE">
      <p id="text">E</p>
    </div>
    <div id="itemColorF">
      <p id="text">F</p>
    </div>
  </div>
</template>

<style lang="scss">

//アイテム内の要素を中央に固定
@mixin objectCenter {
  // transform: translate(0%, -50%);
  font-size: 300%;
  text-align: center;
  margin-top: 41%;
}

//アイテムの色
$background-color: (
  "ColorA": #f88,
  "ColorB": #8f8,
  "ColorC": #88f,
  "ColorD": rgb(255, 203, 136),
  "ColorE": rgb(251, 136, 255),
  "ColorF": rgb(136, 255, 209)
);

//eachで各アイテムに色を割り振る
@mixin colorManagement {
  @each $page, $color in $background-color {
    #item#{$page} {
      background: $color;
      #text {
        @include objectCenter;
      }
    }
  }
}

//アイテムのサイズ。今回は正方形なので、値は一つ。
$box-size: 300px;


//レスポンシブ。サイズはPC。
@include media(xl) {
  #container {
    display: grid;
    grid-template-rows: $box-size $box-size;
    grid-template-columns: $box-size $box-size $box-size;
    justify-content: center;
    margin-top: 5%;
    grid-row-gap: 30px;
    grid-column-gap: 30px;
    @include colorManagement;
  }
}

$box-size: 30%;
$box-size2: 75%;


@include media(m) {
  #container {
    display: grid;
    grid-template-rows: $box-size2 $box-size2;
    grid-template-columns: $box-size $box-size $box-size;
    justify-content: center;
    margin-top: 5%;
    grid-row-gap: 30px;
    grid-column-gap: 10px;
    @include colorManagement;
  }
}

//レスポンシブ。サイズはスマートフォン。
@include media(s) {
  #container {
    display: grid;
    grid-template-rows: 300px 300px 300px 300px 300px 300px;
    grid-template-columns: 300px;
    justify-content: center;
    margin-top: 5%;
    grid-row-gap: 30px;
    grid-column-gap: 30px;
    @include colorManagement;
  }
}
</style>