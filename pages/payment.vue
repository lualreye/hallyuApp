<template>
  <div>
    <div class="mx-auto w-full max-w-screen-2xl">
      <div class="py-6">
        <figure
          class="
            w-28
            ml-10
            sm:w-36
            md:w-40
            lg:w-52
            flex
            justify-center
            items-center
            mb-12
          "
        >
          <img src="~/static/images/logo/logotipo.png" alt="hallyu-store" />
        </figure>
      </div>
    </div>
    <div class="w-full max-w-screen-2xl mx-auto">
      <div class="w-full lg:w-2/5 flex justify-center items-center my-6 mx-10">
        <div class="w-full flex flex-col">
          <p class="font-junegull text-textColor text-2xl mb-4">
            Información de envio
          </p>
          <label for="" class="text-base text-textColor mt-3">Nombre</label>
          <input
            type="text"
            class="
              mt-2
              flex
              justify-center
              items-center
              w-full
              px-3
              py-2
              bg-aquamarine
              rounded-lg
              border border-primary
              placeholder-teprimary
              text-xs
              focus:bg-white
              outline-none
              focus:outline-none
              text-hBlack
              focus:text-hBlack
            "
            placeholder="Nombre"
          />
          <label for="" class="text-base text-textColor mt-3">Apellido</label>
          <input
            type="text"
            class="
              mt-2
              flex
              justify-center
              items-center
              w-full
              px-3
              py-2
              bg-aquamarine
              rounded-lg
              border border-primary
              placeholder-teprimary
              text-xs
              focus:bg-white
              outline-none
              focus:outline-none
              text-hBlack
              focus:text-hBlack
            "
            placeholder="Apellido"
          />
          <label for="" class="text-base text-textColor mt-3">Cédula</label>
          <input
            type="text"
            class="
              mt-2
              flex
              justify-center
              items-center
              w-full
              px-3
              py-2
              bg-aquamarine
              rounded-lg
              border border-primary
              placeholder-teprimary
              text-xs
              focus:bg-white
              outline-none
              focus:outline-none
              text-hBlack
              focus:text-hBlack
            "
            placeholder="Cédula"
          />
          <label for="" class="text-base text-textColor mt-3">Teléfono</label>
          <input
            type="text"
            class="
              mt-2
              flex
              justify-center
              items-center
              w-full
              px-3
              py-2
              bg-aquamarine
              rounded-lg
              border border-primary
              placeholder-teprimary
              text-xs
              focus:bg-white
              outline-none
              focus:outline-none
              text-hBlack
              focus:text-hBlack
            "
            placeholder="Teléfono"
          />
          <label for="" class="text-base text-textColor mt-3">Dirección</label>
          <input
            type="text"
            class="
              mt-2
              flex
              justify-center
              items-center
              w-full
              px-3
              py-2
              bg-aquamarine
              rounded-lg
              border border-primary
              placeholder-teprimary
              text-xs
              focus:bg-white
              outline-none
              focus:outline-none
              text-hBlack
              focus:text-hBlack
            "
            placeholder="Dirección"
          />
          <label for="" class="text-base text-textColor mt-3">Referencia</label>
          <input
            type="text"
            class="
              mt-2
              flex
              justify-center
              items-center
              w-full
              px-3
              py-2
              bg-aquamarine
              rounded-lg
              border border-primary
              placeholder-teprimary
              text-xs
              focus:bg-white
              outline-none
              focus:outline-none
              text-hBlack
              focus:text-hBlack
            "
            placeholder="Referencia"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "pay",
};
</script>