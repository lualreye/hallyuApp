<template>
  <div class="heart-shape" />
</template>

<style scoped>
.heart-shape {
  position: relative;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  background: transparent;
}

.heart-shape:before {
  position: absolute;
  bottom: 0px;
  left: -5px;
  width: 10px;
  height: 10px;
  content: '';
  border-radius: 50%;
  background: transparent;
}

.heart-shape:after {
  position: absolute;
  top: -5px;
  right: 0px;
  width: 10px;
  height: 10px;
  content: '';
  border-radius: 50%;
  background: transparent;
}
</style>