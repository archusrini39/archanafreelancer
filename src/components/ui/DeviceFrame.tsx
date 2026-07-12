interface DeviceFrameProps {
  children: React.ReactNode;
}

export default function DeviceFrame({ children }: DeviceFrameProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_25px_60px_rgba(15,23,42,.08)]">
      {children}
    </div>
  );
}