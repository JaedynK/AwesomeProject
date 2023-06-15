
export default function FoodList() {
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
    <View>
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
    </View>
  );
}