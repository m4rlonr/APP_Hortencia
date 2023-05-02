import { StyleSheet } from 'react-native';
import theme from '../src/theme';

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
    backgroundColor: theme.colors.backdrop,
  },
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: theme.colors.primary,
  },
  cardList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textCard: {
    color: theme.colors.text,
    fontSize: 30,
    fontWeight: '100',
    textTransform: 'uppercase'
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
  },
  textDetail: {
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: '100',
  },
  tableText: {
    fontSize: 32
  },
  groupButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  AtribList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: '100',
  }
});