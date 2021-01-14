import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import breaking from '../../../../assets/rpool/breaking-news.svg'
import Box from '@material-ui/core/Box';
import iconredbus from '../../../../assets/homepage/redbus_real_logo.png'
import MainBanner from '../../../../assets/rpool/MainBanner.svg'
import '../rpool.css';
import Facebook from '../../../../assets/rpool/Facebook.png'
import rPoolUnavailable from '../../../../assets/rpool/rPoolUnavailable.svg'
import MainBanner2 from '../../../../assets/rpool/MainBanner.svg'
import rPoolShield from '../../../../assets/rpool/rPoolShield.svg'
import StayPositive from '../../../../assets/rpool/StayPositive.svg'
import covidzone from '../../../../assets/rpool/covid-zone.svg'
import distancing from '../../../../assets/rpool/distancing-seating.svg'
import clean from '../../../../assets/rpool/clean-car.svg'
import mask from'../../../../assets/rpool/mask.svg'
import hygiene from'../../../../assets/rpool/hygiene.svg'
import symptoms from '../../../../assets/rpool/symptoms.svg'
import sanitizer from '../../../../assets/rpool/sanitizer.svg'
import ac from '../../../../assets/rpool/no-ac.svg'
import LinkedIn from '../../../../assets/rpool/LinkedIn.png'
import Instagram from'../../../../assets/rpool/Instagram.png'
import callyouroldmates from '../../../../assets/rpool/callyouroldmates.png' 
import JuststayatHome02 from'../../../../assets/rpool/JuststayatHome02.svg'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
}));

