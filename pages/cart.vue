<script setup>
  const { selectedProducts, totalPrice } = useCart()
  const categories = useCategories()
</script>

<template>
  <div class="p-5">

    <h1 class="text-5xl py-5">Panier</h1>

    <template v-if="selectedProducts && selectedProducts.length > 0">
      
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <!-- head -->
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox">
                </label>
              </th>
              <th>Article</th>
              <th>Quantité</th>
              <th>Prix à l'unité</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            <tr v-for="product in selectedProducts">
              <th>
                <label>
                  <input type="checkbox" class="checkbox">
                </label>
              </th>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="w-12 h-12 mask mask-squircle">
                      <img :src="'/assets/images/'+product.imageName" :alt="product.name">
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">
                      {{ product.name }}
                      <small v-if="product.variants" class="opacity-75">
                        ({{ product.variants.join(', ') }})
                      </small>
                    </div>
                    <div class="text-sm opacity-50">{{ categories.find(category => category.id === product.category).title }}</div>
                  </div>
                </div>
              </td>
              <td>
                {{ product.quantity }}
              </td>
              <td>{{ product.price }}€</td>
              <th>
                <button @click="$router.push('/product/' + product.id)" class="btn btn-ghost btn-xs">détails</button>
              </th>
            </tr>
          </tbody>
          
        </table>
      </div>
  
      <button class="mt-4 btn btn-primary">Confirmer l'achat ({{ totalPrice }}€)</button> 
  
    </template>

    <p v-else>Aucun produit n'est sélectionné.</p>

  </div>
</template>