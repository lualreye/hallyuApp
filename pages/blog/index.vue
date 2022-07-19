<template>
  <div class="w-full py-6">
    <div
      class="
        w-full
        flex
        justify-center
        lg:justify-start
        items-center
        h-14
        mb-6
        px-5
      "
    >
      <h2
        class="
          px-4
          text-xl
          sm:text-4xl
          text-center
          sm:text-left
          font-junegull
          text-textColor
        "
      >
        Hallyu Blog
      </h2>
      <div class="parenthesis-two w-11 h-11 relative">
        <eight-type />
      </div>
    </div>
    <div class="w-full max-w-3xl flex justify-center items-center">
      <div class="flex justify-evenly flex-wrap">
        <div
          v-for="(post, i) in getPosts"
          :key="i"
          class="flex justify-center items-center w-full mx-auto"
        >
          <post-preview :post="post" :idx="i + 1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import EightType from "~/components/parenthesis/EightType.vue";
import PostPreview from "~/components/cards/PostPreview";

export default {
  components: {
    EightType,
    PostPreview,
  },
  computed: {
    ...mapGetters("blog", ["getPosts"]),
  },
  mounted() {
    if (!this.getPosts.length) {
      this.fetchPosts();
    }
  },
  methods: {
    ...mapActions("blog", ["fetchPosts"]),
  },
};
</script>