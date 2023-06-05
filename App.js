import 'react-native-gesture-handler';

import UserProvider from './contexts/user-context';
import InitialNav from './navigation/initial-nav';

// navigation wrapper for entire app 
const App = () => (
    <UserProvider>
        <InitialNav />
    </UserProvider>
);

export default App;