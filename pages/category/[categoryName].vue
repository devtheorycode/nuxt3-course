<script setup>
  const route = useRoute()
  const categoryName = route.params.categoryName

  const { data: products } = await useFetch(`http://localhost:3001/products/?category=${categoryName}`)
</script>

<template>
  <div>
    <h1 class="text-5xl text-center p-5">Catégorie : {{ categoryName }}</h1>
    <cards-container class="mt-10">
      <product-card
        v-for="product in products"
        :id="product.id"
        :name="product.name"
        :price="product.price"
        :imageSrc="'/assets/images/'+product.imageName"
        />
    </cards-container>
  </div>
</template>