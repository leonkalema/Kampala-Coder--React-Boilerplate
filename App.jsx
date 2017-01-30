import React from 'react';
import ReactDOM from 'react-dom';
import Discover from './discover';
import Header from './Header';
import Unlimited from './unlimited';
import Left_body from './left_body';
import Right_body from './right_body';
import Stop_waiting from './Stop_waiting';
import New_friends from './new_friends';
import Footer from './footer'

export default class App extends React.Component {
    constructor(){
        super();
        

        this.state={
            language : "english",
            title : "Start Bootstrap Theme",
            nav : ["Download", "Features", "Contact", "Language"],

            other_data : '',
            btn_value:'',
            all_data:''
            }
        this.French = this.French.bind(this);
    }

    French(){
        var click = document.getElementById('french').value;
        var data = $.getJSON('./language.json',(data)=>{
            this.setState({language:'French',title:data.French.Header.title,nav:data.French.Header.nav,other_data:data,btn_value:click});

            ReactDOM.render(<Header  data={this.state.other_data} /> , document.getElementById('head'));
            ReactDOM.render(<Discover  data={this.state.other_data} /> , document.getElementById('dis'));
            ReactDOM.render(<Unlimited  data={this.state.other_data} /> , document.getElementById('unlimited'));
            ReactDOM.render(<Right_body  data={this.state.other_data} /> , document.getElementById('right_body'));
            ReactDOM.render(<Stop_waiting  data={this.state.other_data} /> , document.getElementById('stop_waiting'));
            ReactDOM.render(<New_friends  data={this.state.other_data} /> , document.getElementById('friends'));
            ReactDOM.render(<Footer  data={this.state.other_data} /> , document.getElementById('footer'));

        });
        
    }

   render() {
   
   
         return (
            <div>
                 <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                            </button>
                            <a className="navbar-brand page-scroll" href="#page-top">{this.state.title}</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a className="page-scroll" href="#download">{this.state.nav[0]}</a>
                                </li>
                                <li>
                                    <a className="page-scroll" href="#features">{this.state.nav[1]}</a>
                                </li>
                                <li>
                                    <a className="page-scroll" href="#contact">{this.state.nav[2]}</a>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.state.nav[3]}<span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                    <li id="french" value="french" onClick={this.French}><a>French</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div id='head'>
                    <Header ref='remove_header' />
                </div>
                <div id="dis">
                    <Discover ref='remove_discover'/>
                </div>
               
                <section id="features" className="features">
                    <div className="container">
                        <div className="row">
                            <div id="unlimited">
                                <Unlimited />
                            </div>
                        </div>
                        <div className="row">
                            <Left_body />
                            <div id="right_body">
                                <Right_body />
                            </div>
                        </div>
                    </div>
                </section>
                <div id="stop_waiting">
                    <Stop_waiting />
                </div>
                <div id="friends">
                    <New_friends />
                </div>
                <div id="footer">
                    <Footer /> 
                </div>
                  
            </div>
          );
   
  
       
   }
   
}

