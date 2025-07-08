import { useState } from "react";

export default function AddFacultyForm() {
  const [showMsg, setShowMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 1500);
    // TODO: Wire to backend POST /faculty
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Faculty</h3>
      <input placeholder="Faculty Code" required />
      <input placeholder="Faculty Name" required />
      <button type="submit">Add Faculty</button>
      {showMsg && <div style={{ color: "green" }}>Faculty added!</div>}
    </form>
  );
}