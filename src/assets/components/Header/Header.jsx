import HeaderLogo from "./Logo"
import "../Header/Header.css"
import ProfileLogo from "../SharedIcons/ProfileLogo"

export default function Header() {
    
    return (

        <header className="header">
            <div className="header-logo">
                <HeaderLogo />
            </div>

            <div className="profile-logo-header">
                <ProfileLogo />
            </div>
                

         
        </header>
    )
}