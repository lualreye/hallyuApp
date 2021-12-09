<template>
  <article
    class="w-full py-4 post-background"
    :style="{ backgroundImage: 'url(' + bgImage + ')' }"
  >
    <div class="w-full">
      <div class="flex justify-between items-center flex-wrap">
        <!-- CONTENIDO DEL POST -->
        <div
          class="
            flex
            justify-between
            items-center
            flex-wrap
            w-full
            lg:w-3/5
            py-8
            px-2
          "
        >
          <div class="w-full flex flex-col justify-between items-start py-4 lg:w-1/2">
            <p class="text-lg sm:text-xl text-textColor font-xl font-junegull w-full mb-4">
              {{ title }}
            </p>
            <div class="flex justify-start items-center w-full">
                <!-- DATOS DEL AUTOR DEL POST -->
              <div class="flex justify-start items-center mr-3 w-2/5">
                <figure class="w-7 h-7 rounded-full flex justify-center items-center mr-2">
                  <img :src="authorImage" :alt="authorName" class="rounded-full" />
                </figure>
                <p class="text-textColor font-open font-medium">
                  {{ authorName }}
                </p>
              </div>
              <!-- DATOS DE LA FECHA DE PUBLICACION -->
              <div class="flex justify-start items-center mr-3 w-2/5">
                <div class="w-5 h-5 flex justify-center items-center mr-2">
                  <h-icon name="calendar" class="text-textColor" />
                </div>
                <p class="text-textColor font-open font-medium">
                  {{ date }}
                </p>
              </div>
            </div>
          </div>
          <div class="w-full flex justify-center items-center py-4 lg:w-1/2">
            <p class="text-xl text-textColor font-xl">
              {{ abstract }}
            </p>
          </div>
        </div>
        <!-- IMAGEN MINIATURA DEL POST -->
        <div class="flex justify-center items-center w-full lg:w-2/5">
          <div class="w-full relative">
            <figure
              class="
                rounded-3xl
                relative
                mx-auto
                my-auto
                z-20
                flex
                justify-center
                items-center
                w-3/4
                sm:w-64
                md:w-1/2
              "
            >
              <img :src="thumbnail" :alt="title" class="rounded-3xl" />
            </figure>
            <div
              class="
                absolute
                bottom-1/3
                right-4
                sm:right-2/3
                md:right-32
                lg:bottom-3 lg:left-1/3
                bg-secondary
                shadow
                z-0
                rounded-2xl
                w-32
                h-40
                sm:h-52
                md:w-44 md:h-72
                xl:w-56 xl:h-96
              "
            />
            <div
              class="
                absolute
                bottom-1/3
                right-0
                bg-primary
                shadow
                z-10
                rounded-full
                w-16
                h-16
                sm:w-24 sm:h-24
                md:w-40 md:h-40
                lg:w-48 lg:h-48
                xl:w-56 xl:h-56
              "
            />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import HIcon from "../global/HIcon.vue";
export default {
  components: { HIcon },
  props: {
    title: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    abstract: {
      type: String,
      required: true
    },
    authorName: {
      type: String,
      required: true
    },
    authorImage: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
  },
  data: () => ({
    bgImage: require("~/static/images/backgrounds/Union.svg"),
  }),
};
</script>

<style scoped>
.post-background {
  background-position: center;
  background-repeat: repeat-x;
}
</style>
