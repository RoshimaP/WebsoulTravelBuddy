import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Switch from '@material-ui/core/Switch';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './rpool.css';
import footericon from '../../../assets/homepage/redbuswhiteicon.png'

import bg from '../../../assets/rpool/bikecar_banner.png';
import googleplay from '../../../assets/rpool/googleplay.svg';
import appstore from '../../../assets/rpool/ic_appstore.svg';
import Mainbanner from '../../../assets/rpool/MainBanner.svg';
import walletcoin from '../../../assets/rpool/img-offer-wallet-coin.svg';
import offerbox from '../../../assets/rpool/img-offer-box-50.svg';
import coin from '../../../assets/rpool/img-offer-coin.svg';
import activate from '../../../assets/rpool/bc_img_find_active.png';
import reward from '../../../assets/rpool/img_rewards.svg';
import car from '../../../assets/rpool/img_recurring.svg';
import phone from '../../../assets/rpool/img_phone_masing.svg';
import debitpoints from '../../../assets/rpool/img_auto-debit_points.svg';
import recharge from '../../../assets/rpool/ic_recharge.svg';
import redeem from '../../../assets/rpool/ic_redeem.svg';
import arrowleft from '../../../assets/rpool/ic-arrow-left.svg';
import arrowright from '../../../assets/rpool/ic-arrow-right.svg';
import insurance from '../../../assets/rpool/bc_img_insurance.svg';
import privacy from'../../../assets/rpool/img_privacy.svg';
import savings from '../../../assets/rpool/img_savings.svg';
import friends from '../../../assets/rpool/bc_img_friends.svg';
import { Link } from 'react-router-dom';
import iconredbus from '../../../assets/homepage/redbus_real_logo.png'
import transaction from '../../../assets/rpool/img_no_transaction_charge.svg';
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
    flexGrow: 1
  },
}));