function Ride() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>

      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        variant="scrollable"
        scrollButtons="auto" style={{ outline: "none", border: "0" }} class="uk-margin-top"
      >
        <Tab label="RIDE GIVERS" {...a11yProps(0)} className="contents" style={{ textTransform: "capitalize", fontSize: "20px", outline: "none", fontWeight: "700" }}></Tab>

        <Tab label="RIDE TAKERS" {...a11yProps(1)} className="contents" style={{ textTransform: "capitalize", fontSize: "20px", outline: "none", fontWeight: "700" }}></Tab>
      </Tabs>

      <TabPanel value={value} index={0} class="uk-width-1-1">
        <div className="uk-width-1-1">
          <div class="uk-child-width-1-3@l uk-child-width-1-2@m uk-child-width-1-1@s uk-grid uk-grid-match">
            <div className="uk-margin-bottom">
              <div class="uk-card uk-card-default uk-card-body" style={{ border: "1px solid #979797", boxShadow: "none" }}>
                <div className="">
                  <img src={mask} className="uk-align-left " style={{ width: "6em" }}></img>
                  <p className="uk-align-left uk-width1-1 contents">Face Masks</p>
                  <p className="uk-align-left uk-width1-1 contents">Make sure to wear protective masks at all times while onboard.</p>

                </div>
              </div>
            </div>
            <div className="uk-margin-bottom">
              <div class="uk-card uk-card-default uk-card-body" style={{ border: "1px solid #979797", boxShadow: "none" }}>
                <div className="">
                  <img src={sanitizer} className="uk-align-left " style={{ width: "6em" }}></img>
                  <p className="uk-align-left uk-width1-1 contents">Hand Sanitizer</p>
                  <p className="uk-align-left uk-width1-1 contents">Carry an alcohol-based hand sanitizers and everyone boarding the car must use them to wipe their hands clean.</p>

                </div>
              </div>
            </div>
            <div className="uk-margin-bottom">
              <div class="uk-card uk-card-default uk-card-body" style={{ border: "1px solid #979797", boxShadow: "none" }}>
                <div className="">
                  <img src={clean} className="uk-align-left " style={{ width: "6em" }}></img>
                  <p className="uk-align-left uk-width1-1 contents">Clean/Sanitize Car</p>
                  <p className="uk-align-left uk-width1-1 contents">Clean your car interiors, door handles and ergonomic points every time before the start of a trip.</p>

                </div>
              </div>
            </div>
            <div className="uk-margin-bottom">
              <div class="uk-card uk-card-default uk-card-body" style={{ border: "1px solid #979797", boxShadow: "none" }}>
                <div className="">
                  <img src={hygiene} className="uk-align-left " style={{ width: "6em" }}></img>
                  <p className="uk-align-left uk-width1-1 contents">Personal Hygiene</p>
                  <p className="uk-align-left uk-width1-1 contents">Uphold personal hygiene and wash hands for at least 20 seconds with soap and running water, often and before travelling.</p>

                </div>
              </div>
            </div>
            <div className="uk-margin-bottom">
              <div class="uk-card uk-card-default uk-card-body" style={{ border: "1px solid #979797", boxShadow: "none" }}>
                <div className="">
                  <img src={ac} className="uk-align-left " style={{ width: "6em" }}></img>
                  <p className="uk-align-left uk-width1-1 contents">No AC</p>
                  <p className="uk-align-left uk-width1-1 contents">It is recommended to ride without air conditioners ON. The windows can be kept half-open during the journey.</p>

                </div>
              </div>
            </div>
            <div className="uk-margin-bottom">
              <div class="uk-card uk-card-default uk-card-body" style={{ border: "1px solid #979797", boxShadow: "none" }}>
                <div className="">
                  <img src={symptoms} className="uk-align-left " style={{ width: "6em" }}></img>
                  <p className="uk-align-left uk-width1-1 contents">Flu Symptoms</p>
                  <p className="uk-align-left uk-width1-1 contents">Ride givers, if diagnosed of any symptoms are requested to refrain from travelling and are advised to get clinical tests done.</p>

                </div>
              </div>
            </div>
          </div>





        </div>
      </TabPanel>
      <TabPanel value={value} index={1} class="uk-width-1-1">
        <div className="uk-width-1-1">
          <div class="uk-child-width-1-3@l uk-child-width-1-2@m uk-child-width-1-1@s uk-grid uk-grid-match">
            <div className="uk-margin-bottom">
              <div class="uk-card uk-card-default uk-card-body" style={{ border: "1px solid #979797", boxShadow: "none" }}>
                <div className="">
                  <img src={mask} className="uk-align-left " style={{ width: "6em" }}></img>
                  <p className="uk-align-left uk-width1-1 contents">Face Masks</p>
                  <p className="uk-align-left uk-width1-1 contents">Make sure to wear protective masks at all times while onboard.</p>

                </div>
              </div>
            </div>
            <div className="uk-margin-bottom">
              <div class="uk-card uk-card-default uk-card-body" style={{ border: "1px solid #979797", boxShadow: "none" }}>
                <div className="">
                  <img src={sanitizer} className="uk-align-left " style={{ width: "6em" }}></img>
                  <p className="uk-align-left uk-width1-1 contents">Hand Sanitizer</p>
                  <p className="uk-align-left uk-width1-1 contents">Carry an alcohol-based hand sanitizers and everyone boarding the car must use them to wipe their hands clean.</p>

                </div>
              </div>
            </div>
            <div className="uk-margin-bottom">
              <div class="uk-card uk-card-default uk-card-body" style={{ border: "1px solid #979797", boxShadow: "none" }}>
                <div className="">
                  <img src={hygiene} className="uk-align-left " style={{ width: "6em" }}></img>
                  <p className="uk-align-left uk-width1-1 contents">Personal Hygiene</p>
                  <p className="uk-align-left uk-width1-1 contents">Uphold personal hygiene and wash hands for at least 20 seconds with soap and running water, often and before travelling.</p>

                </div>
              </div>
            </div>
            <div className="uk-margin-bottom">
              <div class="uk-card uk-card-default uk-card-body" style={{ border: "1px solid #979797", boxShadow: "none" }}>
                <div className="">
                  <img src={ac}  className="uk-align-left " style={{ width: "6em" }}></img>
                  <p className="uk-align-left uk-width1-1 contents">No AC</p>
                  <p className="uk-align-left uk-width1-1 contents">It is recommended to ride without air conditioners ON. The windows can be kept half-open during the journey.</p>

                </div>
              </div>
            </div>
            <div className="uk-margin-bottom">
              <div class="uk-card uk-card-default uk-card-body" style={{ border: "1px solid #979797", boxShadow: "none" }}>
                <div className="">
                  <img src={symptoms} className="uk-align-left " style={{ width: "6em" }}></img>
                  <p className="uk-align-left uk-width1-1 contents">Flu Symptoms</p>
                  <p className="uk-align-left uk-width1-1 contents">Ride givers, if diagnosed of any symptoms are requested to refrain from travelling and are advised to get clinical tests done.</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>

    </div>
  );
}

