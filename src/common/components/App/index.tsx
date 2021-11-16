import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../../../pages/HomePage";
import UserCreationPage from "../../../pages/UserCreationPage";
import UserDetailsPage from "../../../pages/UserDetailsPage";
import { GlobalStyle } from "../../styles";

const App: React.FC = () => (
 <>
  <GlobalStyle />
  <Routes>
   <Route path="/" element={<HomePage />} />
   <Route path="users" element={<HomePage />} />
   <Route path="users/add" element={<UserCreationPage />} />
   <Route path="users/:userId" element={<UserDetailsPage />} />
   <Route path="*" element={<HomePage />} />
  </Routes>
 </>
);

export default App;
