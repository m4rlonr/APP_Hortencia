import { StyleSheet } from 'react-native';
import theme from '../src/theme';
import { all } from 'axios';

export default StyleSheet.create({

  ViewLoad: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme.colors.background,
  },
  cardDetail: {
    flex: 1,
    margin: 5,
    backgroundColor: "#B0E0E6",
  },
  // card: {
  //   flex: 1,
  //   margin: 5,
  //   backgroundColor: theme.colors.primary,
  // },
  cardList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  textCard: {
    color: theme.colors.text,
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  viewContent: {
    margin: 5
  },
  textInputs: {
    marginTop: 5,
    backgroundColor: theme.colors.disabled,
  },
  dialog: {
    alignContent: 'center',
    backgroundColor: theme.colors.background,
    borderRadius: 5
  },
  textDetail: {
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
  },
  textDetail2: {
    color: "white",
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
  },
  tableText: {
    fontSize: 32
  },
  groupButton: {
    // flex: 1,
    // borderRadius: 0,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems:'center',
    // backgroundColor: '#00FF7F',
    // borderRadius: 3
  },
  groupButton1: {
    flex: 1,
    borderRadius: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor: '#F08080',
    borderRadius: 3,
    
  },
  groupButton2: {
    flex: 1,
    borderRadius: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor: '#0000FF',
    borderRadius: 5,
    marginTop: 2,
    padding: 10,
  },
  groupButton3: {
    marginTop: 2,
    padding: 5,
    flex: 1,
    borderRadius: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5
  },
  AtribList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardItens: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  // ------------------------------------------------------------------------------------ NOVOS
  body: {
    // flex: 1,
    // alignContent: 'center',
    // backgroundColor: theme.colors.background,
  },
  SingleButton: {
    margin: 5,
    height: 'auto'
  },
  SingleButtonText: {
    fontSize: 18,
  },
  MainCard: {
    flex: 1,
    margin: 5,
    backgroundColor: 'orange',
    height: 750
  },
  SubCard: {
    margin: 5,
    height:50
  },
  // ------------------------------------------------------------------------------------ TESTE
  teste:{
    height: '90%',
    backgroundColor: 'red'
  }
});