function Offerride() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper square>

        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{style: {background:'#38b87c'}}}
         
          textColor="black"
          variant="fullWidth"

        >
          <Tab 
          //  label="aajhj hhbj"
          label={
            <React.Fragment>
              <div>
           <div class=" " uk-grid>
             <div>
           <span class="numberstyle" style={{background:"#38b87c",borderRadius:"50%",color:"#fff",width:"30px",float:"left"}}>1</span>
           </div>
           <div style={{marginLeft:"-5px"}}>
             <div> <span class="tabfont" > Activate </span>
             <span class="tabfont" style={{fontWeight:"100"}}>account</span>
             </div>
             </div> 
             </div>
             </div>
            </React.Fragment>
          }
          
           {...a11yProps(0)} style={{fontSize:"16px",textTransform:"initial"}}  className="contents" ></Tab>

          <Tab
          //  label="aajhj hhbj"
          label={
            <React.Fragment>
              <div>
           <div class=" " uk-grid>
             <div>
           <span class="numberstyle" style={{background:"#3e3e52",borderRadius:"50%",color:"#fff",width:"30px",float:"left"}}>1</span>
           </div>
           <div style={{marginLeft:"-5px"}}>
             <div> <span class="tabfont" > Offer a </span>
             <span class="tabfont" style={{fontWeight:"100"}}>ride</span>
             </div>
             </div> 
             </div>
             </div>
            </React.Fragment>
          }
           {...a11yProps(1)}  className="contents" style={{fontSize:"16px",textTransform:"initial"}}></Tab>
          <Tab
          //  label="aajhj hhbj"
          label={
            <React.Fragment>
              <div>
           <div class=" " uk-grid>
             <div>
           <span class="numberstyle" style={{background:"#3e3e52",borderRadius:"50%",color:"#fff",width:"30px",float:"left"}}>1</span>
           </div>
           <div style={{marginLeft:"-5px"}}>
             <div> <span class="tabfont" >Choose </span>
             <span class="tabfont" style={{fontWeight:"100"}}>from ride</span>
             </div>
             </div> 
             </div>
             </div>
            </React.Fragment>
          }
          
          {...a11yProps(2)} style={{fontSize:"16px",textTransform:"initial"}} className="contents"  ></Tab>
          <Tab 
          // label="aajhj hhbj"
          label={
            <React.Fragment>
              <div>
           <div class=" " uk-grid>
             <div>
           <span class="numberstyle" style={{background:"#3e3e52",borderRadius:"50%",color:"#fff",width:"30px",float:"left"}}>1</span>
           </div>
           <div style={{marginLeft:"-5px"}}>
             <div> <span class="tabfont" >Get </span>
             <span class="tabfont" style={{fontWeight:"100"}}>points</span>
             </div>
             </div> 
             </div>
             </div>
            </React.Fragment>
          }
          
          {...a11yProps(3)}  className="contents" style={{fontSize:"16px",textTransform:"initial"}}></Tab>
        </Tabs>
      </Paper>
      <TabPanel class="uk-margin-remove-right" value={value} index={0} class="uk-width-1-1" >
        <div className="uk-width-1-1">
          <div className="uk-grid uk-child-width-1-2@l uk-child-width-1-1@s uk-width-1-1 contents uk-margin-remove-right">
            <div className="">
              <div className="uk-grid uk-width-1-1">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c",fontSize:"10px" }}></i></div>
                <div className="howitworkscontent uk-width-5-6@l uk-width-1-1@s">Open / Download redbus App</div>
              </div>
              <div className="uk-grid">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c" ,fontSize:"10px"}}></i></div>
                <div className="howitworkscontent uk-width-5-6@l uk-width-1-1@s">Verify your account by your official mail ID</div>
              </div>
            </div>
            <div className="">
              <div className="uk-grid">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c",fontSize:"10px" }}></i></div>
                <div className="howitworkscontent uk-width-5-6@l uk-width-1-1@s">Go to rPool tab and activate your account</div>
              </div>
              <div className="uk-grid uk-margin-remove-right">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c" ,fontSize:"10px"}}></i></div>
                <div className="howitworkscontent uk-width-5-6@l uk-width-1-1@s">Use this account to find / offer ride</div>
              </div>
            </div>
          </div>
          <div className="uk-grid contents uk-width-1-1 " style={{ borderTop: "1px dotted gray", borderRight: "1px dotted gray", borderBottom: "1px dotted gray", borderRadius: "36px" ,borderTopRightRadius: "8px" ,borderBottomRightRadius: "8px",marginLeft:"0px",height:"50px"}}>
            <div className="uk-padding-remove" style={{marginTop:"-3px"}}>
              <img src={reward} />
            </div>
            <div class="uk-padding-small">
              <p className="uk-align-left contents howitworkdiv" style={{ color: "black", fontSize: "17px",fontFamily:"Montserrat",fontWeight:"100" }}><b style={{color:"#3e3e52",WebkitTextStrokeWidth:"thin",fontWeight:"600"}}>50% off</b> on first 5 Rides upto Rs. 25/-</p>

            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="uk-width-1-1">
          <div className="uk-grid uk-child-width-1-2@l uk-child-width-1-1@s uk-width-1-1 contents">
            <div className="">
              <div className="uk-grid uk-width-1-1">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c",fontSize:"10px" }}></i></div>
                <div className="howitworkscontent uk-width-5-6@l uk-width-1-1@s">Choose your starting point and destination</div>
              </div>
              <div className="uk-grid">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c" ,fontSize:"10px"}}></i></div>
                <div className="howitworkscontent uk-width-5-6@l uk-width-1-1@s">Select a bike or car</div>
              </div>
            </div>
            <div className="">
              <div className="uk-grid">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c",fontSize:"10px" }}></i></div>
                <div className="howitworkscontent uk-width-5-6@l uk-width-1-1@s">Choose the date and time for the trip</div>
              </div>
              <div className="uk-grid">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c" ,fontSize:"10px"}}></i></div>
                <div className="howitworkscontent  uk-width-5-6@l uk-width-1-1@s">Schedule repeat rides for easy use</div>
              </div>
            </div>
          </div>
          <div className="uk-grid contents uk-width-1-1 " style={{ borderTop: "1px dotted gray", borderRight: "1px dotted gray", borderBottom: "1px dotted gray", borderRadius: "36px" ,borderTopRightRadius: "8px" ,borderBottomRightRadius: "8px",marginLeft:"0px",height:"50px"}}>
            <div className="uk-padding-remove" style={{marginTop:"-3px"}}>
              <img src={car} />
            </div>
            <div class="uk-padding-small">
              <p className="uk-align-left contents howitworkdiv" style={{ color: "black", fontSize: "17px",fontFamily:"Montserrat",fontWeight:"100" }}><b style={{color:"#3e3e52",WebkitTextStrokeWidth:"thin",fontWeight:"600"}}>50% off</b> on first 5 Rides upto Rs. 25/-</p>

            </div>
          </div>
        </div>

      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="uk-width-1-1">
          <div className="uk-grid uk-child-width-1-2@l uk-child-width-1-1@s uk-width-1-1 contents">

            <div className="">
              <div className="uk-grid">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c" ,fontSize:"10px"}}></i></div>
                <div className="howitworkscontent uk-width-5-6@l uk-width-1-1@s">Choose from your list of verified riders to join your pool</div>
              </div>
              <div className="uk-grid">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c" ,fontSize:"10px"}}></i></div>
                <div className="howitworkscontent uk-width-5-6@l uk-width-1-1@s">Pickup the riders on the go</div>
              </div>
            </div>
            <div className="">
              <div className="uk-grid uk-width-1-1">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c" ,fontSize:"10px"}}></i></div>
                <div className="howitworkscontent uk-width-5-6@l uk-width-1-1@s">Contact your fellow riders through the app</div>
              </div>
            </div>
          </div>
          <div className="uk-grid contents uk-width-1-1 " style={{ borderTop: "1px dotted gray", borderRight: "1px dotted gray", borderBottom: "1px dotted gray", borderRadius: "36px" ,borderTopRightRadius: "8px" ,borderBottomRightRadius: "8px",marginLeft:"0px",height:"50px"}}>
            <div className="uk-padding-remove" style={{marginTop:"-3px"}}>
              <img src={phone} />
            </div>
            <div class="uk-padding-small">
              <p className="uk-align-left contents howitworkdiv" style={{ color: "black", fontSize: "17px",fontFamily:"Montserrat",fontWeight:"100" }}><b style={{color:"#3e3e52",WebkitTextStrokeWidth:"thin",fontWeight:"600"}}>50% off</b> on first 5 Rides upto Rs. 25/-</p>

            </div>
          </div>
        </div>

      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="uk-width-1-1">
          <div className="uk-grid uk-child-width-1-2@l uk-child-width-1-1@s uk-width-1-1 contents">
            <div className="">
              <div className="uk-grid uk-width-1-1">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c" ,fontSize:"10px"}}></i></div>
                <div className="howitworkscontent  uk-width-5-6@l uk-width-1-1@s">Get points from each riders for fuel share</div>
              </div>
              <div className="uk-grid">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c" ,fontSize:"10px"}}></i></div>
                <div className="howitworkscontent  uk-width-5-6@l uk-width-1-1@s">Rate your rider and save them as a favourite to ride with them again</div>
              </div>
            </div>
            <div className="">
              <div className="uk-grid">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c" ,fontSize:"10px"}}></i></div>
                <div className="howitworkscontent  uk-width-5-6@l uk-width-1-1@s">Auto-debit payments using points no variable cost and cash payments</div>
              </div>
            </div>
          </div>
          <div className="uk-grid contents uk-width-1-1 " style={{ borderTop: "1px dotted gray", borderRight: "1px dotted gray", borderBottom: "1px dotted gray", borderRadius: "36px" ,borderTopRightRadius: "8px" ,borderBottomRightRadius: "8px",marginLeft:"0px",height:"50px"}}>
            <div className="uk-padding-remove" style={{marginTop:"-3px"}}>
              <img src={debitpoints} />
            </div>
            <div class="uk-padding-small">
              <p className="uk-align-left contents howitworkdiv" style={{ color: "black", fontSize: "17px",fontFamily:"Montserrat",fontWeight:"100" }}><b style={{color:"#3e3e52",WebkitTextStrokeWidth:"thin",fontWeight:"600"}}>50% off</b> on first 5 Rides upto Rs. 25/-</p>

            </div>
          </div>
        </div>

      </TabPanel>

    </div>
  );
}
function Findride() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper square class="papertabs">

        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{style: {background:'#38b87c'}}}
         
          textColor="black"
          variant="fullWidth"
        >
          <Tab  label={
            <React.Fragment>
              <div>
           <div class=" " uk-grid>
             <div>
           <span class="numberstyle" style={{background:"#38b87c",borderRadius:"50%",color:"#fff",width:"30px",float:"left"}}>1</span>
           </div>
           <div style={{marginLeft:"-5px"}}>
             <div> <span class="tabfont" >Activate </span>
             <span class="tabfont" style={{fontWeight:"100"}}>account</span>
             </div>
             </div> 
             </div>
             </div>
            </React.Fragment>
          }   style={{fontSize:"16px",textTransform:"initial"}}   {...a11yProps('0')} className="contents" ></Tab>

          <Tab label={
            <React.Fragment>
              <div>
           <div class=" " uk-grid>
             <div>
           <span class="numberstyle" style={{background:"#3e3e52",borderRadius:"50%",color:"#fff",width:"30px",float:"left"}}>1</span>
           </div>
           <div style={{marginLeft:"-5px"}}>
             <div> <span class="tabfont" >Request </span>
             <span class="tabfont" style={{fontWeight:"100"}}>a ride</span>
             </div>
             </div> 
             </div>
             </div>
            </React.Fragment>
          } {...a11yProps(1)}  style={{fontSize:"16px",textTransform:"initial"}} className="contents" ></Tab>
          <Tab label={
            <React.Fragment>
              <div>
           <div class=" " uk-grid>
             <div>
           <span class="numberstyle" style={{background:"#3e3e52",borderRadius:"50%",color:"#fff",width:"30px",float:"left"}}>1</span>
           </div>
           <div style={{marginLeft:"-5px"}}>
             <div> <span class="tabfont" >Choose </span>
             <span class="tabfont" style={{fontWeight:"100"}}>from ride</span>
             </div>
             </div> 
             </div>
             </div>
            </React.Fragment>
          } {...a11yProps(2)} style={{fontSize:"16px",textTransform:"initial"}} className="contents" ></Tab>
          <Tab label={
            <React.Fragment>
              <div>
           <div class=" " uk-grid>
             <div>
           <span class="numberstyle" style={{background:"#3e3e52",borderRadius:"50%",color:"#fff",width:"30px",float:"left"}}>1</span>
           </div>
           <div style={{marginLeft:"-5px"}}>
             <div> <span class="tabfont" >Pay </span>
             <span class="tabfont" style={{fontWeight:"100"}}>using points</span>
             </div>
             </div> 
             </div>
             </div>
            </React.Fragment>
          } {...a11yProps(3)} style={{fontSize:"16px",textTransform:"initial"}} className="contents" ></Tab>
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0} class="uk-width-1-1">
        <div className="uk-width-1-1">
          <div className="uk-grid uk-child-width-1-2@l uk-child-width-1-1@s uk-width-1-1 contents">
            <div className="">
              <div className="uk-grid uk-width-1-1">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c" ,fontSize:"10px"}}></i></div>
                <div className="uk-width-5-6@l uk-width-1-1@s">Open / Download redbus App</div>
              </div>
              <div className="uk-grid">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c" ,fontSize:"10px"}}></i></div>
                <div className="uk-width-5-6@l uk-width-1-1@s">Verify your account by your official mail ID</div>
              </div>
            </div>
            <div className="">
              <div className="uk-grid">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c" ,fontSize:"10px"}}></i></div>
                <div className="uk-width-5-6@l uk-width-1-1@s">Go to rPool tab and activate your account</div>
              </div>
              <div className="uk-grid">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c" ,fontSize:"10px"}}></i></div>
                <div className="uk-width-5-6@l uk-width-1-1@s">Use this account to find / offer ride</div>
              </div>
            </div>
          </div>
          <div className="uk-grid contents uk-width-1-1 " style={{ borderTop: "1px dotted gray", borderRight: "1px dotted gray", borderBottom: "1px dotted gray", borderRadius: "36px" ,borderTopRightRadius: "8px" ,borderBottomRightRadius: "8px",marginLeft:"0px",height:"50px"}}>
            <div className="uk-padding-remove" style={{marginTop:"-3px"}}>
              <img src={reward} />
            </div>
            <div class="uk-padding-small">
              <p className="uk-align-left contents howitworkdiv" style={{ color: "black", fontSize: "17px",fontFamily:"Montserrat",fontWeight:"100" ,marginRight:"0px"}}><b style={{color:"#3e3e52",WebkitTextStrokeWidth:"thin",fontWeight:"600"}}>50% off</b> on first 5 Rides upto Rs. 25/-</p>

            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="uk-width-1-1">
          <div className="uk-grid uk-child-width-1-2@l uk-child-width-1-1@s uk-width-1-1 contents">
            <div className="">
              <div className="uk-grid uk-width-1-1">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c" ,fontSize:"10px"}}></i></div>
                <div className="uk-width-5-6@l uk-width-1-1@s">Tell us your start point and destination</div>
              </div>
              <div className="uk-grid">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c" ,fontSize:"10px"}}></i></div>
                <div className="uk-width-5-6@l uk-width-1-1@s">Schedule repeat rides for easy use</div>
              </div>
            </div>
            <div className="">
              <div className="uk-grid">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c" ,fontSize:"10px"}}></i></div>
                <div className="uk-width-5-6@l uk-width-1-1@s">Choose no. of seats, date and time</div>
              </div>
            </div>
          </div>
          <div className="uk-grid contents uk-width-1-1 " style={{ borderTop: "1px dotted gray", borderRight: "1px dotted gray", borderBottom: "1px dotted gray", borderRadius: "36px" ,borderTopRightRadius: "8px" ,borderBottomRightRadius: "8px",marginLeft:"0px",height:"50px"}}>
            <div className="uk-padding-remove" style={{marginTop:"-3px"}}>
              <img src={car} />
            </div>
            <div class="uk-padding-small  ">
              <p className="uk-align-left contents howitworkdiv" style={{ color: "black", fontSize: "17px",fontFamily:"Montserrat",fontWeight:"100" }}><b style={{color:"#3e3e52",WebkitTextStrokeWidth:"thin",fontWeight:"600"}}>50% off</b> on first 5 Rides upto Rs. 25/-</p>

            </div>
          </div>
        </div>

      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="uk-width-1-1">
          <div className="uk-grid uk-child-width-1-2@l uk-child-width-1-1@s uk-width-1-1 contents">

            <div className="">
              <div className="uk-grid">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c" ,fontSize:"10px"}}></i></div>
                <div className="uk-width-5-6@l uk-width-1-1@s">Choose from a list of verified bike or car owners to pool with</div>
              </div>
              <div className="uk-grid">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c" ,fontSize:"10px"}}></i></div>
                <div className="uk-width-5-6@l uk-width-1-1@s">Track your ride ontime</div>
              </div>
            </div>
            <div className="">
              <div className="uk-grid uk-width-1-1">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c" ,fontSize:"10px"}}></i></div>
                <div className="uk-width-5-6@l uk-width-1-1@s">Contact your rider without sharing number</div>
              </div>
              <div className="uk-grid uk-width-1-1">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c" ,fontSize:"10px"}}></i></div>
                <div className="uk-width-5-6@l uk-width-1-1@s">Join the ride from the pickup point</div>
              </div>
            </div>
          </div>
          <div className="uk-grid contents uk-width-1-1 " style={{ borderTop: "1px dotted gray", borderRight: "1px dotted gray", borderBottom: "1px dotted gray", borderRadius: "36px" ,borderTopRightRadius: "8px" ,borderBottomRightRadius: "8px",marginLeft:"0px",height:"50px"}}>
            <div className="uk-padding-remove" style={{marginTop:"-3px"}}>
              <img src={phone} />
            </div>
            <div class="uk-padding-small">
              <p className="uk-align-left contents howitworkdiv" style={{ color: "black", fontSize: "17px",fontFamily:"Montserrat",fontWeight:"100" }}><b style={{color:"#3e3e52",WebkitTextStrokeWidth:"thin",fontWeight:"600"}}>50% off</b> on first 5 Rides upto Rs. 25/-</p>

            </div>
          </div>
        </div>

      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="uk-width-1-1">
          <div className="uk-grid uk-child-width-1-2@l uk-child-width-1-1@s uk-width-1-1 contents">
            <div className="">
              <div className="uk-grid uk-width-1-1">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c" ,fontSize:"10px"}}></i></div>
                <div className="uk-width-5-6@l uk-width-1-1@s">Open / Download redbus App</div>
              </div>
              <div className="uk-grid">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c" ,fontSize:"10px"}}></i></div>
                <div className="uk-width-5-6@l uk-width-1-1@s">Auto-debit payments using points, (No variable cost & No cash payment)</div>
              </div>
            </div>
            <div className="">
              <div className="uk-grid">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c" ,fontSize:"10px"}}></i></div>
                <div className="uk-width-5-6@l uk-width-1-1@s">Before ride buy points using credit card & Netbanking</div>
              </div>
              <div className="uk-grid">
                <div className="uk-width-1-6@l uk-width-1-1@s"><i class="fa fa-circle" aria-hidden="true" style={{ color: " #38b87c" ,fontSize:"10px"}}></i></div>
                <div className="uk-width-5-6@l uk-width-1-1@s">Rate your rider and save as them as favorite to ride with them again</div>
              </div>
            </div>
          </div>
          <div className="uk-grid contents uk-width-1-1 " style={{ borderTop: "1px dotted gray", borderRight: "1px dotted gray", borderBottom: "1px dotted gray", borderRadius: "36px" ,borderTopRightRadius: "8px" ,borderBottomRightRadius: "8px",marginLeft:"0px",height:"50px"}}>
            <div className="uk-padding-remove" style={{marginTop:"-3px"}}>
              <img src={debitpoints} />
            </div>
            <div class="uk-padding-small">
              <p className="uk-align-left contents howitworkdiv" style={{ color: "black", fontSize: "17px",fontFamily:"Montserrat",fontWeight:"100" }}><b style={{color:"#3e3e52",WebkitTextStrokeWidth:"thin",fontWeight:"600"}}>50% off</b> on first 5 Rides upto Rs. 25/-</p>

            </div>
          </div>
        </div>

      </TabPanel>

    </div>
  );
}
function Switches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    if (event.target.checked) {
      document.getElementById('first').style.display = "block";
      document.getElementById('second').style.display = "none";
    }
    else {
      document.getElementById('second').style.display = "block";
      document.getElementById('first').style.display = "none";
    }
  };

  return (
    <div class=" uk-width-1-1 uk-align-left contents">
      Find Ride<Switch
     
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        size="large"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />Offer Ride
     
      <div class="uk-text-left" style={{marginTop:"20px"}}>
        <div id="first" class="uk-overflow-auto uk-width-1-1">
          <Offerride></Offerride>
        </div>
        <div id="second" style={{ display: "none" }}>
          <Findride></Findride>
        </div>
      </div>

    </div>
  );
}
class Rpool extends Component {

