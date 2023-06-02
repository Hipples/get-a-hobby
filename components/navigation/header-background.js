import { LinearGradient } from "expo-linear-gradient";
import { highlights, shadows } from "../../constants/theme";

const HeaderBackground = () => (
    <LinearGradient 
        colors={[highlights.tertiary, shadows.tertiary]}
        style={{flex: 1}} />
);

export default HeaderBackground;