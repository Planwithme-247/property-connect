export default function HomePage() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Welcome</h2>
      <p className="text-lg text-slate-700">A minimal Next.js + TypeScript starter for Property Connect.</p>
      <div className="mt-6">
        <a href="/listings" className="text-indigo-600 hover:underline">View Property Listings →</a>
      </div>
    </>
  )
}
