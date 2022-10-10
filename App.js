import React from 'react';
// import { Routes, Route } from 'react-router-dom';

// import Layout from './signUp/components/Layout/Layout';
// import UserProfile from './signUp/components/Profile/UserProfile';
// import AuthPage from './signUp/pages/AuthPage';
// import HomePage from './signUp/pages/HomePage';
// import Header from './components/header/Header';
import Form from './components/form/Form';
// import Footer from "./components/footer/Footer";

const App = () => {
    
  return (
    <>
      {/* <Header />  */}
      <Form />
      {/* <Footer /> */}
      {/* <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/auth" element={<AuthPage />}></Route>
          <Route path="/profile" element={<UserProfile />}></Route>
        </Routes>
      </Layout> */}
    </>
  );
}

export default App;