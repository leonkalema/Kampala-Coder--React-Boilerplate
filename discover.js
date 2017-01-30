'use strict'
import React from 'react';

export default class Discover extends React.Component {
    constructor(props){
        super(props);
        console.log("discover data",this.props)
        this.state={
            language : "english",
            heading2 : "Discover what all the buzz is about!",
            paragraph2 : "Our app is available on any mobile device! Download now to get started!",
            }
    }
componentDidMount(){
    if (this.props.data) {
        this.setState({heading2:this.props.data.French.Section2.heading2,paragraph2:this.props.data.French.Section2.paragraph2})
    }
}
   render() {
      if(this.state.language === "english"){
        return (
            <div>
                <section id="download" className="download bg-primary text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <h2 className="section-heading">{this.state.heading2}</h2>
                                <p>{this.state.paragraph2}</p>
                                <div className="badges">
                                    <a className="badge-link" href="#"><img src="img/google-play-badge.svg" alt="" /></a>
                                    <a className="badge-link" href="#"><img src="img/app-store-badge.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
          );
      }
   }
}

