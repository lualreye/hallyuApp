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
      my-2
      super-screen
    "
  >
    <!-- LEFT CONTAINER, AQUI CONTAMOS CON EL COPYRIGHT DEL HERO -->
    <div class="w-full lg:w-1/2 lg:pl-5">
      <h1
        class="
          text-4xl
          md:text-5xl
          lg:text-6xl
          xl:text-7xl
          font-junegull
          text-secondary text-center
          lg:text-left
        "
      >
        Hallyu Store
      </h1>
      <div
        class="w-full lg:w-96 mt-5 flex flex-col items-center lg:items-start"
      >
        <div class="flex justify-center items-center">
          <p
            class="text-textColor text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          >
            Tu puerta a
          </p>
          <div class="relative ml-1 lg:ml-3 xl:ml-4">
            <p
              class="
                text-textColor text-2xl
                md:text-3xl
                lg:text-4xl
                xl:text-5xl
                relative
                z-10
              "
            >
              Corea
            </p>
            <span
              class="
                z-0
                w-14
                lg:w-20
                xl:w-28
                h-3
                lg:h-4
                xl:h-5
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
            class="text-textColor text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          >
            desde
          </p>
          <div class="relative ml-1 lg:ml-3 xl:ml-4">
            <p
              class="
                text-textColor text-2xl
                md:text-3xl
                lg:text-4xl
                xl:text-5xl
                relative
                z-10
              "
            >
              Ecuador
            </p>
            <span
              class="
                z-0
                w-16
                md:w-24
                lg:w-28
                xl:w-40
                h-3
                lg:h-4
                xl:h-5
                bg-yellow
                absolute
                rounded-lg
                bottom-0
                right-0
              "
            ></span>
          </div>
        </div>
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
          class="
            py-3
            px-4
            z-20
            rounded-full
            bg-lightPink
            flex
            justify-center
            items-center
            absolute
            -left-3
            top-3
          "
        >
          <p class="text-xl text-primary font-bold">Hola :)</p>
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
          "
        />
        <div class="imageBg" />
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
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
  top: 2.5%;
  left: 2.5%;
  background: #ffe0e8;
  border-radius: 100% 100% 8px 8px;
}
@media screen and (min-width: 1025px) {
  .super-screen {
    height: 70vh;
  }
}
</style>
