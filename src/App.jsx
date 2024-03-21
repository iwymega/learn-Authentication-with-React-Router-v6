import { Routes, Route, useRoutes } from "react-router-dom";
import { LoginPage } from "./pages/Login";;
import { HomePage } from "./pages/Home";
import { Secret } from "./pages/Secret";
import { Verify2FA } from "./pages/Verify2FA";

import "./App.css";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/verify-2fa" element={<Verify2FA />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/secret"
          element={
            <ProtectedRoute>
              <Secret />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;


// export default function App() {
//   const routes = useRoutes([
//     {
//       path: "/",
//       element: <HomePage />
//     },
//     {
//       path: "/login",
//       element: <LoginPage />
//     }
//   ]);
//   return routes;
// }

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />}></Route>
//       <Route path="/login" element={<LoginPage />}></Route>
//     </Routes>
//   );
// }

// export default App;