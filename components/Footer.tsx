export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-gray-900 text-gray-400 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4">
        <div>
          <p className="font-bold text-white">SaaS Kit ✨</p>
          <p className="mt-1">Build faster, ship sooner.</p>
        </div>
        <div className="flex gap-6">
          <span>Twitter</span><span>GitHub</span><span>Docs</span>
        </div>
      </div>
    </footer>
  );
}