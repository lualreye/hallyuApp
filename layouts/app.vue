<template>
  <div class="w-full flex justify-center 2xl:justify-start items-start">
    <AppGlobalMenu />
    <div class="flex-grow shrink w-8/12 flex flex-col relative">
      <AppGlobalHeader />
      <Nuxt class="p-1 md:px-4 md:py-1 overflow-auto max-w-screen-2xl" />
    </div>
  </div>
</template>