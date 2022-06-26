<template>
  <article
    class="w-full lg:w-3/4 flex justify-center items-center relative my-8"
  >
    <div
      class="post-background absolute top-0 bottom-0 left-0 h-80 w-full"
      :style="{ backgroundImage: 'url(' + bgImage + ')' }"
    />
    <div class="w-full flex justify-center sm:justify-between items-center flex-wrap">
      <!-- CONTENIDO DEL POST -->
      <div
        class="flex justify-between items-center flex-wrap w-full lg:w-3/5 py-8 px-2"
      >
        <div
          class="w-full flex flex-col justify-between items-start py-4 lg:w-1/2 relative"
        >
          <p
            class="text-lg sm:text-xl text-textColor font-bold font-open w-full text-center lg:text-left mb-4"
          >
            {{ title }}
          </p>
          <div class="flex justify-start items-center w-full">
            <!-- DATOS DEL AUTOR DEL POST -->
            <div class="flex justify-end lg:justify-start items-center mr-3 w-3/5">
              <figure
                class="w-7 h-7 rounded-full flex justify-center items-center mr-2"
              >
                <img
                  :src="authorImage"
                  :alt="authorName"
                  class="rounded-full"
                />
              </figure>
              <p class="text-textColor font-open font-medium">
                {{ authorName }}
              </p>
            </div>
            <!-- DATOS DE LA FECHA DE PUBLICACION -->
            <div class="flex justify-start items-center mr-3 w-3/5">
              <div class="w-5 h-5 flex justify-center items-center mr-2">
                <GlobalHIcon name="calendar" class="text-textColor" />
              </div>
              <p class="text-textColor font-open font-medium">
                {{ date }}
              </p>
            </div>
          </div>
        </div>
        <div
          class="w-full flex flex-col justify-start items-center py-4 lg:w-1/2 relative"
        >
          <p class="text-xl text-center lg:text-center text-textColor font-xl w-full">
            {{ abstract }}
          </p>
          <div class="flex justify-start items-center w-full">
            <div class="flex flex-col lg:flex-row justify-start items-center w-full mt-2">
              <p class="text-sm font-light text-center lg:text-left text-textColor mr-3">
                Leer más del post
              </p>
              <GlobalIconButton
                iconName="right"
                classes="bg-secondary"
                class="text-yellow-600 mx-auto lg:mx-0"
                @click="redirectionToPostDetail"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- IMAGEN MINIATURA DEL POST -->
      <div class="flex justify-center items-center w-full lg:w-1/5">
        <div class="w-full relative flex justify-center items-center lg:block">
          <figure
            class="rounded-3xl right-8 relative my-auto z-20 flex justify-end sm:justify-center items-center w-full sm:w-64 md:w-3/4 lg:w-full"
          >
            <img
              :src="thumbnail"
              :alt="title"
              class="rounded-3xl w-3/4 sm:w-full max-w-xs"
            />
          </figure>
          <div
            class="absolute lg:-top-1/3 top-1/3 right-8 bg-secondary shadow z-0 rounded-2xl w-32 h-40 sm:h-52 md:w-44 md:h-72 xl:w-56 xl:h-96"
          />
          <div
            class="absolute top-0 lg:left-1/2 left-10 bg-primary shadow z-10 rounded-full w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56"
          />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    abstract: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    authorImage: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    bgImage: require("~/static/images/backgrounds/Union.svg"),
  }),
  methods: {
    redirectionToPostDetail() {
      this.$router.push(`blog/${this.id}`);
    },
  },
};
</script>

<style scoped>
.post-background {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
