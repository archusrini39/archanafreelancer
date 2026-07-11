interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-8">
      {children}
    </div>
  );
}