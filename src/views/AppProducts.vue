<template>
  <div>
    <h1>Products</h1>
    <hr/>

    <input type="text" class="form-control mb-3" placeholder="Search" v-model="searchTerm" style="width: 18rem;">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id" v-if="product.name.toLowerCase().includes(searchTerm.toLowerCase())">
          <td>{{ product.name }}</td>
          <td>{{ product.quantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { productService } from '../utils/ProductService'

  export default {
    data() {
      return {
        products: productService.list(),
        searchTerm: ''
      }
    }
  }
</script>
