<template>
  <div class="w-full mt-16 px-4 py-6">
    <!-- TITULO DE LOS PRODUCTOS QUE ESTAN CON OFERTA -->
    <div
      class="w-full flex flex-col justify-center lg:justify-start items-start"
    >
      <div
        class="w-full flex justify-center lg:justify-start items-center h-14"
      >
        <div class="parenthesis w-11 h-11 relative">
          <third-type />
        </div>
        <h2
          class="
            text-xl
            sm:text-4xl
            text-center
            sm:text-left
            font-junegull
            text-textColor
          "
        >
          Ofertas Hallyu
        </h2>
        <div class="parenthesis-two w-11 h-11 relative">
          <third-type />
        </div>
      </div>
      <div
        class="mx-auto w-full flex justify-center lg:justify-start items-center"
      >
        <svg
          width="298"
          height="47"
          viewBox="0 0 298 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.6577 30.9143C29.2613 28.9978 39.5435 28.5557 49.6275 28.5186C66.0374 28.4619 76.3767 32.3461 83.2335 38.4952C84.515 39.6514 84.6985 41.3608 84.7955 42.9729C84.8401 43.8728 83.6598 45.1042 82.6854 46.7589C79.2702 45.6732 76.3571 44.9923 74.0465 43.9667C65.4485 40.1573 54.1413 38.6249 40.6988 38.5559C29.4979 38.4951 18.5618 38.2767 5.64604 40.6366C2.4304 41.2253 1.30894 40.4355 0.700321 39.0671C-1.12538 34.92 3.84021 30.5785 10.4327 26.044C24.8782 16.118 41.8962 9.33793 61.1835 5.1507C80.3041 0.999657 97.3949 -0.00699787 113.288 0.755448C129.221 1.51662 143.74 3.50742 157.58 6.02933C178.748 9.88589 199.606 13.9743 220.698 17.8915C238.312 21.1674 257.576 22.9222 279.693 21.9949C283.731 21.8266 287.723 21.5961 292.494 19.8334C293.869 19.3279 296.488 19.3151 297.182 19.7595C297.964 20.2649 297.999 21.7295 296.982 22.4478C294.623 24.1095 291.576 26.0238 288.534 27.0222C283.804 28.5741 278.681 29.847 274.018 30.5466C257.749 32.9842 242.872 33.6611 229.42 32.2924C209.248 30.2346 191.213 26.5094 172.454 23.3476C156.212 20.6187 140.289 17.6431 123.828 15.0867C110.795 13.0621 96.022 12.7016 79.8581 13.8559C62.4595 15.0998 44.7963 19.3819 26.9257 26.54C24.8584 27.3658 22.8829 28.3053 20.9004 29.2232C19.783 29.7589 18.7398 30.3542 17.6577 30.9143Z"
            fill="#87C7C9"
          />
        </svg>
      </div>
    </div>
    <!-- SECCION DE RENDERIZADO DE LAS TARJETAS -->
  </div>
</template>

<script>
import ThirdType from "~/components/parenthesis/ThirdType.vue";
export default {
  components: {
    ThirdType,
  },
};
</script>

<style scoped>
.parenthesis-two {
  transform: scaleX(-1);
}
</style>
