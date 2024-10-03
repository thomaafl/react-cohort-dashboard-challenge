import "../Profile/Profile.css";
import ProfileLogo from "../SharedIcons/ProfileLogo";

export default function Profile() {
    return (
        <>
            <div className="profile-container">
            <h2 className="title">Profile</h2>
            <div className="profile-card">
            <div className="profile-header">
                <ProfileLogo/>
                <h3 className="profile-name">Name</h3>
            </div>
            <div className="profile-info1">
                <div className="account-info">
                <hr className="post-divider1" />
                    <h4>Account Info</h4>
                    <p>First Name*</p>
                    <input type="text" name="firstName" value={"Faren din"}/>
                    <p>Last Name*</p>
                    <input type="text" name="lastName" value={"Faren din"}/>
                    <p>Username*</p>
                    <input type="text" name="username" value={"Faren din"}/>
                    <p>Email*</p>
                    <input type="text" name="email" value={"email"}/>
                </div>
                <div className="address-info">
                <hr className="post-divider1" />
                    <h4>Address Info</h4>
                    <p>Street</p>
                    <input type="text" name="street" value={"Faren din"}/>
                    <p>Suite</p>
                    <input type="text" name="suite" value={"Faren din"}/>
                    <p>City</p>
                    <input type="text" name="city" value={"Faren din"}/>
                    <p>Zipcode</p>
                    <input type="text" name="zipcode" value={"Faren din"}/>
                </div>
            </div>
            <div className="profile-info2">
                <div className="contact-info">
                <hr className="post-divider1" />
                    <h4>Contact Info</h4>
                    <p>Phone*</p>
                    <input type="text" name="phone" value={"Faren din"}/>
                    <p>Website</p>
                    <input type="text" name="website" value={"Faren din"}/>
                    <p className="required">Required*</p>
                    
                </div>
                <div className="company-info">
                <hr className="post-divider1" />
                    <h4>Company Info</h4>
                    <p>Name</p>
                    <input type="text" name="companyName" value={"Faren din"}/>
                    <p>catch Phrase</p>
                    <input type="text" name="catchPhrase" value={"Faren din"}/>
                    <p>Buisness Statement</p>
                    <input type="text" name="buisnessStatement" value={"Faren din"}/>
                </div>
            </div>
            <button className="profile-button">Save or Edit</button>
        </div>
        </div>
    </>
    )
}