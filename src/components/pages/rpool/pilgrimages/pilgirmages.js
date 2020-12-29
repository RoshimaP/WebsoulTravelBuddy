import React, { Component } from 'react';
import '../rpool.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import choosedarshan from '../../../../assets/rpool/choose_darshan.png';
import seating from '../../../../assets/rpool/choose_seat.png';
import arrival from '../../../../assets/rpool/room_on_arrival.png';
import custom_package from '../../../../assets/rpool/customize_package.png';
import maxchoice from '../../../../assets/rpool/maximum_choices.png';
import customercare from '../../../../assets/rpool/customer_care.png';
import fare from '../../../../assets/rpool/lowest_Fare.png';
import benefits from '../../../../assets/rpool/benefits.png';
import { Link } from 'react-router-dom';
import iconredbus from '../../../../assets/homepage/redbus_real_logo.png'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function DatePickers() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="ONWARD DATE"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}

      />
    </form>
  );
}



class Pilgrimages extends Component {
  state = {}
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: "#e9555d", }}>
          <span className="uk-padding uk-padding-remove-top uk-padding-remove-bottom uk-visible@l"></span>
          <a class="navbar-brand uk-text-bold bus-ticket "  style={{margin:"0px"}} href="/homepage">
           <img src={iconredbus} class=" " alt=" " style={{marginTop:"-46px",marginBottom:"-46px"}} width="75px" height="39px"/>
         </a>  
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item px-2">
                <Link class="nav-link" to="/BusTickets">BUS TICKETS</Link>
              </li>
              <li class="nav-item px-2">
                <Link class="nav-link" to="/rpool">rPool</Link>
              </li>
              <li class="nav-item px-2">
              <Link class="nav-link" to="#">BUS HIRE</Link>
              </li>
              <li class="nav-item px-2">
              <Link class="nav-link" to="/rpool/prilgrimages">PILGRIMAGE</Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* end of navigation */}

        <div style={{ backgroundColor: "#f7f7f7" }}>
          {/* contents on bg image */}
          <div className="uk-width-1-1 uk-background-cover uk-padding-large" style={{ width: "100%", height: "", backgroundImage: 'url(' + require('../../../../assets/rpool/Pilgrimages_main.jpg') + ')', backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundSize: "center" }}>
            {/* headings on image */}
            <div className="uk-margin-bottom">
              <p className="sec_headings" style={{ color: "white" }}>Pilgrimage Packages</p>
              <p className="contents" style={{ color: "white", fontSize: "1.5em", }}>Assured Darshan | Travel & Stay | All Inclusive Packages</p>
              <div className="uk-flex uk-flex-center uk-padding">
                <div className="uk-grid uk-grid-match">
                  <div className="uk-padding-remove" style={{ borderRight: "1px solid #EEE" }}>
                    <div class="uk-background-default ">
                      <div className="uk-grid" style={{ height: "47px" }}>
                        <div className="" style={{ textAlign: "center" }}>
                          <i class='fas fa-city uk-padding-small' style={{ color: "#9E9898" }}></i>
                        </div>
                        <div className="" style={{ paddingLeft: "5px" }}>
                          <input class="uk-input" type="text" placeholder="FROM" style={{ border: "none" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uk-padding-remove" style={{ borderRight: "1px solid #EEE" }} >
                    <div class="uk-background-default ">
                      <div className="uk-grid" style={{ height: "47px" }}>
                        <div className="" style={{ textAlign: "center" }}>
                          <i class='fas fa-city uk-padding-small' style={{ color: "#9E9898" }}></i>
                        </div>
                        <div className="" style={{ paddingLeft: "5px" }}>
                          <input class="uk-input" type="text" placeholder="TO" style={{ border: "none" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uk-padding-remove" >
                    <div class="uk-background-default " style={{ height: "47px" }}>
                      {/*  <div className="uk-grid" style={{ height: "47px" }}>
                                            <div className="" style={{ textAlign: "center" }}>
                                                <i class="fa fa-calendar uk-padding-small" style={{ color: "#9E9898" }}></i>
                                            </div>
                                            <div style={{ paddingLeft: "5px" }}>
                                                <input class="uk-input" type="text" placeholder="ONWARD DATE" style={{ border: "none" }} />
                                            </div>
                                        </div> */}
                      <DatePickers></DatePickers>
                    </div>
                  </div>
                  <div className="uk-padding-remove" >
                    <div class=" ">
                      <button class="uk-button" style={{ backgroundColor: "#D84E55", height: "47px", color: "#fff", fontWeight: "300", lineHeight: "38px" }}>Search Buses</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* headings on image */}
          </div>
          {/*end of contents on bg image */}

          {/*small middle contents on bg image */}
          <div className="uk-align-center div_width " style={{ marginTop: "-90px" }}>
            <div className="uk-padding uk-flex uk-flex-center">
              <div className="uk-card uk-card-default uk-card-hover uk-width-1-2@l uk-width-1-2@l uk-width-1-2@s">
                <div className="uk-padding uk-padding-remove-top uk-padding-remove-bottom">
                  <div className="uk-grid uk-grid-collapse">
                    <div className="uk-width-1-4@l uk-width-1-4@m uk-width-1-1@s uk-margin-small-top uk-margin-small-bottom">
                      <img src={require('../../../../assets/rpool/package_icon.png')} className="" style={{ width: "100px", height: "100px" }} />
                    </div>
                    <div className="uk-width-3-4@l uk-width-3-4@m uk-width-1-1@s uk-margin-small-top uk-margin-small-bottom">
                      <p className="contents uk-text-center" style={{ fontSize: "1.4em", fontWeight: "600" }}>Upto 15% Off on packages!</p>
                      <p className="contents uk-text-center " style={{ fontSize: "0.8em" }}>Get upto 15% Off on select packages. Use offercode COOLSAVER</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          {/*end of small middle contents on bg image */}

          {/*slider contents */}
          <div className="uk-align-center div_width " style={{}}>
            <div className="uk-padding">
              <p className="contents" style={{ fontSize: "1.9em", fontWeight: "600" }}>WHAT DO TRAVELLERS TALK ABOUT US</p>
              <p className="contents" style={{ fontSize: "1.25em" }}>We’re proud of our products, and we’re really excited when they get a feedback from users.</p>

            </div>
            <div className="uk-align-center uk-width-1-1 uk-padding" uk-slider="" style={{ overflow: "hidden" }}>

              <div class="uk-position-relative " tabindex="-1" style={{ overflow: "hidden" }}>

                <ul class="uk-slider-items uk-child-width-1-1@s uk-child-width-1-2@l uk-grid" >
                  <li>
                    <div class="uk-card uk-card-default" style={{ borderRadius: "20px" }}>

                      <div class="uk-card-body">
                        <div className="uk-grid">
                          <div className="uk-width-1-4 uk-padding"><img src={require('../../../../assets/rpool/Pilgrimage_traveler_male.png')} /></div>
                          <div className="uk-width-3-4">
                            <div style={{ height: "200px", overflow: "scroll" }}>
                              <p className="contents uk-align-left" style={{ color: "#919cd9", fontWeight: "600", fontSize: "1.1em", fontStyle: "italic" }}>  <i class="fa fa-quote-left " aria-hidden="true" style={{ color: "#919cd9", padding: "10px" }}></i>Amazing Experience</p>
                              <p className="contents uk-align-left" style={{}}>I have taken Tirupathi Trip from Red Bus. It has been nice experience..I appreciate redBus co-operation and co-ordination.
                                     If I will travel anywhere in India I will check with Red Bus first and I will suggest my friend to get experience from Red Bus. <i class="fa fa-quote-right" aria-hidden="true" style={{ color: "#919cd9", padding: "10px" }}></i></p>
                            </div>
                          </div>
                        </div>
                        <div className="uk-grid uk-width-1-1">
                          <div className="uk-width-1-2">
                            <p className="uk-align-left contents" style={{ color: "gray", fontSize: ".85em" }}> Chandan <br />Redbus Customer</p>
                          </div>
                          <div className="uk-width-1-2">
                            <p className="uk-align-right contents" style={{ color: "gray", fontSize: ".85em" }}>Booked On<br />25/09/19</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="uk-card uk-card-default" style={{ borderRadius: "20px" }}>
                      <div class="uk-card-body">
                        <div className="uk-grid">
                          <div className="uk-width-1-4 uk-padding"><img src={require('../../../../assets/rpool/Pilgrimage_traveler_male.png')} /></div>
                          <div className="uk-width-3-4">
                            <div style={{ height: "200px", overflow: "scroll" }}>
                              <p className="contents uk-align-left" style={{ color: "#919cd9", fontWeight: "600", fontSize: "1.1em", fontStyle: "italic" }}>  <i class="fa fa-quote-left " aria-hidden="true" style={{ color: "#919cd9", padding: "10px" }}></i>Amazing Experience</p>
                              <p className="contents uk-align-left" style={{}}>I have taken Tirupathi Trip from Red Bus. It has been nice experience..I appreciate redBus co-operation and co-ordination.
             If I will travel anywhere in India I will check with Red Bus first and I will suggest my friend to get experience from Red Bus. <i class="fa fa-quote-right" aria-hidden="true" style={{ color: "#919cd9", padding: "10px" }}></i></p>
                            </div>
                          </div>
                        </div>
                        <div className="uk-grid uk-width-1-1">
                          <div className="uk-width-1-2">
                            <p className="uk-align-left contents" style={{ color: "gray", fontSize: ".85em" }}> Sudip <br />Backpacker / Trekker</p>
                          </div>
                          <div className="uk-width-1-2">
                            <p className="uk-align-right contents" style={{ color: "gray", fontSize: ".85em" }}>Booked On<br />25/09/19</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="uk-card uk-card-default" style={{ borderRadius: "20px" }}>

                      <div class="uk-card-body">
                        <div className="uk-grid">
                          <div className="uk-width-1-4 uk-padding"><img src={require('../../../../assets/rpool/Pilgrimage_traveler_male.png')} /></div>
                          <div className="uk-width-3-4">
                            <div style={{ height: "200px", overflow: "scroll" }}>
                              <p className="contents uk-align-left" style={{ color: "#919cd9", fontWeight: "600", fontSize: "1.1em", fontStyle: "italic" }}>  <i class="fa fa-quote-left " aria-hidden="true" style={{ color: "#919cd9", padding: "10px" }}></i>Amazing Experience</p>
                              <p className="contents uk-align-left" style={{}}>I have taken Tirupathi Trip from Red Bus. It has been nice experience..I appreciate redBus co-operation and co-ordination.
             If I will travel anywhere in India I will check with Red Bus first and I will suggest my friend to get experience from Red Bus. <i class="fa fa-quote-right" aria-hidden="true" style={{ color: "#919cd9", padding: "10px" }}></i></p>
                            </div>
                          </div>
                        </div>
                        <div className="uk-grid uk-width-1-1">
                          <div className="uk-width-1-2">
                            <p className="uk-align-left contents" style={{ color: "gray", fontSize: ".85em" }}> Ramani <br />Devotee</p>
                          </div>
                          <div className="uk-width-1-2">
                            <p className="uk-align-right contents" style={{ color: "gray", fontSize: ".85em" }}>Booked On<br />25/09/19</p>
                          </div>
                        </div>

                      </div>
                    </div>

                  </li>

                </ul>

                <a class="uk-position-center-left uk-position-small" href="#" uk-slidenav-previous uk-slider-item="previous" style={{ color: "#3e3e52" }}><i class="fas fa-less-than    "></i></a>
                <a class="uk-position-center-right uk-position-small " href="#" uk-slidenav-next uk-slider-item="next" style={{ color: "#3e3e52" }}><i class="fas fa-greater-than    "></i></a>

              </div>


            </div>

          </div>
          {/* end of slider contents */}

          {/*trending destinations contents */}
          <div className="uk-align-center div_width uk-padding-large uk-padding-remove-left uk-padding-remove-right" style={{}}>
            <p className="sec_headings uk-margin" style={{ fontSize: "1.9em", fontWeight: "600" }}>TRENDING DESTINATIONS</p>
            <div className="uk-grid">

              <div className="uk-width-1-3@l uk-width-1-2@m uk-width-1-3@s">
                <div class="uk-card uk-card-default">
                  <div class="uk-card-media-top uk-inline" style={{ width: "100%" }}>
                    <img src={require('../../../../assets/rpool/shirdi_home_tile.jpg')} className="rgba-indigo-light" alt="" style={{ width: "100%", height: "250px" }} />
                    <div class=" uk-position-cover mask rgba-black-strong" style={{ width: "100%", height: "250px", opacity: "0.7" }}></div>
                    <div class="uk-overlay uk-position-bottom uk-light uk-text-center" style={{ color: "white", fontWeight: "700", fontSize: "1.5em" }}>SHIRDI</div>
                  </div>
                  <div class="uk-card-body uk-padding-remove">
                    <div>

                      <div className="uk-padding uk-padding-remove-top uk-padding-remove-bottom" style={{ borderBottom: "1px solid #CCC" }}>
                        <div className="uk-grid">
                          <div className="uk-width-2-3 contents uk-padding-small" style={{ fontSize: "1.1em", backgroundColor: "#f7f7f7", width: "200px" }}>
                            From Mumbai
                          </div>
                          <div className="uk-grid uk-padding-small" style={{}}>
                            <div className="contents"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
                            <div className="contents"><i class="fas fa-rupee-sign    "></i> 999</div>
                          </div>
                        </div>
                      </div>
                      <div className="uk-padding uk-padding-remove-top uk-padding-remove-bottom" style={{ borderBottom: "1px solid #CCC" }}>
                        <div className="uk-grid">
                          <div className="contents uk-padding-small" style={{ fontSize: "1.1em", backgroundColor: "#f7f7f7", width: "200px" }}>
                            From Hyderabad
                          </div>
                          <div className="uk-grid uk-padding-small" style={{}}>
                            <div className=" uk-float-left contents"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
                            <div className=" contents"><i class="fas fa-rupee-sign    "></i> 1999</div>
                          </div>
                        </div>
                      </div>
                      <div className="uk-padding uk-padding-remove-top uk-padding-remove-bottom" style={{ borderBottom: "1px solid #CCC" }}>
                        <div className="uk-grid">
                          <div className="contents uk-padding-small" style={{ fontSize: "1.1em", backgroundColor: "#f7f7f7", width: "200px" }}>
                            From Indore
                          </div>
                          <div className="uk-grid uk-padding-small" style={{}}>
                            <div className=" uk-float-left contents"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
                            <div className=" contents"><i class="fas fa-rupee-sign    "></i> 1599</div>
                          </div>
                        </div>
                      </div>

                      <div className="uk-padding uk-padding-remove-top uk-padding-remove-bottom" style={{}}>
                        <div className="uk-grid">
                          <div className="contents uk-padding-small" style={{ fontSize: "1.1em", backgroundColor: "#f7f7f7", width: "200px" }}>
                            From Pune
                          </div>
                          <div className="uk-grid uk-padding-small" style={{}}>
                            <div className=" uk-float-left contents"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
                            <div className=" contents"><i class="fas fa-rupee-sign    "></i> 1999</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="uk-width-1-3@l uk-width-1-2@m uk-width-1-3@s">
                <div class="uk-card uk-card-default">
                  <div class="uk-card-media-top uk-inline" style={{ width: "100%" }}>
                    <img src={require('../../../../assets/rpool/tirupati_home_tile.jpg')} className="rgba-indigo-light" alt="" style={{ width: "100%", height: "250px" }} />
                    <div class=" uk-position-cover mask rgba-black-strong" style={{ width: "100%", height: "250px", opacity: "0.7" }}></div>
                    <div class="uk-overlay uk-position-bottom uk-light uk-text-center" style={{ color: "white", fontWeight: "700", fontSize: "1.5em" }}>TIRUPATI</div>
                  </div>
                  <div class="uk-card-body uk-padding-remove">
                    <div>

                      <div className="uk-padding uk-padding-remove-top uk-padding-remove-bottom" style={{ borderBottom: "1px solid #CCC" }}>
                        <div className="uk-grid">
                          <div className="contents uk-padding-small" style={{ fontSize: "1.1em", backgroundColor: "#f7f7f7", width: "200px" }}>
                            From Bangalore
                          </div>
                          <div className="uk-grid uk-padding-small" style={{}}>
                            <div className=" uk-float-left contents"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
                            <div className=" contents"><i class="fas fa-rupee-sign    "></i> 1999</div>
                          </div>
                        </div>
                      </div>
                      <div className="uk-padding uk-padding-remove-top uk-padding-remove-bottom" style={{ borderBottom: "1px solid #CCC" }}>
                        <div className="uk-grid">
                          <div className="contents uk-padding-small" style={{ fontSize: "1.1em", backgroundColor: "#f7f7f7", width: "200px" }}>
                            From Chennai
                          </div>
                          <div className="uk-grid uk-padding-small" style={{}}>
                            <div className=" uk-float-left contents"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
                            <div className=" contents"><i class="fas fa-rupee-sign    "></i> 1799</div>
                          </div>
                        </div>
                      </div>
                      <div className="uk-padding uk-padding-remove-top uk-padding-remove-bottom" style={{ borderBottom: "1px solid #CCC" }}>
                        <div className="uk-grid">
                          <div className="contents uk-padding-small" style={{ fontSize: "1.1em", backgroundColor: "#f7f7f7", width: "200px" }}>
                            From Madurai
                          </div>
                          <div className="uk-grid uk-padding-small" style={{}}>
                            <div className=" uk-float-left contents"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
                            <div className=" contents"><i class="fas fa-rupee-sign    "></i> 1999</div>
                          </div>
                        </div>
                      </div>

                      <div className="uk-padding uk-padding-remove-top uk-padding-remove-bottom" style={{}}>
                        <div className="uk-grid">
                          <div className="contents uk-padding-small" style={{ fontSize: "1.1em", backgroundColor: "#f7f7f7", width: "200px" }}>
                            From Hyderabad
                          </div>
                          <div className="uk-grid uk-padding-small" style={{}}>
                            <div className=" uk-float-left contents"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
                            <div className=" contents"><i class="fas fa-rupee-sign    "></i> 1999</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="uk-width-1-3@l uk-width-1-2@m uk-width-1-3@s">
                <div class="uk-card uk-card-default">
                  <div class="uk-card-media-top uk-inline" style={{ width: "100%" }}>
                    <img src={require('../../../../assets/rpool/shirdi_home_tile.jpg')} alt="" style={{ width: "100%", height: "250px" }} />
                    <div class=" uk-position-cover mask rgba-black-strong" style={{ width: "100%", height: "250px", opacity: "0.7" }}></div>
                    <div class="uk-overlay uk-position-bottom uk-light uk-text-center" style={{ color: "white", fontWeight: "700", fontSize: "1.5em" }}>SHIRDI</div>
                  </div>
                  <div class="uk-card-body uk-padding-remove">
                    <div>

                      <div className="uk-padding uk-padding-remove-top uk-padding-remove-bottom" style={{ borderBottom: "1px solid #CCC" }}>
                        <div className="uk-grid">
                          <div className="contents uk-padding-small" style={{ fontSize: "1.1em", backgroundColor: "#f7f7f7", width: "200px" }}>
                            From Ahmedabad
                          </div>
                          <div className="uk-grid uk-padding-small" style={{}}>
                            <div className="contents"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
                            <div className="contents"><i class="fas fa-rupee-sign    "></i> 2100</div>
                          </div>
                        </div>
                      </div>
                      <div className="uk-padding uk-padding-remove-top uk-padding-remove-bottom" style={{ borderBottom: "1px solid #CCC" }}>
                        <div className="uk-grid">
                          <div className="contents uk-padding-small" style={{ fontSize: "1.1em", backgroundColor: "#f7f7f7", width: "200px" }}>
                            From Vadodara
                          </div>
                          <div className="uk-grid uk-padding-small" style={{}}>
                            <div className=" contents"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
                            <div className=" contents"><i class="fas fa-rupee-sign    "></i> 2100</div>
                          </div>
                        </div>
                      </div>
                      <div className="uk-padding uk-padding-remove-top uk-padding-remove-bottom" style={{ borderBottom: "1px solid #CCC" }}>
                        <div className="uk-grid">
                          <div className="contents uk-padding-small" style={{ fontSize: "1.1em", backgroundColor: "#f7f7f7", width: "200px" }}>
                            From Surat
                          </div>
                          <div className="uk-grid uk-padding-small" style={{}}>
                            <div className=" contents"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
                            <div className=" contents"><i class="fas fa-rupee-sign    "></i> 1850</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          {/* end of trending destinations contents */}

          {/*advantage section */}
          <div className="uk-width-1-1" style={{ backgroundColor: "white", borderTop: "1px solid rgb(231, 230, 230)", borderBottom: "1px solid rgb(231, 230, 230)", }}>
            <div className="uk-align-center div_width uk-padding-large uk-padding-remove-left uk-padding-remove-right" >
              <p style={{ fontSize: "1.9em", fontWeight: "600" }} className="contents">OUR ADVANTAGE</p>
              <div className="uk-grid">
                <Advantagescard></Advantagescard>
              </div>
            </div>
          </div>
          {/* end of advantage section */}

          {/*promise section */}
          <div className="uk-width-1-1" style={{ backgroundColor: "#f7f7f7", borderBottom: "rgb(231, 230, 230)" }}>
            <div className="uk-align-center div_width uk-padding-large" >
              <img src={require('../../../../assets/rpool/promise.png')} className="uk-align-center" />
              <p style={{ fontSize: "1.9em", fontWeight: "600" }} className="contents">WE PROMISE TO DELIVER</p>
              <div className="uk-grid">
                <Promisescard></Promisescard>
              </div>
            </div>
          </div>
          {/* end of promise section */}
          <div className="uk-padding" style={{ borderTop: "1px solid rgb(231, 230, 230)", borderBottom: "rgb(231, 230, 230)", backgroundColor:"white" }}></div>
          {/*pilgrimage section */}
          <div className="uk-width-1-1" style={{backgroundColor:"#eee",borderTop: "1px solid rgb(231, 230, 230)", borderBottom: "1px solid rgb(231, 230, 230)" }}>
            <div className="uk-align-center div_width uk-padding-large" >
              <p style={{ fontSize: "1.9em", fontWeight: "600" }} className="contents">WHY REDBUS PILGRIMAGE?</p>
              <div className="uk-grid">
                <Pilgri></Pilgri>
              </div>
            </div>
          </div>
          {/* end of pilgrimage section */}
           {/*end section */}
           <div className="uk-width-1-1" style={{borderTop: "1px solid rgb(231, 230, 230)", borderBottom: "1px solid rgb(231, 230, 230)" }}>
            <div className="uk-align-center div_width uk-padding-large" >
              <div className="uk-grid">
                <Endsection></Endsection>
              </div>
            </div>
          </div>
          {/* end of end section */}
        </div>
      </div>
    );
  }
}

