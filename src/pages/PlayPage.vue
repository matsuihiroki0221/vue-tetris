<script lang="ts" setup>


 const classBlockColor = (x: number, y: number): string => {
  
 }

</script>

<template>
  <h1>プレイ画面</h1>
  <h2>
    ユーザ名: {{ $route.query.name }}
  </h2>

  <div class="container">
    <table class="field" style="border-collapse: collapse">
      <tr
        v-for="(row, y) in field"
        :key="y">
        <!-- テトリスのフィールドの各マス目にその状態を描画する (0: 空白, 1: I-テトリミノ, etc.) -->
        <td
          class="block"
          v-for="(col, x) in row"
          :key="() => `${x}${y}`"
          v-bind:class="classBlockColor(x,y)"
         />
      </tr>
    </table>
  </div>
</template>

<!-- スタイルシートに SCSS 記法 (Sass) を利用する -->
<style lang="scss" scoped>
 .container {
   display: flex;
   justify-content: center;
   align-items: stretch;
 }
 
 .field {
   border: ridge 0.4em #2c3e50;
   border-top: none;
 }
 
 .block {
   width: 1em;
   height: 1em;
   border: 0.1px solid #95a5a6;

   /*
   各テトリミノに対応した色を扱うクラス定義
   .block-i, .block-o のようにクラスが定義される
  */
  &-i {
    background: #3498db;
  }
  &-o {
    background: #f1c40f;
  }
  &-t {
    background: #9b59b6;
  }
  &-j {
    background: #1e3799;
  }
  &-l {
    background: #e67e22;
  }
  &-s {
    background: #2ecc71;
  }
  &-z {
    background: #e74c3c;
  }
 }
</style>

