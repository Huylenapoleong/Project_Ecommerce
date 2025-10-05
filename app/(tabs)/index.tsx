import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import ProductCard from '@/components/product-card';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { productService } from '@/services/productService';
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';

export default function HomeScreen() {
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data= await productService.getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      setLoading(true);
      try {
        const data = await productService.getCategories();
        // x10 data
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="house.fill"
          style={styles.headerImage}
        />
      }
    >
      {loading ? (
        <ThemedView>
          <ActivityIndicator size="large" color="#E94141" style={{ marginTop: 20 }} />
          <ThemedText style={{ textAlign: 'center', marginTop: 10 }}>Loading...</ThemedText>
        </ThemedView>
      ) : categories && products ? (
        <>
          <ThemedText style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>
            Categories
          </ThemedText>
          <FlatList
            data={categories}
            renderItem={({ item }) => (
              <ThemedView style={{ padding: 10, borderWidth: 1, borderColor: '#ccc' }}>
                <Image source={{ uri: item.image }} style={{ width: '100%', height: 150, borderRadius: 5 }} />
                <ThemedText style={{ fontSize: 18, marginVertical: 5 }}>{item.name}</ThemedText>
              </ThemedView>
            )}
            keyExtractor={item => item.id}
          />
          <ThemedText style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 10, textAlign: 'center' }}>
            Products
          </ThemedText>
          <FlatList
            numColumns={2}
            data={products}
            renderItem={({ item }) => (
              <ProductCard product={item} />
            )}
            keyExtractor={item => item.id}
          />
        </>
      ) : (
        <ThemedView>
          <ThemedText style={{ textAlign: 'center', marginTop: 10 }}>No categories available.</ThemedText>
        </ThemedView>
      )}
    </ParallaxScrollView>
  );
}

const styles= StyleSheet.create(
  {
    headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
    container:{
      backgroundColor:"black",
    },
    head:{
       justifyContent:"flex-end",
       flex:1
    },
    image:{
      flex:3,
      backgroundColor:"white",
      flexDirection:"column"
    }
  }
)