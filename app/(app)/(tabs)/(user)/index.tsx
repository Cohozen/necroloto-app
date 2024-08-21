import { useUser, useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text, View, Button } from "react-native";

export default function Index() {
    const { user } = useUser();
    const { getToken, signOut } = useAuth();

    const getMovies = async () => {
        try {
            const token = await getToken();

            const response = await fetch("http://192.168.1.88:4000/", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const json = await response.json();
            console.error(json);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View>
            <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
            <Button title="Test api" onPress={getMovies} />
            <Button title="logout" onPress={() => signOut()} />
            <Link href="/details">
                <Text>Details</Text>
            </Link>
        </View>
    );
}
