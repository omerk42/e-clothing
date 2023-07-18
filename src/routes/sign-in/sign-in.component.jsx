import { signInWithGooglePopup } from "../../utils/firebase/firebase.util"

const logInGoogleUser = async() =>{
    const response = await signInWithGooglePopup();
    console.log(response)
}
const SignIn = () =>{
    return(
        <>
        <h1>sign </h1>
        <button onClick={logInGoogleUser}>
            sign in using google
        </button>
        </>
    )
}

export default SignIn