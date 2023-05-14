import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button, Card, ActivityIndicator, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { numberDevices, moreDevice, init } from "../storage"
const axios = require('axios').default;
import styles from "../globalStyles"
import { deviceVerification, moistureCheck, relayControl, systemActivation } from "../axios"

export default function AjusteScreen(e) {
  const item = e.route.params.item
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [ip, setIP] = useState(null);
  const [alias, setAlias] = useState(null);
  const [mac, setMac] = useState(null);
  const [error, setError] = useState(null)
  // const [firstLoad, setFirstLoad] = useState(true)
  const [firstLoad, setFirstLoad] = useState(true)
  const [statusSistema, setStatusSistema] = useState(false)

  // onPress={() =>
  //   navigation.navigate('Detail', {
  //     item: item,
  //   })
  // }
  // ------------------------------------------------------------------------------ ANTIGAS

  // async function saveDevice() {
  //   const resp = await moreDevice({ id: numberDevices, Mac: mac, Alias: alias, IP: ip })
  //   if (resp.status === false) {
  //     setError(resp.message)
  //     setVisible(true)
  //   }
  //   setMac(null)
  //   setIP(null)
  //   close()
  // }
  async function load(item) {
    console.log(item)
    setFirstLoad(false)
    // let check = await deviceVerification(item.IP)
    // // console.log(check.data[0])
    // if (check.data[0] === "powerup") {
    //   setStatusSistema(true)
    // } else {
    //   setStatusSistema(false)
    // }
    // let sleep = check.data.shift()
    // setLoadDevice(check.status)
    // setFirstLoad(false)
  }

  // ------------------------------------------------------------------------------ NOVAS
  function RenderButtonCell() {
    if (true !== false) {
      return (
        <Button mode="elevated"
          buttonColor="#41fa7e"
          textColor="#074d39"
          labelStyle={styles.SingleButtonCell}
          style={styles.SingleButton} onPress={() => { }}>
          <Text>Ativo</Text>
        </Button>
      )
    } else {
      return (
        <Button mode="elevated"
          buttonColor="#ff6064"
          textColor="#65202d"
          labelStyle={styles.SingleButtonCell}
          style={styles.SingleButton} onPress={() => { }}>
          <Text>Destivado</Text>
        </Button>)
    }

  }

  if (firstLoad === true) {
    load()
    return (
      <View style={styles.ViewLoad}>
        <ActivityIndicator size="large" color="#074d39" />
      </View>
    )
  } else {
    {/* -------------------------------------------------------------------------------------NOVO */ }
    return (
      <View style={styles.Body}>
        <View style={styles.MainCard}>
          <ScrollView >
            {/* <View style={styles.ViewGeral}>


              <TextInput
                style={styles.textInputs}
                label="ALTERAR NOME"
                value={alias}
                onChangeText={text => setAlias(text)}
              />

              <Button mode="elevated"
                buttonColor="#074d39"
                textColor="#FFFFFF"
                labelStyle={styles.SingleButtonText}
                style={styles.SingleButton} onPress={() => { }}>
                SALVAR
              </Button>
            </View> */}

            <View style={styles.ViewGeral}>
              <Text style={styles.ActionTextButton}>Botão de ação</Text>
              {RenderButtonCell()}
            </View>

          </ScrollView>
        </View>
        <Button mode="elevated"
          buttonColor="#074d39"
          textColor="#FFFFFF"
          labelStyle={styles.SingleButtonText}
          style={styles.SingleButton} onPress={() => {
            navigation.goBack()
          }}>
          VOLTAR
        </Button>
      </View>
    );
  }
};