function CityUpdates() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>


      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        centered
        variant="scrollable" style={{ width: "100%" }}
      >
        <Tab label="BENGALURU" {...a11yProps(0)} className="contents" style={{ textTransform: "capitalize", fontSize: "20px", outline: "none", fontWeight: "500" }}></Tab>

        <Tab label="PUNE" {...a11yProps(1)} className="contents" style={{ textTransform: "capitalize", fontSize: "20px", outline: "none", fontWeight: "500" }}></Tab>
        <Tab label="HYDERABAD" {...a11yProps(2)} className="contents" style={{ textTransform: "capitalize", fontSize: "20px", outline: "none", fontWeight: "500" }}></Tab>
        <Tab label="NEW-DELHI" {...a11yProps(3)} className="contents" style={{ textTransform: "capitalize", fontSize: "20px", outline: "none", fontWeight: "500" }}></Tab>
        <Tab label="CHENNAI" {...a11yProps(4)} className="contents" style={{ textTransform: "capitalize", fontSize: "20px", outline: "none", fontWeight: "500" }}></Tab>


      </Tabs>

      <TabPanel value={value} index={0} class="uk-width-1-1">
        <div class="uk-overflow-auto uk-width-1-1">
          <table class="uk-table uk-table-large uk-table-divider contents" style={{ border: "1px solid gray" }}>

            <tr className=" uk-padding ">
              <td>COVID-19: Govt. of Karnataka Official Updates</td>
              <td style={{ color: "blue" }}>https://covid19.karnataka.gov.in/english</td>
            </tr>
            <tr className="">
              <td>COVID-19: Govt. of Karnataka Official Updates</td>
              <td style={{ color: "blue" }}>https://covid19.karnataka.gov.in/english</td>
            </tr>
            <tr className="">
              <td>COVID-19: Govt. of Karnataka Official Updates</td>
              <td style={{ color: "blue" }}>https://covid19.karnataka.gov.in/english</td>
            </tr>
            <tr className="">
              <td>COVID-19: Govt. of Karnataka Official Updates</td>
              <td style={{ color: "blue" }}>https://covid19.karnataka.gov.in/english</td>
            </tr>
          </table>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1} class="uk-width-1-1">
        <div class="uk-overflow-auto  uk-width-1-1">
          <table class="uk-table uk-table-large uk-table-divider contents" style={{ border: "1px solid gray" }}>

            <tr className=" uk-padding ">
              <td>COVID-19: Govt. of Karnataka Official Updates</td>
              <td style={{ color: "blue" }}>https://covid19.karnataka.gov.in/english</td>
            </tr>
            <tr className="">
              <td>COVID-19: Govt. of Karnataka Official Updates</td>
              <td style={{ color: "blue" }}>https://covid19.karnataka.gov.in/english</td>
            </tr>
            <tr className="">
              <td>COVID-19: Govt. of Karnataka Official Updates</td>
              <td style={{ color: "blue" }}>https://covid19.karnataka.gov.in/english</td>
            </tr>
            <tr className="">
              <td>COVID-19: Govt. of Karnataka Official Updates</td>
              <td style={{ color: "blue" }}>https://covid19.karnataka.gov.in/english</td>
            </tr>
          </table>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2} class="uk-width-1-1">
        <div class="uk-overflow-auto uk-width-1-1">
          <table class="uk-table uk-table-large uk-table-divider contents" style={{ border: "1px solid gray" }}>

            <tr className=" uk-padding ">
              <td>COVID-19: Govt. of Karnataka Official Updates</td>
              <td style={{ color: "blue" }}>https://covid19.karnataka.gov.in/english</td>
            </tr>
            <tr className="">
              <td>COVID-19: Govt. of Karnataka Official Updates</td>
              <td style={{ color: "blue" }}>https://covid19.karnataka.gov.in/english</td>
            </tr>
            <tr className="">
              <td>COVID-19: Govt. of Karnataka Official Updates</td>
              <td style={{ color: "blue" }}>https://covid19.karnataka.gov.in/english</td>
            </tr>
            <tr className="">
              <td>COVID-19: Govt. of Karnataka Official Updates</td>
              <td style={{ color: "blue" }}>https://covid19.karnataka.gov.in/english</td>
            </tr>
          </table>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3} class="uk-width-1-1">
        <div class="uk-overflow-auto uk-width-1-1">
          <table class="uk-table uk-table-large uk-table-divider contents" style={{ border: "1px solid gray" }}>

            <tr className=" uk-padding ">
              <td>COVID-19: Govt. of Karnataka Official Updates</td>
              <td style={{ color: "blue" }}>https://covid19.karnataka.gov.in/english</td>
            </tr>
            <tr className="">
              <td>COVID-19: Govt. of Karnataka Official Updates</td>
              <td style={{ color: "blue" }}>https://covid19.karnataka.gov.in/english</td>
            </tr>
            <tr className="">
              <td>COVID-19: Govt. of Karnataka Official Updates</td>
              <td style={{ color: "blue" }}>https://covid19.karnataka.gov.in/english</td>
            </tr>
            <tr className="">
              <td>COVID-19: Govt. of Karnataka Official Updates</td>
              <td style={{ color: "blue" }}>https://covid19.karnataka.gov.in/english</td>
            </tr>
          </table>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4} class="uk-width-1-1">
        <div class="uk-overflow-auto uk-width-1-1">
          <table class="uk-table uk-table-large uk-table-divider contents uk-padding" style={{ border: "1px solid gray", }}>

            <tr className=" uk-padding ">
              <td>COVID-19: Govt. of Karnataka Official Updates</td>
              <td style={{ color: "blue" }}>https://covid19.karnataka.gov.in/english</td>
            </tr>
            <tr className="">
              <td>COVID-19: Govt. of Karnataka Official Updates</td>
              <td style={{ color: "blue" }}>https://covid19.karnataka.gov.in/english</td>
            </tr>
            <tr className="">
              <td>COVID-19: Govt. of Karnataka Official Updates</td>
              <td style={{ color: "blue" }}>https://covid19.karnataka.gov.in/english</td>
            </tr>
            <tr className="">
              <td>COVID-19: Govt. of Karnataka Official Updates</td>
              <td style={{ color: "blue" }}>https://covid19.karnataka.gov.in/english</td>
            </tr>
          </table>
        </div>
      </TabPanel>

    </div>
  );
}
class Details extends Component {

