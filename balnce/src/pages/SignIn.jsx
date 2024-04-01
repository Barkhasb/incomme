import React from "react";
import Logo from "@/components/Logo";
import Header from "@/components/Header";
import Text from "@/components/Text";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

function SignIn() {
  const [userData, setUserData] = useState({});
  const { push } = useRouter();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/login",
        userData
      );

      push("/Dashboard");

      localStorage.setItem("token", data.token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col w-1/2 items-center justify-center gap-8">
        <Logo w={20} h={20} />
        <div className="flex flex-col items-center">
          <Header text="Welcome back" />
          <Text text="Welcome back, Please enter your details" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center bg-[#F3F4F6] rounded-xl w-[384px]">
            <Input
              placeHolder="Email"
              handleChange={handleChange}
              name="email"
            />
          </div>
          <div className="flex items-center bg-[#F3F4F6] rounded-xl w-[384px]">
            <Input
              placeHolder="Password"
              handleChange={handleChange}
              name="password"
            />
          </div>

          <button
            className="flex items-center justify-center text-white bg-[#0166FF] rounded-xl w-[384px] h-[40px] cursor-pointer "
            onClick={handleSubmit}
          >
            Sign in
          </button>
        </div>
        <div className="flex items-center">
          <p>Don’t have account?</p>
          <a href="SignUp">
            <Button text="Sign up" color={"text-[#0166FF]"} />
          </a>
        </div>
      </div>
      <div className="w-1/2 bg-[#0166FF] h-[1024px]"></div>
    </div>
  );
}

export default SignIn;
