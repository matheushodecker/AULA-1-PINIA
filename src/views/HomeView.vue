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
          <td c>{{ product.id }}</td>
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
body {
  font-family: 'Arial', sans-serif;
  background-color: #f7f9fc;
  margin: 0;
  padding: 20px;
}


.ain {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}


h1 {
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.5em;
  color: #555;
  margin-bottom: 10px;
}


form {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

input {
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #007bff;
  outline: none;
}


button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}


table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

thead {
  background-color: #007bff;
  color: white;
}

th,
td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

tr:hover {
  background-color: #f1f1f1;
}

td button {
  padding: 5px 10px;
  margin-right: 5px;
  background-color: #28a745;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

td button:hover {
  background-color: #218838;
  transform: scale(1.05);
}

td button:last-child {
  background-color: #dc3545;
}

td button:last-child:hover {
  background-color: #c82333;
}
</style>