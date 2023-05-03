import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, Button, Portal, Divider, Dialog, TextInput, ActivityIndicator, IconButton } from 'react-native-paper';
import styles from "../globalStyles"
import { deviceVerification, moistureCheck, relayControl, systemActivation } from "../axios"
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function DetailScreen(e) {
  const item = e.route.params.item
  const navigation = useNavigation();
  const [dialog, setDialog] = useState(false)
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
    if(check.data[0] === "powerup") {
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
  if (loadDevice === false) {
    load(item)
    setInterval(() => {
      readHum(item)
      load(item)
    }, intervalo);
    return (
      <View style={styles.ViewLoad}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  } else {
    return (
      <ScrollView style={styles.body}>
        <View style={styles.viewContent}>
          <Card style={styles.cardDetail}>
            <Card.Content>
              {statusSistema === true ?
               <View style={styles.groupButton}>
                <Text style={styles.textDetail}>{item.Alias}</Text>
                <IconButton icon="power" color={styles.textButton.color} size={32} onPress={() => systemActivation(item.IP)} />
              </View>
              : 
              <View style={styles.groupButton1}>
                <Text style={styles.textDetail}>{item.Alias}</Text>
                <IconButton icon="power" color={styles.textButton.color} size={32} onPress={() => systemActivation(item.IP)} />
              </View>
              }
           
              <Text style={styles.textDetail}>IP: {item.IP}</Text>
              <Text style={styles.textDetail}>MAC: {item.Mac}</Text>
           
              {/* <View style={styles.groupButton}> */}
              <View style={styles.groupButton2}>
                <Text style={styles.textDetail}>ID</Text>
                <Text style={styles.textDetail}>STATUS</Text>
                <Text style={styles.textDetail}>%</Text>
                <Text style={styles.textDetail}>AÇÃO</Text>
              </View>
              
              {/* <View style={styles.groupButton} >  */}
              <View  > 
              {listTrial.map((item, indice) => 
              <View style={styles.groupButton2} key={indice} >
                <Text style={styles.textDetail}>{indice + 1}</Text>
                {item === "false" ? <Text>Desligado</Text> : <Text>Ligado</Text>}
                {leitura[indice] ? <Text style={styles.textDetail}>{leitura[indice]}</Text> : <ActivityIndicator size="small" color="#0000ff" />}
                <IconButton icon="power" color={styles.textButton.color} size={24} onPress={() => ctlRele(item, indice)} />
              </View>

              )}
              </View>
            </Card.Content>
          </Card>
          <Button labelStyle={styles.textButton} style={styles.Button} onPress={() => {
            navigation.goBack()
            clearInterval(intervalo)
          }}>
            VOLTAR
          </Button>
          <Portal>
            <Dialog visible={dialog} onDismiss={() => setDialog(false)}>
              <Dialog.Title>EDITAR CONFIGURAÇÃO</Dialog.Title>
              <Dialog.Content>
                <TextInput
                  style={styles.textInputs}
                  label="time"
                  onChangeText={text => setIP(text)}
                />
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={() => { }}>SALVAR</Button>
                <Button onPress={() => setDialog(false)}>PRONTO</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </ScrollView >
    );
  }
};