import { Route, Routes, Outlet } from "react-router-dom";

// import UD from "./pages/UnderConstructionPage"
import MainNavbar from "./components/navbar/MainNavbar"
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Design from "./pages/design/Design";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import PrivacyPolicy from "./pages/privacyPolicy";
import Terms from "./pages/terms";
import Ship from "./pages/shipInfo";
import Nfound from "./pages/nFound";

// import SecondaryNavbar from "./components/navbar/SecondaryNavbar";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

const MainLayout = () => {
  return (
    <>
      <MainNavbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

// const SecondaryLayout =() => {
//   return (
//     <>
//       <SecondaryNavbar />
//       <main>
//         <Outlet />
//       </main>
//     </>
//   );
// };

import Latest from './pages/design/Types/Latest'
import Trending from './pages/design/Types/Trending'
import Abstract from './pages/design/Types/Abstract'
import Typography from './pages/design/Types/Typography'
import Minimalist from './pages/design/Types/Minimalist'

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/design" element={<UD />} /> */}
        <Route path="/design" element={<Design />}>
          <Route path="latest" element={<Latest />} />
          <Route path="trending" element={<Trending />} />
          <Route path="abstract" element={<Abstract />} />
          <Route path="typography" element={<Typography />} />
          <Route path="minimalist" element={<Minimalist />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      {/* <Route element={<SecondaryLayout />}> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="/shipping-info" element={<Ship />} />
        <Route path="*" element={<Nfound />} />
      {/* </Route> */}
    </Routes>
  );
};

export default App;