import ParallaxScrollView from '@/components/parallax-scroll-view'
import { ThemedText } from '@/components/themed-text'
import { ThemedTextInput } from '@/components/themed-textinput'
import { ThemedView } from '@/components/themed-view'
import { IconSymbol } from '@/components/ui/icon-symbol'
import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

export default function SearchScreen() {
  return (
    <ParallaxScrollView headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
          headerImage={
            <IconSymbol
              size={310}
              color="#808080"
              name="magnifyingglass"
              style={styles.headerImage}
            />
          }>
      <ThemedView>
        <ThemedTextInput style={styles.searcharea} type='text' placeholder="Search products..." />
        <ThemedView>
          <ThemedText>Recent Searches</ThemedText>
          <ThemedText>Search Results will appear here</ThemedText>
        </ThemedView>
        
        <FlatList
          data={[]}
          renderItem={({ item }) => (
            <ThemedView>
              <ThemedText>{item?.title}</ThemedText>
            </ThemedView>
          )}
          keyExtractor={(item) => item?.id}
        />
      </ThemedView>
    </ParallaxScrollView>
  )
}

const styles= StyleSheet.create(
  {
    headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
    searcharea: {
      height:50,
      borderWidth:1,
      borderColor:"#ccc",
      borderRadius:8,
      padding: 20,
      fontSize:18
    }

});