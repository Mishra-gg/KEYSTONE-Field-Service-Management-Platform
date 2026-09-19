import { useState } from "react";
import "./SignUp.css";

function SignUp({ onSignIn }: { onSignIn: () => void }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("CUSTOMER");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log({
      fullName,
      email,
      role,
      password,
    });

    alert("Account created successfully!");
  };

  return (
    <div className="signup-page">

      {/* LEFT SIDE */}
      <div className="signup-left">

        <div className="signup-brand">
          <div className="signup-brand-icon">K</div>

          <div>
            <h1>KEYSTONE</h1>
            <p>Field Service Management</p>
          </div>
        </div>

        <div className="signup-left-content">

          <div className="signup-illustration">
            <div className="signup-main-icon">👷</div>
            <div className="signup-tool-icon">⚙️</div>
          </div>

          <h2>Join KEYSTONE</h2>
          <p>Manage your service operations</p>
          <p>Track work orders efficiently</p>
          <p>Connect with your team</p>

        </div>

        <div className="signup-left-footer">
          Simplify field service management
          with KEYSTONE.
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="signup-right">

        <div className="signup-card">

          <h2>Create Account</h2>

          <p className="signup-subtitle">
            Create your KEYSTONE account
          </p>

          <form onSubmit={handleSubmit}>

            {/* FULL NAME */}
            <div className="signup-form-group">

              <label htmlFor="fullName">
                Full Name
              </label>

              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />

            </div>

            {/* EMAIL */}
            <div className="signup-form-group">

              <label htmlFor="signup-email">
                Email
              </label>

              <input
                id="signup-email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>

            {/* ROLE */}
            <div className="signup-form-group">

              <label htmlFor="role">
                Account Type
              </label>

              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="CUSTOMER">Customer</option>
                <option value="TECHNICIAN">Technician</option>
                <option value="DISPATCHER">Dispatcher</option>
                <option value="MANAGER">Manager / Admin</option>
              </select>

            </div>

            {/* PASSWORD */}
            <div className="signup-form-group">

              <label htmlFor="signup-password">
                Password
              </label>

              <input
                id="signup-password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

            </div>

            {/* CONFIRM PASSWORD */}
            <div className="signup-form-group">

              <label htmlFor="confirmPassword">
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

            </div>

            <button
              type="submit"
              className="create-account-button"
            >
              Create Account
            </button>

          </form>

          <p className="signin-text">
            Already have an account?

            <button
              type="button"
              onClick={onSignIn}
            >
              Sign In
            </button>

          </p>

        </div>

      </div>

    </div>
  );
}

export default SignUp;