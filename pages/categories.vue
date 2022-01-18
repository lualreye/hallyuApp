<template>
  <div>
    <div class="w-full">
      <nav class="w-full max-w-xl mx-auto px-2 my-4">
        <ul class="w-full flex justify-around items-center px-2 overflow-auto py-4">
          <li v-for="(category, i) in categories" :key="i" class="flex-shrink-0 text-textColor font-junegull mx-2">{{ category.name }}</li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    categories: [
      { name: 'moda' },
      { name: 'k-pop' },
      { name: 'snack' },
      { name: 'accesorios' },
      { name: 'peluches' },
    ]
  })
}
</script>