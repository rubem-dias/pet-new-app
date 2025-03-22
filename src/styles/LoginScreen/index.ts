import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  formContainer: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  input: {
    marginBottom: 10,
  },
  loginButton: {
    marginTop: 10,
  },
  forgotPassword: {
    marginTop: 10,
    textAlign: 'center',
    color: '#6200ea',
  },
  divider: {
    marginVertical: 20,
    backgroundColor: '#ccc',
    height: 1,
    width: '100%',
  },
  googleButton: {
    marginTop: 10,
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: 10,
    tintColor: '#7e57c2',
  },
});

export default styles;
