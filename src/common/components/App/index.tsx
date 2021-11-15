import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../../../pages/HomePage";
import { GlobalStyle } from "../../styles";

const App: React.FC = () => (
 <>
  <GlobalStyle />
  <Routes>
   <Route path="/" element={<HomePage />} />
   <Route path="users" element={<HomePage />} />
   <Route path="users/:userId" element={(<div>'this is'</div>)} />
  </Routes>
 </>
);

export default App;
