<template>
  <div class="p-5">

    <h1 class="text-5xl py-5">Panier</h1>

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
          <tr v-for="n in 3">
            <th>
              <label>
                <input type="checkbox" class="checkbox">
              </label>
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="w-12 h-12 mask mask-squircle">
                    <img src="" alt="">
                  </div>
                </div>
                <div>
                  <div class="font-bold">Article {{ n }}</div>
                  <div class="text-sm opacity-50">Catégorie</div>
                </div>
              </div>
            </td>
            <td>
              2
            </td>
            <td>19€</td>
            <th>
              <button @click="$router.push('/')" class="btn btn-ghost btn-xs">détails</button>
            </th>
          </tr>
        </tbody>
        
      </table>
    </div>

    <button class="mt-4 btn btn-primary">Confirmer l'achat (XXX€)</button> 

  </div>
</template>