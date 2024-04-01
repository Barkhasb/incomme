import React from "react";
import Logo from "@/components/Logo";
import Header from "@/components/Header";
import Text from "@/components/Text";
import Input from "@/components/Input";
import Button from "@/components/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function SignUp() {
  const { push } = useRouter();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [userRePassword, setUserRePassword] = useState("");
  const [passError, setPasserror] = useState(false);

  const rePassword = async (e) => {
    setUserRePassword(e.target.value);
  };

  useEffect(() => {
    if (userData.password === userRePassword) {
      setPasserror(false);
    } else {
      setPasserror(true);
    }
  }, [userData, userRePassword]);

  const signUpHandler = async (e) => {
    const { value, name } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleClick = async () => {
    try {
      if (userData.password !== userRePassword) {
        console.log("Passwords do not match");
        return;
      }
      const res = await axios.post("http://localhost:8000/users", userData);

      push("/stepper");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="flex gap-5">
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col w-1/2 items-center justify-center gap-8">
          <Logo w={20} h={20} />
          <div className="flex flex-col items-center">
            <Header text="Create Geld account" />
            <Text text="Sign up below to create your Wallet account" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center bg-[#F3F4F6] rounded-xl w-[384px]">
              <Input
                placeHolder="Name"
                handleChange={signUpHandler}
                name="username"
              />
            </div>
            <div className="flex items-center bg-[#F3F4F6] rounded-xl w-[384px]">
              <Input
                placeHolder="Email"
                handleChange={signUpHandler}
                name="email"
              />
            </div>
            <div className="flex items-center bg-[#F3F4F6] rounded-xl w-[384px]">
              <Input
                placeHolder="Password"
                handleChange={signUpHandler}
                name="password"
              />
            </div>
            <div className="flex items-center bg-[#F3F4F6] rounded-xl w-[384px]">
              <Input
                placeHolder="Re-password"
                handleChange={rePassword}
                name="re-password"
              />
            </div>
            {passError && (
              <p className="text-red-500 text-center">
                •Passwords do not match
              </p>
            )}
            <button
              text="Sign up"
              onClick={handleClick}
              className="flex items-center justify-center text-white bg-[#0166FF] rounded-xl w-[384px] h-[40px] cursor-pointer "
            >
              Sign In
            </button>
          </div>
          <div className="flex items-center">
            <p>Already have account?</p>
            <a href="SignIn">
              <Button text="Sign In" color={"text-[#0166FF]"} />
            </a>
          </div>
        </div>
        <div className="w-1/2 bg-[#0166FF] h-[1024px]"></div>
      </div>
    </div>
  );
}

export default SignUp;
