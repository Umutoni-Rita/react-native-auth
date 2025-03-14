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
  },
  header: {
    fontSize: 24,
    color: colors.primary,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
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
  },
});

export default colors;
