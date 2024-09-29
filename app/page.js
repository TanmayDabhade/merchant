import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <h1 className="text-4xl font-bold mb-6">Welcome to Recycling Rewards</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Join our program to reward your customers for recycling and make a positive impact on the environment.
      </p>
      <Link href="/dashboard" legacyBehavior>
        <a className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg">Go to Merchant Dashboard</a>
      </Link>
    </div>
  )
}
