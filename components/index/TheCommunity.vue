<template>
  <div class="w-full mt-16 px-4 py-6">
    <!-- TITULO DE LOS PRODUCTOS QUE ESTAN CON OFERTA -->
    <div class="w-full flex justify-center lg:justify-start items-center h-14">
      <div class="w-11 h-11 relative">
        <ninth-type />
      </div>
      <h2 class="text-xl sm:text-4xl font-junegull text-textColor">
        Hallyu Fans
      </h2>
      <div class="ml-4 parenthesis-two w-11 h-11 relative mt-2">
        <ninth-type />
      </div>
    </div>
    <!-- RENDERIZADO DE TARJETAS DE PRODUCTOS LIMITADOS -->
    <div
      class="
        flex
        justify-center
        mt-8
        py-12
        items-center
        flex-wrap
        w-full
        mx-auto
        relative
      "
    >
      <div
        class="
          w-auto
          absolute
          -top-4
          right-28
          md:right-48
          lg:right-1/3
          px-4
          py-3
          h-16
          flex
          justify-center
          items-center
          rounded-full
          bg-lightPink
          shadow-lg
        "
      >
        <p
          v-if="getCommunityGreeting.length"
          class="font-junegull text-textColor"
        >
          {{ getCommunityGreeting }}
        </p>
      </div>
      <div
        v-for="(profile, i) in instagramProfiles"
        :key="i"
        class="flex justify-center items-center p-6"
      >
        <instagram-profile-card
          :instagramUserName="profile.name"
          :instagramUserImage="profile.image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NinthType from "~/components/parenthesis/NinthType.vue";
import InstagramProfileCard from "~/components/cards/InstagramProfileCard.vue";
export default {
  components: {
    NinthType,
    InstagramProfileCard,
  },
  props: {
    instagramProfiles: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapGetters("general", ["getCommunityGreeting"]),
  },
};
</script>

<style scoped>
.parenthesis-two {
  transform: rotate(200.95deg);
}
.bubble-1 {
  width: 4rem;
  height: 3rem;
}
</style>
