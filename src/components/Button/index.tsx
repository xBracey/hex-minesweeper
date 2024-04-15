import { ReactNode } from "react";

export const Button = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition-all hover:scale-105 hover:bg-blue-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
