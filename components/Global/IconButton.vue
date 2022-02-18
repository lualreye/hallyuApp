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
    :class="buttonClasses"
    @click="$emit('click', $event)"
  >
    <GlobalHIcon :name="iconName" class="text-white p-1" />
  </button>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true
    },
    classes: {
      type: String,
      required: null
    }
  },
  computed: {
    buttonClasses() {
      return this.classes
    },
    getIcon() {
      return this.iconName
    }
  }
}
</script>
