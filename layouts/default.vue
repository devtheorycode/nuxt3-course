<script setup>
  const menuItems = [
    { path: '/', title: 'Accueil' },
    { path: '/category/head', title: 'Tête' },
    { path: '/category/body', title: 'Hauts' },
    { path: '/category/other', title: 'Autres' },
  ]
</script>

<template>
  <div class="flex h-full">
    
    <!-- START: SIDEBAR -->
    <div class="fixed top-0 bottom-0 left-0 w-64 py-5 bg-primary text-primary-content">

      <h1 class="mt-5 px-5 text-2xl font-bold">DT Merch</h1>

      <ul class="menu w-full mt-10 px-0">
        <li v-for="menuItem in menuItems" :class="menuItem.path === $route.path ? 'bordered' : 'hover-bordered'">
          <NuxtLink :to="menuItem.path">
            {{ menuItem.title }}
          </NuxtLink>
        </li>
      </ul>

    </div>
    <!--  END : SIDEBAR -->

    <!-- START: PAGE -->
    <div class="w-full pl-64">
      <slot />
    </div>
    <!-- END: PAGE -->

  </div>
</template>

<style scoped>
  .menu li.hover-bordered a:hover, .menu li.bordered a {
    @apply border-primary-content
  }
</style>