  state = {}
  render() {
    return (
      <div className="" style={{ backgroundColor: "rgb(247, 247, 247)" }}>
        {/* navigation */}
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: "#d84f57",marginLeft:"-18px" }}>
            <span className="uk-padding uk-padding-remove-top uk-padding-remove-bottom uk-visible@l"></span>
            <Link class="navbar-brand uk-text-bold bus-ticket "  style={{margin:"0px"}} to="/">
           <img src={iconredbus} class=" " alt=" " style={{marginTop:"-46px",marginBottom:"-46px"}} width="75px" height="39px"/>
         </Link>          
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
                  <Link class="nav-link" to="/Bushire">BUS HIRE</Link>
                  
                </li>
                <li class="nav-item px-2">
                  <Link class="nav-link" to="/prilgrimages">PILGRIMAGE</Link>
                </li>
              </ul>
            </div>
          </nav>
          {/* end of navigation */}

          <div className="main-body"style={{}}>
            {/* contents on bg image */}
            <div className="uk-width-1-1 uk-background-cover uk-padding-large" style={{ width: "100%", height: "600px", backgroundImage: 'url(' + require('../../../assets/rpool/bikecar_banner.png') + ')', backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundSize: "center" }}>

              <div className=" rp-heading div_width uk-padding">
                <p className="uk-align-left uk-padding-small uk-padding-remove-top uk-padding-remove-bottom rp-heading uk-width-1-1 rp-main-head" style={{}}>
                  Bike pool & Carpool for Professionals
                          </p>
                <p className="uk-align-left uk-padding-small uk-padding-remove-top uk-width-1-1 rp-heading" style={{ fontSize: "22px" }}>
                  Extra savings upto Rs 2000/- every week
                          </p>
              </div>
              <div className="uk-margin-bottom div_width uk-padding">
                <div className="uk-grid uk-padding-small uk-margin-bottom">
                  <a href="https://play.google.com/store/apps/details?id=in.redbus.android&amp;hl=en"><img src={googleplay} width="200px" /></a>
                  <a class="appmargin" href="https://apps.apple.com/in/app/redbus/id733712604"><img src={appstore} width="200px" className="" /></a>
                </div>
             {/** <div className="uk-align-left uk-padding-small uk-padding-remove-top rp-heading uk-margin-bottom uk-width-1-1" style={{ fontSize: "16px" }}>Currently live in  <b style={{ fontWeight: "700", }}>BANGALORE, HYDERABAD, PUNE, CHENNAI and NEW DELHI - NCR</b></div>
             */}  
               </div>


