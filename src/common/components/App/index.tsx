import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../../../pages/HomePage";
import UserDetailsPage from "../../../pages/UserDetailsPage";
import { GlobalStyle } from "../../styles";

const App: React.FC = () => (
 <>
  <GlobalStyle />
  <Routes>
   <Route path="/" element={<HomePage />} />
   <Route path="users" element={<HomePage />} />
   <Route path="users/:userId" element={<UserDetailsPage />} />
  </Routes>
 </>
);

export default App;
