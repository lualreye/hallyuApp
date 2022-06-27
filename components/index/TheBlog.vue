<template>
  <div class="w-full mt-16 px-4 py-6 mb-10">
    <!-- TITULO DE LOS PRODUCTOS QUE ESTAN CON OFERTA -->
    <div
      class="w-full flex flex-col justify-center lg:justify-start items-start"
    >
      <div
        class="w-full flex justify-center lg:justify-start items-center h-14"
      >
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
          Hallyu Blog
        </h2>
        <div class="parenthesis-two w-11 h-11 relative">
          <eight-type />
        </div>
      </div>
      <div
        class="mx-auto w-full flex justify-center lg:justify-start items-center"
      >
        <svg
          width="235"
          height="25"
          viewBox="0 0 235 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M77.7449 12.5699C72.6482 14.1289 67.5346 15.6519 62.5225 17.2396C55.0722 19.6031 47.4186 21.7368 37.8686 22.2684C17.4986 23.4035 -1.17798 16.0614 0.0581041 7.37586C0.396757 5.03385 3.20755 3.3815 7.86403 2.77804C12.5544 2.16739 17.7188 2.94328 20.682 4.89735C22.4938 6.09709 23.6791 7.46206 25.2877 8.71928C28.5557 11.284 33.1783 11.9377 39.0878 10.4434C43.4226 9.35145 47.2324 7.88593 51.4656 6.70055C58.3741 4.77522 65.0794 2.60565 72.5298 1.14728C85.6864 -1.4318 96.6926 0.414467 103.33 5.91028C105.43 7.64164 107.072 9.47361 109.223 11.5498C110.645 11.0182 111.83 10.5799 113.016 10.1417C118.451 8.12298 123.514 5.88874 129.373 4.12865C142.783 0.112751 156.042 1.35562 164.931 7.20345C169.384 10.1417 171.416 10.2782 177.698 7.90747C180.916 6.69337 183.777 5.30683 187.028 4.12145C195.562 1.01794 205.502 1.01076 213.646 4.30825C224.195 8.58995 231.629 13.7194 234.677 19.8546C235.693 21.8805 234.389 22.4193 229.699 21.9164C219.353 20.8101 211.208 18.2094 203.842 15.0484C199.067 12.9938 199.152 13.159 193.446 14.6389C187.181 16.2625 180.814 17.9221 174.024 19.0356C164.576 20.5802 155.144 19.8761 146.695 17.527C143.833 16.7295 141.987 16.8229 139.431 17.6635C133.961 19.4523 128.424 21.2339 122.583 22.8C108.833 26.4926 97.2683 25.5444 87.8199 19.8977C84.1624 17.685 81.3516 15.2137 77.7449 12.5699Z"
            fill="#87C7C9"
          />
        </svg>
      </div>
    </div>
    <!-- SECCION DE RENDERIZADO DE LAS TARJETAS -->
    <div
      class="
        flex
        justify-center
        mt-4
        py-6
        lg:mt-8
        lg:py-12
        items-center
        flex-wrap
      "
    >
      <div
        v-for="(post, i) in posts"
        :key="i"
        class="flex justify-center items-center w-full"
      >
        <post-preview
          :title="post.title"
          :abstract="post.description"
          :authorName="post.userName"
          :authorImage="post.userImage"
          :thumbnail="post.image"
          :id="post.id"
          :date="post.date"
        />
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
};
</script>

<style scoped>
.parenthesis-two {
  transform: scaleX(-1);
}
</style>
