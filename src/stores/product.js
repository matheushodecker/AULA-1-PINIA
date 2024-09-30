import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {id: 1, name: 'Harry potter', price: 59.99, qty:100},
    {id: 2, name: 'a', price: 19.99, qty:100},
    {id: 3, name: 'o', price: 59.99, qty:100}
  ])

function getProductsById(id) {
  for (let product of products.value){
    if(product.id == id){
      return product
  }
}
return null

//return porducts.value.find((product) => product.id == id)
}

  return { products, getProductsById }
})
