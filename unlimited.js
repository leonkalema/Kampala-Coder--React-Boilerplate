'use strict'
import React from 'react';

export default class Unlimited extends React.Component {
    constructor(props){
        super(props);
        this.state={
            language : "english",
            heading3 : "Unlimited Features, Unlimited Fun",
            paragraph3 : "Check out what you can do with this app theme!",
            }
    }
componentDidMount(){
  console.log("Unlimited",this.props);
    if (this.props.data) {
        this.setState({heading3:this.props.data.French.Section3.heading3,paragraph3:this.props.data.French.Section3.paragraph3})
    }
}
   render() {
      if(this.state.language === "english"){
        return (
           <div>
                <div className="col-lg-12 text-center">
                    <div className="section-heading">
                        <h2>{this.state.heading3}</h2>
                        <p className="text-muted">{this.state.paragraph3}</p>
                        <hr />
                    </div>
                </div>
           </div>
          );
      }
   }
}

