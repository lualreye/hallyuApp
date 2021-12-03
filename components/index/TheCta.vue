<template>
  <div class="w-full mt-16 px-4 py-6 relative">
    <!-- TRABAJAMOS EN BACKGROUND DE LA SECCION -->
    <div class="w-full absolute z-0">
      <cta-doodle />
    </div>
    <!-- SECCION DE CTA -->
    <div class="w-full flex justify-center items-center relative z-10 py-4">
      <div class="bg-white rounded-lg w-72 lg:w-3/4">
        Este es el cta
      </div>
    </div>
  </div>
</template>

<script>
import CtaDoodle from "~/components/svgs/CtaDoodle.vue"
export default {
  components: {
    CtaDoodle
  }
}
</script>