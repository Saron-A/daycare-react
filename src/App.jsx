import React from "react";
import { SubContainer, Navigation, Header, AboutUs } from "./subcontainer.jsx";

const App = () => {
  return (
    <div className="container">
      <SubContainer />
      <Navigation />
      <Header />
      <AboutUs />
    </div>
  );
};

export default App;
