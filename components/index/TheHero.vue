<template>
  <div class="w-full mx-auto flex justify-around items-center flex-wrap px-4 py-4">
    <!-- LEFT CONTAINER, AQUI CONTAMOS CON EL COPYRIGHT DEL HERO -->
    <div class="w-full lg:w-1/2">
      <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-junegull text-secondary text-center lg:text-left">Hallyu Store</h1>
      <div class="w-full lg:w-72 xl:w-96 mt-5 flex flex-col items-center lg:items-start">
        <div class="flex justify-center items-center">
          <p class="text-textColor text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Tu puerta a</p>
          <div class="relative ml-1 lg:ml-3 xl:ml-4">
            <p class="text-textColor text-2xl md:text-3xl lg:text-4xl xl:text-5xl relative z-10">Corea</p>
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
          <p class="text-textColor text-2xl md:text-3xl lg:text-4xl xl:text-5xl">desde</p>
          <div class="relative ml-1 lg:ml-3 xl:ml-4">
            <p class="text-textColor text-2xl md:text-3xl lg:text-4xl xl:text-5xl relative z-10">Ecuador</p>
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
