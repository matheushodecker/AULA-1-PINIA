<script setup>
import { useProductStore } from '@/stores/product'
import { useRouter } from 'vue-router'
const productStore = useProductStore()
const router = useRouter()

function Visualizar(id) {

  router.push(`/produto/${id}`)

}
</script>

<template>
  <main class="ain">

    <h1>listagem de produtos</h1>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>nome</th>
          <th>Preço</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in productStore.products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.qty }}</td>
          <button @click="Visualizar(product.id)">ver</button>
          <button @click="productStore.deleteProductById(product.id)">excluir</button>
        </tr>
      </tbody>
    </table>
  </main>
</template>
<style scoped>


.ain{
  background-color: radial-gradient(closest-side, black, white,black, white,black, white,black, white,black, white,black, white,black, white,black, white,black, white,black, white,black, white,black, white,black, white,black, white,black, white,black, white,black, white,black, white);
}

</style>
