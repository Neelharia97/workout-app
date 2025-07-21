import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { SignIn } from "./components/signIn";
import { Profile } from "./components/profile";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/signin" />} />

        {/* SignIn Page */}
        <Route path="/signin" element={<SignIn />} />

        {/* Profile Page with user_id query param */}
        <Route path="/profile" element={<Profile />} />

        {/* Optional: Catch-all for 404 */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