{/* listing cards in advantages */ }
const advantages = [{ id: 1, images: choosedarshan, heading: "HANDPICKED PACKAGES", content: "Carefully picked and curated packages for your needs" },
{ id: 2, images: seating, heading: "CHOOSE YOUR BUS SEAT", content: "Pick your own bus seat and pick up point" },
{ id: 3, images: arrival, heading: "GET ROOM ON ARRIVAL", content: "Assured room on arrival at our handpicked hotels upon arrival wherever applicable" },
{ id: 4, images: custom_package, heading: "DARSHAN INCLUDED", content: "Darshan assistance to ensure you have a memorable pilgrimage experience" },
]
function Advantagescard() {

  return (

    advantages.map((item) => {
      return (
        /*list of advantages cards */
        <div className=" uk-width-1-2@l uk-width-1-2@m uk-width-1-1@s uk-margin-small-bottom">
          <div className="uk-grid">
            <div className="uk-width-1-3">
              <img src={item.images} style={{}} />
            </div>
            <div className="uk-width-2-3">
              <p className="contents uk-align-left" style={{ fontSize: "1.25em" }}>{item.heading}</p>
              <p className="contents uk-align-left">{item.content}</p>
            </div>
          </div>
        </div>
      )
    }



    ))
}
{/* listing cards in advantages */ }

