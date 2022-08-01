<template>
  <div class="w-full py-6">
    <div class="mx-auto max-w-screen-2xl">
      <!-- TITULO DE LOS PRODUCTOS QUE ESTAN CON OFERTA -->
      <div class="w-full flex justify-center items-center relative">
        <h2
          class="
            px-4
            w-full
            text-8xl
            blog-title
            text-center
            font-junegull
            text-primary
            absolute
            top-0
            sm:top-6
            lg:top-0
          "
        >
          Blog
        </h2>
      </div>
      <!-- SECCION DE RENDERIZADO DE LAS TARJETAS -->
      <div
        class="
          flex
          w-full
          justify-center
          mt-4
          py-6
          sm:mt-12
          md:mt-16
          lg:mt-12
          xl:mt-32
          lg:py-12
          items-center
          flex-wrap
        "
      >
        <div
          class="
            flex flex-wrap
            justify-center
            items-center
            w-full
            mx-auto
            mt-10
          "
        >
          <post-preview
            v-for="(post, i) in posts"
            :key="i"
            :post="post"
            :idx="i + 1"
            class="relative z-10"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EightType from "~/components/parenthesis/EightType.vue";
import PostPreview from "~/components/cards/PostPreview";
export default {
  components: {
    EightType,
    PostPreview,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    bgImage: require("../../static/images/backgrounds/fondo1.png"),
  }),
};
</script>

<style scoped>
.parenthesis-two {
  transform: scaleX(-1);
}
.blog-title {
  letter-spacing: 2rem;
}
@media screen and (max-width: 420px) {
  .blog-title {
    letter-spacing: 1rem;
  }
}
@media screen and (min-width: 768px) {
  .blog-title {
    font-size: 12rem;
  }
}
@media screen and (min-width: 1280px) {
  .blog-title {
    font-size: 20rem;
  }
}
</style>
