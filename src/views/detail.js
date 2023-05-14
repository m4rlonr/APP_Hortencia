import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, ActivityIndicator, } from 'react-native-paper';
import styles from "../globalStyles"
import { deviceVerification, moistureCheck, relayControl } from "../axios"

export default function DetailScreen(e) {
  const item = e.route.params.item
  const navigation = useNavigation();
  const [loadDevice, setLoadDevice] = useState(false)
  const [listTrial, setListTrial] = useState()
  const [leitura, setLeitura] = useState([])
  const [statusSistema, setStatusSistema] = useState(false)
  var intervalo = 5000

  async function ctlRele(active, rele) {
    await relayControl(item.IP, active, parseInt(rele) + 1)
  }
  async function load(item) {
    let check = await deviceVerification(item.IP)
    // console.log(check.data[0])
    if (check.data[0] === "powerup") {
      setStatusSistema(true)
    } else {
      setStatusSistema(false)
    }
    let sleep = check.data.shift()
    setListTrial(check.data)
    setLoadDevice(check.status)
  }
  async function readHum(item) {
    setLeitura(await moistureCheck(item.IP))
  }
  function RenderButtonCell(e, i) {
    if (e !== "false") {
      return (
        <Button mode="elevated"
          buttonColor="#41fa7e"
          textColor="#074d39"
          labelStyle={styles.SingleButtonCell}
          style={styles.SingleButton} onPress={() => ctlRele(e, i)}>
          <Text>Ativo</Text>
        </Button>
      )
    } else {
      return (
        <Button mode="elevated"
          buttonColor="#ff6064"
          textColor="#65202d"
          labelStyle={styles.SingleButtonCell}
          style={styles.SingleButton} onPress={() => ctlRele(e, i)}>
          <Text>Destivado</Text>
        </Button>)
    }

  }
  if (loadDevice === false) {
    load(item)
    setInterval(() => {
      readHum(item)
      load(item)
    }, intervalo);
    return (
      <View style={styles.ViewLoad}>
        <ActivityIndicator size="large" color="#074d39" />
      </View>
    )
  } else {
    return (<View style={styles.Body}>
      <ScrollView style={styles.MainCard}>

        <Text style={styles.MainViewText}>{item.Alias}</Text>

        <View style={styles.MultiTextView}>
          <Text>IP: {item.IP}</Text>
          <Text >MAC: {item.Mac}</Text>
        </View>

        {listTrial.map((item, indice) =>
          <View style={styles.CardCells} key={indice} >
            <View>
              <Text style={styles.TextCell}>Humidade</Text>
              {typeof leitura[indice] === String ? <Text style={styles.NumberCell}>{leitura[indice]}%</Text> : <Text style={styles.NumberCell}>0%</Text>}
              <Text style={styles.TextCell}>Sensor {indice + 1}</Text>
            </View>
            <View>
              <Text style={styles.ActionTextButton}>Botão de ação</Text>
              {RenderButtonCell(item, indice)}
            </View>
          </View>
        )}
      </ScrollView ><View style={styles.GroupMultButton}>
        <Button mode="elevated"
          buttonColor="#074d39"
          textColor="#FFFFFF"
          labelStyle={styles.SingleButtonText}
          style={styles.GroupSingleButon} onPress={() => {
            navigation.goBack()
            clearInterval(intervalo)
          }}>
          VOLTAR
        </Button>
        <Button mode="elevated"
          buttonColor="#074d39"
          textColor="#FFFFFF"
          labelStyle={styles.SingleButtonText}
          style={styles.GroupSingleButon} onPress={() =>
            navigation.navigate('Ajustes', {
              params: { data: item },
            })

          }>
          AJUSTES
        </Button>
      </View>
    </View>
    );
  }
};