import { Image } from 'expo-image'
import React from 'react'
import { ThemedText } from './themed-text'
import { ThemedView } from './themed-view'

export default function ProductCard({ product }) {
  return (
    <ThemedView style={{ flex: 1, margin: 5, padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}>
        <Image source={{ uri: product.image }} style={{ width: '100%', height: 150, borderRadius: 5 }} />
        <ThemedText style={{ fontWeight: 'bold' }}>{product.name}</ThemedText>
        <ThemedText>{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</ThemedText>
    </ThemedView>
  )
}