            </div>
            {/*end of contents on bg image */}

            {/*small middle contents on bg image */}
            <div className="uk-align-center div_width " style={{ marginTop: "-120px" }}>
              <div className="uk-padding">
                <div className="uk-card uk-card-default uk-grid uk-margin-remove " style={{ borderRadius: "20px", borderTop: "5px solid #38b87c" }}>
                  <div className="uk-width-1-4@l uk-width-1-2@m uk-align-center uk-padding-small uk-padding-remove-bottom uk-padding-remove-top">
                    <img src={Mainbanner} style={{ width: "13em" }} />
                  </div>
                  <div className="uk-child-width-1-1 uk-width-1-2@l uk-width-1-2@m uk-padding-small uk-padding-remove-bottom">

                    <p style={{ fontSize: "21px", fontWeight: "700", color: "#3e3e52" }} className="uk-align-left rp-heading uk-margin-top">Hello there, rPool services resume in select cities</p>
                    <p style={{ fontSize: "16px", fontWeight: "400", color: "#7e7e8c" }} className="uk-align-left rp-heading">We have enabled new safety features for ensuring the safety of our riders</p>
                  </div>
                  <div className="uk-width-1-4@l uk-width-1-2@m uk-padding-large">
                    <Link className="font_fam" style={{ color: "rgb(77, 68, 158)", fontSize: "18px", fontWeight: "700", textDecoration: "none", cursor: "pointer" }} to="/viewdetails">VIEW DETAILS</Link>

                  </div>

                </div>

              </div>
            </div>
            {/*end of small middle contents on bg image */}

            {/* Offers */}
            <div className=" uk-align-center " style={{width:"85%"}}>
              <p className="sec_headings uk-align-left uk-width-1-1 " style={{marginBottom:"6px",WebkitTextStrokeWidth:"thin"}}>Offers</p>
              <div className="uk-grid uk-width-1-1  uk-margin-medium-bottom" >
                <div className="contents  uk-width-1-2@l uk-width-1-3@m uk-width-1-1@s uk-text-left" style={{fontWeight:"400"}}>Exciting offers for everyone. rPool Now!</div>
                <div className="contents uk-width-1-2@l uk-width-1-3@m uk-width-1-1@s uk-text-right@l uk-text-left@s">
                  <Link style={{ color: "#1034d9", cursor: "pointer", fontWeight: "600",WebkitTextStrokeWidth:"thin" ,fontSize:14}} to="/alloffers">VIEW ALL OFFERS</Link>
                </div>
              </div>
              <div uk-slider="finite: true" className="uk-margin-large-bottom">

                <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">

