// https://codepen.io/internette/pen/LkBxQw
<template>
  <v-main>
    <div style="top: 1650px !important;" id="loading">
    <div class="pokeball" id="normal"></div>
    <h2>Fetching pokemon data...</h2>
  </div>
  </v-main>
 
</template>

<style lang="scss" scoped>
$red: #e20f07;
$blu: #278de1;
$ylw: #ffff00;
$ppl: #481a66;
$pnk: #eb23aa;
$brw: #9a4a01;
$mos: #606700;
$grn: #5fa300;
$blk: #000;
$wht: #fff;
$gry: #a5a5a5;
@keyframes rotateBall {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes rotateBall {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(50deg);
  }
  0% {
    transform: rotate(360deg);
  }
}

#loading {
  text-align: center;
  max-width: 450px;
  margin: 0 auto;
}
.pokeball {
  width: 4px;
  height: 4px;
  transform-origin: 24px 24px;
  animation: rotateBall 1.5s infinite forwards;
  &#normal {
    box-shadow: 16px 0 0 $blk, 20px 0 0 $blk, 24px 0 0 $blk, 28px 0 0 $blk,
      8px 4px 0 $blk, 12px 4px 0 $blk, 16px 4px 0 $red, 20px 4px 0 $red,
      24px 4px 0 $red, 28px 4px 0 $red, 32px 4px 0 $blk, 36px 4px 0 $blk,
      4px 8px 0 $blk, 8px 8px 0 $red, 12px 8px 0 $red, 16px 8px 0 $wht,
      20px 8px 0 $red, 24px 8px 0 $red, 28px 8px 0 $red, 32px 8px 0 $red,
      36px 8px 0 $red, 40px 8px 0 $blk, 4px 12px 0 $blk, 8px 12px 0 $red,
      12px 12px 0 $wht, 16px 12px 0 $wht, 20px 12px 0 $wht, 24px 12px 0 $red,
      28px 12px 0 $red, 32px 12px 0 $red, 36px 12px 0 $red, 40px 12px 0 $blk,
      0px 16px 0 $blk, 4px 16px 0 $red, 8px 16px 0 $red, 12px 16px 0 $red,
      16px 16px 0 $wht, 20px 16px 0 $red, 24px 16px 0 $red, 28px 16px 0 $red,
      32px 16px 0 $red, 36px 16px 0 $red, 40px 16px 0 $red, 44px 16px 0 $blk,
      0px 20px 0 $blk, 4px 20px 0 $red, 8px 20px 0 $red, 12px 20px 0 $red,
      16px 20px 0 $red, 20px 20px 0 $blk, 24px 20px 0 $blk, 28px 20px 0 $red,
      32px 20px 0 $red, 36px 20px 0 $red, 40px 20px 0 $red, 44px 20px 0 $blk,
      0px 24px 0 $blk, 4px 24px 0 $blk, 8px 24px 0 $red, 12px 24px 0 $red,
      16px 24px 0 $blk, 20px 24px 0 $wht, 24px 24px 0 $gry, 28px 24px 0 $blk,
      32px 24px 0 $red, 36px 24px 0 $red, 40px 24px 0 $blk, 44px 24px 0 $blk,
      0px 28px 0 $blk, 4px 28px 0 $wht, 8px 28px 0 $blk, 12px 28px 0 $blk,
      16px 28px 0 $blk, 20px 28px 0 $gry, 24px 28px 0 $gry, 28px 28px 0 $blk,
      32px 28px 0 $blk, 36px 28px 0 $blk, 40px 28px 0 $gry, 44px 28px 0 $blk,
      4px 32px 0 $blk, 8px 32px 0 $wht, 12px 32px 0 $wht, 16px 32px 0 $wht,
      20px 32px 0 $blk, 24px 32px 0 $blk, 28px 32px 0 $gry, 32px 32px 0 $gry,
      36px 32px 0 $gry, 40px 32px 0 $blk, 4px 36px 0 $blk, 8px 36px 0 $gry,
      12px 36px 0 $wht, 16px 36px 0 $wht, 20px 36px 0 $wht, 24px 36px 0 $gry,
      28px 36px 0 $gry, 32px 36px 0 $gry, 36px 36px 0 $gry, 40px 36px 0 $blk,
      8px 40px 0 $blk, 12px 40px 0 $blk, 16px 40px 0 $gry, 20px 40px 0 $gry,
      24px 40px 0 $gry, 28px 40px 0 $gry, 32px 40px 0 $blk, 36px 40px 0 $blk,
      16px 44px 0 $blk, 20px 44px 0 $blk, 24px 44px 0 $blk, 28px 44px 0 $blk;
  }
}
</style>
