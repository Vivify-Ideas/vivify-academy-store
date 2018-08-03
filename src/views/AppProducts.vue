<template>
  <div>
    <h1>Products</h1>
    <hr/>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
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
        products: productService.list()
      }
    }
  }
</script>
