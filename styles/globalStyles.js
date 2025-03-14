import { StyleSheet } from 'react-native';

const colors = {
  primary: '#6a5acd',  // Soft purple
  secondary: '#87cefa', // Light blue
  background: '#f0f8ff', // Warm white background
  text: '#333',  // Darker text for contrast
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    justifyContent: 'center',  // Center vertically
    alignItems: 'center',      // Center horizontally
  },
  appBar: {
    height: 60,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,  // Adds shadow on Android
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 24,
    color: colors.primary,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 18,
    color: colors.secondary,
    marginTop: 10,
    fontWeight: 'bold',
  },
  text: {
    color: colors.text,
    fontSize: 16,
    marginVertical: 5,
  },
  orText: {
    color: colors.secondary,
    fontSize: 12,
    padding: 10,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.secondary,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    width: '100%',
  },
});

export default colors;
