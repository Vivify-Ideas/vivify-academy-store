<template>
  <div>
    <h1>Customers</h1>
    <hr/>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, index) in customers" :key="index">
          <td>{{ customer.fullName }}</td>
          <td>{{ customer.email }}</td>
          <td class="text-right">
            <button class="btn btn-danger btn-sm" @click="removeCustomer(customer)">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { customerService } from '../utils/CustomerService'

  export default {
    data() {
      return {
        customers: customerService.list()
      }
    },

    methods: {
      removeCustomer(customer) {
        customerService.remove(customer);
      }
    }
  }
</script>
