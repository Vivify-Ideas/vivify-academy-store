<template>
  <div class="mt-4">
    <hr/>

    <div class="card mb-3" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Quantity: {{ product.quantity }}</h6>
        <template v-if="product.quantity">
          <div class="form-group">
            <label for="customer">Customer</label>
            <select class="form-control" id="customer" v-model="selectedCustomer">
              <option disabled value="">Please select one</option>
              <option v-for="customer in customers" :key="customer.id" :value="customer">
                {{ customer.fullName }}
              </option>
            </select>
          </div>
          <button class="btn btn-primary mr-2" @click="purchase">Confirm</button>
          <router-link class="btn btn-light" to="/products">Cancel</router-link>
        </template>
        <template v-else>
          <router-link class="btn btn-light" to="/products">Go Back to Products</router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import { customerService } from '../utils/CustomerService'
  import { productService } from '../utils/ProductService'

  export default {
    props: ['id'],

    data() {
      return {
        selectedCustomer: null,
        product: productService.find(this.id)
      }
    },

    created() {
      this.customers = customerService.list()
    },

    methods: {
      purchase() {
        if (!this.selectedCustomer) alert('Please select a customer.')

        customerService.addProductToCustomer(this.selectedCustomer, this.product)
        productService.decrement(this.product)
      }
    }
  }
</script>
