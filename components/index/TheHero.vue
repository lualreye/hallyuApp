<template>
  <div class="w-full mx-auto flex justify-around items-center flex-wrap px-4 py-4">
    <!-- LEFT CONTAINER, AQUI CONTAMOS CON EL COPYRIGHT DEL HERO -->
    <div class="w-full lg:w-1/2">
      <h1 class="text-5xl font-junegull text-secondary text-center lg:text-left">Hallyu Store</h1>
      <div class="w-full lg:w-48 mt-5 flex flex-col lg:items-start">
        <div class="flex justify-center items-center">
          <p class="text-textColor text-2xl">Tu puerta a</p>
          <div class="relative ml-1">
            <p class="text-textColor text-2xl relative z-10">Corea</p>
            <span
              class="
                z-0
                w-10
                h-3
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
          <p class="text-textColor text-2xl">desde</p>
          <div class="relative ml-1">
            <p class="text-textColor text-2xl relative z-10">Ecuador</p>
            <span
              class="
                z-0
                w-14
                h-3
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
      <div class="w-full relative">
        <div class="w-40 py-4 absolute top-4 left-0 rounded-full bg-lightPink flex justify-center items-center">
          <p class="text-xl text-primary">
            Hola :)
          </p>
        </div>
        <figure class="w-full flex justify-center items-center lg:w-3/4 mx-auto rounded-b-lg">
          <img src="~/static/images/idols/han.jpg" alt="hero-image" class="w-full rounded-t-full rounded-b-lg">
        </figure>
      </div>
    </div>
  </div>
</template>
