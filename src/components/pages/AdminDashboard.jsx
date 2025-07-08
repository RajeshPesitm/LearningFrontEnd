import { useState } from "react";
import AddStudentForm from "../forms/AddStudentForm";
import AddSubjectForm from "../forms/AddSubjectForm";
import AddFacultyForm from "../forms/AddFacultyForm";
import AssociateFacultySubject from "../forms/AssociateFacultySubject";

export default function AdminDashboard() {
  const [tab, setTab] = useState("student");

  return (
    <div>
      <nav style={{ marginBottom: 16 }}>
        <button onClick={() => setTab("student")}>Add Student</button>
        <button onClick={() => setTab("subject")}>Add Subject</button>
        <button onClick={() => setTab("faculty")}>Add Faculty</button>
        <button onClick={() => setTab("associate")}>Associate Faculty</button>
      </nav>
      <div>
        {tab === "student" && <AddStudentForm />}
        {tab === "subject" && <AddSubjectForm />}
        {tab === "faculty" && <AddFacultyForm />}
        {tab === "associate" && <AssociateFacultySubject />}
      </div>
    </div>
  );
}