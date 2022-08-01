<template>
  <div class="w-full mt-16 px-4 py-6">
    <!-- TITULO DE LOS PRODUCTOS QUE ESTAN CON OFERTA -->
    <div
      class="w-full flex flex-col justify-center lg:justify-start items-start"
    >
      <div
        class="
          w-full
          flex flex-col
          justify-center
          lg:justify-start
          items-start
          h-14
        "
      >
        <h2
          class="
            text-2xl
            sm:text-4xl
            text-center
            sm:text-left
            font-junegull
            text-textColor
          "
        >
          Favoritos de nuestros
        </h2>
        <div class="relative">
          <p
            class="
              text-textColor text-2xl
              sm:text-4xl
              font-junegull
              relative
              z-10
            "
          >
            Hallyu Fans
          </p>
          <span
            class="
              z-0
              w-full
              h-6
              lg:h-8
              bg-yellow
              absolute
              rounded-lg
              bottom-0
              right-0
            "
          ></span>
        </div>
      </div>
    </div>

    <!-- RENDERIZADO DE TARJETAS DE LOS COMENTARIOS DE LOS USUARIOS -->
    <div
      class="
        flex
        flex-wrap
        justify-start
        lg:justify-center
        mt-4
        py-12
        pl-1
        sm:pl-6
        items-center
        overflow-x-scroll
        lg:overflow-x-hidden
        favourites-container
      "
    >
      <div
        v-for="(comment, i) in comments"
        :key="i"
        class="flex justify-center items-center md:mr-6 m-4"
      >
        <recommendation-card :comment="comment" :order="i" />
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
    RecommendationCard,
  },
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.parenthesis-two {
  transform: rotate(180deg);
}
.favourites-container {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
.favourites-container::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
</style>
