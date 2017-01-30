'use strict'
import React from 'react';

export default class New_friends extends React.Component {
    constructor(props){
        super(props);
        this.state={
            language : "english",
            friends : [ "We", "new friends!"]
            
            }
    }
componentDidMount(){
    if (this.props.data) {
        this.setState({friends:this.props.data.French.Section5.heading5})
    }
}
   render() {
      if(this.state.language === "english"){
        return (
           <div>
              <section id="contact" className="contact bg-primary">
                <div className="container">
                  <h2>{this.state.friends[0]} <i className="fa fa-heart"></i> {this.state.friends[1]}</h2>
                  <ul className="list-inline list-social">
                    <li className="social-twitter">
                      <a href="#"><i className="fa fa-twitter"></i></a>
                    </li>
                    <li className="social-facebook">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                    </li>
                    <li className="social-google-plus">
                        <a href="#"><i className="fa fa-google-plus"></i></a>
                    </li>
                  </ul>
                </div>
              </section>
           </div>
          );
      }
   }
}

