import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login");
  };
  return (
    <>
    <img
          src="https://th.bing.com/th/id/OIP.5Ma22pubHVJi4c42Hmp8jAHaLH?pid=ImgDet&rs=1"
          alt="This is an image"
        />
    <form>
      <h1>Login</h1>
      <p>Welcome to Login </p>
      <div className="login-container">
        
        <div className="form-container">
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </div>
      </div>
    </form>
    </>
  );
}

export default LoginForm;
