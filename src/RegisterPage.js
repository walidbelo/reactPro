import React from 'react'
import axios from 'axios'
 import './css/RegisterPage.css';
export default function RegisterPage() {

    const [state , setState] = React.useState({
        "FisrtName":"" ,
        "LastName":"",
        "UserName":"",
        "Email":"",
        "pass":"",
        "country":"",
        "city":"",
        "tele":"",
        "adress":"",
    })

    const SaveData= (e) => { 
        const {name , value }= e.target
        
        setState((old) => { 
            return {...old , [name]:value}
         })
     }


const HandlSubmit = (eo) => {
        eo.preventDefault();   
      
    axios.post('http://localhost:8000/store', state)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

  return (
    // <div className="container">
    
    <div className="screen__contentR">
    <form onSubmit={(eo) => { HandlSubmit(eo) }} className="Resgister">
        <div className='inputs'>
        
        <div className="login__fieldR"><input type='text' placeholder='First name' className="login__inputR" name='FisrtName' value={state.FisrtName} onChange={(e) => { SaveData(e) } } /></div> <br/> <br/>

        
        <div className="login__fieldR"> <input type='text' placeholder='Last name' className="login__inputR" name='LastName' value={state.LastName} onChange={(e) => { SaveData(e) } }/></div><br/> <br/>

        
        <div className="login__fieldR"><input type='text' placeholder='Username' className="login__inputR" name='UserName' value={state.UserName} onChange={(e) => { SaveData(e) } }/></div><br/> <br/>

        
        <div className="login__fieldR"> <input type='email' placeholder='Email' className="login__inputR" name='Email' value={state.Email} onChange={(e) => { SaveData(e) } }/></div><br/> <br/>

        
        <div className="login__fieldR"> <input type='password' placeholder='Password' className="login__inputR" name='pass' value={state.pass} onChange={(e) => { SaveData(e) } }/></div><br/> <br/>

        <label >country:</label>
        <div className="login__fieldR"> <select value={state.country} className="login__inputR" name="country" onChange={(e) => { SaveData(e) } }>
            <option value="Morocco">Morocco</option>
            <option value="USA">USA</option>
        </select></div> <br/> <br/>

        
        <div className="login__fieldR"><input type='text' className="login__inputR" name='adress' value={state.adress} placeholder='Adress' onChange={(e) => { SaveData(e) } } /></div><br/> <br/>

        
        <div className="login__fieldR"><input type='tel' className="login__inputR" placeholder='Phone Number' name='tele' value={state.tele} onChange={(e) => { SaveData(e) } } /></div><br/> <br/>

        <label htmlFor="city" >city:</label>
        <div className="login__fieldR"><select value={state.city} id='city' className="login__inputR" name="city" onChange={(e) => { SaveData(e) } }>
            <option value="Temara">Temara</option>
            <option value="Rabat">Rabat</option>
        </select></div>

        <input type='submit' className='login__submitR' value="submit" />
        </div>
    </form>
     </div> 
     
 
//  </div>
  )

}

