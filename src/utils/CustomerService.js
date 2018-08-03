const customers = [
  {
    fullName: 'Mario Speedwagon',
    email: 'example@example.com'
  },
  {
    fullName: 'Petey Cruiser',
    email: 'example@example.com'
  },
  {
    fullName: 'Anna Sthesia',
    email: 'example@example.com'
  }
]

export default class CustomerService {
  list() {
    return customers;
  }

  add(customer) {
    customers.push(customer)
  }

  remove(customer) {
    customers.splice(customers.indexOf(customer), 1)
  }
}

export const customerService = new CustomerService();
