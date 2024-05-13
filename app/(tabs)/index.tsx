import React from 'react';
import { View, StyleSheet } from 'react-native';
import Sidebar from '@/components/Sidebar';

import { AppProvider } from '@/context/AppContext';
export default function App() {
  return (
    <View style={styles.container}>
      <AppProvider>
      <View style={styles.sidebar}>
        <Sidebar />
      </View>
      <View style={styles.taskManager}>
        {/* <TaskManager /> */}
      </View>
      </AppProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Horizontal layout
  },
  sidebar: {
    flex: 1, // Takes 1/4 of the screen width
    backgroundColor: 'linear-gradient(#808b96, #aeb6bf)', // Adjust gradient here
    padding: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  taskManager: {
    flex: 3, // Takes 3/4 of the screen width
    backgroundColor: '#ffffff',
  },
});
