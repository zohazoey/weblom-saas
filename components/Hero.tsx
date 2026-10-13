export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-6 bg-gradient-to-b from-purple-50 to-white text-center">
      <div className="max-w-6xl mx-auto">
        <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">✨ NEW AI POWERED</span>
        <h1 className="text-4xl md:text-6xl font-extrabold mt-4">Build Your SaaS <br/><span className="text-purple-600">10x Faster</span></h1>
        <p className="text-gray-500 mt-4 text-lg">The ultimate platform to launch your product. Fast, secure, and beautiful.</p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-bold">Start Free</button>
          <button className="border px-6 py-3 rounded-lg font-bold">View Demo</button>
        </div>
      </div>
    </section>
  );
}