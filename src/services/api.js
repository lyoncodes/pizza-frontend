const axios = require('axios').default;
import config from '../config';

async function getOrders() {
  const res = await axios.get(`${config.apiUrl}/orders`, {
    headers: {
      'Content-type': 'application/json'
    }
  })
  return res.data
}

async function createOrder(pizza, address){
  await axios.post(`${config.apiUrl}/orders`, {
    headers: {
      'Content-type': 'application/json'
    },
    pizza: JSON.stringify(pizza.id),
    address: JSON.stringify(address)
  }).then((res) => console.log('pizza creation details: ', res));
}

async function updateOrder(orderId){
  console.log(orderId);
}

async function deleteOrder(orderId){
  await axios.delete(`${config.apiUrl}/orders/${orderId}`)
}

export default {createOrder, getOrders, updateOrder, deleteOrder};