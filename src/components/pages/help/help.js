import React, { Component } from 'react';
import Header from '../../header/FixedHeader';
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
                                                
                                                        
                                                        this.handleShow = this.handleShow.bind(this);
                                                    }
                                                    componentDidMount(){
                                                      this.setState({
                                                        modalState : true
                                                      }) 
                                                    }
                                                    handleShow() {
                                                        this.setState({ modalState: false });
                                                    }  

render()
{
    return(
           <div>
<Header/>
{
        this.state.modalState ? 
           
     
     <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  
     <div class="modal-dialog widthcf " role="document" style={{maxWidth:"679px"}}>
     
     
     
       <div class="modal-content  modalfull" style={{borderRadius:"8px",marginLeft:"1px",boxShadow:"none",border:"1px solid darkgrey"}} >
      
         <div class="modal-body borderrf uk-padding-remove" style={{}}>
       
         
         <div class="uk-grid uk-child-width-1-2@l  uk-child-width-1-2@s uk-margin-remove" style={{padding:"4px",paddingRight:"14px"}}>
           <div class="uk-padding-remove-right" style={{backgroundImage:'url(' +modalimg+ ')',backgroundRepeat:"no-repeat"}}>
           {/* <img src={modalimg} style={{}} />   
                                */} <br/>   
     <div style={{fontSize:"22px",fontWeight:"700",color:"#fff",fontFamily:"Montserrat"}}>Unlock the</div>
     <div style={{fontSize:"22px",fontWeight:"700",color:"#fff",fontFamily:"Montserrat"}}>Smarter Way to Travel</div>
           </div>
           <div class="" uk-grid style={{paddingLeft:"20px",paddingBottom:"100px"}} >
           <button  type="button " style={{fontWeight:"100",fontSize:"40px",color:'black'}} class="close buttonclosea" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
             </button>
             
           <div style={{marginTop:"10px"}}>
                     <img src={redicon} />                          
     
                       </div> 
                      
              <div style={{marginTop:"10px"}}>
                        <p className="" style={{width:"78%",color:"#d84e55",fontWeight:"700",fontSize:"17px",fontFamily:"Montserrat"}}>
                        Sign in to avail exciting discounts and cashbacks!!                         
                           </p>                           
              </div>
              <div class="uk-margin" style={{}}>
                 <input class="uk-input" type="text" style={{fontSize:"14px",fontWeight:"600",fontFamily:"Montserrat", width:"92%",border:"1px solid black",borderRadius:"4px",height:"44px"}} placeholder="Enter your Mobile Number"/>
             </div> 
             <div>
                          <button className="uk-button" disabled  style={{fontSize:"12px", fontFamily:"Montserrat", paddingLeft:"9px", borderRadius:"3px",height:"44px",fontWeight:"700", width:"92%",textTransform:"capitalize", backgroundColor:"#d84e55",opacity:"0.5",color:"#fff"}}>
                               GENERATE OTP<span style={{fontWeight:"100",fontSize:"12px"}}>(One Time Password)</span>                      
                              </button>                             
                 </div> 
                 
                             <div >
                               <div style={{textAlign:"center",marginTop:"10px"}}>
                           <span style={{fontSize:"12px",fontWeight:"700",fontFamily:"Montserrat"}}> OR,</span><span style={{fontSize:"12px",fontFamily:"Montserrat"}}> Connect using social accounts                          
                          </span></div>
                   </div> 
     
                     
                               <div className="uk-grid" style={{marginTop:"10px"}}>
                               <div>
                                   <button class="uk-button" style={{backgroundColor:"#fff",border:"1px solid ",width:"138px",borderRadius:"3px"}}>
                                      <img src={google} style={{marginLeft:"-24px"}}   /><span style={{textTransform:"capitalize",fontSize:"12px",marginLeft:"28px",fontWeight:"600",color:"#ff3d00"}}>Google</span>                        
                                             </button>                          
                                       </div> 
                                 <div class="buttonfb">
                                   <button class="uk-button " style={{backgroundColor:"#fff",border:"1px solid ",width:"138px",marginLeft:"-29px",borderRadius:"3px"}}>
                                     
                                       <img src={facebook} style={{marginLeft:"-24px"}}   /> 
     
                                       
                                       <span style={{textTransform:"capitalize",fontSize:"12px",fontWeight:"600",color:"#485a96",marginLeft:"27px"}}>Facebook</span>                       
     
                                       
                                             </button>                          
                                       </div>  
                                                              
                                 </div> 
                                
                                 <div>
                                  <div style={{fontSize:"10px",color:"#9b9b9b",textAlign:"center",fontFamily:"Montserrat",marginTop:"6px"}}>
                                  By signing up, you agree to
                                  <br/>
                                  
                            <span style={{textAlign:"center",fontFamily:"Montserrat"}}> our < a href="" style={{fontWeight:"700"}}>Terms & Conditions</a> and <a href="" style={{fontWeight:"700"}}> Privacy Policy</a>                           
                            </span> </div>                           
                               
                                  </div>    
     
     
     
           </div>
     
         </div>
         
       </div>
       </div>
     </div>
     
     
     
                     </div>
     
     
 
        : null
      }
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

  







   <br/>
      <br/>
      </div>

     
     <Footer/>
           </div>                     

    );                      
}

}
export default Help