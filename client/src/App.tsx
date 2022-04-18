import { AuthProvider } from "./auth/AuthContext";
import { Navigation } from "./routes/Navigation";

function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

export default App;
