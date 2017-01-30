'use strict'
import React from 'react';

export default class Right_body extends React.Component {
    constructor(props){
        super(props);
        this.state={
            language : "english",
            block1 : ["Device Mockups", "Ready to use HTML/CSS device mockups, no Photoshop required!"],
            block2 : ["Flexible Use", "Put an image, video, animation, or anything else in the screen!"],
            block3 : ["Free to Use", "As always, this theme is free to download and use for any purpose!"],
            block4 : ["Open Source", "Since this theme is MIT licensed, you can use it commercially!"],
            }
    }
componentDidMount(){
    if (this.props.data) {
        this.setState({block1:this.props.data.French.Section3.block1,block2:this.props.data.French.Section3.block2,
            block3:this.props.data.French.Section3.block3,block4:this.props.data.French.Section3.block4})
    }
}
   render() {
      if(this.state.language === "english"){
        return (
           <div>
                <div className="col-md-8">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="feature-item">
                                    <i className="icon-screen-smartphone text-primary"></i>
                                    <h3>{this.state.block1[0]}</h3>
                                    <p className="text-muted">{this.state.block1[1]}</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="feature-item">
                                    <i className="icon-camera text-primary"></i>
                                    <h3>{this.state.block2[0]}</h3>
                                    <p className="text-muted">{this.state.block2[1]}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="feature-item">
                                    <i className="icon-present text-primary"></i>
                                    <h3>{this.state.block3[0]}</h3>
                                    <p className="text-muted">{this.state.block3[1]}</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="feature-item">
                                    <i className="icon-lock-open text-primary"></i>
                                    <h3>{this.state.block4[0]}</h3>
                                    <p className="text-muted">{this.state.block4[1]}</p>
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

