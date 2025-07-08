import { useState } from "react";

export default function AddSubjectForm() {
  const [showMsg, setShowMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 1500);
    // TODO: Wire to backend POST /subject
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Subject</h3>
      <input placeholder="Subject Code" required />
      <input placeholder="Subject Name" required />
      <button type="submit">Add Subject</button>
      {showMsg && <div style={{ color: "green" }}>Subject added!</div>}
    </form>
  );
}