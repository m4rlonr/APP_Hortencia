import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, Button, Portal, Divider, Dialog, TextInput, ActivityIndicator, IconButton } from 'react-native-paper';
import styles from "../globalStyles"
import { deviceVerification, moistureCheck, relayControl, systemActivation } from "../axios"

export default function DetailScreen(e) {
  const item = e.route.params.item
  const navigation = useNavigation();
  const [dialog, setDialog] = useState(false)
  const [loadDevice, setLoadDevice] = useState(false)
  const [listTrial, setListTrial] = useState()
  const [leitura, setLeitura] = useState([])
  var intervalo = 60000

  async function ctlRele(active, rele) {
    await relayControl(item.IP, active, parseInt(rele) + 1)
  }
  async function load(item) {
    let check = await deviceVerification(item.IP)
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
              <View style={styles.groupButton}>
                <Text style={styles.textDetail}>Nome dispositivo: {item.Alias}</Text>
                <IconButton icon="power" color={styles.textButton.color} size={32} onPress={() => systemActivation(item.IP)} />
              </View>
              <Divider style={{ backgroundColor: 'white' }} />
              <Text style={styles.textDetail}>IP: {item.IP}</Text>
              <Text style={styles.textDetail}>MAC: {item.Mac}</Text>
              <Divider style={{ backgroundColor: 'white' }} />
              <View style={styles.groupButton}>
                <Text style={styles.textDetail}>Trial</Text>
                <Text style={styles.textDetail}>Status</Text>
                <Text style={styles.textDetail}>Humidity</Text>
                <Text style={styles.textDetail}>Action</Text>
              </View>
              {listTrial.map((item, indice) =>
                <View style={styles.groupButton} key={indice}>
                  <Text style={styles.textDetail}>{indice}</Text>
                  <Text style={styles.textDetail}>{item}</Text>
                  {leitura[indice] ? <Text style={styles.textDetail}>{leitura[indice]}</Text> : <ActivityIndicator size="small" color="#0000ff" />}
                  <IconButton icon="power" color={styles.textButton.color} size={24} onPress={() => ctlRele(item, indice)} />
                </View>
              )}
            </Card.Content>
          </Card>
          <Button labelStyle={styles.textButton} style={styles.Button} onPress={() => {
            navigation.goBack()
            clearInterval(intervalo)
          }}>
            Go back
          </Button>
          <Portal>
            <Dialog visible={dialog} onDismiss={() => setDialog(false)}>
              <Dialog.Title>Editor settings</Dialog.Title>
              <Dialog.Content>
                <TextInput
                  style={styles.textInputs}
                  label="time"
                  onChangeText={text => setIP(text)}
                />
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={() => { }}>Save</Button>
                <Button onPress={() => setDialog(false)}>Done</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </ScrollView >
    );
  }
};