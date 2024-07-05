import React from "react";
import "./Login.scss";
import { useState } from "react";
function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic đăng nhập ở đây
    console.log("Email:", name);
    console.log("Password:", password);
  };
  return (
    <div className="wrapper w-full h-[100vh] bg-slate-400 flex justify-center items-center ">
      <div className="w-[550px] h-[646px] bg-white">
        <h1 className="w-full h-[80px]  pl-[28px] text-white text-[35px] bg-[#6AE184] flex items-center ">
          Đăng Nhập
        </h1>
        <form onSubmit={handleSubmit} className=" mx-[31px] my-[50px]  ">
          <div>
            <label className="text-[#000] text-[25px]   ">Tên Truy Cập</label>
            <div className="w-full h-[62px]">
              <input
                type="text"
                placeholder="Tên truy cập"
                onChange={(e) => setName(e.target.value)}
                className="w-full h-[62px] pl-[32px] pr-[50px] text-[25px] flex  border border-solid border-[#D9D9D9] mt-[16px]"
              />
            </div>
          </div>
          <div className="mt-[39px]">
            <label className="text-[#000] text-[25px]   ">Mật Khẩu</label>
            <div className="w-full h-[62px]">
              <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mật khẩu đăng nhập"
                className="w-full h-[62px] pl-[32px] pr-[50px] text-[25px] flex  border border-solid border-[#D9D9D9] mt-[16px]"
              />
            </div>
            <div className="mt-[55px] flex justify-between items-center">
              <span className="text-[22px] text-[#6AE184]">
                Quên mật khẩu ?
              </span>
              <button
                type="submit"
                className="w-[147px] h-[49px] text-[25px] text-[white] bg-[#6AE184]"
              >
                Đăng nhập
              </button>
            </div>
            <div className=""></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
