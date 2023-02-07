import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'

import { colors } from '../../theme'
import { styles } from './styles'

const AppBar = ({ navigator }) => {
  return (
    <View style={styles.appBar}>
      <TouchableWithoutFeedback onPress={() => navigator.navigate('Todos')}>
        <View style={styles.appBarButton}>
          <Image
            style={[styles.buttonIcon, screen === 'todos' && { tintColor: colors.primary }]}
            source={require('../../assets/todos.png')}
          />
          <Text style={[styles.buttonText, screen === 'todos' && { color: colors.primary }]}>Tareas</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => setScreen('reminders')}>
        <View style={styles.appBarButton}>
          <Image
            style={[styles.buttonIcon, screen === 'reminders' && { tintColor: colors.primary }]}
            source={require('../../assets/reminders.png')}
          />
          <Text style={[styles.buttonText, screen === 'reminders' && { color: colors.primary }]}>Recordatorios</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => setScreen('settings')}>
        <View style={styles.appBarButton}>
          <Image
            style={[styles.buttonIcon, screen === 'settings' && { tintColor: colors.primary }]}
            source={require('../../assets/settings.png')}
          />
          <Text style={[styles.buttonText, screen === 'settings' && { color: colors.primary }]}>Configuración</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default AppBar
