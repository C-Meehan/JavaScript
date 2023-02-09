import React, {useState} from 'react';

const Form = (props) => {
    const [first, setFirst] = useState("");
    const [firstError, setFirstError] = useState("");
    const [last, setLast] = useState("");
    const [lastError, setLastError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirm, setConfirm] = useState("");
    const [confirmError, setConfirmError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const handleFirst = (e) => {
        setFirst(e.target.value);
        // if (e.target.value.length < 1) {
        //     setFirstError("First name is required!");
        // } add else to statement below if you uncomment
        if (e.target.value.length < 2 && e.target.value.length > 0){
            setFirstError("First name must be 2 characters or longer!");
        }
        else {
            setFirstError("");
        }
    }

    const handleLast = (e) => {
        setLast(e.target.value);
        // if (e.target.value.length < 1) {
        //     setLastError("Last name is required!");
        // } add else to statement below if you uncomment
        if (e.target.value.length < 2 && e.target.value.length > 0){
            setLastError("Last name must be 2 characters or longer!");
        }
        else {
            setLastError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5 && e.target.value.length > 0) {
            setEmailError("Email must be at least 5 characters!");
        }
        else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8 && e.target.value.length > 0) {
            setPasswordError("Password must be at least 8 characters!");
        }
        else {
            setPasswordError("");
        }
    }

    const handleConfirm = (e) => {
        setConfirm(e.target.value);
        if (e.target.value !== password && e.target.value.length > 0) {
            setConfirmError("Confirm password must match password!");
        }
        else {
            setConfirmError("");
        }
    }

    const createUser = (e) => {

        e.preventDefault();

        const newUser = {first, last, email, password, confirm}
        console.log("Welcome", newUser);
        setFirst("");
        setLast("");
        setEmail("");
        setPassword("");
        setConfirm("");
        setHasBeenSubmitted(true);
    };

    //The formMessage is not necessary if I use the ternary operator in the form like below
    // const formMessage = () => {
    //     if (hasBeenSubmitted) {
    //         return "Thank you for submitting the form!";
    //     } 
    //     else {
    //         return "Welcome, please submit the form";
    //     }
    // };

    return (
        <div className="main">
            <form onSubmit={createUser}>
                {
                    hasBeenSubmitted ? <h3>Thank you for submitting the form!</h3> : <h3>Welcome, please sumbit the form.</h3>
                }
                <div>
                    <label>First Name</label>
                    <input type="text" value={first} onChange={handleFirst}/>
                    { firstError ? <p> {firstError} </p> : ''}
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" value={last} onChange={handleLast}/>
                    { lastError ? <p> {lastError} </p> : ''}
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" value={email} onChange={handleEmail}/>
                    { emailError ? <p> {emailError} </p> : ''}
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" value={password} onChange={handlePassword}/>
                    { passwordError ? <p> {passwordError}</p> : ''}
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="text" value={confirm} onChange={handleConfirm}/>
                    { confirmError ? <p> {confirmError}</p> : ''}
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div className="info">
                <h3>Your Form Data</h3>
                <p>First Name: {first}</p>
                <p>Last Name: {last}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirm}</p>
            </div>
        </div>
    )
}

export default Form;