{/* listing cards in promises */ }
const promises = [{ id: 1, promiseicons: maxchoice, heading: "MAXIMUM CHOICE", content: "We give you the widest number of travel options across thousands of routes.." },
{ id: 2, promiseicons: customercare, heading: "SUPERIOR CUSTOMER SERVICE", content: "We put our experience and relationships to good use and are available to solve your travel issues." },
{ id: 3, promiseicons: fare, heading: "LOWEST PRICES", content: "We always give you the lowest price with the best partner offers." },
{ id: 4, promiseicons: benefits, heading: "UNMATCHED BENEFITS", content: "We take care of your travel beyond ticketing by providing you with innovative and unique benefits." },
]
function Promisescard() {

  return (

    promises.map((item) => {
      return (
        /*list of promise cards */
        <div className="uk-card uk-width-1-4@l uk-width-1-2@m uk-width-1-1@s uk-padding-small" style={{ backgroundColor: "white", borderRight: "1px solid rgb(231, 230, 230)", borderLeft: "1px solid rgb(231, 230, 230)" }}>

          <img src={item.promiseicons} className="uk-align-center uk-margin-medium-bottom" style={{ width: "120px", height: "100px" }} />
          <p className="contents uk-text-center uk-margin-large-bottom" style={{ fontSize: "1em" }}>{item.heading}</p>
          <p className="contents uk-text-center uk-margin-medium-bottom" style={{ fontSize: ".9em" }}>{item.content}</p>

        </div>
      )
    }

    ))
}
{/* listing cards in promises */ }

