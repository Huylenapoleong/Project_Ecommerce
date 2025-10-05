import { Image } from 'expo-image'
import { router } from 'expo-router'
import React from 'react'
import { Pressable } from 'react-native'
import { ThemedText } from './themed-text'

export default function ProductCard({ product }) {
  return (
    <Pressable onPress={() => {router.navigate(`/detail/${product.id}`)}}  style={{ flex: 1, margin: 5, padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}>
        <Image source={{ uri: product.image }} style={{ width: '100%', height: 150, borderRadius: 5 }} />
        <ThemedText style={{ fontWeight: 'bold' }}>{product.name}</ThemedText>
        <ThemedText>{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</ThemedText>
    </Pressable>
  )
}
