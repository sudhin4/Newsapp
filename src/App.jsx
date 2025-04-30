import Mappingnews from "./Component/Mappingnews";
import Newspage from "./Component/Newspage";
import Header from "./Component/Header/Header";
import { useState, useEffect } from "react";
import Mobilefront from "./Component/MobileFrontpage/Mobilefront";
import "../src/App.css";
import MappingnewsMobile from "./Component/MobileFrontpage/MappingnewsMobile";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallBtn, setShowInstallBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBtn(true);
    });
  }, []);
  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("App installed");
        } else {
          console.log("App installation rejected");
        }
        setDeferredPrompt(null);
        setShowInstallBtn(false);
      });
    }
  };

  // gettting the topic for mobile phone

  const [topic, settopic] = useState();

  function gettopicfrommobile(value) {
    settopic(value);
    console.log(value);
  }

  return (
    <>
        <Header installfun={handleInstallClick} showbtn={showInstallBtn} />
        <div className="desktop_pagediv">
          <Mappingnews />
        </div>

        <div className="MobileFront_pagediv">
          
            <Routes>
              <Route
                path="/"
                element={<Mobilefront gettopicfunction={gettopicfrommobile} />}
              />
              <Route path="/:topicc" element={<MappingnewsMobile />} />
            </Routes>
          
        </div>
      
    </>
  );
}
export default App;
