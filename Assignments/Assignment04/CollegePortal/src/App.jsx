import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/_01homePage/homeComponents/Header";

function App() {
  return (
    <>
      <Header />
      <img
        style={{
          width:"100%",
          borderRadius:"50px"
        }}
        src="https://server.wallpaperalchemy.com/storage/wallpapers/92/windows-xp-wallpaper-bliss-4k-wallpaper.jpeg"
        alt="Website Under Development"
      />
    </>
  );
}

export default App;
