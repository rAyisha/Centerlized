import "./index.scss";
import Logo from "../../../components/Logo";
import LoginForm from "./LoginForm";
import CircularDemo from "./CircularCards";
import SignupForm from "./SignUpForm";
import { useState } from "react";
import LanguageSelector from "../../../config/LanguageSelector";
import Drawer from "../../../components/Drawer";
import CompanyMasterForm from "./CompanyMasterForm";
import BranchMasterForm from "./BranchMasterForm";

const LoginScreen = () => {
  const [form, setForm] = useState<boolean>(true);
  const [formVisible, setFormVisible] = useState(true);
  const [formType, setFormType] = useState(true);
  const closeSider = () => {
    setFormVisible(false);
  };
  function formSelector() {
    switch (formType) {
      case true:
        return (
          <Drawer
            header="Company Master Form"
            visible={formVisible}
            onHide={closeSider}
          >
            <CompanyMasterForm setFormType={setFormType} />
          </Drawer>
        );
      case false:
        return (
          <Drawer
            header="Branch Master Form"
            visible={formVisible}
            onHide={closeSider}
          >
            <BranchMasterForm setFormType={setFormType}/>
          </Drawer>
        );
    }
  }

  return (
    <div className="login__main__container">
      <div className="grid m-0 login__main__grid">
        <div className="col-12 md:col-12 lg:col-7 login__left__container">
          <div className="logo__container">
            <div className="image__controller">
              <Logo />
            </div>
            <div className="language__selector__area flex align-items-center">
              <LanguageSelector />
            </div>
          </div>
          <div className="left__main__container">
            <CircularDemo />
          </div>
        </div>
        <div className="col-12 md:col-12 lg:col-5 login__right__container">
          <div className="grid m-0 justify-content-center">
            <div className="col-12 md:col-10 p-0">
              {form ? (
                <LoginForm setForm={setForm} form={form} />
              ) : (
                <SignupForm setForm={setForm} form={form} />
              )}
              {/* {formSelector()} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
