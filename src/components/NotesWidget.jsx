import React, { useEffect, useState } from "react";
import styles from "./NotesWidget.module.css";

export default function NotesWidget() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || ""
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={styles.container}>
      <h2>All notes</h2>
      <textarea
        placeholder="Kindly add your notes here"
        spellCheck="false"
        className={styles.textarea}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>
    </div>
  );
}
