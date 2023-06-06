import images from '../images/hc-logo.png'

export default function Navbar(){
    return(
        <>
        <nav>
        <img src={images} alt="Handout-connect logo " 
         logo className="nav-logo" />
            {/* <ul>
                <li>Home</li>
                <li>Materials</li>
                <li>Community</li>
                <li>About</li>
            </ul> */}
        </nav>
        </>
    )
}