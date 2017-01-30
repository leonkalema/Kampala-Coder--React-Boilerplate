'use strict'
import React from 'react';

export default class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            language : "english",
            copyrights: "2016 Start Bootstrap. All Rights Reserved.",
            list:["Privacy","Terms","FAQ"]
            }
    }
componentDidMount(){
    if (this.props.data) {
        this.setState({copyrights:this.props.data.French.Footer.copyrights,list:this.props.data.French.Footer.list})
    }
}
   render() {
      if(this.state.language === "english"){
        return (
          <div>
            <footer>
              <div className="container">
                <p>&copy; {this.state.copyrights}</p>
                  <ul className="list-inline">
                    <li>
                      <a href="#">{this.state.list[0]}</a>
                    </li>
                    <li>
                        <a href="#">{this.state.list[1]}</a>
                    </li>
                    <li>
                      <a href="#">{this.state.list[2]}</a>
                    </li>
                  </ul>
              </div>
            </footer>
          </div>
          );
      }
   }
}

