<template>
  <div
    v-if="Object.keys(getClub).length"
    class="w-full relative py-16"
    :style="{ backgroundImage: 'url(' + bgImage + ')' }"
  >
    <div class="absolute w-full -top-6 left-0">
      <img :src="paper" alt="" class="w-full h-11" />
    </div>
    <div class="absolute w-full -bottom-6 left-0 rotate-180">
      <img :src="paper" alt="" class="w-full h-11" />
    </div>
    <div class="mx-auto max-w-screen-2xl relative">
      <div class="w-full flex flex-wrap justify-center items-center">
        <!-- RUEDA -->
        <div
          class="w-full md:w-1/3 flex flex-col justify-center items-center"
        ></div>
        <!-- VIDEO -->
        <div class="w-full md:w-1/3 flex flex-col justify-center items-center">
          <video
            preload="auto"
            controls
            loop
            class="w-1/2 mx-auto border border-white rounded-lg"
          >
            <source :src="getClub.videos[0].image" />
          </video>
        </div>
        <!-- COMENTARIOS -->
        <div
          class="w-full md:w-1/3 flex flex-col justify-center items-center"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import EightType from "~/components/parenthesis/EightType.vue";
import PostPreview from "~/components/cards/PostPreview";
export default {
  components: {
    EightType,
    PostPreview,
  },
  data: () => ({
    bgImage: require("../../static/images/backgrounds/fondo6.png"),
    paper: require("../../static/images/papel-rasgado1.png"),
  }),
  computed: {
    ...mapGetters("club", ["getClub"]),
  },
};
</script>

<style scoped>
.parenthesis-two {
  transform: scaleX(-1);
}
</style>
