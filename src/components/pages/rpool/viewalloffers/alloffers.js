import React, { Component } from 'react';
import '../rpool.css';
import { Link } from 'react-router-dom';
import walletcoin from '../../../../assets/rpool/img-offer-wallet-coin.svg';
import offerbox from '../../../../assets/rpool/img-offer-box-50.svg';
import coin from '../../../../assets/rpool/img-offer-coin.svg';
class Alloffers extends Component {
    state = {}
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: "#e9555d", }}>
                    <span className="uk-padding uk-padding-remove-top uk-padding-remove-bottom uk-visible@l"></span>
                    <a class="navbar-brand" href="/" style={{ fontFamily: "monospace", color: "white" }}>Travel Buddy</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item px-2">
                                <a class="nav-link" href="#">BUS TICKETS</a>
                            </li>
                            <li class="nav-item px-2">
                                <a class="nav-link" href="#">rPool</a>
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
                <div style={{ backgroundColor: "white"}}>
                    <div className="uk-grid uk-child-width-1-2 uk-padding-small">
                        <div className="contents"><Link to="/rpool" style={{color:"black" , fontSize:"1.2em"}}><i class="fa fa-chevron-left" aria-hidden="true"></i></Link></div>
                        <div className="contents" style={{ fontSize: "1.8em", fontWeight: "600" }}>rPool Offers</div>
                    </div>
                </div>

                {/* cards */}
                   <div className="uk-width-1-1 uk-padding" style={{ backgroundColor: "#eee"}}>
                   <div className="div_width uk-align-center">
                       <div className="contents uk-margin-bottom" style={{fontSize:"1em",fontWeight:"700"}}>All Offers</div>
                   <div className="uk-grid">
                        <OffersCard></OffersCard>
                    </div>
                   </div>
                   </div>
                {/* cards */}
            </div>
        );
    }
}
{/* listing cards in offers */ }
const offers = [{ id: 1, heading: "Ride Takers", para: "Every 5th ride on us", content: "Ride Takers", icons: walletcoin },
{ id: 2, heading: "₹1000 extra/week", para: "Extra earnings on seats shared every week", content: "Ride Givers", icons: walletcoin },
{ id: 3, heading: "Ride Takers", para: "First 5 rides at 50% Off (Max ₹25)", content: "Ride Takers", icons: offerbox },
{ id: 4, heading: "Refer a Buddy", para: "Get a free ride", content: "Both", icons: coin },
]
function OffersCard() {

    return (

        offers.map((item) => {
            return (
                /*list of offer cards */
                <div class="uk-animation-toggle contents   uk-width-1-3@l uk-margin-bottom">
                    <div className="uk-card uk-card-default uk-padding-small offers_cards uk-card-hover" style={{ borderRadius: "12px" }}>
                        <p style={{ fontSize: "1.3em" }} className="sec_headings uk-align-left uk-width-1-1">{item.heading}</p>
                        <p className=" uk-align-left uk-width-1-1 uk-padding-small uk-padding-remove-left uk-padding-remove-right contents" style={{ height: "30px", color: "#3e3e52", }}>{item.para}</p>
                        <div className="uk-grid" >
                            <div className="uk-float-left uk-width-1-2 "><br /><br /><a className="uk-width-1-1 " style={{ backgroundColor: "#38b87c", color: "white", borderRadius: "20px", fontSize: "1em", textTransform: "capitalize", fontFamily: "'Montserrat', sans-serif", padding: "0.3em" }}>{item.content}</a></div>
                            <div className="uk-float-right uk-width-1-2"><img src={item.icons} style={{ height: "120px" }} className=" uk-align-right" /></div>
                        </div>
                    </div>

                </div>




            )
        }



        ))
}
{/* listing cards in offers */ }
export default Alloffers;