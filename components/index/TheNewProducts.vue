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
          <fourth-type />
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
          Favoritos  en Hallyu
        </h2>
        <div class="parenthesis-two w-11 h-11 relative">
          <fifth-type />
        </div>
      </div>
      <div
        class="mx-auto w-full flex justify-center lg:justify-start items-center"
      >
        <svg
          width="181"
          height="48"
          viewBox="0 0 181 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.9113 30.1626C49.64 28.8604 51.2182 27.7732 52.6784 26.5411C54.6903 24.8459 56.6129 23.0355 58.5801 21.2827C63.5974 16.8092 69.4226 13.7043 75.7595 11.6382C78.1699 10.8507 80.794 10.4279 83.3331 10.3711C89.9212 10.227 95.1775 13.0265 98.6732 18.6183C100.618 21.7281 102.062 25.158 103.768 28.4194C104.736 30.2693 105.773 32.0825 106.988 34.2883C108.242 33.0432 109.393 32.2073 110.149 31.1009C111.996 28.3975 113.657 25.5733 115.402 22.7987C117.926 18.7905 120.248 14.6335 123.034 10.8143C132.798 -2.57738 146.29 -1.81894 156.13 3.91622C167.941 10.8027 175.645 21.1731 179.782 34.1988C179.832 34.3676 179.862 34.5403 179.899 34.7138C180.534 37.6585 179.738 40.0071 177.766 41.0253C175.773 42.0538 173.339 41.4352 171.422 39.076C169.174 36.3113 167.2 33.3214 164.982 30.5215C161.718 26.3944 158.454 22.261 154.984 18.316C152.519 15.5174 149.375 13.5232 145.777 12.4071C140.946 10.915 136.473 11.5335 133.172 15.5801C131.052 18.1841 129.333 21.157 127.732 24.1252C126.065 27.2084 124.848 30.5303 123.271 33.664C121.278 37.6287 118.625 41.1139 115.034 43.7988C107.869 49.1384 100.46 47.9708 95.4969 40.5766C93.8729 38.1634 92.6614 35.4644 91.334 32.8611C90.4275 31.0905 89.7225 29.2153 88.8017 27.4558C86.6825 23.4081 84.4681 22.486 80.1553 24.0991C75.4605 25.8589 71.1564 28.3306 67.5135 31.8404C65.8724 33.4265 64.339 35.1365 62.6022 36.6066C59.6091 39.133 56.6726 41.777 53.3939 43.8907C47.373 47.7764 41.1068 46.4476 36.9275 40.6138C35.6081 38.7716 34.6389 36.6747 33.6096 34.6418C32.4186 32.2961 31.3946 29.861 30.1899 27.5201C28.9845 25.1856 27.2528 23.3174 24.9541 21.9819C21.378 19.9137 17.8498 19.9888 14.621 22.531C12.3358 24.3347 10.2954 26.4615 8.20162 28.4972C6.12863 30.5224 4.15792 31.0146 2.24574 29.8577C0.333557 28.7008 -0.482037 26.3635 0.600874 23.7977C6.55291 9.6918 17.9772 4.81107 30.3052 10.2752C36.6752 13.0981 41.4128 17.5407 44.5819 23.7149C45.6311 25.7959 46.7098 27.8481 47.9113 30.1626Z"
            fill="#FF98C9"
          />
        </svg>
      </div>
    </div>
    <!-- RENDERIZADO DE TARJETAS DE LOS COMENTARIOS DE LOS USUARIOS -->
    <div
      class="
        flex
        justify-center
        lg:justify-start
        mt-4
        py-12
        pl-1
        sm:pl-6
        items-center flex-wrap
      "
    >
      <div
        v-for="(newProduct, i) in newProductsArray"
        :key="i"
        class="flex justify-center items-center md:mr-6 m-6"
      >
        <new-product-card
          :link="newProduct.link"
          :image="newProduct.image"
          :productName="newProduct.productName"
          :price="newProduct.price"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FourthType from "~/components/parenthesis/FourthType.vue";
import FifthType from "~/components/parenthesis/FifthType.vue";
import NewProductCard from "~/components/cards/NewProductCard";
export default {
  components: {
    FourthType,
    FifthType,
    NewProductCard,
  },
  props: {
    newProductsArray : {
      type: Array,
      required: true
    }
  }
};
</script>
