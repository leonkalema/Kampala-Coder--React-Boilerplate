'use strict'
import React from 'react';

export default class Stop_waiting extends React.Component {
    constructor(props){
        super(props);
        this.state={
            language : "english",
            waiting : ["Stop waiting.","Start building."],
            let_get_started : "Let's Get Started!"
            }
    }
componentDidMount(){
    if (this.props.data) {
        this.setState({waiting:this.props.data.French.Section4.heading4,let_get_started:this.props.data.French.Section4.button4})
    }
}
   render() {
      if(this.state.language === "english"){
        return (
           <div>
              <section className="cta">
                <div className="cta-content">
                  <div className="container">
                    <h2>{this.state.waiting[0]}<br />{this.state.waiting[1]}</h2>
                    <a href="#contact" className="btn btn-outline btn-xl page-scroll">{this.state.let_get_started}</a>
                  </div>
                </div>
                <div className="overlay"></div>
              </section>
           </div>
          );
      }
   }
}

