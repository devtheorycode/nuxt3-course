export default defineNuxtRouteMiddleware((to, from) => {
  const { selectedProducts } = useCart()
  if (selectedProducts.value.length === 0) {
    const { $toast } = useNuxtApp()
    $toast.error('Votre panier est vide, impossible de continuer')
    if (from.name) {
      return abortNavigation()
    } else {
      return navigateTo('/')
    }
  }
})