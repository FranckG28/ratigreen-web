"use client";

import { useState } from "react";
import Modal from "./Modal";

export default function ThemeTester() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="flex gap-2 flex-wrap justify-center">
      <button className="btn" onClick={() => setDialogOpen(true)}>
        Open dialog
      </button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>
      <Modal
        key="testDialog"
        isOpen={dialogOpen}
        onBackdropClick={() => setDialogOpen(false)}
      >
        <h1 className="text-2xl">Ratimodal</h1>
        <p>Ouais les rats</p>
        <button className="btn" onClick={() => setDialogOpen(false)}>
          Close
        </button>
      </Modal>
    </div>
  );
}
