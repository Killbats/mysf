import React from 'react';
import iosimg from './Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';
import './App.css';
import rec from './rectangle.png';
import imghead from './logo.png';

class Storeapp extends React.Component{
    render(){
        return(

      <div>
            <div >
                {/*header  */}
              
              <div className="App-Header">
              <img className="imghead" src={imghead} />
              
              </div>
            
            </div>
              <div className="rectang">
              <img className="imgrec" src={rec}/>
              
              </div>
              <div className="mysf">
              <img src={"https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/64/6d/38/646d38a4-15ad-ceab-10ed-ddb2b90f7bee/AppIcon-0-1x_U007emarketing-0-0-85-220-0-10.png/246x0w.jpg"}/>
              </div>
              
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