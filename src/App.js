import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';
import BasicDropdown from './Dropdown';


const ATMDeposit = ({onChange, isDeposit, isValid}) => {
  const choice = ["Deposit", "Cash Back"];

  return (
    <label className="label huge">

      <h3> {choice[Number(!isDeposit)]}</h3>
      <input type="number" width="200" onChange={onChange}></input>
      <input type="submit"  disabled={!isValid} width="200" value='submit'></input>
    </label>
  );
};

const Account = () => {
  const [totalStatus, setTotalStatus] = useState(0);
  const [isDeposit, setIsDeposit] = useState(true);
  const [deposit, setDeposit] = useState(0);
  const [atmMode,setAtmMode] = useState('');
  const [validTransaction, setValidTransaction] = useState(false);
  let status = `Account Balance $ ${totalStatus}`;
  
  console.log("rendered")

  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);

    if (Number(event.target.value) <= 0) {
     return setValidTransaction(false);
    }
    if (atmMode === "Cash Back" && Number(event.target.value) > totalStatus || Number(event.target.value) < 0 ) {
       setValidTransaction(false);
       return alert('There are not enough funds available')
    } else {
       setValidTransaction(true);
    }
    setDeposit(Number(event.target.value));
  };
  const handleSubmit = (event) => {
    let newState = isDeposit ? totalStatus + deposit : totalStatus - deposit;
    if (newState === 0) {
      alert("You have reached $0 in your account balance.")
    }
    setTotalStatus(newState);
    setValidTransaction(false);
    console.log(`handlesubmit: ${newState}`);
    event.preventDefault();
  };
  
  console.log(`handlesubmit: ${totalStatus}`);

  const handleChangeMode = (event) => {
    console.log(event.target.value);
    setAtmMode(event.target.value);
    setValidTransaction(false);
    if (event.target.value === 'Deposit') {
      setIsDeposit(true);
    } else { setIsDeposit (false);}
    event.preventDefault();
  };
 
  return (
    <form  onSubmit={handleSubmit}>
      <h1 className= "App-header" > ATM Portal</h1>
      <div className="App-body" >
      <h2 id='total'>{status}</h2>
      <BasicDropdown name="mode" onChange={(e) => handleChangeMode(e)}/>
      <select name="mode" onChange={(e) => handleChangeMode(e)}  >
          <option  value=""></option>
          <option  value="Deposit">
            Deposit
          </option>
          <option  value="Cash Back">
            Cash Back
          </option>
        </select>
      {atmMode && (<ATMDeposit onChange={handleChange} isDeposit={isDeposit} isValid={validTransaction} ></ATMDeposit>)}
    </div>
    </form>
  );
};


export default Account;
