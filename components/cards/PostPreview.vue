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
            md:w-3/5
            py-8
          "
        >
          <div class="w-full flex justify-center items-center py-4 md:w-1/2">
            <p class="text-xl text-textColor font-xl font-junegull">
              {{ title }}
            </p>
          </div>
          <div class="w-full flex justify-center items-center py-4 md:w-1/2">
            <p class="text-xl text-textColor font-xl">
              {{ abstract }}
            </p>
          </div>
        </div>
        <!-- IMAGEN MINIATURA DEL POST -->
        <div class="flex justify-center items-center w-full md:w-2/5">
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
                w-1/2
              "
            >
              <img :src="thumbnail" :alt="title" class="rounded-3xl" />
            </figure>
            <div
              class="
                absolute
                bottom-3
                left-0
                bg-secondary
                shadow
                z-0
                rounded-2xl
                w-56
                h-96
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
                w-56
                h-56
              "
            />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data: () => ({
    bgImage: require("~/static/images/backgrounds/Union.svg"),
    title: "Este es un titulo increible",
    abstract:
      "Esta es una descripcion o un resumen increible de lo que se pude hacer dentro de la seccion del post",
    thumbnail: require("~/static/images/idols/Han.jpg"),
    author: "Luis Reyes",
    authorImage: require("~/static/images/idols/Han.jpg"),
  }),
};
</script>

<style scoped>
.post-background {
  background-position: left;
  background-repeat: repeat-x;
}
</style>
