import { useEffect } from "react";
import { useLogin } from "../contexts/login-context";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";

const StartupNavigation = ({ navigation }) => {
  const { setIsLoggedIn } = useLogin();
  const { getItem } = useAsyncStorage("@name");

  useEffect(() => {
    
    const checkName = async () => {
      try {
        const storedName = await getItem();
        if (!storedName) {
          // If no name is stored, navigate to the welcome screen
          navigation.navigate("Welcome");
        } else {
          setIsLoggedIn(true);
          // If a name is stored, set isLoggedIn to true and navigate to the root navigation
          navigation.navigate("Root");
        }
      } catch (error) {
        // Handle any errors that occur during AsyncStorage operations
        console.log("Error reading name from AsyncStorage:", error);
      }
    };
    checkName();    
  }, []);
  return <ActivityIndicator size='large' />; // Return null or a loading screen while determining the initial screen
};

export default StartupNavigation;
