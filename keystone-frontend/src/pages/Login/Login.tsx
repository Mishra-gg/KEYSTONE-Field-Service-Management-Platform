
import { useState } from "react";
import "./Login.css";

function Login({
  onSignUp,
  onLogin,
}: {
  onSignUp: () => void;
  onLogin: () => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      email,
      password,
      rememberMe,
    });

    // Backend connect hone ke baad
    // yahan login API call karenge.
  };

  return (
    <div className="login-page">

      {/* LEFT SIDE */}
      <div className="login-left">

        <div className="brand">
          <div className="brand-icon">K</div>

          <div>
            <h1>KEYSTONE</h1>
            <p>Field Service Management</p>
          </div>
        </div>

        <div className="left-content">

          <div className="illustration">
            <div className="illustration-icon">👷</div>
            <div className="tool-box">🔧</div>
          </div>

          <h2>Manage Work Orders</h2>
          <p>Track technicians</p>
          <p>Inventory & Parts</p>
          <p>Reports & Analytics</p>

        </div>

        <div className="left-footer">
          Streamline your field service operations
          and improve efficiency.
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">

        <div className="login-card">

          <h2>Welcome Back!</h2>

          <p className="login-subtitle">
            Sign in to continue
          </p>

          <form onSubmit={handleSubmit}>

            {/* EMAIL */}
            <div className="form-group">

              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>

            {/* PASSWORD */}
            <div className="form-group">

              <div className="password-label">

                <label htmlFor="password">
                  Password
                </label>

                <button
                  type="button"
                  className="forgot-password"
                >
                  Forgot password?
                </button>

              </div>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

            </div>

            {/* REMEMBER ME */}
            <div className="remember-row">

              <label className="remember-label">

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) =>
                    setRememberMe(e.target.checked)
                  }
                />

                <span>Remember me</span>

              </label>

            </div>

            {/* BUTTON */}
           <button
             type="submit"
             className="sign-in-button"
             onClick={onLogin}
             >
            Sign In
            </button>

          </form>

          <p className="signup-text">
            Don't have an account?

            <button
              type="button"
              onClick={onSignUp}
            >
              Sign up
            </button>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;

