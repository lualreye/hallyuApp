<template>
  <div class="w-full mt-16 px-4 py-6 relative">
    <div
      class="w-44 h-36 bg-lightPink rounded-full absolute top-0 right-0 z-0"
    />
    <div
      class="
        w-44
        h-36
        bg-lightPink
        rounded-full
        absolute
        bottom-0
        left-0
        rotated
        z-0
      "
    />
    <!-- TITULO DE LOS PRODUCTOS QUE ESTAN CON OFERTA -->
    <div
      class="
        w-full
        flex flex-col
        justify-center
        lg:justify-start
        items-start
        z-10
        relative
      "
    >
      <div
        class="w-full flex justify-center lg:justify-start items-center h-14"
      >
        <div class="parenthesis w-11 h-11 relative">
          <sixth-type />
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
          Categorías Hallyu
        </h2>
        <div class="parenthesis-two w-11 h-11 relative">
          <seventh-type />
        </div>
      </div>
    </div>
    <!-- RENDERIZADO DE TARJETAS DE LAS CATEOGORIAS -->
    <div class="w-full flex flex-wrap justify-center items-center mt-16">
      <div
        class="flex justify-center items-center m-4 lg:m-0"
        v-for="(category, i) in categories"
        :key="i"
      >
        <category-card
          :order="i"
          :categoryName="category.name"
          :image="category.image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SixthType from "~/components/parenthesis/SixthType.vue";
import SeventhType from "~/components/parenthesis/SeventhType.vue";
import CategoryCard from "~/components/cards/CategoryCard.vue";
export default {
  components: {
    SixthType,
    SeventhType,
    CategoryCard,
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.rotated {
  transform: rotate(46deg);
}
</style>
