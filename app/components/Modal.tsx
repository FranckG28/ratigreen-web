"use client";

export default function Modal({
  children,
  isOpen,
  onBackdropClick,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  onBackdropClick?: () => void;
}) {
  return (
    <dialog className="modal" open={isOpen}>
      <div className="modal-box">{children}</div>
      <div className="modal-backdrop bg-base-300/50" onClick={onBackdropClick}>
        <button>close</button>
      </div>
    </dialog>
  );
}
