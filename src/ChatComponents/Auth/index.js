import React from "react";
import { CSSProperties, useState } from "react";

import LoginForm from "./loginForm";
import SignUp from "./signUpForm";

const AuthPage = () =>{
    const [hasAccount, setHasAccount] = useState(false)

    return (
        <div>
            {hasAccount?(
                <LoginForm onHasAccount={()=>setHasAccount(false)}/>
            ):(
                <SignUp onHasAccount={()=>setHasAccount(true)}/>
            )}
        </div>
    )
}

export default AuthPage;