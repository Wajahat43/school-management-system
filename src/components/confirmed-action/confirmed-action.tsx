"use client";
import React from "react";
import ConfirmDialog from "../confirm-dialog/confirm-dialog";

function ConfirmedAction({ action, children }: { action: () => void; children: React.ReactNode }) {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <div onClick={() => setOpen(true)}>{children}</div>
      <ConfirmDialog isOpen={isOpen} setOpen={setOpen} onContinue={action} />
    </>
  );
}

export default ConfirmedAction;
