const mockHistory = [
    { id: 1, date: '2023-06-01', email: 'customer1@example.com', items: ['Plastic Bottle', 'Aluminum Can'], points: 15 },
    { id: 2, date: '2023-06-02', email: 'customer2@example.com', items: ['Glass Jar', 'Cardboard Box'], points: 20 },
    { id: 3, date: '2023-06-03', email: 'customer3@example.com', items: ['Newspaper', 'Plastic Container'], points: 10 },
  ]
  
  export default function RewardHistory() {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Reward History</h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6 bg-gray-50 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Recent Rewards</h2>
          </div>
          <div className="p-6">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Date</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Customer Email</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Items Recycled</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Points Awarded</th>
                </tr>
              </thead>
              <tbody>
                {mockHistory.map(entry => (
                  <tr key={entry.id} className="border-t border-gray-200">
                    <td className="px-4 py-2 text-sm text-gray-700">{entry.date}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{entry.email}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{entry.items.join(', ')}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{entry.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
  