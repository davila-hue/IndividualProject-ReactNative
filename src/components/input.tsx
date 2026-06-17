import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

type InputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

export default function Input({ placeholder, value, onChangeText }: InputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input:{ borderWidth:1, borderColor:'#ccc', borderRadius:6, padding:10, marginBottom:10, backgroundColor:'#fff' }
});
