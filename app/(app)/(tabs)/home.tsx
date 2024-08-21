import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            {/*<Link href="/profile" style={styles.link}>*/}
            {/*    View details*/}
            {/*</Link>*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    link: {
        paddingTop: 15
    }
});
