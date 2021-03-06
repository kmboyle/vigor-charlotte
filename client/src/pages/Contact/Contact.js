
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Nav from "../../components/Nav";
import Header from "../../components/Header";

class Contact extends Component {


  render() {
    return (
      <Container fluid>
        <Nav />
        <main className="col-xs-12 col-sm-8 offset-sm-4 col-lg-9 offset-lg-3 col-xl-10 offset-xl-2 pt-3 pl-4">
        <Header>
          <h1 className="float-left text-center text-md-left">Contact</h1>
        </Header>
        <section>
          <div className="card card-inverse card-primary">
            <div class="card-block">
              <section className="row">
                <div class="col-lg-4 mb-4">
                  <div class="card-block">
                    <h3 className="card-title">Contact info</h3>
                    <h3>(980) 474 1124</h3>
                  </div>
                </div>
                <div class="col-lg-8 mb-8">
                  <div class="card-block">
                    <h3 className="card-title">Open By Appointment And Walk In</h3>
                    <h3>216 Iverson Way, Charlotte, NC 28203</h3>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <br />
          <div className="card">
            <iframe src="//www.google.com/maps/embed/v1/place?q=216+Iverson+Way,+Charlotte,+NC+28203%20Rd,%20US&zoom=15&key=AIzaSyB0GBwgrG183HMdL5EBK2Pt_jrNCN52izg"></iframe>
          </div>
        </section>
        <br />
        <section className="row">
          <div className="col-sm-12">
            <section className="row">
              
              <div className="col-sm-12 col-md-12">
                <div className="card mb-12">
                  <div className="card-block">
                    <h3 className="card-title">Contact us</h3>
                    
                    <div className="dropdown card-title-btn-container">
                      <button className="btn btn-sm btn-subtle dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><em className="fa fa-cog"></em></button>
                      
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton"><a className="dropdown-item" href="#"><em className="fa fa-search mr-1"></em> More info</a>
                        <a className="dropdown-item" href="#"><em className="fa fa-thumb-tack mr-1"></em> Pin Window</a>
                        <a className="dropdown-item" href="#"><em className="fa fa-remove mr-1"></em> Close Window</a></div>
                    </div>
                    
                    <h6 className="card-subtitle mb-2 text-muted">We are ready to answer all of your questions</h6>
                    
                    <form className="form-horizontal" action="/contact" method="post">
                      <fieldset>
                  
                        <div className="form-group">
                          <label className="col-12 control-label no-padding" for="name">Name</label>
                          
                          <div className="col-12 no-padding">
                            <input id="name" name="name" type="text" placeholder="Your name" className="form-control"></input>
                          </div>
                        </div>
                      
                        
                        <div className="form-group">
                          <label className="col-12 control-label no-padding" for="email">Your E-mail</label>
                          
                          <div className="col-12 no-padding">
                            <input id="email" name="email" type="text" placeholder="Your email" className="form-control"></input>
                          </div>
                        </div>
                        
                    
                        <div className="form-group">
                          <label className="col-12 control-label no-padding" for="message">Your message</label>
                          
                          <div className="col-12 no-padding">
                            <textarea className="form-control" id="message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>
                          </div>
                        </div>
                        
                
                        <div className="form-group">
                          <div className="col-12 widget-right no-padding">
                            <button type="submit" className="btn btn-primary btn-md float-right">Submit</button>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>

              </div>
            </section>
            <section className="row">
              <div className="col-12 mt-1 mb-4">Template by <a href="https://www.medialoot.com">Medialoot</a></div>
            </section>
          </div>
        </section>
        </main>
      </Container>
    );
  }
}

export default Contact;