import React, { useContext, useEffect, useRef, useState } from "react";
import { useAuth } from "../auth/authClient"
// import ComponentMap from "../../atom/componentmap";
// import ThemedButton from "../../atom/ThemedButton/themedButton";
import { activityState } from "../../configs/constants";
// import Logo from '../../utils/images/logo.png';
import { Store } from "react-notifications-component";
import * as KeyCode from 'keycode-js';
// import LockOpenIcon from '@mui/icons-material/LockOpen';
import { formValidation } from "../../utils/utilities";
// import LockResetIcon from '@mui/icons-material/LockReset';
// import { resetPassword } from '../../services/api'
import { useSelector } from "react-redux";


const Login = (props: any) => {
    const auth = useAuth();
    // const logoDetails = useSelector((state: any) => state.logoDetails.details);
    const [loginPageStatus, setLoginPageStatus] = useState<string>('login');
    const [email, setEmail] = useState<string>('');
    const resertPasswordField = [
        {
            name: 'email',
            title: 'Email Address',
            value: '',
            type: 'email',
            required: true,
            errormessage: "Please enter a valid email.",
        }]

    const [resetPasswordData, setRestPasswordData] = useState<any>(JSON.parse(JSON.stringify(resertPasswordField)))
    const [data, setData] = React.useState<any>([
        {
            name: 'username',
            title: 'User Name',
            autoFocus: true,
            required: true,
            value: '',
            id: "username",
            errormessage: "Please enter a user name.",
        },
        {
            name: 'password',
            title: 'Password',
            type: "password",
            required: true,
            value: undefined,
            id: "username_password",
            errormessage: "Please enter a valid password.",
            autoComplete: "off"
        }
    ]);
    const handleLogin = (payload: { username: string, password: string }) => {
        console.log("testpassword", payload)
        auth.tryLogin(payload, (isAuthenticated: any) => {
        })
    }
    // const handleResetPassword = (data: any) => {
    //     // console.log("resetpassword",data)
    //     setEmail(data.email)
    //     resetPassword(data).then((res: any) => {
    //         if (res.success) {
    //             setLoginPageStatus('reset_success')
    //         }
    //         else {
    //             Store.addNotification({
    //                 title: "Failed",
    //                 message: "Please try again.",
    //                 type: "danger",
    //                 insert: "top",
    //                 container: "top-right",
    //                 animationIn: ["animate__animated", "animate__fadeIn"],
    //                 animationOut: ["animate__animated", "animate__fadeOut"],
    //                 dismiss: {
    //                     duration: 5000,
    //                     onScreen: false,
    //                 },
    //             });
    //         }
    //     })
    // }

    const handleEnter = (e: any) => {
        if (e.keyCode === KeyCode.KEY_RETURN) {
            const result: any = formValidation(data)
            if (result.valiState) {
                handleLogin(result.ObjectData);
            } else {
                Store.addNotification({
                    title: "Input Error",
                    message: result.msg,
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 5000,
                        onScreen: false,
                    },
                });
            }
        }
    }
    // const [inputRef, setInputFocus] = useFocus()
    // console.log("datadatadatadata",data)
    useEffect(() => {
        document.addEventListener('keyup', handleEnter, true);
        return () => {
            document.removeEventListener('keyup', handleEnter, true)
        }
    }, [])

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleCancel = (status: string) => {
        setLoginPageStatus(status);
        setEmail('');
        setRestPasswordData(JSON.parse(JSON.stringify(resertPasswordField)))
    }
    const favicon = document.querySelector("link[rel~='icon']") as HTMLLinkElement

    return <div className="h-screen  w-screen flex justify-center items-center">
        <div className="h-[480px] w-[800px] shadow-lg flex rounded-[20px] bg-[white] overflow-hidden">
            <div className="w-[450px] flex justify-center items-center p-[20px] bg-[#293241] text-[white]">
                <div>
                    <div className="text-[32px] font-[700] ">Welcome back</div>
                    <div className="text-[16px] mt-8">
                        You are just a few clicks away from a great meeting experience.
                    </div>
                    <div className="text-[16px] mt-6">
                        Collaborate and work from anywhere.
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center w-[350px] p-[20px]">
                <div>
                    {/* <img className="h-8 mx-1 mb-8" src={logoDetails.logoWhite.length > 50 ? logoDetails.logoWhite : (sessionStorage.subdomainLogo ?? Logo)} alt="login" /> */}
                    {
                        loginPageStatus === 'reset' ?
                            <>
                                {/* <ComponentMap data={resetPasswordData} setData={setRestPasswordData} />
                                <div className="flex justify-between p-2 mt-2 ">
                                    <ThemedButton click={() => handleCancel('login')} children={'Cancel'} theme={"warning"} />
                                    <ThemedButton icon="custom" iconComponent={<LockResetIcon />} loading={auth.isAuthenticated === activityState.WAIT} click={handleResetPassword} valiData={resetPasswordData} change={setRestPasswordData} children={'Reset'} theme={"secondary"} />
                                </div> */}
                            </>
                            : loginPageStatus === 'login' ?
                                <>
                                    {/* <ComponentMap data={data} setData={setData} /> */}
                                    <input type="text" className="bg-[#ffffff]" placeholder="username" onChange={(e) => setUserName(e.target.value)} />
                                    <input type="password" className="bg-[#ffffff]" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                                    <div className="flex justify-between p-2 mt-2 ">
                                        <div className="pt-3">
                                            <span className="cursor-pointer" onClick={() => setLoginPageStatus('reset')}>Forgot Password?</span>
                                        </div>
                                        <div>
                                            <button onClick={() => handleLogin({ username: username, password: password })}>Login</button>
                                            {/* <ThemedButton icon="custom" iconComponent={<LockOpenIcon />} loading={auth.isAuthenticated === activityState.WAIT} click={handleLogin} valiData={data} change={setData} children={'Login'} theme={"secondary"} /> */}
                                        </div>
                                    </div>
                                </>
                                : loginPageStatus === 'reset_success' &&

                                <div>
                                    <div className="text-[16px] font-[700] ">Password Reset</div>
                                    <div className=" text-md my-3">
                                        An email has been sent to <span className="font-semibold">{email}</span> with instructions for resetting your password.
                                        {/* <div className=" mt-3">Please check your email .</div> */}
                                    </div>
                                    <div className="flex justify-center p-2 mt-2 ">
                                        {/* <ThemedButton click={() => handleCancel('login')} children={'Login'} theme={"secondary"} /> */}
                                    </div>

                                </div>

                    }

                    <div className="border-b m-3 border-[#00000030]"></div>
                    {/* <div className="flex justify-between p-2 mt-2 ">
                        <div className="pt-3">
                            <span className="cursor-pointer">Don’t have an account?</span>
                        </div>
                        <div>
                            <ThemedButton children={'Sign Up'} theme={"primary"} />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
}

export default Login
