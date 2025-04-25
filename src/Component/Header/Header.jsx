import '../Header/Header.css'
import { MdDownload } from "react-icons/md";


function Header(){
    return(
        <>
        <div className="whole_header_component">
            <div className="content">
                <h2 className="Logo_name">News App</h2>
                <button className='download_btn'><MdDownload className='download_icon'/>Download App</button>
            </div>
        </div>
        </>
    )
}
export default Header;