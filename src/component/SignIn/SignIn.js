import React from "react";
import './SignIn.css'
import Logo from "../Logo/Logo";



class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state={

        }
    }
    
    render(){
        const {onRouteChange} = this.props
        return(
            <div className="signin">
                <header>
                    <Logo/>
                </header>
                
                <div className="image_container flex center">
                    <img className="vault" src="/tilted_vault.png" alt="Block" />
                    <div className="signin_box">
                    <article>
    
                        <main className="pa4 black-80">
                            <div className="measure">
    
                                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
    
                                <legend className="f3 fw6 ph0 mh0 center">Sign In</legend>
    
                                <div className="mt3">
    
                                    <label className="db fw6 lh-copy f6" htmlFor="aadhar">Aadhaar Number</label>
    
                                    <input 
                                        className="hover pa2 input-reset ba bg-transparent w-100" 
                                        type="number" 
                                        name="aadhaar"  
                                        id="aadhaar"
                                        placeholder="Enter Aadhaar Number"
                                    />
    
                                </div>
    
                                <div className="mv3">
    
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Security Pin</label>
    
                                    <input 
                                        className="hover pa2 input-reset ba bg-transparent w-100" 
                                        type="password" 
                                        name="password"  
                                        id="password"
                                        placeholder="Enter Security pin"
                                    />
                                        {/* <p className="w-80 flex center">eVault uses Aadhaar Number to verify the user</p> */}
                                </div>

 
    
                                </fieldset>

                               
    
                                <div className="flex justify-center">
    
                                <input
                                    onClick={()=>onRouteChange('home')}
                                    className="hover b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                    type="submit" 
                                    value="Sign in"
                                />
                                </div>
    
                                <div className="flex justify-center lh-copy mt3">
    
                                <p 
                                    onClick={()=>onRouteChange('register')}
                                    className="f6 link dim black db grow pointer">
                                    Register
                                    </p>
    
                                </div>
    
                            </div>
    
                        </main>
    
                    </article>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;