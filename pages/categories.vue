<template>
  <div>
    <div class="w-full">
      <nav class="w-full px-2">
        <ul class="w-full flex justify-around items-center">
          <li class="text-lg font-junegull">{{ categoria }}</li>
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