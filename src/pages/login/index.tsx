import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import Input from '../../components/input';
import CustomButton from '../../components/customButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routers/type';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const Login = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Pinterest</Text>
      <Text style={styles.title}>Bem-vindo(a) ao Pinterest</Text>

      <Input 
      placeholder= "Digite seu e-mail" 
      value={email} 
      onChangeText={setEmail}
      />

      <CustomButton 
      title= "Continuar" 
      color= "red" 
      onPress={() => navigation.navigate('Home', { username: email })}
      />
      <CustomButton 
      title= "Continuar com Facebook" 
      color= "blue" 
      onPress={() => navigation.navigate('Home', { username: 'Facebook User' })}
      />
      <CustomButton 
      title= "Continuar com Google" 
      color= "black" 
      onPress={() => navigation.navigate('Home', { username: 'Google User' })}
      />
    </View>
  );
}
