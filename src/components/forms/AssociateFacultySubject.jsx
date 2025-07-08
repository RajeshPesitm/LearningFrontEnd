import { useState } from "react";

export default function AssociateFacultySubject() {
  const [showMsg, setShowMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 1500);
    // TODO: Wire to backend GET/POST for association
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Associate Faculty to Subject</h3>
      <input placeholder="Faculty Code" required />
      <input placeholder="Subject Code" required />
      <button type="submit">Associate</button>
      {showMsg && <div style={{ color: "green" }}>Association done!</div>}
    </form>
  );
}