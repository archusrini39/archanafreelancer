export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold text-green-700">
          ArchanaFreelancer
        </h1>

        <div className="hidden gap-8 md:flex">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <button className="rounded-xl bg-green-700 px-6 py-3 text-white transition hover:bg-green-800">
          Book Consultation
        </button>
      </div>
    </nav>
  );
}