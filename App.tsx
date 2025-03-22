import Navigation from "./src/navigation/Navigation";
import './src/i18n';
import { AuthProvider } from "./src/context/AuthContext";
import GlobalAlertProvider from "./src/components/GlobalAlert";

export default function App() {
    return (
        <GlobalAlertProvider>
            <AuthProvider>
                <Navigation />
            </AuthProvider>
        </GlobalAlertProvider>
    );
}
