import Navigation from "./src/navigation/Navigation";
import './src/i18n';
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
    return (
        <AuthProvider>
          <Navigation />
        </AuthProvider>
    );
}
