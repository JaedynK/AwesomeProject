import { StyleSheet, Text, View,SafeAreaView,SectionList,StatusBar,FlatList,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import Settings  from './components/Setting.js';
import FoodList  from './components/FoodList.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function SettingsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function FoodListScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>FoodList screen</Text>
      <Button
        title="Go to List"
        onPress={() => navigation.navigate('FoodList')}
      />
    </View>
  );
}

function MainScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="FoodList" component={FoodListScreen} />
    </Tab.Navigator>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#ff8',
    padding: 20,
    marginHorizontal: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});
