import { StyleSheet } from 'react-native';
import theme from '../src/theme';
import { all } from 'axios';

export default StyleSheet.create({
  body: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: theme.colors.background,
  },
  ViewLoad: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme.colors.background,
  },
  cardDetail: {
    flex: 1,
    margin: 5,
    backgroundColor: theme.colors.primary,
  },
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: theme.colors.primary,
  },
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
  button: {
    margin: 5,
    height: 'auto'
  },
  textButton: {
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: '100'
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
  tableText: {
    fontSize: 32
  },
  groupButton: {
    flex: 1,
    borderRadius: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor: '#00FF7F',
    borderRadius: 3
  },
  groupButton1: {
    flex: 1,
    borderRadius: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor: '#F08080',
    borderRadius: 3,
    color: "white"
  },
  groupButton2: {
    flex: 1,
    borderRadius: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor: '#FFFFFF',
    color: "white"
  },
  groupButton3: {

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
  }

});