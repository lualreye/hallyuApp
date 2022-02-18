<template>
  <div class="w-full bg-textColor py-3">
    <div class="max-w-screen-2xl mx-auto">
      <div class="flex flex-wrap justify-start items-center px-2 w-ful w-full">
        <!-- FIRMA DE LA EMPRESA -->
        <div class="flex justify-center items-center mx-auto md:mx-0">
          <a href="https://maverick.ec" target="_blank">
            <figure class="flex justify-center items-center w-16">
              <img
                src="~/static/images/logo/isotiposinfondo.png"
                alt="marerick"
                class="w-full"
              />
            </figure>
          </a>
          <div class="flex flex-col justify-start items-start">
            <a
              href="https://maverick.ec"
              target="_blank"
              class="text-xs font-light text-white underline"
              >With Love. Maverick</a
            >
            <p class="text-xs font-light text-white">2021</p>
          </div>
        </div>
        <!-- SEPARADOR -->
        <div class="h-px w-full my-2 md:h-8 md:w-px bg-white md:mx-2" />
        <!-- DERECHOS RESERVADOS -->
        <div class="flex justify-center items-center w-full md:w-auto">
          <div class="w-3 h-3 flex justify-center items-center mr-1">
            <h-icon name="copyright" class="text-white" />
          </div>
          <p class="text-sm text-white">
            Todos los derechos reservados de Hallyu Store
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
