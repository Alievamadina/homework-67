import React from 'react'
import { Button } from 'style-components'
import styled from 'styled-components'
import { Card } from '../UI/Card/Card'

export const LoginPage = () => {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredPassword, setenteredPassword] = useState('')
  const [eisEmailValid, seteisEmailValid] = useState(false)
  
    

  const emailChangeHandler = (e)=>{
    setEnteredEmail(e.terget.value)
  }


  
  const passwordChangeHandler = (e)=>{
    setEnteredPassword(e.terget.value)
  }
  return (
    <Card>
    <StyledInputContainer>
        <label htmlFor="">Email</label>
        <StyledInput type="text" onChange={emailChangeHandler} value={enteredEmail} />
    </StyledInputContainer>
     <div>
     <label htmlFor="">Password</label>
     <input type="text"  onChange={passwordChangeHandler} value={enteredPassword}/>
     <div><StyledButton>Login</StyledButton></div>
 </div>
</Card>
    
  )
}
 const StyledInputContainer= styled.div`
    width: 100%;
    display:flex ;
    justify-content: space-between;
    margin-bottom: 10px;
 `
 const StyledInput=styled.input`
   width : 300px;

 `
 const StyledButton= styled.button`
    text-align: center;
 `