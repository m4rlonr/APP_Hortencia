import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button, Card, Portal, Dialog, TextInput, Snackbar, ActivityIndicator } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { numberDevices, moreDevice, init, list, clean } from "../storage"
const axios = require('axios').default;
import styles from "../globalStyles"

export default function HomeScreen() {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);
  const [dialog, setDialog] = useState(false);
  const [respSearch, setRespSearch] = useState(false);
  const [cleanAlert, setCleanAlert] = useState(false)
  const [confirText, setConfirmText] = useState(null)
  const [ip, setIP] = useState(null);
  const [alias, setAlias] = useState(null);
  const [mac, setMac] = useState(null);
  const [error, setError] = useState(null)
  const [firstLoad, setFirstLoad] = useState(true)
  // ------------------------------------------------------------------------------ ANTIGAS
  function close() {
    if (cleanAlert) {
      setCleanAlert(false)
    }
    setDialog(false);
    setIP(null)
    if (respSearch) {
      setRespSearch(false)
      setAlias(null)
      setMac(null)
    }
  }
  async function check() {
    try {
      await axios.get(`http://${ip}/checagem`).then(response => {
        setMac(response.data)
        setRespSearch(true)
      })
    } catch (error) {
      setError(resp.message)
      setVisible(true)
    }
    // list.map(item => {
    //   if (item.Mac === Object) {
    //     igual = true
    //   }
    // })
    // if(response.status === true){
    //   setMac(response.data)
    //   setRespSearch(response.status)
    // }
    // const resp = await deviceAvailability(ip)
    // if (resp.status === true) {
    //   setMac(resp.data)
    //   setRespSearch(true)
    // } else {
    //   setError(resp.message)
    //   setVisible(true)
    // }

  }
  async function saveDevice() {
    const resp = await moreDevice({ id: numberDevices, Mac: mac, Alias: alias, IP: ip })
    if (resp.status === false) {
      setError(resp.message)
      setVisible(true)
    }
    setMac(null)
    setIP(null)
    close()
  }
  function clearAll() {
    if (confirText === "CONFIRMAR") {
      setFirstLoad(true)
      load()
      clean()
    }
    close()
  }
  async function load() {
    let check = await init()
    if (check === true) {
      setFirstLoad(false)
    }
  }
  // ------------------------------------------------------------------------------ NOVAS
  function renderApagar() {
    if (list.length !== 0) {
      return (
        <View style={styles.GroupMultButton}>
          <Button
            mode="elevated"
            buttonColor="#074d39"
            textColor="#FFFFFF"
            labelStyle={styles.SingleButtonText}
            style={styles.GroupSingleButon}
            onPress={() => setDialog(true)}
          >
            CADASTRAR
          </Button>
          <Button
            mode="elevated"
            buttonColor="#074d39"
            textColor="#FFFFFF"
            labelStyle={styles.SingleButtonText}
            style={styles.GroupSingleButon}
            onPress={() => { setCleanAlert(true) }}
          >
            APAGAR
          </Button>
        </View>
      )
    } else {
      return (
        <Button
          mode="elevated"
          buttonColor="#074d39"
          textColor="#FFFFFF"
          labelStyle={styles.SingleButtonText}
          style={styles.SingleButton}
          onPress={() => setDialog(true)}
        >
          CADASTRAR
        </Button>
      )
    }

  }
  function renderSearchDialog() {
    if (ip !== null && mac === null) {
      return (
        <View style={styles.GroupMultButton}>
          <Button mode="elevated"
            buttonColor="#074d39"
            textColor="#FFFFFF"
            labelStyle={styles.SingleButtonText}
            style={styles.GroupSingleButon} onPress={() => check()}>
            <Text style={styles.textButton}>BUSCAR</Text>
          </Button>

          <Button mode="elevated"
            buttonColor="#074d39"
            textColor="#FFFFFF"
            labelStyle={styles.SingleButtonText}
            style={styles.GroupSingleButon} onPress={() => close()}>
            <Text style={styles.textButton}>FECHAR</Text>
          </Button></View>
      )
    } else if (ip !== null && mac !== null) {
      return (
        <View style={styles.GroupMultButton}>
          <Button
            mode="elevated"
            buttonColor="#074d39"
            textColor="#FFFFFF"
            labelStyle={styles.SingleButtonText}
            style={styles.GroupSingleButon}
            onPress={() => saveDevice()}>
            <Text style={styles.textButton}>SALVAR</Text>
          </Button>
          <Button mode="elevated"
            buttonColor="#074d39"
            textColor="#FFFFFF"
            labelStyle={styles.SingleButtonText}
            style={styles.GroupSingleButon} onPress={() => close()}>
            <Text style={styles.textButton}>FECHAR</Text>
          </Button>
        </View>
      )
    } else {
      return (
        <Button mode="elevated"
          buttonColor="#074d39"
          textColor="#FFFFFF"
          labelStyle={styles.SingleButtonText}
          style={styles.GroupSingleButon} onPress={() => close()}>
          <Text style={styles.textButton}>FECHAR</Text>
        </Button>
      )
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
          <ScrollView>
            {numberDevices === 0 ? (
              <Card style={styles.SubCard}>
                <Card.Content>
                  <Text style={styles.SubCardText}> Sem dispositivos</Text>
                </Card.Content>
              </Card>
            ) : list.map(item => (
              <Card onPress={() =>
                navigation.navigate('Detail', {
                  item: item,
                })
              } style={styles.SubCard} key={item.id}>
                <Card.Content>
                  <Text style={styles.SubCardText}>{item.Alias}</Text>
                </Card.Content>
              </Card>

            ))}
          </ScrollView>
        </View>
        {renderApagar()}
        {/* -------------------------------------------------------------------------------------NOVO */}
        <Portal>
          <Dialog visible={dialog} onDismiss={() => close()} style={styles.Dialog}>
            <Dialog.Title >PAINEL DE BUSCA</Dialog.Title>
            <Dialog.Content>
              <TextInput
                mode="outlined"
                style={styles.textInputs}
                underlineColor='#3d7d4d'
                textColor='#074d39'
                placeholder="Insira um IP como 192.168.0.1"
                label="IP do ESP32"
                value={ip}
                onChangeText={text => setIP(text)}
              />
              {respSearch ? (
                <View>
                  <TextInput
                    style={styles.textInputs}
                    label="NOME"
                    value={alias}
                    onChangeText={text => setAlias(text)}
                  />
                  <TextInput
                    style={styles.textInputs}
                    label="MAC"
                    value={mac}
                    onChangeText={text => setMac(text)}
                  />
                </View>) : (<View></View>)
              }
            </Dialog.Content>
            <Dialog.Actions>
              {renderSearchDialog()}
            </Dialog.Actions>
            <Snackbar
              visible={visible}
              onDismiss={onDismissSnackBar}
              action={{
                label: 'FECHAR',
                onPress: () => onToggleSnackBar(),
              }}>
              {error}
            </Snackbar>
          </Dialog>
        </Portal>
        <Portal>
          <Dialog visible={cleanAlert} onDismiss={() => close()} style={styles.dialog}>
            <Dialog.Title style={styles.textButton}>LIMPAR DISPOSITIVOS</Dialog.Title>
            <Dialog.Content>
              <TextInput
                style={styles.textInputs}
                label="DIGITE 'CONFIRMAR'"
                onChangeText={text => setConfirmText(text)}
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button mode="elevated"
                buttonColor="#074d39"
                textColor="#FFFFFF"
                labelStyle={styles.SingleButtonText}
                style={styles.GroupSingleButon} onPress={() => clearAll()}>
                <Text style={styles.textButton}>PRONTO</Text>
              </Button>
            </Dialog.Actions>
            <Snackbar
              visible={visible}
              onDismiss={onDismissSnackBar}
              action={{
                label: 'FECHAR',
                onPress: () => onToggleSnackBar(),
              }}>
              {error}
            </Snackbar>
          </Dialog>
        </Portal>
      </View >
    );
  }
};
