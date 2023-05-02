import AsyncStorage from '@react-native-async-storage/async-storage';

var numberDevices = 0
var list = []

async function loadList() {
  try {
    const value = await AsyncStorage.getItem('listDevices')
    if (value !== null) {
      list = JSON.parse(value)
    }
  } catch (error) {
    console.log("erro get storage lista")
  }
}
async function init() {
  try {
    const value = await AsyncStorage.getItem('numberDevices')
    if (value !== null) {
      numberDevices = parseInt(value)
      await loadList()
    }
  } catch (error) {
    console.log("erro get storage numero de dispositivos")
  }
  return true
}
async function moreDevice(e) {
  try {
    numberDevices = numberDevices + 1
    list.push(e)
    await AsyncStorage.setItem("numberDevices", JSON.stringify(numberDevices))
    await AsyncStorage.setItem("listDevices", JSON.stringify(list))
    return {
      status: true,
      message: "Registered device"
    }
  } catch (e) {
    console.log("[ERRO] - Armazenar numberDevices")
    return {
      status: false,
      message: "Error when trying to register"
    }
  }
}
async function clean() {
  await AsyncStorage.clear()
  numberDevices = 0
  list = []
}

export { numberDevices, moreDevice, init, list, clean };
