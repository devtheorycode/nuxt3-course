export const useCart = () => {

  const selectedProducts = () => {
    return useState('selectedProducts', () => [])
  }
  
  const totalPrice = () => {
    return computed(() => {
      return selectedProducts.value.reduce((acc, product) => {
        return acc + (product.price * product.quantity)
      }, 0)
    })
  }
  
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
    tolalPrice
  }

}