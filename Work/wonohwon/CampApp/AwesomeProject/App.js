import { StyleSheet, Text, View,SafeAreaView,SectionList,StatusBar,FlatList} from 'react-native';
// import NavigationBar from 'react-native-navigation-bar';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import settings from './componets';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function App() {
  const Tab = createBottomTabNavigator();
  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps', "Green Beans"],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];
  const ListItem = ({ item }) => {
    return (
      <View>
        {/* When Images is needed */}
        {/* <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      /> */}
           <Text style={styles.item}>{item}</Text>
      </View>
    );
  };

  return (
    <NavigationContainer>
    <View style={styles.container}>
    <StatusBar style="light" />
    <SafeAreaView style={{ flex: 1 }}>
      <SectionList
        contentContainerStyle={{ paddingHorizontal: 10 }}
        stickySectionHeadersEnabled={false}
        sections={DATA}
        renderSectionHeader={({ section }) => (
          <>
            <Text style={styles.header}>{section.title}</Text>
            {section ? (
              <FlatList
                horizontal
                data={section.data}
                renderItem={({ item }) => <ListItem item={item} />}
                showsHorizontalScrollIndicator={false}
              />
            ) : null}
          </>
        )}
        renderItem={({ item, section }) => {
          return null;
        }}
      />
      <Tab.Navigator>
      <Tab.Screen name="Home" component={settings}/>
    </Tab.Navigator>
    </SafeAreaView>
  </View>
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
    backgroundColor: '#f9c2ff',
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
