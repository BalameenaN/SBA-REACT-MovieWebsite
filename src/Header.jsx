import logo from '../image/logo2.jpg'
import fb from '../image/facebook_edit.jpg'
import insta from '../image/insta.jpg'


export default function Header(){
    console.log("inside HEader");
    return(
        <>
        <div className='header-container'>
        <img className="img" src={logo} />
        <input type="text" placeholder="Find whatever you want" />
        <div className='header-right'>
        <p>Videos</p>
        <p>News</p>
        <p>About</p>
        <img className='logo' src={fb} />
        <img className='logo' src={insta} />
        </div>
        </div>
        </>
    )
}