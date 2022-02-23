export default defineNuxtPlugin(nuxtApp => {
  // Helper for getting the proper category name
  nuxtApp.provide('getCategoryTitle', (categoryId) => {
    const { categories } = useRuntimeConfig()
    const category = categories.find(category => category.id === categoryId)
    return category ? category.title : 'Inconnue'
  })
})