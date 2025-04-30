import "../Header/Header.css";
import { MdDownload } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Header({ installfun, showbtn }) {
  const naviagate = useNavigate();

  function gotohomepage(){
    naviagate('/')
  }
  return (
    <>
      <div className="whole_header_component">
        <div className="content">
          <h2 className="Logo_namee" onClick={gotohomepage}> News App</h2>
          {showbtn && (
            <button className="download_btn" onClick={installfun}>
              <MdDownload className="download_icon" />
              Download App
            </button>
          )}
        </div>
      </div>
    </>
  );
}
export default Header;
