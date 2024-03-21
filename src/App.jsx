import { Routes, Route, useRoutes } from "react-router-dom";
import { LoginPage } from "./pages/Login";;
import { HomePage } from "./pages/Home";

import "./App.css";

export default function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/login",
      element: <LoginPage />
    }
  ]);
  return routes;
}

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />}></Route>
//       <Route path="/login" element={<LoginPage />}></Route>
//     </Routes>
//   );
// }

// export default App;