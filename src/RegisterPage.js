import React from 'react'
import axios from 'axios'
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
    <form onSubmit={(eo) => { HandlSubmit(eo) }}>
        <label>Name</label>
        <input type='text'  name='FisrtName' value={state.FisrtName} onChange={(e) => { SaveData(e) } } /> <br/> <br/>

        <label>Last Name</label>
        <input type='text'  name='LastName' value={state.LastName} onChange={(e) => { SaveData(e) } }/><br/> <br/>

        <label>UserName</label>
        <input type='text' name='UserName' value={state.UserName} onChange={(e) => { SaveData(e) } }/><br/> <br/>

        <label>Email</label>
        <input type='email' name='Email' value={state.Email} onChange={(e) => { SaveData(e) } }/><br/> <br/>

        <label>Password</label>
        <input type='password' name='pass' value={state.pass} onChange={(e) => { SaveData(e) } }/><br/> <br/>

        <label >country</label>
        <select value={state.country} name="country" onChange={(e) => { SaveData(e) } }>
            <option value="Morocco">Morocco</option>
            <option value="USA">USA</option>
        </select> <br/> <br/>

        <label>adress</label>
        <input type='text' name='adress' value={state.adress} placeholder='street N°12....' onChange={(e) => { SaveData(e) } } /><br/> <br/>

        <label>Phone Number</label>
        <input type='tel' name='tele' value={state.tele} onChange={(e) => { SaveData(e) } } /><br/> <br/>

        <label htmlFor="city" >city</label>
        <select value={state.city} id='city' name="city" onChange={(e) => { SaveData(e) } }>
            <option value="Temara">Temara</option>
            <option value="Rabat">Rabat</option>
        </select>

        <input type='submit' value="submit" />
    </form>
      
  )

}

