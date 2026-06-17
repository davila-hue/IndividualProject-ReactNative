import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type CustomButtonProps = {
  title: string;
  color?: string;
  onPress: () => void;
};

export default function CustomButton({ title, color = '#E60023', onPress }: CustomButtonProps) {
  return (
    <TouchableOpacity style={[styles.btn, { backgroundColor: color }]} onPress={onPress}>
      <Text style={[styles.txt, { color: color === '#fff' ? '#000' : '#fff' }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn:{ padding:12, borderRadius:6, alignItems:'center', marginBottom:10 },
  txt:{ fontWeight:'bold' }
});
