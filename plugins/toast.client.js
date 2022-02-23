import { createToaster } from "@meforma/vue-toaster"

export default defineNuxtPlugin(nuxtApp => {
  // Setting up the toaster
  const toaster = createToaster({
    position: 'top-right'
  })

  // Providing the toaster as a helper for the nuxt context
  nuxtApp.provide('toast', toaster)
})