                  <ul class="uk-slider-items uk-child-width-1-3@l uk-child-width-1-3@m uk-child-width-1-3@s uk-grid">
                    <OffersCard></OffersCard>
                  </ul>
                  <div class="modal fade uk-width-1-1 " id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{index:"20000"}}>
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header" style={{ backgroundColor:"#eee"}}>
        <div className="uk-grid">
          <div className="uk-width-1-3">
            <img src={offerbox}/>
          </div>
          <div className="uk-width-2-3">
            <p className="uk-align-left uk-width-1-1 contents">₹1500 extra on 5 outstation rides</p>
            <p className="uk-align-left uk-width-1-1 contents">Use code RPOOLOUTSTATION and get Rs. 300 flat extra</p>
          </div>

        </div>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
     <p>About the offer</p>
     <ul className="contents">
       <li>
       Offer valid for ride givers only.
       </li>
       <li>
       Flat cashback of ₹ 300 for each ride.
       </li>
       <li>
       Offer code is valid for 5 timer per user.
       </li>
       <li>
       Offer code RPOOLOUTSTATION to be put in before inviting ride takers in your ride.
       </li>
       <li>
       Atleast 1 ride taker to be in the ride to be eligible for the offer.
       </li>

     </ul>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
                  <a class="uk-position-center-left uk-position-small " href="#" uk-slidenav-previous uk-slider-item="previous" style={{ cursor: "pointer", color: "black" }}><span uk-icon="icon: chevron-left"></span></a>
                  <a class="uk-position-center-right uk-position-small " href="#" uk-slidenav-next uk-slider-item="next" style={{ cursor: "pointer", color: "black" }}><span uk-icon="icon: chevron-right"></span></a>

                </div>

              </div>

            </div>
            {/* end of Offers */}
          </div>
          <div className="uk-padding-large uk-padding-remove-left uk-padding-remove-right" style={{ backgroundColor: "white" }}>
            {/* how it works */}
            <div className="uk-align-center div_width" style={{ backgroundColor: "white" }}>
              <div className="uk-grid">
                <div className="uk-width-1-3@l uk-width-1-3@m uk-width-1-1@s">
                  <img src={activate}  style={{width:"260px",height:"493px"}}/>
                </div>{/**howitworks */}
                <div className=" uk-width-2-3@l uk-width-2-3@m  uk-width-1-1@s" style={{marginTop:"35px"}}>
                  <p className="block-heading  uk-align-left" style={{letterSpacing:"2px"}}>How it works</p>
                  <Switches></Switches>

                </div>
              </div>
            </div>
            {/* end of how it works */}
          </div>
          {/* video section */}
          <div className="uk-padding-large uk-padding-remove-left uk-padding-remove-right" style={{ backgroundColor: "#f7f7f7" }}>
            <div className="uk-align-center div_width" style={{ fontWeight: "700" }}>
              <p style={{ fontSize: "32px", color: "#3e3e52" }}>rPool by redBus - Bikepool and Carpool for Professionals</p>
              <iframe src="https://www.youtube.com/embed/GIZlD2b2bn8?rel=0" class="uk-width-1-2 uk-align-center" height="300">
              </iframe>
            </div>
          </div>
          {/*end of video section */}
          {/* rpool wallet section */}
          <div className="" style={{ backgroundColor: "#ededed" }}>
            <div className="uk-align-center " style={{width:"85%",paddingTop:"48px",paddingBottom:"48px"}}>
              <div className="uk-grid uk-width-1-1 uk-margin-remove" >
                <div className="uk-width-1-4@l uk-width-1-1@m" style={{marginTop:"43px",marginLeft:"-15px"}}>
                  <div className="uk-margin-bottom" style={{ height: "6px",width:"70px", backgroundColor: "#d84e55" }}>

                  </div>
                  <div>
                  <div style={{width:"87%"}}>  <p className=" uk-align-left font_fam" style={{ fontSize: "28px", fontWeight: "700", color: "#3e3e52" ,WebkitTextStrokeWidth:"thin"}}><b>Introducing</b> <b>rPool<b> Points</b> </b></p></div>
                    <p className=" uk-align-left font_fam" style={{ color: "#7e7e8c", fontSize: "15px" }}>Load an amount into your rPool Wallet to use for your rides.</p>
                  </div>
                </div>
                <div className="uk-width-3-4@l uk-width-1-1@m uk-padding-small">
                  <div class="uk-child-width-1-3@m uk-grid uk-grid-match">

                    <div className="cardintro">
                      <div class="uk-card uk-card-default uk-card-body  " style={{padding:"17px",marginRight:"-14px"}}>
                        <div class=" uk-padding-small uk-padding-remove-left uk-padding-remove-right" >
                          <img className="" src={recharge} style={{ height: "70px" }} />
                        </div>
                        <div class="">
                          <div className="font_fam uk-align-left uk-width-1-1" style={{ fontSize: "16px", fontWeight: "700", color: "#3e3e52",WebkitTextStrokeWidth:"thin"}}>RECHARGE</div>
                          <div className="contentsa" >Add an amount with a choice of netbanking, credit/debit cards and wallets.</div>
                        </div>
                      </div>
                    </div>
                    <div className="cardintro">
                      <div class="uk-card uk-card-default uk-card-body " style={{padding:"17px",marginRight:"-14px"}}>
                        <div class=" uk-padding-small uk-padding-remove-left uk-padding-remove-right" >
                          <img className="" src={debitpoints} style={{ height: "70px" }} />
                        </div>
                        <div class="">
                          <div className="font_fam uk-align-left uk-width-1-1" style={{ fontSize: "16px", fontWeight: "700", color: "#3e3e52",WebkitTextStrokeWidth:"thin"}}>AUTO DEBIT/CREDIT</div>
                          <div className="contentsa" style={{  marginBottom:"32px"}}>Set your amount for auto debit after each ride.</div>
                        </div>
                      </div>
                    </div>
                    <div className="cardintro">
                      <div class="uk-card uk-card-default uk-card-body "  style={{padding:"17px",marginRight:"-14px"}}>
                        <div class=" uk-padding-small uk-padding-remove-left uk-padding-remove-right " >
                          <img className="" src={redeem} style={{ height: "70px" }} />
                        </div>
                        <div class="">
                          <div className="font_fam uk-align-left uk-width-1-1" style={{ fontSize: "16px", fontWeight: "700", color: "#3e3e52",WebkitTextStrokeWidth:"thin" }}>REDEEM</div>
                          <div className="contentsa" style={{marginBottom:"32px"  }}>For Ride Givers wallet amount can be redeemed against Amazon Gift card</div>
                        </div>
                      </div>
                    </div>
                  </div>




                </div>
              </div>
            </div>
          </div>
          {/* end of rpool wallet section */}
          {/* why rpool section */}
          <div className="uk-padding-large uk-padding-remove-left uk-padding-remove-right" style={{ backgroundColor: "white" }}>
            <div className=" why_pool" style={{width:"70%"}}>
              <h2 style={{fontSize:"25px",fontWeight:"700",fontFamily:"Montserrat",color:"#3e3e52",WebkitTextStrokeWidth:"medium",letterSpacing:"2px"}}>
              Why redBus rPool?
              </h2>
              <br/>
              <br/>
              <div className="uk-grid uk-child-width-1-2@l uk-grid-match">
                <div className="" >
                  <div className="uk-grid" style={{marginBottom:"50px"}}>
                    <div className="uk-width-1-3">
                      <img src={insurance}  style={{height:"110px"}}/>
                    </div>
                    <div className="uk-width-2-3 ">
                      <p className="uk-align-left uk-width-1-1 contents" style={{ fontWeight: "700",WebkitTextStrokeWidth:"thin",letterSpacing:"1px",marginBottom:"20px" }}>Travel Smart with Insurance</p>
                      <p className="uk-align-left uk-width-1-1 contentsp" style={{  }}>
                        We wish you a safe trip every time. That’s why when you ride on rPool, we cover every trip with insurance
                    </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="uk-grid" style={{marginBottom:"50px"}}>
                    <div className="uk-width-1-3">
                      <img src={privacy} style={{height:"110px"}} />
                    </div>
                    <div className="uk-width-2-3 ">
                      <p className="uk-align-left uk-width-1-1 contents" style={{ fontWeight: "700",WebkitTextStrokeWidth:"thin",letterSpacing:"1px" ,marginBottom:"20px" }}>Privacy Protected</p>
                      <p className="uk-align-left uk-width-1-1 contentsp" style={{ }}>
                        Your details are kept safe with us. When you call fellow travellers, the call is routed through the app with phone masking enabled.
                    </p>
                    </div>
                  </div>
                </div>
              <div className="">
                  <div className="uk-grid" style={{marginBottom:"50px"}}>
                    <div className="uk-width-1-3">
                      <img src={savings} style={{height:"110px"}} />
                    </div>
                    <div className="uk-width-2-3 ">
                      <p className="uk-align-left uk-width-1-1 contents" style={{ fontWeight: "700",WebkitTextStrokeWidth:"thin",letterSpacing:"1px",marginBottom:"20px"  }}>Save More on every ride</p>
                      <p className="uk-align-left uk-width-1-1 contentsp" style={{ }}>
                        With rPool you get the best value for rides with opportunities to earn bonus rPool points through great offers.
                    </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="uk-grid" style={{marginBottom:"50px"}}>
                    <div className="uk-width-1-3">
                      <img src={friends} style={{height:"110px"}}/>
                    </div>
                    <div className="uk-width-2-3 ">
                      <p className="uk-align-left uk-width-1-1 contents" style={{ fontWeight: "700",WebkitTextStrokeWidth:"thin",letterSpacing:"1px"  ,marginBottom:"20px"}}>Networking on the go</p>
                      <p className="uk-align-left uk-width-1-1 contentsp" style={{ }}>
                        Create new friendships with your fellow bikepoolers or carpoolers. Connect with various professionals and enjoy networking while on your rides.
                    </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="uk-grid" style={{marginBottom:"50px"}}>
                    <div className="uk-width-1-3">
                      <img src={transaction} style={{height:"110px"}} />
                    </div>
                    <div className="uk-width-2-3 ">
                      <p className="uk-align-left uk-width-1-1 contents" style={{ fontWeight: "700",WebkitTextStrokeWidth:"thin",letterSpacing:"1px",marginBottom:"20px"  }}>No Transaction Charges</p>
                      <p className="uk-align-left uk-width-1-1 contentsp" style={{ }}>
                        We believe in making every ride even more pleasant, therefore enjoy your pool without any transaction charges.
                   </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end of why rpool section */}
          {/* what is rpool section */}
          <div className="uk-padding-large uk-padding-remove-left uk-padding-remove-right aboutRpool" style={{ backgroundColor: "#f7f7f7" }}>
            <div className="uk-align-center " style={{width:"85%"}}>
              <div className="uk-grid">
                <div className="uk-width-2-3@l uk-width-1-1@s">
                  <p className="contents uk-align-left" style={{ fontSize: "27px",WebkitTextStrokeWidth:"medium",letterSpacing:"2px" }}>What is rPool?</p>

                  <p className="contents uk-align-left" style={{fontWeight:"400"}}>rPool is an eco-smart option for handling all your travels to work by connecting you with fellow professional riders.
  As our cities are growing, increased traffic adds to the chaos and pollution.</p>

                  <p className="contents uk-align-left" style={{fontWeight:"400"}}>
                    Bikepooling and Carpooling are the best options for socially responsible citizens.
                    Optimizing every ride, rPool makes it easy to find fellow riders for your route and pay for rides using your rPool Points.
                    So book your ride now!
  </p>
                </div>
              </div>
            </div>
          </div>
          {/* end of what is rpool section */}
          {/* customer reviews section */}
          <div className="uk-padding-large uk-padding-remove-left uk-padding-remove-right" style={{ backgroundColor: "white " }}>
            <div className="uk-align-center " style={{width:"85%"}}>
              <p className="sec_headings uk-align-left uk-width-1-1" style={{WebkitTextStrokeWidth:"thin",letterSpacing:"2px",marginLeft:"20px" }}>Customer Review</p>
              {/* <a class="" href="#" uk-slidenav-previous uk-slider-item="previous" style={{ color: "#3e3e52" }}><img src={arrowleft} />
            </a> */}
              <div className="uk-align-center uk-width-1-1" uk-slider="" style={{ overflow: "hidden",height:"210px", width:"100%"}}>
             
                <div class="uk-position-relative " tabindex="-1">

                  <ul class="uk-slider-items uk-child-width-1-1@s uk-child-width-1-2@l uk-grid">
                    <li>
                      <div class="uk-card uk-card-default customer_reviews">

                        <div class="uk-card-body">
                          <h3 class="uk-card-title contentsreview" style={{ fontWeight: "700",WebkitTextStrokeWidth:"thin" }}>Kunal dubey</h3>
                          <p class="" style={{fontSize:"13px",color:"#7e7e8c",fontFamily:"Montserrat",marginTop:"2em"}}>Good initiative by redBus , It is very enjoyable and price is cheap too.</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="uk-card uk-card-default customer_reviews">

                        <div class="uk-card-body">
                          <h3 class="uk-card-title contentsreview" style={{ fontWeight: "700",WebkitTextStrokeWidth:"thin"  }}>Akhil</h3>
                          <p className="" style={{fontSize:"13px",color:"#7e7e8c",fontFamily:"Montserrat",marginTop:"2em"}}> Good thought by redBus. redBus is a friendly platform for commuters.</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="uk-card uk-card-default customer_reviews">

                        <div class="uk-card-body">
                          <h3 class="uk-card-title contentsreview" style={{ fontWeight: "700",WebkitTextStrokeWidth:"thin"  }}>Akhil Kancherla</h3>
                          <p className="" style={{fontSize:"13px",color:"#7e7e8c",fontFamily:"Montserrat",marginTop:"2em"}}>Easy to book and cost is also reasonable. User interface also nice. Overall I am satisfied.</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="uk-card uk-card-default customer_reviews">

                        <div class="uk-card-body">
                          <h3 class="uk-card-title contentsreview" style={{ fontWeight: "700",WebkitTextStrokeWidth:"thin"  }}>Ajinkya</h3>
                          <p className="" style={{fontSize:"13px",color:"#7e7e8c",fontFamily:"Montserrat",marginTop:"2em"}}>It is just awesome. Mostly my travel experience has been amazing.</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="uk-card uk-card-default customer_reviews">

                        <div class="uk-card-body">
                          <h3 class="uk-card-title contentsreview" style={{ fontWeight: "700",WebkitTextStrokeWidth:"thin"  }}>Neeraj Tiwari</h3>
                          <p className="" style={{fontSize:"13px",color:"#7e7e8c",fontFamily:"Montserrat",marginTop:"2em"}}>rPool is very exciting and interesting to use. It has been a very good experience using rPool. </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="uk-card uk-card-default customer_reviews">

                        <div class="uk-card-body">
                          <h3 class="uk-card-title contents" style={{ fontWeight: "700" }}>Kunal dubey</h3>
                          <p className="" style={{fontSize:"13px",color:"#7e7e8c",fontFamily:"Montserrat",marginTop:"2em"}}>Good initiative by redBus , It is very enjoyable and price is cheap too.</p>
                        </div>
                      </div>
                    </li>
                    
                  </ul>
                  <a href="#" class="uk-slidenav-large uk-position-center-left uk-position-small" uk-slidenav-previous uk-slider-item="previous" style={{ color: "#3e3e52" }}><i class="fas fa-less-than    "></i></a>
       <a href="#" class="uk-position-center-right uk-position-small uk-slidenav-large" uk-slidenav-next uk-slider-item="next" style={{ color: "#3e3e52" }}><i class="fas fa-greater-than    "></i></a>

                  {/* <a class="uk-position-center-left uk-position-small" href="#" uk-slidenav-previous uk-slider-item="previous" style={{ color: "#3e3e52" }}><i class="fas fa-less-than    "></i></a>
                  <a class=" uk-position-center-right uk-position-small " href="#" uk-slidenav-next uk-slider-item="next" style={{ color: "#3e3e52" }}><i class="fas fa-greater-than    "></i></a> 
 
             */}
             
                </div>
               
                
                
                
              </div>
              
              {/* <a class="  " href="#" uk-slidenav-next uk-slider-item="next" style={{ color: "#3e3e52" }}> <img src={arrowright} />
            </a> */}
              
            </div>
          </div>
          {/* end of customer reviews section */}
          {/* FAQ section */}
          <div className="uk-padding-small uk-padding-remove-left uk-padding-remove-right" style={{ backgroundColor: "white " }}>
            <div className="uk-align-center uk-width-1-1 " style={{width:"82%"}}>
              <div className="uk-text-left uk-margin-bottom sec_headings" style={{WebkitTextStrokeWidth:"thin"}}>
                FAQ
            </div>
              <ul className=" uk-width-1-1" uk-accordion="multiple: true">
                <li class="uk-open">
                  <a class="uk-accordion-title contents" href="#" style={{fontSize: "14px" ,WebkitTextStrokeWidth:"thin" }}>1. ABOUT RPOOL</a>
                  <div class="uk-accordion-content">
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>What is rPool?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">rPool is an online carpool platform that connects Driver(s)
                      (herein after referring to those who offer rides) and Rider(s) (herein after referring to those who are searching for rides).
             Both parties herein after referred to as “Riders”.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>What is carpooling?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">Carpooling is a smart way to commute by sharing just one vehicle. A car owner, offers ride and chooses fellow riders who travel along the same route. In addition to being a more affordable way to commute,
             it also helps the environment by reducing the number of cars on the road and bringing down the pollution.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>How is rPool different than other carpooling cab services?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">rPool is not a cab service. It is an online carpool platform that connects Driver(s) and Rider(s).
            rPool caters exclusively to working professionals, who are verified riders.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>How does rPool work?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">Private car owners desirous of offering a Trip to other professionals traveling on the routes of daily commute will register on the rPool platform and offer rides or invite registered Riders. Alternately, Riders who find Drivers on their route of commute can approach the Driver to ride in their vehicle. In both cases, subject to the approval of the Driver or Rider, both will be paired to ride together. When the offer is mutually accepted, the Users connect with each other through the redBus app. The chat and calls are secure as they don’t reveal the phone number of the Driver or Rider. Once the Trip is completed,
             the rPool Points agreed for the Trip are credited from the Rider’s rPool Wallet to Driver’s rPool Wallet.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>What is rPool Wallet?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">rPool Wallet is a wallet provided to each User of the rPool,
            to seamlessly transact for each Trip provided and availed on redBus App.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>What are rPool Points? What can a Rider do with the points received by offering Trips to others?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">As a part of your rPool Wallet, rPool Points allow riders to seamlessly transact for rides. Additionally, rPool Points can be redeemed for shopping cards or vouchers as agreed and provided by rPool. Currently, rPool allows redemption of rPool Points.
            Points can also be donated towards the planting of trees by the MakeMyTrip Foundation.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>How does a User benefit from rPool?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">Users get to save more on every Trip by splitting the cost between fellow Users while making the best use of a single vehicle. rPool Users also contribute to making the city better by reducing the number of cars and resultantly reducing the pollution.
            Additionally, as rPool is a carpool exclusively for professionals one can network with fellow Users.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>How secure is the platform?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">rPool is only open to professionals and we verify users through their corporate email. We ensure that all Users have their privacy
             protected by routing all calls and chats through our app where the phone numbers are not visible to either party.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>What is a Recurring Trip?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">A Recurring Trip allows a Driver, to auto-generate their daily commute
            (home to office and vice versa). This eliminates the need to post rides every day.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>Can I alter part of my recurring ride?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">rPool allows you cancel a single Trip.
            If you won’t be available for a few days we recommend stopping the Recurring Tide until your return.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>How do I contact rPool ’s support team?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">We are always here to help, in case of any issue do email us at &nbsp;<a style={{ color: "blue" }}> rPool@redbus.in &nbsp;</a> for any queries.</p>
                    </div>
                  </div>
               <hr style={{borderTop:"2px solid rgba(0,0,0,.1)"}}/>
                </li>
                <li>
                  <a class="uk-accordion-title contents" href="#" style={{fontSize: "14px", WebkitTextStrokeWidth:"thin" }}>2. ACCOUNT ACTIVATION</a>
                  <div class="uk-accordion-content">
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>How can I register for the service?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">Download the redBus App, tap on the rPool tab, next complete and activate your rPool profile to start riding.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>Can I register on rPool using my Google / Facebook account?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">Yes, you can register using either your Google or Facebook account.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>How is the verification done?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">We send an email verification to your corporate email ID that you provide us at the time of creation of your profile. You can either enter the 6-digit OTP sent
          to the email to verify the account or click on the link given in the mail which will automatically verify the account.</p>
                    </div>
                  </div>
                  <hr style={{borderTop:"2px solid rgba(0,0,0,.1)"}}/>

                </li>
                <li>
                  <a class="uk-accordion-title contents" href="#" style={{fontSize: "14px",WebkitTextStrokeWidth:"thin" }}>3. OFFERING A TRIP</a>
                  <div class="uk-accordion-content">
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>How do I offer Trips?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">Simply provide us with the details of your vehicle including the registration number, type and make of vehicle along with your driving license details. After submitting these details, you can offer Trips by entering your start and end location. Based on the aforesaid information, you will receive a notification on the app suggesting the Rider(s) seeking a Trip on or along the same route. Accordingly, you may then invite Rider(s) basis your selection.

