import ParallaxScrollView from '@/components/parallax-scroll-view'
import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import { IconSymbol } from '@/components/ui/icon-symbol'
import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

export default function FavouriteScreen() {
  return (
    <ParallaxScrollView headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
          headerImage={
            <IconSymbol
              size={310}
              color="#808080"
              name="heart.fill"
              style={styles.headerImage}
            />
          }>
      {/* Custom help me */}
      <ThemedView>
        <ThemedText style={{ fontWeight: 'bold', fontSize: 24 }}>Favourite</ThemedText>
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
  }
});