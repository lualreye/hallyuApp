<template>
  <div class="wheel-wrapper">
    <div class="wheel-pointer" @click="onClickRotate">Start</div>
    <div
      class="wheel-bg"
      :class="{ freeze: freeze }"
      :style="`transform: rotate(${wheelDeg}deg)`"
    >
      <div class="prize-list">
        <div
          class="prize-item-wrapper"
          v-for="(item, index) in prizeList"
          :key="index"
        >
          <div
            class="prize-item"
            :style="`transform: rotate(${(360 / prizeList.length) * index}deg)`"
          >
            <div class="prize-name">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    freeze: false,
    rolling: false,
    wheelDeg: 0,
    prizeNumber: 8,
    prizeListOrigin: [
      {
        icon: "https://picsum.photos/40?random=1",
        name: "$10000",
      },
      {
        icon: "https://picsum.photos/40?random=6",
        name: "Thank you!",
      },
      {
        icon: "https://picsum.photos/40?random=2",
        name: "$500",
      },
      {
        icon: "https://picsum.photos/40?random=3",
        name: "$100",
      },
      {
        icon: "https://picsum.photos/40?random=6",
        name: "Thank you!",
      },
      {
        icon: "https://picsum.photos/40?random=4",
        name: "$50",
      },
      {
        icon: "https://picsum.photos/40?random=5",
        name: "$10",
      },
      {
        icon: "https://picsum.photos/40?random=6",
        name: "Thank you!",
      },
    ],
  }),
  computed: {
    prizeList() {
      return this.prizeListOrigin.slice(0, this.prizeNumber);
    },
  },
  methods: {
    onClickRotate() {
      if (this.rolling) {
        return;
      }
      const result = Math.floor(Math.random() * this.prizeList.length);
      this.roll(result);
    },
    roll(result) {
      this.rolling = true;
      const { wheelDeg, prizeList } = this;
      this.wheelDeg =
        wheelDeg -
        (wheelDeg % 360) +
        6 * 360 +
        (360 - (360 / prizeList.length) * result);
      setTimeout(() => {
        this.rolling = false;
        alert("Result：" + prizeList[result].name);
      }, 4500);
    },
  },
  watch: {
    prizeNumber() {
      this.freeze = true;
      this.wheelDeg = 0;

      setTimeout(() => {
        this.freeze = false;
      }, 0);
    },
  },
};
</script>

<style scoped>
.wheel-wrapper {
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.wheel-pointer {
  width: 60px;
  height: 60px;
  border-radius: 1000px;
  background: yellow;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 60px;
  z-index: 10;
  cursor: pointer;
}
.wheel-pointer::after {
  content: "";
  position: absolute;
  top: -32px;
  left: 50%;
  border-width: 0 8px 40px;
  border-style: solid;
  border-color: transparent transparent yellow;
  transform: translateX(-50%);
}

.wheel-bg {
  width: 100%;
  height: 100%;
  border-radius: 1000px;
  overflow: hidden;
  transition: transform 4s ease-in-out;
  background: #7eef97;
}
.wheel-bg .freeze {
  transition: none;
  background: red;
}

.prize-list {
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
}

.prize-item-wrapper {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
}

.prize-item {
  width: 100%;
  height: 100%;
  transform-origin: bottom;
}
.prize-name {
  padding: 16px 0;
}

.prize-icon {
}
</style>
