export const useCart = () => {

  // Makeing the useCookie into a composable for avoiding a bug related to the multiple change of a deeper property (like .quantity)
  const useSavedSelectedProducts = () => {
    return useCookie('selectedProducts', {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      path: '/',
    })
  }

  // Current selected products
  const selectedProducts = useState('selectedProducts', () => {
    const savedSelectedProducts = useSavedSelectedProducts()
    if (savedSelectedProducts.value !== undefined && savedSelectedProducts.value.length > 0) {
      return savedSelectedProducts.value
    } else {
      return []
    }
  })
  
  // Calculating the total price of the selected products
  const totalPrice = computed(() => {
    return selectedProducts.value.reduce((acc, product) => {
      return acc + (product.price * product.quantity)
    }, 0)
  })

  // Calculating the total number of selected products
  const totalProducts = computed(() => {
    return selectedProducts.value.reduce((acc, product) => {
      return acc + product.quantity
    }, 0)
  })

  // Updating the cookie whenever the selected products change
  watch(selectedProducts.value, () => {
    const savedSelectedProducts = useSavedSelectedProducts()
    savedSelectedProducts.value = selectedProducts.value
  })
  
  // Adding a product to the cart
  function addProductToCart(product, variantSelect) {

    const productIndexInCart = selectedProducts.value.findIndex(selectedProduct => selectedProduct.id === product.id)
    
    if (productIndexInCart === -1) {
      selectedProducts.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category,
        imageName: product.imageName,
        variants : variantSelect !== null ? [variantSelect.value] : null,
        quantity: 1
      })
    } else {
      const selectedProduct = selectedProducts.value[productIndexInCart]
      selectedProduct.quantity++
      if (variantSelect !== null) {
        selectedProduct.variants.push(variantSelect.value)
      }
    }

    const { $toast } = useNuxtApp()
    $toast.success('Produit ajouté dans le panier')

  }

  // Removing a product from the cart by its id
  const removeProductFromCart = (productId) => {
    const productIndexInCart = selectedProducts.value.findIndex(cartProduct => cartProduct.id === productId)
    if (productIndexInCart !== -1) {
      selectedProducts.value.splice(productIndexInCart, 1)
    } else {
      console.warn(`Product n°${productId} not found in cart`)
    }
  }

  // Exporting the useful refs and methods of the cart
  return {
    addProductToCart,
    removeProductFromCart,
    selectedProducts,
    totalPrice,
    totalProducts
  }

}