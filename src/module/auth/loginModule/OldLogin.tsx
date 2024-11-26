import "./oldLoginStyle.scss"
import { useEffect, useRef, useState } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { InputText } from "primereact/inputtext";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import SvgEye from "../../../assets/svgIcon/SvgEye"
import SvgEyeclose from "../../../assets/svgIcon/SvgCloseEye";
import Logo from "../../../assets/companylogo.png"
import CustomFileUpload from "./FileUpload";
import { getsideBarMiddleWare } from "../../../routes/productedRoute/store/productedMiddleWare";
import { AppDispatch } from "../../../redux/store";
import  UseStateValue  from "../../../contex/useStateValue";

interface Errors {
    UserID?: string;
    Password?: string;
}

const Login = () => {
    const navigate = useNavigate();
    const fileUploadRef = useRef<any>(null);
    const [{ theme }] = UseStateValue();
    const dispatch = useDispatch<AppDispatch>()
    const [showPassword, setShowPassword] = useState<boolean>(true);
    const [userID, setUserID] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errors, setErrors] = useState<Errors>({});
    const [file, setFile] = useState<string>("")

    const { token } = useSelector((state: any) => {
        return {
            token: state.FormDetailReducers?.token,
        };
    });

    console.log(token, "logintoken..");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const validate = () => {
        const newErrors: Errors = {};
        if (!userID) {
            newErrors.UserID = "Email is required";
        }
        if (!password) {
            newErrors.Password = "Password is required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleClick = () => {
        // navigate("/forgotpassword");
    };

    const EyeButton = () => (showPassword ? <SvgEye /> : <SvgEyeclose />);

    const handleLogin = async () => {
        if (userID === "test@1gmail.com" && password === "Test@123") {
            Cookies.set("token", "testone");
            dispatch(getsideBarMiddleWare())
            navigate("/");
        } else if (userID === "test@2gmail.com" && password === "Test@123") {
            Cookies.set("token", "testtwo");
            navigate("/");
        } else {
            show();
        }
    };

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        console.log(e.preventDefault(), "tokens");
        if (validate()) {
            handleLogin();
        }
    };

    const toast = useRef<Toast>(null);

    const show = () => {
        toast.current?.show({ severity: 'warn', summary: 'Warning', detail: 'Invalid email/password' });
    };

    const handleUpload = (e: any) => {
        console.log('File uploaded successfully!', e);
    };

    const handleSelect = (e: any) => {
        console.log('File selected:', e.files);
        setFile(e?.files[0]?.objectURL)
    };

    const handleImageClick = () => {
        if (fileUploadRef.current) {
            fileUploadRef.current.triggerFileSelect();
        }
    };

    const handleCancelUpload = () => {
        setFile("");
        if (fileUploadRef.current) {
            fileUploadRef.current.clear();
        }
    };

    useEffect(() => {
        if (theme.name) {
          document.documentElement.setAttribute('data-theme', theme.name);
        }
      }, [theme.name]);

    return (
        <div className="login__main__container">
            <Toast ref={toast} />
            <div className="login__container">
                <div className="login__container__main">
                    <div className="login__container__main__header">
                        <div className="login__container__main__header__left">
                            <Image
                                src={Logo}
                                alt="group"
                                width="40%"
                                className="login__image"
                            />
                        </div>
                        <div className="login__container__main__header__right">
                            <div className="right_image" onClick={file === "" ? handleImageClick : handleCancelUpload}>
                                <Image
                                    src={file === "" ? Logo : file}
                                    alt="group"
                                    width="40%"
                                    className="login__image"
                                />
                            </div>
                            <div className="right_uploade">
                                <CustomFileUpload
                                    ref={fileUploadRef}
                                    url="/api/upload-endpoint"
                                    accept=".png,.jpg,.jpeg"
                                    onUpload={handleUpload}
                                    handleSelect={handleSelect}
                                    toastMessage={{
                                        severity: 'success',
                                        summary: 'Upload Complete',
                                        detail: 'Your file has been uploaded successfully!',
                                    }}
                                />
                            </div>

                        </div>
                    </div>
                    <div className="login__constiner__main__body">
                    <div class="grid">
                            <div class="col-12 md:col-6 lg:col-4">
                                <div class="box p-3 "></div>
                            </div>
                            <div class="col-12 md:col-6 lg:col-4">
                                <div class="box p-3 "></div>
                            </div>
                            <div class="col-12 md:col-6 lg:col-4">
                                <div class="box p-3 "></div>
                            </div>
                        </div>
                        <div class="grid">
                            <div class="col-12 md:col-6 lg:col-4">
                                <div class="box p-3 "></div>
                            </div>
                            <div class="col-12 md:col-6 lg:col-4">
                                <div class="box p-3 "></div>
                            </div>
                            <div class="col-12 md:col-6 lg:col-4">
                                <div class="box p-3 "></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="login__container__sub">
                    <div className="grid">
                        <div className="col-8 md:col-8 lg:col-8">
                            <div className="loging__conainer__text">Log in</div>
                            <div className="password__container mt-3">
                                <InputText
                                    value={userID}
                                    onChange={(e) => setUserID(e.currentTarget.value)}
                                    placeholder="Email Address"
                                    className="eyecon__text custom-placeholder"
                                />
                            </div>
                            {errors.UserID && (
                                <div className="mt-2 login__error__message">
                                    {errors.UserID}
                                </div>
                            )}
                            <div className="password__container mt-4 sm:mt-2 md:mt-5 lg:mt-5">
                                <InputText
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.currentTarget.value)}
                                    placeholder="Password"
                                    className="eyecon__text custom-placeholder"
                                />
                                <div className="eye__icon" onClick={togglePasswordVisibility}>
                                    <EyeButton />
                                </div>
                            </div>
                            {errors.Password && (
                                <div className="mt-2 login__error__message">
                                    {errors.Password}
                                </div>
                            )}
                            <div className="btn__container mt-4 sm:mt-2 md:mt-5 lg:mt-5">
                                <Button label="Login" onClick={handleSubmit} type="submit" />
                            </div>
                            <div className="frgt__password__text mt-5">
                                <div onClick={handleClick}>Forgot password?</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
