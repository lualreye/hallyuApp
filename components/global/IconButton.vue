<template>
  <button
    class="
      w-10
      h-10
      rounded-full
      bg-primary
      flex
      justify-center
      items-center
      shadow-lg
    "
    :style="buttonColor"
    @click="$emit('click', $event)"
  >
    <h-icon :name="iconName" class="text-white p-1" />
  </button>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: null
    }
  },
  computed: {
    buttonColor() {
      return this.color
    },
    getIcon() {
      return this.iconName
    }
  }
}
</script>
