import React from "react";
import ChildrenImage from "./assets/images/happy-kids-studying-and-learning-vector.jpg";

const Navigation = () => {
  return (
    <div className="flex justify-end">
      <ul className=" flex gap-4 py-2 px-4">
        <li>
          <a href="">Home</a>
        </li>

        <li>
          <a href="">About Us</a>
        </li>

        <li>
          <a href="">Programs</a>
        </li>

        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex flex-col items-center items-center gap-2 mx-auto w-full p-4">
      <h1 className="text-4xl font-bold">Welcome to Ankelba Daycare</h1>
      <h2 className="text-xl font-semibold ">
        Rooted in tradition, wrapped in love.{" "}
      </h2>
      <p className="text-xs font-extrathin">
        በባህላችን ላይ የተመሰረተ፣ ፍቅርን የተላበሰ እንክብካቤ።
      </p>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="flex gap-4 p-8">
      <div className="info p-4 flex flex-col gap-4">
        <h3 className="font-semibold text-xl self-center">
          What is Ankelba? <span></span>
        </h3>

        <p>
          Ankelba is more than a traditional piece of clothing used as a
          strap—it’s a symbol of the bond between mother and child. It carries
          with it generations of care, closeness, and protection.
        </p>

        <h3 className="font-semibold text-xl self-center">
          How it represents us
        </h3>
        <p>
          At Ankelba Daycare, we carry that same spirit into everything we do.
          We provide a safe, nurturing space where your little ones can grow,
          play, and learn—held not just in arms, but in heart. Inspired by the
          inherent values of our community: warmth, and responsibility, our care
          wraps each child in the same comfort and security as the ankelba
          itself.
        </p>
      </div>
      <div className="w-full">
        <img
          src={ChildrenImage}
          alt=""
          className="h-80 w-full object-fit p-4"
        />
      </div>
    </div>
  );
};

const SubContainer = () => {
  <Navigation />;
  <Header />;
  <AboutUs />;
};

export { SubContainer, Navigation, Header, AboutUs };
