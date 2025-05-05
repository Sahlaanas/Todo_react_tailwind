import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Sample from "./components/Sample";

function App() {
  return (
    <div className="min-h-screen justify-center items-center text-bodycolor flex p-[20px] bg-gradient-to-r from-[#f0f4ff] to-[#f9faff] ">
      <div className="bg-(--appcontainer) rounded-3xl shadow-(--containershadow) max-w-lg w-full overflow-hidden border border-white/20 backdrop-blur-sm">
        <Header />
        <Main />
        {/* <Main /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
