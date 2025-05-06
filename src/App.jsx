import React from "react";
import { SubContainer, Navigation, Header, AboutUs } from "./subcontainer.jsx";
import Programs from "./Programs.jsx";
const App = () => {
  return (
    <div className="container">
      <SubContainer />
      <Navigation />
      <Header />
      <AboutUs />
      <Programs />
    </div>
  );
};

export default App;
