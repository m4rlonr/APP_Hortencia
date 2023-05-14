import { list } from "./storage"
const axios = require('axios').default;

// async function deviceAvailability(parms) {
async function deviceAvailability() {
  // let igual = false
  // let Object = null
  //   try {
  //     const response = await axios.get({baseURL:`http://${parms}/checagem`, timeout: 2000})
  //     Object = response.data
  //   } catch (error) {
  //     if(error){
  //       return {
  //         status: false,
  //         data: {},
  //         message: 'Erro ao cadastrar'
  //       }
  //     }
  //   }
  // list.map(item => {
  //   if (item.Mac === Object) {
  //     igual = true
  //   }
  // })
  // if (igual === false) {
  //   return {
  //     status: true,
  //     data: Object,
  //     message: 'Verificação bem sucedida'
  //   }
  // } else {
  //   return {
  //     status: false,
  //     data: {},
  //     message: 'Dispositivo já cadastrado'
  //   }
  // }
}
async function deviceVerification(parms) {
  try {
    const { data } = await axios.get(`http://${parms}/status`)
    let dado = data.split(' - ')
    return {
      status: true,
      data: dado,
      message: 'Verificação bem sucedida'
    }
  } catch (error) {
    return {
      status: false,
      data: null,
      message: 'Verificação falhou'
    }
  }
}
async function moistureCheck(ip) {
  let { data } = await axios.get(`http://${ip}/humidity`)
  let leituras = data.split(' - ')
  return leituras
}
async function relayControl(ip, active, rele) {
  try {
    if (active === "true") {
      await axios.post(`http://${ip}/rele?${rele}=off`)
    } else {
      await axios.post(`http://${ip}/rele?${rele}=on`)
    }
  } catch (error) {
    console.log(error)
  }
}
async function systemActivation(ip) {
  try {
    await axios.post(`http://${ip}/ativacao`)
  } catch (error) {
    console.log(error)
  }
}
export { deviceAvailability, deviceVerification, moistureCheck, relayControl, systemActivation }