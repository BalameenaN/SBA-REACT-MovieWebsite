import logo from '../image/hub-logo.png'
import fb from '../image/fb-edit.png'
import insta from '../image/insta-edit.png'


export default function Header(){
    console.log("inside HEader");
    return(
        <>
        <div className='header-container'>
        <img className="img" src={logo} />
        <div className='header-right'>
        <h3>Videos</h3>
        <h3>News</h3>
        <h3>About</h3>
        <img className='logo' src={fb} />
        <img className='logo' src={insta} />
        </div>
        </div>
        </>
    )
}