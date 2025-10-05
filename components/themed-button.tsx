import { useThemeColor } from '@/hooks/use-theme-color';
import React from 'react';

import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

export type ButtonProps = PressableProps & {
    lightColor?: string;
    darkColor?: string;
    title: string;
    onPress: () => void;
    style?: object;
    textStyle?: object;
};

export default function Button({style, textStyle, lightColor, darkColor, title, onPress, ...otherProps}: ButtonProps) {
    const backgroundColor = useThemeColor({ light: darkColor, dark: lightColor }, 'background');
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    return (
        <Pressable
            style={[{ backgroundColor }, styles.button, style]}
            onPress={onPress}
            {...otherProps}
        >
            <Text style={[{ color, fontSize: 16 }, textStyle]}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    }
});
