<template>
  <div class="mx-auto w-full max-w-screen-xl flex flex-col">
    <figure class="w-full lg:w-2/5 mx-auto flex justify-center items-center">
      <img src="../static/images/map.png" alt="hallyu Map" />
    </figure>
    <h3
      class="
        text-textColor
        font-junegull
        text-lg
        sm:text-xl
        lg:text-2xl
        w-ful
        text-center
        mt-4
      "
    >
      ¡Ayúdanos a mejorar, Déjanos tu mensaje!
    </h3>
    <div
      class="
        w-full
        max-w-6xl
        mx-auto
        flex
        justify-center
        items-center
        flex-wrap
        mb-4
        p-3
      "
    >
      <div
        class="
          w-full
          max-w-md
          p-8
          pb-4
          flex flex-col
          justify-center
          items-center
          bg-white
          rounded-xl
          shadow-md
        "
      >
        <label class="mb-1 w-full text-primary text-base"> Nombre </label>
        <input
          type="text"
          class="w-full px-2 py-1 border border-primary rounded-md"
        />
        <label class="mb-1 mt-2 w-full text-primary text-base"> Email </label>
        <input
          type="email"
          class="w-full px-2 py-1 border border-primary rounded-md"
        />
        <label class="mb-1 mt-2 w-full text-primary text-base"> Mensaje </label>
        <textarea class="w-full border border-primary rounded-md"></textarea>
        <button
          class="
            bg-primary
            text-center
            my-3
            rounded-lg
            text-white
            px-2
            py-1
            mx-auto
            w-1/2
          "
        >
          Enviar
        </button>
      </div>
      <div
        class="
          w-full
          max-w-md
          p-4
          flex flex-col
          justify-center
          items-center
          bg-aquamarine
          rounded-xl
          shadow-md
        "
      >
        <p class="text-textColor font-junegull font-semibold">
          Nuestras Sucursales
        </p>
        <div class="w-3/4 mb-2">
          <p class="text-base text-hBlack font-junegull">Quito</p>
          <p class="w-full text-sm text-hBlack font-open">
            Edif. Plaza Colon 2, 9 de Octubre y Colon, Quito
          </p>
          <div class="flex w-full flex-start items-center">
            <div class="w-3 h-3 text-hBlack">
              <HIcon name="phone" class="text-hBlack" />
            </div>
            <p class="text-sm text-hBlack font-open">+593 998507979</p>
          </div>
        </div>
        <div class="w-3/4 mb-2">
          <p class="text-base text-hBlack font-junegull">Guayaquil</p>
          <p class="w-full text-sm text-hBlack font-open">
            La Garzota Mz. 151 S. 10 Av. Agustin Freire
          </p>
          <div class="flex w-full flex-start items-center">
            <div class="w-3 h-3 text-hBlack">
              <HIcon name="phone" class="text-hBlack" />
            </div>
            <p class="text-sm text-hBlack font-open">+593 969358878</p>
          </div>
        </div>
        <div class="w-full flex justify-center items-center">
          <a
            href="https://vm.tiktok.com/ZMN5otw6c/"
            target="_blank"
            class="w-8 h-8"
          >
            <img :src="tikImage" class="text-textColor w-full h-8" />
          </a>
          <a
            href="https://www.instagram.com/hallyustore/"
            target="_blank"
            class="w-8 h-8"
          >
            <HIcon name="instagram" class="text-textColor" />
          </a>
          <a
            href="https://www.facebook.com/hallyustoreecuador"
            target="_blank"
            class="w-8 h-8 mr-2"
          >
            <HIcon name="facebook" class="text-textColor" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HIcon from "../components/Global/HIcon.vue";

export default {
  components: { HIcon },
  data: () => ({
    tikImage: require("../static/images/Tiktok.svg"),
  }),
};
</script>
