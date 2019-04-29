import React from 'react';
import iosimg from './Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';
import './App.css';

class Storeapp extends React.Component{
    render(){
        return(
            <div>
                {/* Header images and name */}
                <div>
                    <img />
                    <h2>My Smartfren App</h2>
                </div>

               

             {/*Button with flex row */}
                <div>
                        {/* Content */}
                    <div>
                        <h3>Download My Smartfren App from </h3>
                    </div>
                    <div className="but">
                        <a href="http://play.google.com/store/apps/details?id=com.smartfren&hl=en">
                            <img className="imggplay" src={"https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"} />
                        </a> 
                        <a href="https://itunes.apple.com/id/app/mysmartfren/id1209898190?mt=8">
                            <img className="imgios" src={iosimg}/>
                        </a>
                    </div>
                </div>

            </div>
        )       
    }
}

export default Storeapp;