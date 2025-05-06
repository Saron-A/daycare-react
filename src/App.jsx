import React from "react";
import { SubContainer, Navigation, Header, AboutUs } from "./subcontainer.jsx";
import Programs from "./Programs.jsx";
import Contact from "./Contact.jsx";
const App = () => {
  return (
    <div className="container">
      <SubContainer />
      <Navigation />
      <Header />
      <AboutUs />
      <Programs />
      <Contact />
    </div>
  );
};

export default App;
