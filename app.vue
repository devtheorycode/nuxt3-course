<script setup>
  // Helper for getting the proper category name
  const nuxtApp = useNuxtApp()
  nuxtApp.provide('getCategoryTitle', (categoryId) => {
    const categories = useCategories()
    const category = categories.value.find(category => category.id === categoryId)
    return category ? category.title : 'Inconnue'
  })
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
