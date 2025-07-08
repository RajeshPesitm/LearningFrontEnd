import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const [role, setRole] = useState("admin");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy login: just set role, ignore credentials
    login(role);
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Login as:
          <select value={role} onChange={e => setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </label>
      </div>
      <div>
        <input
          placeholder={role === "admin" ? "Admin Name" : "User Name"}
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
      {/* Dummy: No validation, no backend call */}
    </form>
  );
}