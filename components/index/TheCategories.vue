<template>
  <div class="w-full mt-16 px-4 py-6">
    <!-- TITULO DE LOS PRODUCTOS QUE ESTAN CON OFERTA -->
    <div
      class="w-full flex flex-col justify-center lg:justify-start items-start"
    >
      <div
        class="w-full flex justify-center lg:justify-start items-center h-14"
      >
        <div class="parenthesis w-11 h-11 relative">
          <sixth-type />
        </div>
        <h2
          class="
            text-xl
            sm:text-4xl
            text-center
            sm:text-left
            font-junegull
            text-textColor
          "
        >
          Categorías Hallyu
        </h2>
        <div class="parenthesis-two w-11 h-11 relative">
          <seventh-type />
        </div>
      </div>
    </div>
    <!-- RENDERIZADO DE TARJETAS DE LOS COMENTARIOS DE LOS USUARIOS -->
  </div>
</template>

<script>
import SixthType from "~/components/parenthesis/SixthType.vue"
import SeventhType from "~/components/parenthesis/SeventhType.vue"
export default {
  components: {
    SixthType,
    SeventhType
  }
}
</script>
