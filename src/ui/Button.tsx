interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className="
      rounded-xl
      bg-green-700
      px-6
      py-3
      font-medium
      text-white
      transition
      duration-300
      hover:-translate-y-1
      hover:bg-green-800
      "
    >
      {children}
    </button>
  );
}