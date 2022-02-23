<script setup>
  const route = useRoute()
  const categoryName = route.params.categoryName

  const { data: products, pending, error } = await useLazyFetch(`http://localhost:3001/products/?category=${categoryName}`)
</script>

<template>
  <div>

    <div v-if="products" class="p-5">
      <h1 class="text-5xl py-5">Catégorie : {{ $getCategoryTitle(categoryName) }}</h1>
      <cards-container v-if="products && products.length > 0" class="mt-10">
        <product-card
          v-for="product in products"
          :id="product.id"
          :name="product.name"
          :price="product.price"
          :imageSrc="'/assets/images/'+product.imageName"
          />
      </cards-container>
      <p v-else>
        Aucun produit dans cette catégorie.
      </p>
    </div>

    <hero-loader v-else-if="pending" />

  </div>
</template>