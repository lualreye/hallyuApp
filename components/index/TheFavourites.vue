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
          <second-type />
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
          Favoritos de la comunidad
        </h2>
        <div class="parenthesis-two w-11 h-11 relative">
          <second-type />
        </div>
      </div>
      <div
        class="mx-auto w-full flex justify-center lg:justify-start items-center"
      >
        <svg
          width="250"
          height="49"
          viewBox="0 0 337 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M247.184 13.576C244.278 14.8501 241.601 15.9282 239.177 17.1151C235.836 18.7486 232.689 20.4691 229.445 22.1461C221.173 26.4257 211.079 29.6436 199.792 32.0448C195.499 32.9595 190.723 33.5911 186.02 33.9069C173.816 34.7236 163.397 32.9322 155.595 28.6145C151.253 26.2134 147.768 23.491 143.837 20.9374C141.606 19.489 139.255 18.0788 136.481 16.3583C134.443 17.5344 132.502 18.3565 131.356 19.3638C128.558 21.8249 126.134 24.3676 123.542 26.8776C119.791 30.5039 116.451 34.2336 112.17 37.7291C97.1682 49.9854 71.9284 50.7748 52.3081 47.007C28.7566 42.4824 12.0185 34.6038 1.28584 24.1226C1.15319 23.9864 1.05669 23.8449 0.948153 23.7033C-0.921017 21.3022 0.00753542 19.2495 3.43234 18.1877C6.89331 17.1151 11.5602 17.3765 15.6724 19.1515C20.4961 21.2314 24.8615 23.5291 29.6369 25.6417C36.6674 28.7561 43.6979 31.876 51.066 34.8161C56.2997 36.9015 62.6066 38.2409 69.5527 38.7963C78.8744 39.5368 87.0385 38.5458 92.2239 34.8053C95.5522 32.3987 98.0485 29.7253 100.328 27.0682C102.703 24.3077 104.187 21.3947 106.381 18.6015C109.155 15.0679 113.267 11.8663 119.309 9.2365C131.368 4.00405 145.405 4.20006 156.355 9.87354C159.936 11.7248 162.818 13.8591 165.893 15.9009C167.992 17.2894 169.74 18.7867 171.863 20.1642C176.747 23.3331 181.076 23.8721 188.709 22.0644C197.018 20.0934 204.434 17.567 210.38 14.2403C213.057 12.7375 215.505 11.1422 218.387 9.72653C223.355 7.29271 228.191 4.76632 233.786 2.64829C244.061 -1.24474 256.011 -0.792817 265.14 3.65558C268.022 5.06034 270.314 6.71556 272.701 8.31088C275.463 10.1512 277.935 12.0841 280.721 13.919C283.506 15.7485 287.16 17.1315 291.743 18.0081C298.87 19.3638 305.406 18.9282 310.808 16.4563C314.631 14.7031 317.923 12.7048 321.336 10.7774C324.712 8.86081 328.258 8.2401 332.081 9.00782C335.903 9.77553 337.965 11.6485 336.555 13.9136C328.801 26.3658 308.722 31.6636 284.543 28.3858C272.05 26.6925 262.21 23.4692 254.878 18.6288C252.442 16.9953 249.958 15.3891 247.184 13.576Z"
            fill="#FF98C9"
          />
        </svg>
      </div>
    </div>

    <!-- RENDERIZADO DE TARJETAS DE LOS COMENTARIOS DE LOS USUARIOS -->
    <div
      class="flex justify-start mt-4 py-12 pl-1 sm:pl-6 items-center overflow-x-scroll"
    >
      <div
        v-for="(userComment, i) in comments"
        :key="i"
        class="flex justify-center items-center md:mr-6"
      >
        <recommendation-card
          :comment="userComment.comment"
          :profileImage="userComment.profileImage"
          :userName="userComment.userName"
          :productImage="userComment.productImage"
          :productName="userComment.productName"
          :rate="userComment.rate"
          :read="userComment.read"
          :order="i"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SecondType from "~/components/parenthesis/SecondType.vue";
import RecommendationCard from "~/components/cards/RecommendationCard";
export default {
  components: {
    SecondType,
    RecommendationCard
  },
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
};
</script>

<style scoped>
.parenthesis-two {
  transform: rotate(180deg);
}
</style>
