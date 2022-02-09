<template>
  <div class="flex h-full">
    
    <!-- START: SIDEBAR -->
    <div class="fixed top-0 bottom-0 left-0 w-64 py-5 bg-primary text-primary-content">

      <h1 class="mt-5 px-5 text-2xl font-bold">DT Merch</h1>

      <ul class="menu w-full mt-10 px-0">
        <li class="bordered">
          <a>
            It shows border on hover 
          </a>
        </li>
        <li class="hover-bordered">
          <a>
            It shows border on hover 
          </a>
        </li>
        <li class="hover-bordered">
          <a>
            It shows border on hover 
          </a>
        </li>
      </ul>

    </div>
    <!--  END : SIDEBAR -->

    <!-- START: PAGE -->
    <div class="w-full pl-64">
      <div class="p-5">
        <slot />
      </div>
    </div>
    <!-- END: PAGE -->

  </div>
</template>

<style scoped>
  .menu li.hover-bordered a:hover, .menu li.bordered a {
    @apply border-primary-content
  }
</style>