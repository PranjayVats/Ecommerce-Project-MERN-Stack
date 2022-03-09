import React from 'react';
import playstore from "../../../images/playstore.png";
import appstore from "../../../images/appstore.png";
import "./Footer.css"

function Footer() {
    return (
        <footer id = "footer">
            <div className= "leftFooter">
            <h4>DOWNLOAD OUR APP</h4>
            {/* <p>Download our app for Android and IOS mobile phone</p> */}
            <img src= {playstore} alt='playstore'/>
            <img src = {appstore} alt='appstore'/>
            </div>
            <div className= "midFooter">
                <h1>ECOMMERCE APP</h1>
                <p>QUALITY SHOULD NOT BE COMPROMISED</p>
                <p>Copyright 2021 &copy; PranjayVats</p>
            </div>
            <div className= "rightFooter">
                <h4>Follow Us</h4>
                <a href="https://www.linkedin.com/in/pranjay-vats-4bb250205/">LinkedIn</a>
                <a href="https://github.com/PranjayVats">Github</a>
                
            </div>


        </footer>
    )
}

export default Footer
