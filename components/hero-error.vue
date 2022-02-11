<script setup>
  const props = defineProps({
    message: {
      type: String,
      default: 'Une erreur est survenue.'
    }
  })
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="text-center hero-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">
          Erreur
        </h1> 
        <p class="mb-5">
          {{ message }}
        </p>
        <button class="btn btn-primary" @click="$router.push('/')">Retourner à l'accueil</button>
      </div>
    </div>
  </div>
</template>