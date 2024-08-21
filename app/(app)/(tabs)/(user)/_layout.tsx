import { Stack } from "expo-router/stack";

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#ff0000"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold"
                }
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="details" />
        </Stack>
    );
}
