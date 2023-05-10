import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button, Card, Portal,  TouchableOpacity, Dialog, TextInput, Snackbar, ActivityIndicator, IconButton } from 'react-native-paper';
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
function renderApagar(numberDevices) {
  if(numberDevices !== 0 ){
    return (
      <Button 
      disabled
      mode="text"
      labelStyle={styles.textButton}
      style={styles.button}
      onPress={() => { setCleanAlert(true) }}
    >
      APAGAR
      
    </Button>
    )
  }
}




  if (firstLoad === true) {
    load()
    return (
      <View style={styles.ViewLoad}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  } else {
    return (
      <ScrollView > 
{/* -------------------------------------------------------------------------------------NOVO */}
        <Card style={styles.MainCard}>
          <ScrollView >
            <Card style={styles.SubCard}>
            <Text>Teste</Text>
            </Card>
          {numberDevices === 0 ? (
          <Card style={styles.SubCard}>
            <Card.Content>
              <Text> Sem dispositivos</Text>
            </Card.Content>
          </Card>
        ) : list.map(item => (
          <Card onPress={() =>
            navigation.navigate('Detail', {
              item: item,
            })
          } style={styles.card} key={item.id}>
            <Card.Content >
              <Text s>{item.Alias}</Text>
              <IconButton 
                icon="arrow-right"
                color={styles.textButton.color}
                size={24}
                onPress={() => {}} />
            </Card.Content>
          </Card>
          
        ))}
          </ScrollView>
        </Card>
{/* -------------------------------------------------------------------------------------NOVO */}
        
        <View>
          <Button 
            mode="elevated"
            buttonColor="lightblue"
            textColor="black"
            labelStyle={styles.SingleButtonText}
            style={styles.SingleButton}
            onPress={() => setDialog(true)}
          >
            CADASTRAR
          </Button>
          
          {/* {numberDevices === 0  ?  : <Button 
            disabled
            mode="text"
            labelStyle={styles.textButton}
            style={styles.button}
            onPress={() => { setCleanAlert(true) }}
          >
            APAGAR
            
          </Button> */}
          {/* } */}
        </View>
        <Portal>
          <Dialog visible={dialog} onDismiss={() => close()} style={styles.dialog}>
            <Dialog.Title style={styles.textButton}>PAINEL DE PESQUISA</Dialog.Title>
            <Dialog.Content>
              <TextInput
                style={styles.textInputs}
                label="INSIRA UM IP COMO 192.168.0.1"
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
              {respSearch ? (
                <Button style={styles.button} mode="text" onPress={() => saveDevice()}>
                  <Text style={styles.textButton}>SALVAR</Text>
                </Button>
              ) : (
                <Button style={styles.button} mode="text" onPress={() => check()}>
                  <Text style={styles.textButton}>PEQUISAR</Text>
                </Button>
              )}
              <Button style={styles.button} mode="text" onPress={() => close()}>
                <Text style={styles.textButton}>FECHAR</Text>
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
        <Portal>
          <Dialog visible={cleanAlert} onDismiss={() => close()} style={styles.dialog}>
            <Dialog.Title style={styles.textButton}>[ALERTA]-APAGAR DISPOSITIVOS</Dialog.Title>
            <Dialog.Content>
              <TextInput
                style={styles.textInputs}
                label="DIGITE 'CONFIRMAR'"
                onChangeText={text => setConfirmText(text)}
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button style={styles.button} mode="text" onPress={() => clearAll()}>
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
      </ScrollView>
    );
  }
};
