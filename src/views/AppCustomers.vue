<template>
  <div>
    <h1>Customers</h1>
    <hr/>
    <div class="row">
      <div class="col-sm-4">
        <form @submit.prevent="addCustomer">
          <div class="form-group">
            <label for="name">Name</label>
            <input v-model="newCustomer.fullName" type="text" class="form-control" id="name" placeholder="Enter name">
          </div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input v-model="newCustomer.email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>

    <br/>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.fullName }}</td>
          <td>{{ customer.email }}</td>
          <td class="text-right">
            <button class="btn btn-light btn-sm mr-2" @click="removeCustomer(customer)">
              <i class="fas fa-trash"></i>
            </button>
            <router-link class="btn btn-light btn-sm" :to="{ name: 'latest-purchases', params: { id: customer.id }}">
              <i class="fas fa-shopping-cart"></i>
            </router-link>
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
        newCustomer: {},
        customers: customerService.list()
      }
    },

    methods: {
      addCustomer() {
        customerService.add(this.newCustomer)
        this.newCustomer = {}
      },

      removeCustomer(customer) {
        customerService.remove(customer);
      }
    }
  }
</script>
