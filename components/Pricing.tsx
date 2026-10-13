export default function Pricing() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Simple Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white border rounded-2xl p-6">
            <h3 className="font-bold">Starter</h3>
            <p className="text-3xl font-extrabold mt-2">$19<span className="text-sm font-normal text-gray-500">/mo</span></p>
            <ul className="mt-4 text-sm text-gray-600 space-y-2">
              <li>✓ 1 Project</li><li>✓ 5k Visitors</li><li>✓ Email Support</li>
            </ul>
            <button className="w-full mt-6 border rounded-full py-2 font-bold">Choose</button>
          </div>
          <div className="bg-purple-600 text-white border rounded-2xl p-6 scale-105 shadow-xl">
            <h3 className="font-bold">Pro ⭐ Most Popular</h3>
            <p className="text-3xl font-extrabold mt-2">$49<span className="text-sm font-normal text-purple-200">/mo</span></p>
            <ul className="mt-4 text-sm text-purple-100 space-y-2">
              <li>✓ Unlimited Projects</li><li>✓ 100k Visitors</li><li>✓ Priority Support</li>
            </ul>
            <button className="w-full mt-6 bg-white text-purple-600 rounded-full py-2 font-bold">Choose Pro</button>
          </div>
          <div className="bg-white border rounded-2xl p-6">
            <h3 className="font-bold">Enterprise</h3>
            <p className="text-3xl font-extrabold mt-2">$99<span className="text-sm font-normal text-gray-500">/mo</span></p>
            <ul className="mt-4 text-sm text-gray-600 space-y-2">
              <li>✓ Everything in Pro</li><li>✓ Unlimited Visitors</li><li>✓ 24/7 Support</li>
            </ul>
            <button className="w-full mt-6 border rounded-full py-2 font-bold">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
}