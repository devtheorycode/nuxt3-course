<script setup>
  const { selectedProducts, totalPrice, removeProductFromCart } = useCart()

  const allProductsCheckbox = ref(null)
  const showDeleteBtn = ref(false)

  function changeAllProductsCheckboxes(event) {
    const checked = event.target.checked
    document.querySelectorAll('.single-product-checkbox').forEach((checkbox) => {
      checkbox.checked = checked
    })
    updateDeleteBtnState()
  }

  function updateDeleteBtnState() {
    const areSomeProductsSelected = document.querySelectorAll('.single-product-checkbox:checked').length > 0
    showDeleteBtn.value = areSomeProductsSelected
  }

  function deleteCheckedProducts() {
    const checkedProducts = document.querySelectorAll('.single-product-checkbox:checked')
    checkedProducts.forEach((product) => {
      const productId = Number(product.dataset.productId)
      removeProductFromCart(productId)
    })
    showDeleteBtn.value = false
  }
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
                  <input @change="changeAllProductsCheckboxes($event)" type="checkbox" class="checkbox">
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
            <tr v-for="product in selectedProducts" :key="product.id">
              <th>
                <label>
                  <input @change="updateDeleteBtnState()" :data-product-id="product.id" type="checkbox" class="checkbox single-product-checkbox">
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
                    <div class="text-sm opacity-50">{{ $getCategoryTitle(product.category) }}</div>
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
  
      <div class="flex gap-4 mt-4">
        <button class="btn btn-primary">Confirmer l'achat ({{ totalPrice }}€)</button>
        <button v-show="showDeleteBtn" @click="deleteCheckedProducts()" class="btn btn-error">Retirer ces produits</button> 
      </div>
  
    </template>

    <p v-else>Aucun produit n'est sélectionné.</p>

  </div>
</template>