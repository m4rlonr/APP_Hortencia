import { StyleSheet } from 'react-native';
import theme from '../src/theme';
import { all } from 'axios';

export default StyleSheet.create({


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
  dialog: {
    alignContent: 'center',
    backgroundColor: theme.colors.background,
    borderRadius: 5
  },
  textDetail: {
    color: "black",
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
    alignItems: 'center',
    backgroundColor: '#F08080',
    borderRadius: 3,

  },

  groupButton3: {
    marginTop: 2,
    padding: 5,
    flex: 1,
    borderRadius: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  Body: {
    backgroundColor: '#abea7e',
    flex: 1,
  },
  SingleButton: {
    margin: 5,
    width: 'auto',
  },
  SingleButtonText: {
    fontSize: 18,
  },
  MainCard: {
    flex: 1,
    margin: 5,
    backgroundColor: 'white',
    maxHeight: '95%',
    padding: 5,
    borderRadius: 5
  },
  SubCard: {
    margin: 5,
    height: 65,
    backgroundColor: '#3d7d4d',
  },
  SubCardText: {
    fontSize: 24,
    color: 'white'
  },
  Dialog: {
    backgroundColor: 'white',
  },
  ViewLoad: {
    flex: 1,
    justifyContent: "center"
  },
  GroupMultButton: {
    flexDirection: "row",
    alignSelf: 'center',
    margin: 'auto',
  },
  GroupSingleButon: {
    margin: 10,
    width: "45%"
  },
  textInputs: {
    marginTop: 5,
    color: '#074d39'
  },

  SubCardB: {
    margin: 5,
    height: 65,
    backgroundColor: '#3d7d4d',
  },
  TextSingle: {
    fontSize: 14,
  },
  MainView: {
    flex: 1,
    margin: 5,
    backgroundColor: '#ffffff',
    height: 750,
    padding: 5,
    borderRadius: 5
  },
  MainViewText: {
    fontSize: 24,
    color: 'black',
    alignSelf: 'center',
    padding: 15,
  },
  MultiTextView: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    marginBottom: 40
  },
  CardCells: {
    maxHeight: '20%',
    flexDirection: 'row',
    // backgroundColor: '#00b1c8',
    // backgroundColor: '#3d7d4d',
    backgroundColor: '#00b1c8',
    margin: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
  },
  ViewGroupMultButton: {
    flex: 1,
    marginTop: 20,
    // flexDirection: "row",
    // alignSelf: 'center',
  },
  TextCell: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  NumberCell: {
    fontSize: 60,
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  ActionTextButton: {
    alignSelf: 'center',
  },
  SingleButtonCell: {
    margin: 5,
    width: 65,
  },
  ViewGeral: {
    marginTop: 50
  },
  GeralButton: {
    margin: 5,
    width: 'auto',
    height: 300
  },
  MegaButton: {
    flex: 1,
    margin: 5,
    // justifyContent: 'center',
    alignContent: 'center',
    height: 'auto'
  },
  MegaButtonText: {
    marginTop: 50,
    fontSize: 20,
    color: 'white'
  },
});