  state = {}
  render() {
    return (
      <div className="" style={{ backgroundColor: "rgb(247, 247, 247)", width: "100%" }}>

        <div>
          {/* navigation */}
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
                  <a class="nav-link" href="#">BUS TICKETS</a>
                </li>
                <li class="nav-item px-2">
                  <Link class="nav-link" href="/rpool">rPool</Link>
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link" href="#">BUS HIRE</a>
                </li>
                <li class="nav-item px-2">
                  <Link class="nav-link" to="/rpool/prilgrimages">PILGRIMAGE</Link>
                </li>
              </ul>
            </div>
          </nav>
          {/* end of navigation */}

          <div className="" style={{}}>
            {/* headings */}
            <div className="details_width uk-align-center uk-padding-large">
              <div className="sec_headings uk-text-center" style={{ fontSize: "40px", fontWeight: "600" }}>rPool is back! Services resume in select cities</div>
              <div className="contents uk-text-center" style={{ fontSize: "22px" }}>follow social distancing and make practical choices while picking your mode of transport</div>

            </div>
            {/* end of headings */}
            {/* support section */}
            <div className="">
              <div className="uk-align-center details_width">
                <div className="uk-grid uk-margin-large-top thank">

                  <div className=" uk-width-1-2@l uk-width-1-1@s uk-padding">
                    <div className="uk-padding" style={{ backgroundColor: "#d84e55" }}>
                      <div className="uk-text-center contents uk-margin-bottom" style={{ fontSize: "20px", color: "white" }}>
                        <b>Thank you for your support in keeping our country safe by staying indoors the past few weeks!</b>
                      </div>
                      <div className="uk-text-center contents" style={{ fontSize: "18px", color: "white" }}>
                        The COVID-19 situation requires all of us to join together in following social distancing to prevent the spread of this disease.
                        While, public movements and commute has been permitted by the Government, we recommend that you exercise caution while stepping out of home for unavoidable reasons.
                 </div>
                    </div>
                  </div>
                  <div className="uk-width-1-2@l uk-width-1-1@s">
                    <img src={MainBanner} style={{ height: "100%", width: "45em" }} />
                  </div>
                </div>

              </div>
            </div>
            {/* end of support section */}
            {/* navbar section */}
            <div className="uk-container-large uk-width-1-1" style={{ backgroundColor: "#3e3e52" }}>
              <nav class="uk-navbar-container " uk-navbar style={{ backgroundColor: "#3e3e52", }}>
                <div class="uk-navbar-center">

                  <div class="uk-navbar-center">
                    <div>
                      <ul class="uk-navbar-nav uk-grid contents">
                        <li class=""><a href="#" style={{ textTransform: "capitalize", color: "white", fontSize: "16px", fontWeight: "600" }} >rPool Service Resumes</a></li>
                        <li>
                          <a style={{ textTransform: "capitalize", color: "white", fontSize: "16px", fontWeight: "600" }} href="#">rPool-Shield</a>
                        </li>
                        <li>
                          <a style={{ textTransform: "capitalize", color: "white", fontSize: "16px", fontWeight: "600" }} href="#">#SharingAndCaring</a>
                        </li>
                        <li>
                          <a style={{ textTransform: "capitalize", color: "white", fontSize: "16px", fontWeight: "600" }} href="#">rPool Recommends</a>
                        </li>
                        <li>
                          <a style={{ textTransform: "capitalize", color: "white", fontSize: "16px", fontWeight: "600" }} href="#">Social Media Feed</a>
                        </li>
                        <li>
                          <a style={{ textTransform: "capitalize", color: "white", fontSize: "16px", fontWeight: "600" }} href="#">City Updates</a>
                        </li>
                        <li>
                          <a style={{ textTransform: "capitalize", color: "white", fontSize: "16px", fontWeight: "600" }} href="#">FAQs</a>
                        </li>
                      </ul>
                    </div></div>

                </div>
              </nav>

            </div>
            {/* end of navbar section */}
            {/* service resumes section */}
            <div className="uk-width-1-1 uk-padding-large uk-padding-remove-left" style={{ backgroundColor: "white", }}>
              <div className="uk-grid">
                <div className="uk-width-1-3@l uk-width-1-1@s">
                  <div style={{}}>
                    <img src={rPoolUnavailable} style={{ width: "34em" }} />
                  </div>
                </div>
                <div className="uk-width-2-3@l uk-width-1-1@s contents">
                  <div className=" uk-padding-small" style={{}}>
                    <div className="uk-margin-bottom uk-text-left" style={{ fontSize: "24px", fontWeight: "700" }}>rPool Service resumes in Bengaluru, Hyderabad, Chennai and Delhi</div>
                    <div>While we urge you all to stay at home and discourage any non-essential commute,
                    we do understand that normalcy has resumed in many parts of the country and offices have started functioning with limited capacity. Considering the situation, public transportation services would be limited and lesser seats would be available.
                        <b>To ease the difficulties in commuting, we have resumed rPool services in Bengaluru, Hyderabad,
                          Chennai and Delhi.</b></div>
                    <div className="uk-margin-top">
                      Our <b>Bike-pooling services</b> will be enabled only in the <b>green and orange zones</b>. Bike-pooling services will stay suspended in all red zones until further notice. rPool service in the other cities will remain suspended until further notice.
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* service resumes section */}
            {/* safe section */}
            <div className="uk-width-1-1 details_width uk-align-center uk-padding" style={{ backgroundColor: "#f7f7f7" }}>
              <div className="uk-grid">
                <div className="uk-width-2-3@l uk-width-1-1@s">
                  <div >
                    <p className="uk-align-left contents" style={{ fontSize: "22px", fontWeight: "700" }}>Safe to rPool
                    </p>
                    <p className="uk-align-left contents" >The safety of our riders has always been our top priority and rPool is
                    committed to the larger cause of fighting the spread of COVID-19 by following social distancing at all times.
                    To ensure this, we have enabled new safety features and laid out a few guidelines that will warrant adherence to safety
                        and social distancing protocols defined by our Government.</p>
                  </div>
                </div>
                <div className="uk-width-1-3@l uk-width-1-1@s">
                  <img src={MainBanner2}  style={{ width: "25em" }} />
                </div>
              </div>
              <div className="uk-width-1-1 uk card uk-card-default">
                <div className="uk-grid uk-padding ">
                  <div ><img src={rPoolShield} /></div>
                  <div className="contents" style={{ fontWeight: "700", fontSize: "18px" }}>rPool-Shield</div>
                </div>
                <div className="uk-text-left contents uk-padding uk-padding-remove-top" style={{ lineHeight: "1.6" }}>We have introduced a new feature called ‘rPool-Shield’ which is a safety badge that will be assigned to all riders who complete a quick self assessment questionnaire.
                    All Ride-Givers and Ride-Takers will need to complete the self assessment every 14 days to claim and retain the rPool shield badge.</div>
              </div>
              <div className="uk-width-1-1 uk card uk-card-default">
                <div className="uk-grid uk-padding ">
                  <div ><img src={covidzone}  /></div>
                  <div className="contents" style={{ fontWeight: "700", fontSize: "18px" }}>COVID Zone Details</div>
                </div>
                <div className="uk-text-left contents uk-padding uk-padding-remove-top" style={{ lineHeight: "1.6" }}>
                  <div>We have introduced, a new feature that alerts the users when their ride’s starting or end point falls under a COVID Redzone.
                  The Search results page will also carry this tag next to the profiles of riders who commute from or towards a COVID hotspot.
                 </div>
                  <div className="uk-margin-top">We believe in helping our users make practical and well-informed decisions while choosing their commute.</div>

                </div>
              </div>
              <div className="uk-width-1-1 uk card uk-card-default">
                <div className="uk-grid uk-padding ">
                  <div ><img src={distancing} /></div>
                  <div className="contents" style={{ fontWeight: "700", fontSize: "18px" }}>Limited Seating Capacity</div>
                </div>
                <div className="uk-text-left contents uk-padding uk-padding-remove-top" style={{ lineHeight: "1.6" }}>In order to enable social distancing on board, we have limited the sharing capacity to 2 seats (apart from the ride-giver) per ride, to have a maximum of 3 people in the car at any point of time during the journey.
              </div>
              </div>
            </div>
            {/* end of safe section */}
            {/* givers/takers section */}
            <div className="uk-width-1-1  uk-padding" style={{ backgroundColor: "white" }}>
              <div className="details_width  uk-align-center">
                <div className="contents" style={{ fontSize: "24px", fontWeight: "700" }}>Best Practices while Travelling</div>
                <Ride></Ride>
              </div>
            </div>
            {/* end of givers/takers section */}
            {/* sharing/caring section */}
            <div className="uk-width-1-1  uk-padding" style={{ backgroundColor: "#465986" }}>
              <div className="details_width uk-align-center">
                <div className="contents" style={{ color: "white", fontSize: "20px", fontWeight: "700" }}>#SharingAndCaring</div>
                <div className="contents" style={{ color: "white", }}>We have always been committed to providing a convenient, economical and sustainable solution to the traffic problem through carpooling and bike pooling.
                Now, as an added responsibility, we are focused on providing a safer commute option for the community to choose.
                </div>
                <div className="contents" style={{ color: "white", }}>
                  While many would still be apprehensive to take public transportation, we have launched the
                  #SharingAndCaring campaign to encourage office goers to make practical decisions when it comes to commuting to work. This campaign also creates awareness among office goers who commute using their own vehicles,
                  to share their ride with their colleagues and friends to help them commute to work easily.
                </div>
              </div>
            </div>
            {/* end of sharing/caring  section */}
            {/* recommends section */}
            <div className="uk-width-1-1 details_width uk-align-center uk-padding" style={{ backgroundColor: "#f7f7f7" }}>
              <p className="contents uk-align-left uk-width-1-1" style={{ fontSize: "24px", fontWeight: "700" }}>rPool Recommends</p>
              <p className="contents uk-align-left uk-width-1-1">It is important, especially during a situation as critical as now, to stay healthy and positive. Here are some of our recommendations:</p>
              <div className="uk-grid">
                <div className="uk-width-1-3@l uk-width-1-1@s">
                  <img src={breaking} style={{ width: "57em" }} />
                </div>
                <div className="uk-width-2-3@l uk-width-1-1@s">
                  <div className="uk-card uk-card-default uk-padding">
                    <p className="contents uk-align-left uk-width-1-1" style={{ fontWeight: "700" }}>#StayInformed</p>
                    <ul>
                      <li className="contents">While it is important to stay informed about the happenings around and the latest updates, it is also equally important that you consume accurate and right information.
                      There are way too much fake news floating around the internet. Do your research and Stay Safe!
                      </li>
                      <li className="contents uk-margin-top">Follow Social media pages of Government Organizations for the right updates. Here is a list of Government bodies categorized city-wise.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* end of recommends section */}
            {/* stayhome section */}
            <div className="uk-width-1-1 details_width uk-align-center uk-padding" style={{ backgroundColor: "#f7f7f7" }}>
              <div className="uk-grid">
                <div className="uk-width-2-3@l uk-width-1-1@s">
                  <div className="uk-card uk-card-default uk-padding">
                    <p className="contents uk-align-left uk-width-1-1" style={{ fontWeight: "700" }}>#JustStayHome</p>
                    <ul>
                      <li className="contents">We urge everyone to stay indoors unless there is an unavoidable reason to travel within or outside the city.
                      </li>
                      <li className="contents uk-margin-top">If you are continuing to work from home, ensure you follow these etiquettes and tips to be more productive at work.
                      </li>
                      <li className="contents uk-margin-top">WHO Recommended Guidelines for public
                      </li>
                      <li className="contents uk-margin-top">Updates and Guidelines by Ministry of Health and Family Welfare, Government of India
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="uk-width-1-3@l uk-width-1-1@s">
                  <img src={JuststayatHome02} style={{ width: "57em" }} />
                </div>
              </div>
            </div>
            {/* end of stayhome section */}
            {/* positive section */}
            <div className="uk-width-1-1 details_width uk-align-center uk-padding" style={{ backgroundColor: "#f7f7f7" }}>
              <div className="uk-grid">
                <div className="uk-width-1-3@l uk-width-1-1@s">
                  <img src={StayPositive} style={{ width: "57em" }} />
                </div>
                <div className="uk-width-2-3@l uk-width-1-1@s">
                  <div className="uk-card uk-card-default uk-padding">
                    <p className="contents uk-align-left uk-width-1-1" style={{ fontWeight: "700" }}>#Stay Positive and Engaged</p>
                    <ul>
                      <li className="contents">Crisis times could be very bothering. You may feel anxious and nervous about the future. There could be far many negative information you may consume.
                      So, we recommend you to stay away from all those negative thoughts and stay positive.
                      </li>
                      <li className="contents uk-margin-top">Keep yourself occupied with
                      healthy habits like working out, reading or by pursuing any of your hobbies indoors.
                      </li>
                      <li className="contents uk-margin-top">We at rPool are doing our best to keep our users engaged and positive through our social media platforms and in-app engagements. Do take a look below:
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* end of positive section */}
            {/* socialmedia section */}
            <div className="uk-width-1-1 uk-padding" style={{ backgroundColor: "#3e3e52" }}>
              <div className="details_width uk-align-center">
                <div className="contents uk-text-left uk-padding-small" style={{ fontSize: "24px", fontWeight: "700", color: "white" }}>Social Media Feed</div>
                <div className="uk-grid uk-child-width-1-4@l uk-child-width-1-2@s">
                  <div>
                    <a><img className="uk-margin-bottom" src={Facebook} style={{ width: "16em", height: "16em" }} /></a>
                  </div>
                  <div>
                    <a><img className="uk-margin-bottom" src={callyouroldmates}style={{ width: "16em", height: "16em" }} /></a>
                  </div>
                  <div>
                    <a><img className="uk-margin-bottom" src={Instagram} style={{ width: "16em", height: "16em" }} /></a>
                  </div>
                  <div>
                    <a><img className="uk-margin-bottom" src={LinkedIn} style={{ width: "16em", height: "16em" }} /></a>
                  </div>
                </div>

              </div>
            </div>
            {/* end of socialmedia section */}
            {/* cityupdates section */}
            <div className="uk-width-1-1 uk-padding" style={{ backgroundColor: "#f7f7f7" }}>
              <div className="details_width uk-align-center">
                <CityUpdates></CityUpdates>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Details;