<template>
  <div class="w-full mt-10 px-4">
    <div class="w-full flex justify-center items-center h-14">
      <div class="parenthesis w-11 h-11 relative">
        <first-type />
      </div>
      <h2 class="text-4xl font-junegull text-textColor">Hallyu on Clock</h2>
      <div class="w-5">Image</div>
    </div>
  </div>
</template>

<script>
import FirstType from "~/components/parenthesis/FirstType.vue";
export default {
  components: {
    FirstType,
  },
};
</script>

<style scoped>
.parenthesis {
  transform: rotate(50.95deg);
}
</style>