</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>How do I invite a Rider?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">Simply click on the notification and choose from the suggestions provided.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>How can I coordinate for the pickup point with the Rider(s)?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">The locations of Rider(s) who have accepted the invite are provided on the live tracking map. You can use the group chat to coordinate with them on their pick-up point.
           You can also directly call them through the app, which ensures your privacy is protected through mobile number masking.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>Can I schedule Trips for an entire week?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">Yes, you can. Simple select the days and timing for which you would like to offer a Trip.
          You can also make a Rider a “favourite” to ride with them again.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>Whether there is any higher/default pricing fixed for the Trips?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">rPool has a cap on the maximum rPool Points that can be charged for each kilometre to be travelled on a given Trip.
           You may refer the detailed terms and conditions of rPool to know more about point system.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>How can I set up points to be charged for a Trip?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">A Driver is at liberty to offer a Trip even below the maximum limit per kilometre for each seat. This can be done by changing the default value in the “settings” section. Once selected the fare will be applied for all Trips.
           They can also customize the fare for each Trip individually.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>Should my GPS remain on, while using rPool?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">GPS is a required to track each live Trip.
           It is always advisable to keep your GPS on when using rPool, for the best experience.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>Can I reject a Trip request?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">Yes, You can.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>How do I cancel my Trip?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">Go to My Trips, click the Options bar and select Cancel to cancel your Trip.</p>
                    </div>
                  </div>
                  <hr style={{borderTop:"2px solid rgba(0,0,0,.1)"}}/>

                </li>
                <li>
                  <a class="uk-accordion-title contents" href="#" style={{fontSize: "14px",WebkitTextStrokeWidth:"thin" }}>4. SEEKING A TRIP</a>
                  <div class="uk-accordion-content">
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>How do I seek a Trip?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">You can find a Trip by simply entering your pick-up and destination details. Once the details have been entered by you, you will be able to see a list of Drivers travelling on the given route.
          Basis your requirement you may send them an invitation to ride them.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>How do I know if someone has invited me for a ride?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">When you are chosen as a co-rider you will receive an invitation notification.
           You may then view the ride and the Driver’s profile before accepting or rejecting the invitation.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>How can I organize the pickup point with the Driver?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">You can utilize the live tracking page to manage your pick-up point. Kindly note that this is a carpooling service and not a taxi, so choose an amicable pickup point that benefits you without causing any inconvenience to the Driver.
          You can chat or call securely through the app to co-ordinate with the Driver and other co-riders.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>Can I lock down an entire week’s Trip in advance?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">Yes. You may choose the days and timing for your Trip. When you
          are presented with the list of Drivers matching your requirements you can invite them to finalize your Trips for the week.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>How do I reserve an extra seat for my friend/family member?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">You can modify the number of seats you want at the time of entering details for any given Trip.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>Is it necessary for me to check-in after I enter the car for the Trip?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">A check-in is both a polite gesture and a mandatory one. By checking-in you acknowledge your presence as a Rider.
          Failure to do so will result in a cancellation of your Trip.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>Will the Driver wait for me at the pickup location?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">As it is a Carpool service, we advise that you observe the etiquette and arrive at the pickup point well before the mentioned time. Carpooling is all about mutual respect and it is important to maintain this at all time. However,
          if for some unforeseen reason you are not able to make it kindly keep the Driver informed.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>Do I have to pay any penalty if I cancel the Trip?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">No penalty is applicable if the trip is cancelled reasonably in advance. (i.e. not with a short notice). Therefore should you choose to cancel your Trip,
          please do so as early as possible to avoid causing inconvenience to the Driver or other co-riders.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>Should I keep my GPS turned on while using rPool?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">It is advisable to keep your GPS on when using rPool, for the best experience.
          It also helps to track the live Trip.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>Can I switch my Driver, if any other Driver has already accepted my request?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">Yes, you can switch your Driver after another Driver accepts your request in which case the first Driver’s acceptance will get cancelled.
          However, we advise that you should avoid changing the Driver.</p>
                    </div>

                  </div>
                  <hr style={{borderTop:"2px solid rgba(0,0,0,.1)"}}/>

                </li>
                <li>
                  <a class="uk-accordion-title contents" href="#" style={{fontSize: "14px",WebkitTextStrokeWidth:"thin" }}>5. PAYMENT/ REDEMPTION</a>
                  <div class="uk-accordion-content">
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>How is payment handled on rPool?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">rPool works on a system of prepaid points called rPool Points. These points are agreed between a Driver and Rider before confirmation of rendering and/or availing of a given Trip. These rPool points will be transferred from the rPool Wallet of the Rider to the rPool Wallet of the Driver after each Trip. This will ensure a hassle and cash free ride.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>How do I recharge my account?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">
                        You can recharge your account by accessing the rPool Wallet section and choosing the mode of recharge. You can choose between the following options:

            Net Banking<br />
            Credit Card<br />
            Debit Card<br />
            Google Pay<br />
            PayTm</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>What is the default fare set by rPool?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">
                        rPool has a capping on fixation of maximum rPool points for every kilometer to be travelled on a given Trip. The maximum rPool Points that can be charged by a Driver from a Rider for a Hatchback is 5 rPool Points per kilometer, for a Sedan is 5 rPool Points per kilometer,
                        MUV/SUV is 5 rPool Points per kilometer, Premium vehicles is 5 rPool Points per kilometer for a given Trip.
            </p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>What is the fee for using rPool?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">rPool is a free to register and use service. We levy no service charge for using the technology.
           However, redBus reserves the right to levy the same in future. </p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>What is value of a rPool Point to the Rupee?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">1 rPool Point=1 Rupee </p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>When and how do I pay for my Trip?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">With every successful Trip, points are automatically transferred from Rider’s rPool Wallet to Driver’s rPool Wallet. We provide both the Driver and Rider with an electronic transaction copy of the Trip.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>Whether Driver has a right to change the fare?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">Driver has the right to decide the fare for a Trip, but such fare cannot be more than the maximum fare as explained above.
          Driver cannot charge anything from the Rider over and above the fare already agreed upon. </p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>What about any bonus points received from rPool?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">You are not permitted to redeem any bonus points received from rPool.
          Such points can be used only to make a transaction on <a style={{ color: "blue" }}>&nbsp;www.redbus.in &nbsp;</a>. </p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>When can I redeem my points ?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">You can redeem your points based on your choice.
          However, you should have minimum balance of 100 rPool Points before redeeming the same.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>What is Paytm fuel and how does it work ?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">Paytm fuel is a redemption option for the ride givers to put the earned amount in rPool into Paytm fuel wallet.
           Paytm fuel balance can be viewed on the passbook page on the Paytm app. You can pay for your petrol/diesel top-up into your vehicle at any petrol bunk which accepts paytm and the amount will get debited from paytm fuel automatically.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>What is LazyPay - Pay Later and how does it work?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">
                        LazyPay is a pay later option for ride takers to seamlessly pay for their rides.
           You will need to link your LazyPay account in rPool wallet section and mark it as a primary option for payment.You will get 50% Cashback maximum upto Rs. 25 cashback on your first three transactions on rPool app via LazyPay. The same will be deducted from your LazyPay outstanding amount.<br />
          Offer is valid for transactions between March 15, 2020 – April 15, 2020 only.
            </p></div>
                  </div>
                  <hr style={{borderTop:"2px solid rgba(0,0,0,.1)"}}/>

                </li>
                <li>
                  <a class="uk-accordion-title contents" href="#" style={{fontSize: "14px",WebkitTextStrokeWidth:"thin" }}>6. SAFETY</a>
                  <div class="uk-accordion-content">
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>How secure is the system?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">All users are required to verify their phone number and official email id for registering with rPool. Aside from this, users can configure their social network profiles, so other users can make informed decisions before connecting.
          We carry out regular checks on users and invite other users to report any false information by users.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>What if do not wish to travel with someone from the past?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">You are in control of every Trip. If you choose to not ride with a Driver, you can simply choose to not send an invitation to that Driver. Similarly Driver will have an option of rejecting the invitation of a Rider, if Driver chose not to travel with a particular Rider.
          Should you feel concerned beyond the rejection, kindly reach out to us at rpool@redbus.in</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>How can I report abuse against a fellow User?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">You can contact us on our emergency line +918071280009 or email us at <a style={{ color: "blue" }}>&nbsp;rPool@redbus.in.  &nbsp;</a>
          We take all feedback very seriously and reserve the option to suspend or permanently delete accounts if required.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>Will my phone number be seen during the calls?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">No, your contact number is hidden through call masking and will not be visible to anyone.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>Will my profile visible to everyone on the rPool?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">No, your profile is only made visible to Rider who is travelling on a similar route and need carpool services for the said route.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>How does rPool ensure security?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">All rPool users are verified with contact number and official email id. Also, we use call masking to ensure that your number is hidden both on calls as well as on chats.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>Is it mandatory to set my profile photo?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">Yes, it’s a mandatory thing to complete your rPool ’s profile and provide an authentic photo. Failure to do so will result in suspension of your account.</p>
                    </div>
                    <div className="uk-margin-small-bottom ">
                      <p className="contents_faq uk-align-left uk-width-1-1"><b>Where do I see my transaction history?</b></p>
                      <p className="contents_faq uk-align-left uk-width-1-1">You can view your transaction history from your rPool wallet.</p>
                    </div>
                  </div>
                  <hr style={{borderTop:"2px solid rgba(0,0,0,.1)"}}/>

                </li>
              </ul>
            </div>
          </div>
          {/* end of FAQ section */}
          {/* cities section */}
          <div style={{backgroundColor:"#f7f7f7"}}>
   <br/>
   <br/>
   <br/>
   <div  >
  <div className="subfooterdiv uk-grid subfootergrid "  style={{margin:"auto",width:"96%",paddingBottom:"33px"}}>
    <div className="uk-width-1-4@m subfootergriddiv  "  style={{marginBottom:"10px"}} >
    <ul style={{listStyle:"none"}}>
             <li  style={{marginBottom:"6px" }}>
                 <div class="listlink" style={{color:"#3e3e52",fontWeight:"700",fontSize:"16px",WebkitTextStrokeWidth:"thin"}}>Car Pool Cities</div>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" style={{color:"#3e3e52"}} >
             Car Pool in Bangalore
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Car Pool in Hydrabad
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Car Pool in Mumbai
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Car Pool in Delhi
                   </a>
             </li>
             
             
         </ul>
    
     </div>
     <div className="uk-width-1-4@m subfootergriddiv" style={{marginBottom:"10px",marginTop:"23px"}} >
     <ul style={{listStyle:"none"}}>
             <li style={{marginBottom:"6px"}}>
                 <div class="listlink" style={{color:"#3e3e52",fontWeight:"700"}}></div>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Car Pool in Pune
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Car Pool in Chennai
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Car Pool in Kolkata
                   </a>
             </li>
             
             
             
         </ul>
    
     </div>
     <div className="uk-width-1-5@m subfootergriddiv" style={{marginBottom:"10px"}} >
     <ul style={{listStyle:"none"}}>
             <li style={{marginBottom:"6px"}}>
                 <div class="listlink" style={{color:"#3e3e52",fontWeight:"700",fontSize:"16px",WebkitTextStrokeWidth:"thin"}}>Bike Pool Cities</div>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Bike Pool in Bangalore
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Bike Pool in Hydrabad
                 
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Bike Pool in Mumbai
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Bike Pool in Delhi
                   </a>
             </li>
             
             
         </ul>
    
     </div>
     <div className="uk-width-1-5@m subfootergriddiv" style={{marginBottom:"10px",marginTop:"23px"}} >
     <ul style={{listStyle:"none"}}>
             <li style={{marginBottom:"6px"}}>
                 <div class="listlink" style={{color:"#3e3e52",fontWeight:"700"}}></div>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Bike Pool in Pune
  </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Bike Pool in Chennai

                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" >
             Bike Pool in Kolkata

                   </a>
             </li>
            
             
             
         </ul>
    
     </div>
    
     </div>
     </div>
    </div>
     {/* end of cities section */}
     {/**footer */}
     <div style={{backgroundColor:"#1a2230"}}>
       <br/>
       <br/>
     <div className="subfooterdiv uk-grid subfootergrid "  style={{margin:"auto",width:"92%",paddingBottom:"33px"}}>
    <div className="uk-width-1-5@m subfootergriddiv  "  style={{marginBottom:"10px"}} >
    <ul style={{listStyle:"none"}}>
             <li  style={{marginBottom:"6px" }}>
                 <div class="listlink" style={{color:"#797979",fontWeight:"700",fontSize:"15px",WebkitTextStrokeWidth:"thin",letterSpacing:"1px"}}>About Redbus</div>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" style={{color:"#d7d7d7"}} >
             About us
                   </a>
             </li>
           
             
         </ul>
    
     </div>
     <div className="uk-width-1-5@m subfootergriddiv" style={{marginBottom:"10px"}} >
     <ul style={{listStyle:"none"}}>
     <li  style={{marginBottom:"6px" }}>
                 <div class="listlink" style={{color:"#797979",fontWeight:"700",fontSize:"15px",WebkitTextStrokeWidth:"thin",letterSpacing:"1px"}}>About Redbus</div>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" style={{color:"#d7d7d7"}}>
             T & C
                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" style={{color:"#d7d7d7"}}>
                 Privacy Policy                   </a>
             </li>
             <li style={{marginBottom:"6px"}}>
             <a class="listlink" href="" style={{color:"#d7d7d7"}}>
              FAQ
                   </a>
             </li>
             
             
             
         </ul>
    
     </div>
     <div className="uk-width-1-5@m subfootergriddiv" style={{marginBottom:"10px"}} >
   
     </div>
     <div className="uk-width-1-3@m subfootergriddiv" style={{marginBottom:"10px"}} >
     <ul style={{listStyle:"none"}}>
             <li style={{marginBottom:"20px"}}>
                 <a class="" style={{color:"#3e3e52",fontWeight:"700"}}>
                   <img src={footericon} style={{height:"41px"}} />
                 </a>
             </li>
             <li style={{marginBottom:"20px"}}>
             <a class="listlink" href=""  style={{fontSize:"13px", color:"#d7d7d7",fontWeight:"700"}}>
             redBus is the world's largest online bus ticket booking 
             service trusted by over 8 million happy 
             customers globally. redBus offers bus ticket 
             booking through its website,iOS and Android mobile 
             apps for all major routes.
  </a>
             </li>
             <li style={{marginBottom:"20px"}}>
             <a class="listlink" href="" style={{fontSize:"13px",color:"#d7d7d7",fontWeight:"700"}} >
             Ⓒ 2020 ibibogroup All rights reserved
                   </a>
             </li>
             
            
             
             
         </ul>
    
     </div>
    
     </div>

     </div>
          {/**footer */}

        </div>
      </div>
    );
  }
}


