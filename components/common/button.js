import { Pressable, Text } from "react-native";

const Button = ({ label, buttonStyle, labelStyle, onPress }) => (
    <Pressable
        style={({ pressed }) => [{
            opacity: pressed ? 1 : .85
        }, buttonStyle]}
        onPress={onPress}>
        <Text style={labelStyle}>{label}</Text>
    </Pressable>
);

export default Button;