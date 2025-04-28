import Mappingnews from "./Component/Mappingnews";
import Newspage from "./Component/Newspage";
import Header from "./Component/Header/Header";
import { useState,useEffect } from "react";
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
  return (
    <>
      <Header installfun={handleInstallClick} showbtn={showInstallBtn} />
      <Mappingnews />
      
    </>
  );
}
export default App;
