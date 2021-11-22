<template>
  <div class="w-full mt-16 px-4 py-6">
    <!-- TITULO DE LOS PRODUCTOS QUE ESTAN CON OFERTA -->
    <div class="w-full flex justify-center lg:justify-start items-center h-14">
      <div class="parenthesis w-11 h-11 relative">
        <second-type />
      </div>
      <h2 class="text-xl sm:text-4xl font-junegull text-textColor">
        Favoritos de la comunidad
      </h2>
      <div class="parenthesis-two w-11 h-11 relative">
        <second-type />
      </div>
    </div>
    <!-- RENDERIZADO DE TARJETAS DE LOS COMENTARIOS DE LOS USUARIOS -->
  </div>
</template>


<script>
import SecondType from "~/components/parenthesis/SecondType.vue"
export default {
  components: {
    SecondType
  }
}
</script>