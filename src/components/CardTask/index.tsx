import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { PropsCardTask } from './type';

export const CardTask:React.FC<PropsCardTask> = ({title,description,tecnologias,onChangeRemove}) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
    <Text style={styles.tecnologias}>{tecnologias}</Text>
    <TouchableOpacity onPress={onChangeRemove} style={styles.btn}>
      <Text style={styles.txt}>Remover</Text>
    </TouchableOpacity>
  </View>
);
