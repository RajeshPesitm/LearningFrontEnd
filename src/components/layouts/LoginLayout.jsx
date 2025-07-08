import { Outlet } from "react-router-dom";

export default function LoginLayout() {
  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 32 }}>
      <h2>Login Portal</h2>
      <Outlet />
    </div>
  );
}