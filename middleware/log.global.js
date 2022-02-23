export default defineNuxtRouteMiddleware((to, from) => {
  console.log('[nuxt-middleware] log.js', { to, from })
})