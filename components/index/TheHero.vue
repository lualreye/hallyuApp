<template>
  <div
    class="
      w-full
      mx-auto
      flex
      justify-around
      items-center
      flex-wrap
      px-4
      py-4
      my-8
      super-screen
    "
  >
    <!-- LEFT CONTAINER, AQUI CONTAMOS CON EL COPYRIGHT DEL HERO -->
    <div class="w-full lg:w-1/2 lg:pl-5">
      <div
        class="w-full lg:w-full mt-5 flex flex-col items-center lg:items-start"
      >
        <div class="flex justify-center items-center">
          <p
            class="
              text-textColor
              font-junegull
              text-2xl
              md:text-3xl
              lg:text-5xl
              xl:text-6xl
            "
          >
            Tu puerta a
          </p>
          <div class="relative ml-1 lg:ml-3 xl:ml-4">
            <p
              class="
                text-textColor text-2xl
                md:text-3xl
                lg:text-5xl
                xl:text-6xl
                font-junegull
                relative
                z-10
              "
            >
              Corea
            </p>
            <span
              class="
                z-0
                w-full
                h-3
                lg:h-8
                bg-yellow
                absolute
                rounded-lg
                bottom-0
                right-0
              "
            ></span>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <p
            class="
              text-textColor
              font-junegull
              text-2xl
              md:text-3xl
              lg:text-5xl
              xl:text-6xl
            "
          >
            desde
          </p>
          <div class="relative ml-1 lg:ml-3 xl:ml-4">
            <p
              class="
                text-textColor text-2xl
                md:text-3xl
                lg:text-5xl
                xl:text-6xl
                font-junegull
                relative
                z-10
              "
            >
              Ecuador
            </p>
            <span
              class="
                z-0
                w-full
                h-3
                lg:h-8
                bg-lightPink
                absolute
                rounded-lg
                bottom-0
                right-0
              "
            ></span>
          </div>
        </div>
      </div>
      <div class="w-full my-6">
        <p
          class="sm:text-xl text-primary text-center lg:text-left font-junegull"
        >
          K-POP | K-FOOD | K-FASHION
        </p>
      </div>
    </div>
    <!-- RIGHT CONTAINER, AQUI OBTENEMOS LA IMAGEN DE LA BASE DE DATOS -->
    <div class="w-full lg:w-1/2 mt-4 lg:mt-0">
      <figure
        class="
          w-full
          flex
          justify-center
          items-center
          lg:w-3/4
          mx-auto
          rounded-b-lg
          relative
          max-w-xs
          lg:max-w-md
        "
      >
        <div
          v-if="getGreetings.length"
          class="
            py-3
            px-4
            z-20
            rounded-full
            bg-primary
            flex
            justify-center
            items-center
            absolute
            -bottom-8
          "
        >
          <p class="text-xl text-white font-junegull font-bold">
            {{ getGreetings }}
          </p>
        </div>
        <img
          :src="image"
          alt="hero-image"
          class="
            w-full
            rounded-t-full rounded-b-lg
            relative
            z-10
            h-96
            object-cover object-center
            hero-image
          "
        />
        <div class="imageBg" />
      </figure>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    image: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters("general", ["getGreetings"]),
  },
};
</script>

<style scoped>
.imageBg {
  width: 100%;
  height: 100%;
  content: "";
  z-index: 0;
  position: absolute;
  top: 5px;
  left: 10px;
  background: #091212;
  border-radius: 50% 50% 8px 8px;
}
@media screen and (min-width: 1025px) {
  .super-screen {
    height: 70vh;
  }
  .hero-image {
    height: 500px;
  }
}
</style>
