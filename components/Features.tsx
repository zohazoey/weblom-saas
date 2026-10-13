export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Everything you need</h2>
        <p className="text-center text-gray-500 mb-12">Built for founders, developers and teams</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-2xl p-6 hover:shadow-lg">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-4">⚡</div>
            <h3 className="font-bold">Lightning Fast</h3>
            <p className="text-sm text-gray-500 mt-2">Next.js 14, Tailwind, super optimized.</p>
          </div>
          <div className="border rounded-2xl p-6 hover:shadow-lg">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">🔒</div>
            <h3 className="font-bold">Secure Auth</h3>
            <p className="text-sm text-gray-500 mt-2">Google, email, magic links ready.</p>
          </div>
          <div className="border rounded-2xl p-6 hover:shadow-lg">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-4">💳</div>
            <h3 className="font-bold">Stripe Billing</h3>
            <p className="text-sm text-gray-500 mt-2">Subscriptions, payments in minutes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}