{/* listing cards in pilgrimages */ }
const pilgrimages = [{ id: 1, heading: "Pilgrimages package booking on redBus", content: "Now avail online pilgrimage packages at redBus! This platform offers pilgrimage travel tours at lowest prices with discounts. Get pilgrimage tour packages for Tirupathi, Shirdi, Guruvayoor, Vaishno Devi, Kollur, Kukke Subrahmanya, Palani, Rameswaram, Nathdwara, Dwarka and Tiruchendur. All of our packages include well-equipped hotel with amenities ensuring your holy trip to be comfortable and safe." },
{ id: 2, heading: "Religious Tour With Friends and Family", content: "A holy trip along with your friends, relatives or family is always a rewarding experience. All our pilgrimage package tours offer friendly services at all times. It also takes care of several preparations starting from travel arrangement, temple darshan to hotel booking and meals. Simply choose any of the popular religious centers and enjoy your sacred trip with us." },
{ id: 3, heading: "Many Destinations", content: "On redBus, pilgrimage travel tour packages are covered from North to South India. Feel contented by opting the best pilgrimage tour and travel package fulfilling all your requirements." },
{ id: 4, heading: "Attractive Discounts", content: "redBus offers lowest prices on all pilgrimage tour packages. Log on to redBus.in/pilgrimages/ and check out our best deals! Keep a check on our time to time discounts and you can save extra with festive offers! Stay connected with redBus to receive notifications on active discounts and offers via newsletter. Save Big Enjoy Trip!" },
]
function Pilgri() {

  return (

    pilgrimages.map((item) => {
      return (
        /*list of promise cards */
        <div className="uk-card uk-width-1-2@l uk-width-1-2@m uk-width-1-1@s uk-padding-small" style={{}}>

          <p className="contents uk-align-left uk-margin-small-bottom" style={{ fontSize: "1.5em" }}>{item.heading}</p>
          <p className="contents uk-align-left uk-margin-medium-bottom" style={{ fontSize: "1em" }}>{item.content}</p>

        </div>
      )
    }

    ))
}
{/* listing cards in pilgrimages */ }

{/* listing cards in endsection */ }
const datas = [{ id: 1, heading: "500+", content: "Packages Across India" },
{ id: 2, heading: "10+", content: "Pilgrimage Cities Covered" },
{ id: 3, heading: "8M+", content: "Happy redBus Customers" },
]
function Endsection() {

  return (

    datas.map((item) => {
      return (
        /*list of promise cards */
        <div className="uk-card uk-width-1-3@l uk-width-1-3@m uk-width-1-1@s uk-padding-small" style={{}}>

          <p className="contents uk-text-center uk-margin-medium-bottom" style={{ fontSize: "2.5em" , color:"#e94c53", fontWeight:"600"}}>{item.heading}</p>
          <p className="contents uk-text-center uk-margin-small-bottom" style={{fontSize:"1.2em"}}>{item.content}</p>

        </div>
      )
    }

    ))
}
{/* listing cards in endsection */ }

export default Pilgrimages;