{/* listing cards in offers */ }
const offers = [{ id: 1, heading: "Ride Takers", para: "Every 5th ride on us", content: "Ride Takers", icons: walletcoin },
{ id: 2, heading: "Ride Givers", para: "₹1000 extra weekly", content: "Ride Givers", icons: walletcoin },
{ id: 3, heading: "Ride Takers", para: "50% Off on 5 rides", content: "Ride Takers", icons: offerbox }
]
{/**{ id: 4, heading: "Refer a Buddy", para: "Get a free ride", content: "Both", icons: coin },**/}

function OffersCard() {

  return (

    offers.map((item) => {
      return (
        /*list of offer cards */
        <li class="uk-animation-toggle contents">
          <div className="uk-card uk-card-default  uk-width-1-1 uk-padding-small offers_cards uk-card-hover" style={{ borderRadius: "5px",width:"22.4em" }}>
            <p style={{ fontSize: "1.2em" }} className="sec_headings uk-align-left uk-width-1-1" >{item.heading}</p>
            <p   className=" uk-align-left uk-width-1-1  uk-padding-remove-left uk-padding-remove-right contents" style={{ height: "30px", color: "#3e3e52",marginBottom:"0px",fontWeight:"100" }}>{item.para}</p>
            <div className="uk-grid" >
              <div className="uk-float-left uk-width-1-2 "><br /><br /><a key={item.id}  onClick={b(item.id)}  data-toggle="modal" data-target="#exampleModalCenter"className="uk-width-1-1 " style={{fontWeight:"100", backgroundColor: "#38b87c", color: "white", borderRadius: "20px", fontSize: ".9em", textTransform: "capitalize", fontFamily: "'Montserrat', sans-serif", padding: "0.3em" }}>{item.content}</a>  
              </div>
              
              <div className="uk-float-right uk-width-1-2" style={{marginTop:"-30px"}}><img src={item.icons} style={{ height: "120px" }} className=" uk-align-right" /></div>
            </div>
          </div>
        </li>
      )
    }



    ))
}
{/* listing cards in offers */ }

function b(id)
{
  console.log(id)
}


export default Rpool;