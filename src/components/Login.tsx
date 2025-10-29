import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ixios from "axios";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    try {
      const response = await ixios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  function handleGoToRegister() {
    props.goToReg();
  }
  return (
    <div>
      <div className="w-[400px]">
        <h1 className="text-2xl font-bold text-center">Create Account</h1>
        <p>Please fill out the form below to create an account.</p>

        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label htmlFor="email">Email</label>
            <Input
              placeholder="Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="password">Password</label>
            <Input
              placeholder="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Input
              placeholder="Confirm Password"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <Button className="mt-4" type="submit">
            Login
          </Button>
        </form>

        <p>
          <span>don't have an account?</span>
          <span
            onClick={handleGoToRegister}
            className="text-blue-500 cursor-pointer"
          >
            Sign up now
          </span>
        </p>
      </div>
    </div>
  );
}
export default Login;
