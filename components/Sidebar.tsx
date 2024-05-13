import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Assuming you have a package for Material Icons
import { useAppContext } from "@/context/AppContext";

const Sidebar = () => {
  const { updateSideBarNav, selectedOption } = useAppContext();
  const sideBarList = [
    { name: "Home", icon: "home" },
    { name: "Dashboard", icon: "dashboard" },
    { name: "Projects", icon: "work" },
    { name: "Analytics", icon: "bar-chart" },
    { name: "Notifications", icon: "notifications" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Tuktu</Text>
      {sideBarList.map((item) => (
        <TouchableOpacity
          key={item.name}
          style={[
            styles.sidebarItem,
            selectedOption === item.name
              ? styles.selectedSidebarItem
              : null,
          ]}
          onPress={() => updateSideBarNav(item.name)}
        >
          <View style={styles.itemContainer}>
            <Icon name={item.icon} size={24} color="black" />
            <Text style={styles.sidebarItemText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'white',
    // paddingTop: 50,
    // paddingHorizontal: 10,
 
  },

  logo: {
    color: "white",
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "black",
    borderRadius: 5,
    textAlign: "center",
  },
  selectedSidebarItem: {
    backgroundColor: "#0d6efd",
    color: "white", // Set text color to white for selected item
    padding: 10,
    borderRadius: 5,
  },
  sidebarItem: {
    flex: 1,
    marginTop:10,
    marginBottom:10
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center", // Align items horizontally
  },
  sidebarItemText: {
    marginLeft: 10,
  },
});

export default Sidebar;
