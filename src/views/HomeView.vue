<script setup>
import { ref } from 'vue'
import { useProductStore } from '@/stores/product'
import { useRouter } from 'vue-router'

const productStore = useProductStore()
const router = useRouter()

const newName = ref('')
const newPrice = ref(0)
const newQty = ref(0)

function addProduct() {
  productStore.addProduct(newName.value, newPrice.value, newQty.value)
  newName.value = ''
  newPrice.value = 0
  newQty.value = 0
}

function Visualizar(id) {
  router.push(`/produto/${id}`)
}
</script>

<template>
  <main class="ain">
    <h1>Listagem de Produtos</h1>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in productStore.products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.qty }}</td>
          <td>
            <button @click="Visualizar(product.id)">Ver</button>
            <button @click="productStore.deleteProductById(product.id)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
    <h2>Adicionar Produto</h2>
    <form @submit.prevent="addProduct">
      <input v-model="newName" placeholder="Nome do Produto" required />
      <input v-model.number="newPrice" placeholder="Preço" required />
      <input v-model.number="newQty" placeholder="Quantidade" required />
      <button type="submit">Adicionar</button>
    </form>
  </main>
</template>

<style scoped>

</style>