export const useCart = () => {

  const savedSelectedProducts = useCookie('selectedProduct', {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
  })

  const selectedProducts = useState('selectedProducts', () => {
    if (savedSelectedProducts.value !== undefined && savedSelectedProducts.value.length > 0) {
      return savedSelectedProducts.value
    } else {
      return []
    }
  })
  
  const totalPrice = computed(() => {
    return selectedProducts.value.reduce((acc, product) => {
      return acc + (product.price * product.quantity)
    }, 0)
  })

  const totalProducts = computed(() => {
    return selectedProducts.value.reduce((acc, product) => {
      return acc + product.quantity
    }, 0)
  })

  watch(selectedProducts.value, () => {
    savedSelectedProducts.value = selectedProducts.value
    console.log({ savedSelectedProducts: savedSelectedProducts.value })
  })
  
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

    console.log({ selectedProducts: selectedProducts.value })
    console.log({ totalPrice: totalPrice.value })

  }

  return {
    addProductToCart,
    selectedProducts,
    totalPrice,
    totalProducts
  }

}