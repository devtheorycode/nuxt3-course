export default defineNuxtRouteMiddleware((to, from) => {
  const { selectedProducts } = useCart()
  if (selectedProducts.value.length === 0) {
    if (from.name) {
      const { $toast } = useNuxtApp()
      $toast.error('Votre panier est vide, impossible de continuer')
      return abortNavigation()
    } else {
      return navigateTo('/')
    }
  }
})