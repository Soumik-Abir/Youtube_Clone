import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import "./_app.scss";
import { useSelector } from "react-redux";
import WatchScreen from "./screens/watchScreen/WatchScreen";
import SearchScreen from "./screens/SearchScreen";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main ">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  const { accessToken, loading } = useSelector(state => state.auth)

  const navigate = useNavigate();


   useEffect(() => {
      if (!loading && !accessToken) {
        navigate('/auth')
      }
   }, [accessToken, loading, navigate])

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomeScreen />
            </Layout>
          }
        />
        <Route path="/auth" element={<LoginScreen />} />
        <Route
          path="/search/:query"
          element={
            <Layout>
              <SearchScreen/>
            </Layout>
          }
        />
        <Route
          path="/watch/:id"
          element={
            <Layout>
              <WatchScreen/>
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
