import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ixios from "axios";

function Register(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email, password);
    try {
      const response = await ixios.post("http://localhost:3000/auth/register", {
        name,
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }


  function handleGoToLogin() {
    props.goToLog();
  }
  return (
    <div>
      <div className="w-[400px]">
        <h1 className="text-2xl font-bold text-center">Create Account</h1>
        <p>Please fill out the form below to create an account.</p>

        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label htmlFor="name">Name</label>
            <Input
              placeholder="Name"
              type="text"
              id="name"
              value={name}
              onChange={handleChangeName}
            />
          </div>
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
            Create Account
          </Button>
        </form>
        <p>
            <span>Already have an account?</span>
            <span onClick={handleGoToLogin} className="text-blue-500 cursor-pointer">Login now</span>
        </p>
      </div>
    </div>
  );
}
export default Register;
