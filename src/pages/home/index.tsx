import React, { useState } from 'react';
import { View, FlatList, Text, TextInput, Image } from 'react-native';
import { styles } from './style';
import { Pins } from '../../data';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routers/type';

interface Pin {
  id: number;
  title: string;
  image: any;
}

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({ route }: Props) => {
  const [pins] = useState<Pin[]>(Pins);
  const { username } = route.params || {};

  return (
    <View style={styles.container}>
      <TextInput placeholder="Pesquisar" style={styles.searchBar} />

      {username && <Text style={styles.welcome}>Olá, {username}!</Text>}

      <View style={styles.categories}>
        <Text style={styles.category}>Todos</Text>
        <Text style={styles.category}>Receitas</Text>
        <Text style={styles.category}>Decoração</Text>
        <Text style={styles.category}>Inspiração</Text>
      </View>

      <FlatList
        data={pins}
        keyExtractor={item => String(item.id)}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
        )}
      />

      <View style={styles.bottomNav}>
        <Text style={styles.navItem}>Página inicial</Text>
        <Text style={styles.navItem}>Seguindo</Text>
        <Text style={styles.navItem}>Notificações</Text>
        <Text style={styles.navItem}>Salvos</Text>
      </View>
    </View>
  );
}
