import ParallaxScrollView from '@/components/parallax-scroll-view'
import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import { IconSymbol } from '@/components/ui/icon-symbol'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function ProfileScreen() {
  return (
    <ParallaxScrollView headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
          headerImage={
            <IconSymbol
              size={310}
              color="#808080"
              name="person.fill"
              style={styles.headerImage}
            />
          }>
      {/* Custom for logined and no login */}
      <ThemedView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
        <ThemedText style={{ fontSize: 18, textAlign: 'center' }}>
          Profile
        </ThemedText>
      </ThemedView>
      <ThemedView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
        <ThemedText style={{ fontSize: 18, textAlign: 'center' }}>
          More features are under development...
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  )
}

const styles= StyleSheet.create(
  {
    headerImage: {
    color: '#808080',
    position: 'absolute',
  }
});