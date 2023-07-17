import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import NavBar from "./routes/navBar/navBar.component";
import Tst from "./routes/tst/tst.component";
import SignIn from "./routes/sign-in/sign-in.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="tst" element={<Tst />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
