'use strict'
import React from 'react';

export default class Left_body extends React.Component {
    constructor(){
        super();
        this.state={
            language : "english",
            }
    }

   render() {
      if(this.state.language === "english"){
        return (
           <div>
                <div className="col-md-4">
                    <div className="device-container">
                        <div className="device-mockup iphone6_plus portrait white">
                            <div className="device">
                                <div className="screen">
                                    <img src="img/demo-screen-1.jpg" className="img-responsive" alt="" /> </div>
                                <div className="button">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
          );
      }
   }
}

