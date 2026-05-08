import { Route, Routes, Outlet } from "react-router-dom";

import MainNavbar from "./components/navbar/MainNavbar"
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Design from "./pages/design/Design";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";

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

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/design" element={<Design />} />
		<Route path="/cart" element={<Cart />} />
		<Route path="/profile" element={<Profile />} />
      </Route>
      {/* <Route element={<SecondaryLayout />}> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      {/* </Route> */}
    </Routes>
  );
};

export default App;