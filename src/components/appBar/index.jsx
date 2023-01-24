import { Text, TouchableWithoutFeedback, View } from 'react-native'

import { styles } from './styles'

const AppBar = ({ modalVisible, setModalVisible }) => {
  return (
    <View style={styles.appBar}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.appBarButton}>
          <Text style={styles.buttonText}>Agregar</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default AppBar
