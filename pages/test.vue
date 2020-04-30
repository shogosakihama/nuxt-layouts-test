<template>
    <div class="wrap">
      <p>{{ $store.state.message }}</p>
        <table class="students">
            <tbody>
                <tr>
                    <td>School</td>
                    <td>
                        <select name="school">
                            <option value="choice">--選択してください--</option>
                            <option value="codebase">CODEBASE</option>
                            <option value="lagoon">Lagoon</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="age">Age</td>
                    <td>
                        <input />
                    </td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>
                        <input />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
const axios = require("axios");


export default {
}
</script>

<style lang="scss">
//CSSGrid
.wrap {
     display: grid;
     grid-gap: 5px; // 間隔
     grid-template-columns: repeat(12, 1fr); // repeat(すべてのグリッド(grid-template-areasで12分割するから12), 利用可能な空間の割合) => 各グリッドを等幅に
     grid-template-rows: 10vh 70vh calc(20vh - 5px * 2); // row(行)の高さ => 画面に収まるように高さを調整
     grid-template-areas:
       ". . . . . . . . . . . . "
       "s s s s s s s s s s s s ";
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
.wrap {
  .students {
      // transform: scale(2);
      grid-area: s;
      border-radius: 15px;
      border-collapse: collapse;
      text-align: center;
      margin: auto;
      background-color: rgb(243, 243, 243);
      td {
          padding: 8px;
      }
  }
}

</style>