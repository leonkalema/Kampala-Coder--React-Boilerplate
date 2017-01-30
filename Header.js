'use strict'
import React from 'react';

export default class Header extends React.Component {
    constructor(props){
        super(props);
         this.state={
            language : "english",
            heading : "New Age is an app landing page that will help you beautifully showcase your new mobile app, or anything else!",
            button : "Start Now for Free!",
            }
            
    }
componentDidMount(){
    if (this.props.data) {
        this.setState({heading:this.props.data.French.Section1.heading,button:this.props.data.French.Section1.button})
    }
}

   render() {
        return (
            <div>
                 <header>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-7">
                                <div className="header-content">
                                    <div className="header-content-inner">
                                        <h1>{this.state.heading}</h1>
                                        <a href="#download" className="btn btn-outline btn-xl page-scroll">{this.state.button}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <div className="device-container">
                                    <div className="device-mockup iphone6_plus portrait white">
                                        <div className="device">
                                            <div className="screen">
                                                <img src="img/demo-screen-1.jpg" className="img-responsive" alt="" />
                                            </div>
                                            <div className="button">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
               
            </div>
          );
   }
}

