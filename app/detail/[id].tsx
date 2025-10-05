import ParallaxScrollView from "@/components/parallax-scroll-view";
import Button from "@/components/themed-button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { productService } from "@/services/productService";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

export default function ProductDetail() {
    const { id } = useLocalSearchParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const data = await productService.getProductById(id);
                setProduct(data);
            } catch (error) {
                console.error("Failed to fetch product details:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProductDetails();
    }, [id]);

    if (loading) {
        return (
            <ThemedView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator color={'lightblue'} size="large" />
                <ThemedText>Loading...</ThemedText>
            </ThemedView>
        );
    }

    return (
        <ParallaxScrollView headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}>
            {product ? (
                <ThemedView style={styles.container}>
                    <Image source={{ uri: product?.image }} style={{ width: '100%', height: 200 }} />
                    <ThemedText style={styles.title}>
                        {product.name}
                    </ThemedText>
                    <ThemedText style={{ fontSize: 16, textAlign: 'center', marginTop: 10 }}>
                        {product?.description}
                    </ThemedText>
                    <ThemedText style={{ fontSize: 16, textAlign: 'center', marginTop: 10 }}>
                        Price: ${product.price}
                    </ThemedText>
                    <Button title="Buy" style={{ marginTop: 10, backgroundColor: 'lightblue', borderColor: 'lightblue' }} onPress={() => {router.back()}} />
                </ThemedView>
            ) : (
                <ThemedView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                    <ThemedText style={{ fontSize: 16, textAlign: 'center' }}>
                        Product not found
                    </ThemedText>
                    <Button title="Go Back" style={{ marginTop: 10 }} textStyle={{ color: 'blue' }} onPress={() => {router.back()}} />
                </ThemedView>
            )}
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
    },
});