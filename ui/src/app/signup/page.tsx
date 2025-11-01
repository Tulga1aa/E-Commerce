"use client";
import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState(String);
  const [name, setName] = useState(String);
  const [password, setPassword] = useState(String);
  const [confirmPassword, setConfirmPassword] = useState(String);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [aldaa, setAldaa] = useState("");
  const [alda, setAlda] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!email) {
      setError("Email not found");
      setLoading(false);
      return;
    }

    if (!password) {
      setAldaa("Password incorrect");
      setLoading(false);
      return;
    }

    if (password != confirmPassword) {
      setAlda("Password incorrect");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setLoading(false);
      alert("Form submitted successfully!");
    }, 1000);
  };

  if (loading) return;

  return (
    <div className="pt-[104px] pb-[374px] flex justify-center items-center">
      <div className="flex-col flex gap-12 w-[334px]">
        <p className="font-semibold text-2xl text-center">Бүртгүүлэх</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            id="name"
            placeholder="Нэр"
            className="w-full h-[34px] border-solid border rounded-[18px] py-1 px-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div>
            <input
              type="email"
              id="email"
              placeholder="Имэйл хаяг"
              className="w-full h-[34px] border-solid border rounded-[18px] py-1 px-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="text-red-600">email oruulnuu</p>}
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Нууц үг"
              minLength={8}
              className="w-full h-[34px] border-solid border rounded-[18px] py-1 px-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {aldaa && <p className="text-red-600">password oruulnuu</p>}
          </div>
          <input
            type="password"
            id="confirm-password"
            placeholder="Нууц үг давтах"
            className="w-full h-[34px] border-solid border rounded-[18px] py-1 px-3"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {alda && <p className="text-red-600">nuuts ug ijil bish bn </p>}
          <div className="flex flex-col pl-4">
            <ul className="list-disc flex flex-col gap-1">
              <li className="text-[#71717A]">Том үсэг орсон байх</li>
              <li className="text-[#71717A]">Жижиг үсэг орсон байх</li>
              <li className="text-[#71717A]">Тоо орсон байх</li>
              <li className="text-[#71717A]">Тэмдэгт орсон байх</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => {}}
              type="submit"
              className="bg-blue-600 rounded-[18px] w-full h-[36px] text-[#FAFAFA] ">
              Бүртгүүлэх
            </button>
          </div>
        </form>

        <button
          type="button"
          className="border-solid border border-blue-600 rounded-[18px] w-full h-[36px] text-[#2563EB]">
          Нэвтрэх
        </button>
      </div>
    </div>
  );
};

export default SignUp;
