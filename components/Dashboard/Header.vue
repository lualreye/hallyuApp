<template>
  <header class="h-16 px-1 sm:px-4 w-11/12 sm:w-full flex justify-center items-center mb-1">
    <div
      class="w-full flex justify-center items-center border-b border-primary py-1 sm:py-4"
    >
      <p
        class="w-full flex justify-between items-center font-medium text-lg text-hBlack font-open"
      >
        Resumen de Ventas
      </p>
      <div class="w-40 flex justify-between items-center">
        <figure class="w-5 h-5 flex justify-center items-center rounded-full">
          <img
            src="@/static/images/idols/han.jpg"
            alt="userName"
            class="object-cover rounded-full"
          />
        </figure>
        <p class="text-sm text-textColor font-light">Brooklin Simon</p>
        <button class="h-5 w-5 flex justify-center items-center">
          <GlobalHIcon name="arrowDown" class="text-textColor" />
        </button>
      </div>
    </div>
  </header>
</template>
