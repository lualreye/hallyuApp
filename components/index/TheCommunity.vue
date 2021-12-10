<template>
  <div class="w-full mt-16 px-4 py-6">
    <!-- TITULO DE LOS PRODUCTOS QUE ESTAN CON OFERTA -->
    <div class="w-full flex justify-center lg:justify-start items-center h-14">
      <div class="w-11 h-11 relative">
        <ninth-type />
      </div>
      <h2 class="text-xl sm:text-4xl font-junegull text-textColor">
        Hallyu on Clock
      </h2>
      <div class="parenthesis-two w-11 h-11 relative">
        <ninth-type />
      </div>
    </div>
    <!-- RENDERIZADO DE TARJETAS DE PRODUCTOS LIMITADOS -->
    <div class="flex justify-start mt-8 py-12 pl-6 items-center overflow-x-scroll">
      <div
        v-for="(profile, i) in instagramProfiles"
        :key="i"
        class="flex justify-center items-center mr-6 w-64 h-64 p-6"
      >
        <instagram-profile-card
          
        />
      </div>
    </div>
  </div>
</template>

<script>
import NinthType from "~/components/parenthesis/NinthType.vue";
import InstagramProfileCard from "~/components/cards/InstagramProfileCard.vue";
export default {
  components: {
    NinthType,
    InstagramProfileCard,
  },
  props: {
    instragramProfiles: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.parenthesis-two {
  transform: rotate(200.95deg);
}
</style>
