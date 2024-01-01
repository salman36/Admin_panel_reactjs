import './App.css';
import Router from "./routes";
import { AuthProvider } from "./hooks/useAuth";
import axios from "axios";

axios.defaults.baseURL = "https://starter-express-api-rose.vercel.app/api";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>

    
  );
}

export default App;
