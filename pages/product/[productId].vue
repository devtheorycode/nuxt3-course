<script setup>
  import { StarIcon } from '@heroicons/vue/solid'
  import { StarIcon as EmptyStarIcon } from '@heroicons/vue/outline'
  
  const product = {
    name: 'Super Hoodie',
    categoryName: 'Hauts',
    price: 19,
    imageSrc: 'https://picsum.photos/id/1005/400/250',
    variants: ["XS", "S", "M", "L", "XL", "2XL"],
    defaultVariant: "M",
    averageRate: 4.7,
    totalReviews: 10
  }
</script>

<template>
  <div class="flex flex-row-reverse gap-5">
    <div class="w-2/3">
      <img class="w-full" :src="product.imageSrc" :alt="product.name">
    </div>
    <div class="w-1/3">
      
      <div class="text-sm breadcrumbs w-full break-words">
        <ul>
          <li>
            Catégorie
          </li> 
          <li>
            <a>{{ product.categoryName }}</a>
          </li>
          <li>
            <span class="text-base-content/75">Ce produit</span>
          </li>
        </ul>
      </div>

      <h1 class="mt-8 text-xl font-bold">{{ product.name }}</h1>
      <p class="mt-4 text-sm">
        <span class="align-middle">{{ product.averageRate }}</span>
        <StarIcon class="ml-1 inline w-5 align-middle" />
        <small class="pl-3 align-middle">{{ product.totalReviews }} avis</small>
      </p>
      <p class="mt-4 text-sm font-bold">
        {{ product.price }}€
      </p>

      <form class="mt-8" @submit.prevent>
        <select v-if="product.variants" class="select select-bordered w-full max-w-xs">
          <option v-for="variant in product.variants" :selected="variant === product.defaultVariant">{{ variant }}</option> 
        </select>
        <button class="w-full mt-4 btn">Ajouter au panier</button> 
        <button class="w-full mt-4 btn btn-primary">Acheter maintenant</button> 
      </form>

    </div>
  </div>
</template>