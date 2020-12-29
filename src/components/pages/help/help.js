import React, { Component } from 'react';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import '../help/help.css'
import leftdivimg from '../../../assets/help/backgroundimg.jpg';
import modalimg from '../../../assets/help/modelimg.svg';
import redicon from '../../../assets/homepage/logo_org.png';
import facebook from '../../../assets/help/facebookicon.svg';
import google from '../../../assets/help/googleicon.svg';

class  Help extends Component {
                            constructor(props) {
                                                        super(props);
                                                
                                                        this.state = {
                                                            modalState: true
                                                        };
                                                
                                                        this.handleShow = this.handleShow.bind(this);
                                                    }
                                                
                                                    handleShow() {
                                                        this.setState({ modalState: !this.state.modalState });
                                                    }  

render()
{
    return(
           <div>
<Header/>
     <div style={{backgroundColor:"#d84f57"}}>
        <br/>   
        <br/>  


      <div className="uk-grid uk-margin-remove uk-padding-remove" style={{justifyContent:"center"}}>
         <div className="uk-padding-remove " style={{ borderRadius:"10px", width:"360px",height:"600px",backgroundColor:"#f3f3f3"}}>
           <p className="leftdivp" style={{}}>
           Please Sign In / Sign up to access help section                          
           </p>

          </div>                           
          <div className="" uk-grid>
           <div>
              <p style={{fontSize:"45px",fontWeight:"700",color:"#fff",justifyContent:"end",fontFamily:"Montserrat"}}>
              redBus Help                           
                 </p>                         
            </div> 
            <div>
              <img src={leftdivimg}/>                      

             </div>
             <div>
                <p style={{fontSize:"29px",fontWeight:"700",color:"#fff",margin:"40px 0 0 20px",justifyContent:"end",fontFamily:"Montserrat"}}>
                24/7 Customer Support
                 </p>                         
                </div>                

                                        
          </div>
      </div>

     {/**** modal*/}
     
{/* <div className={"modal fade" + (this.state.modalState ? " show d-block" : " d-none")}  role="dialog" id="exampleModal"> */}

<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  
<div class="modal-dialog widthcf " role="document" style={{maxWidth:"742px"}}>

{/** <button class="buttoncf close" type="button" style={{fontSize:"50px",color:"#fff",fontWeight:"100",marginLeft:"1px"}}  data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>*/}

  <div class="modal-content  modalfull" style={{borderRadius:"8px",marginLeft:"1px",boxShadow:"none",border:"1px solid darkgrey"}} >
 
    <div class="modal-body borderrf uk-padding-remove" style={{}}>
   {/*<div>
    <button type="button" className="close" style={{fontSize:"30px",color:"black",fontWeight:"700",marginRight:"10px"}}  onClick={this.handleShow}>
                                    <span>&times;</span>
                                </button> 
                                
   </div>*/}
    
     <div className="uk-grid uk-child-width-1-2@l uk-child-width-1-2@m ">
     {/* ,margin:"4px" */}
         <div className="" style={{paddingLeft:"0px"}}> 
          <img src={modalimg} style={{height:"480px"}} />                           
           </div> 
                                 
           <div className="" style={{paddingLeft:"6px"}} uk-grid>
           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
                                       <br/>
                                       
              <div>
                <img src={redicon} />                          

                  </div>   
                  <div>
                   <p className="" style={{width:"70%",color:"#d84e55"}}>
                   Sign in to avail exciting discounts and cashbacks!!                         
                      </p>                           
                     </div>  
                  <div>
                  <div class="uk-margin" style={{}}>
            <input class="uk-input" type="text" style={{fontSize:"14px",fontWeight:"600",fontFamily:"Montserrat", width:"80%",border:"1px solid black",borderRadius:"4px",height:"44px"}} placeholder="Enter your Mobile Number"/>
        </div>
                      </div>  
                      <div>
                     <button className="uk-button" disabled  style={{borderRadius:"3px",height:"44px",fontWeight:"700", width:"80%",textTransform:"capitalize", backgroundColor:"#d84e55",opacity:"0.5",color:"#fff"}}>
                          GENERATE OTP(One Time Password)                       
                         </button>                             
                        </div>  
                        <br/> 
                        <div >
                      <span style={{fontSize:"13px",fontWeight:"700"}}> OR,</span><span style={{fontSize:"13px"}}> Connect using social accounts                          
                     </span>
                          </div> 
                          <br/>    
                          <div className="uk-grid">
                          <div>
                              <button class="uk-button" style={{backgroundColor:"#fff",border:"1px solid ",width:"144px",borderRadius:"3px"}}>
                                 <img src={google} style={{marginLeft:"-24px"}}   /><span style={{textTransform:"capitalize",fontSize:"12px",marginLeft:"28px",fontWeight:"600",color:"#ff3d00"}}>Google</span>                        
                                        </button>                          
                                  </div> 
                            <div>
                              <button class="uk-button" style={{backgroundColor:"#fff",border:"1px solid ",width:"144px",marginLeft:"-29px",borderRadius:"3px"}}>
                                
                                  <img src={facebook} style={{marginLeft:"-24px"}}   /> 

                                  
                                  <span style={{textTransform:"capitalize",fontSize:"12px",fontWeight:"600",color:"#485a96",marginLeft:"27px"}}>Facebook</span>                       

                                  
                                        </button>                          
                                  </div>  
                                                         
                            </div> 
                            <br/>  
                            <div>
                             <p style={{fontSize:"12px",color:"#9b9b9b"}}>
                             By signing up, you agree to
                        our Terms & Conditions and Privacy Policy                           
                               </p>                           
                          
                             </div>          

           </div>
     </div>
    
  </div>
  </div>
</div>



                </div>


{/****modal */}

   <br/>
      <br/>
      </div>
     <Footer/>
           </div>                     

    );                      
}

}
export default Help