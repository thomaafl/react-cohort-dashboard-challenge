import HomeLogo from "./HomeLogo";
import ProfileLogo from "./ProfileLogo";
import "../LeftMenu/LeftMenu.css"

export default function LeftMenu() {


    return (
        <>
            <nav className="left-menu">

                
                <button className="home-logo">
                    <HomeLogo />
                </button>

                <button className="profile-logo">
                    <ProfileLogo />
                </button>

            </nav>
        </>
    )
}