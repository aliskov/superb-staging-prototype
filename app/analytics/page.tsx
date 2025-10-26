import Link from 'next/link'
import { Home, Package, Calendar, BarChart3, TrendingUp, TrendingDown, DollarSign, AlertTriangle } from 'lucide-react'

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-luxury-charcoal">🏠 Superb Staging</h1>
              </div>
              <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
                <Link href="/" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  <Home className="w-4 h-4 mr-2" />
                  Dashboard
                </Link>
                <Link href="/inventory" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  <Package className="w-4 h-4 mr-2" />
                  Inventory
                </Link>
                <Link href="/projects" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  <Calendar className="w-4 h-4 mr-2" />
                  Projects
                </Link>
                <Link href="/analytics" className="border-luxury-gold text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analytics
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-md text-gray-400 hover:text-gray-500">
                🔍
              </button>
              <button className="bg-luxury-charcoal text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-luxury-charcoal/90">
                🤖 AI Assistant
              </button>
              <button className="p-2 rounded-full bg-gray-200 text-gray-600">
                👤
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Analytics</h2>
            <p className="text-sm text-gray-500 mt-1">Business insights and trends</p>
          </div>
          <select className="px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>Last 6 Months</option>
            <option>Last Year</option>
          </select>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Revenue */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Revenue
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">$54,820</div>
                      <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        12.5%
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Completed */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Calendar className="h-6 w-6 text-luxury-charcoal" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Projects Completed
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">48</div>
                      <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        8%
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Inventory Utilization */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Package className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Utilization Rate
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">78.3%</div>
                      <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        3.2%
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Damage Rate */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Damage Rate
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">5.6%</div>
                      <div className="ml-2 flex items-baseline text-sm font-semibold text-red-600">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        0.8%
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
          {/* Revenue Trend */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Trend</h3>
            <div className="h-64 flex items-end justify-between space-x-2">
              <div className="flex-1 bg-luxury-charcoal/100 rounded-t" style={{ height: '45%' }}>
                <div className="text-center text-xs text-gray-600 mt-2">Jan</div>
              </div>
              <div className="flex-1 bg-luxury-charcoal/200 rounded-t" style={{ height: '52%' }}>
                <div className="text-center text-xs text-gray-600 mt-2">Feb</div>
              </div>
              <div className="flex-1 bg-luxury-charcoal/300 rounded-t" style={{ height: '68%' }}>
                <div className="text-center text-xs text-gray-600 mt-2">Mar</div>
              </div>
              <div className="flex-1 bg-luxury-charcoal/400 rounded-t" style={{ height: '72%' }}>
                <div className="text-center text-xs text-gray-600 mt-2">Apr</div>
              </div>
              <div className="flex-1 bg-luxury-charcoal/500 rounded-t" style={{ height: '85%' }}>
                <div className="text-center text-xs text-white mt-2">May</div>
              </div>
              <div className="flex-1 bg-luxury-charcoal rounded-t" style={{ height: '92%' }}>
                <div className="text-center text-xs text-white mt-2">Jun</div>
              </div>
            </div>
            <div className="mt-4 flex justify-between text-sm text-gray-500">
              <span>$0</span>
              <span>$25k</span>
              <span>$50k</span>
            </div>
          </div>

          {/* Project Pipeline */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Project Pipeline</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Leads</span>
                  <span className="font-medium">1 (3%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-luxury-charcoal/400 h-2 rounded-full" style={{ width: '3%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Design Phase</span>
                  <span className="font-medium">3 (10%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-400 h-2 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Staged</span>
                  <span className="font-medium">26 (87%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">Average project duration: <span className="font-medium text-gray-900">18 days</span></p>
                <p className="text-sm text-gray-500 mt-2">Average revenue per project: <span className="font-medium text-gray-900">$1,142</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Damage Analytics */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Damage Analytics</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Damage by Category */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Damage by Severity</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Minor Damage</span>
                  <span className="text-sm font-medium">18 items</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '51%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Major Damage</span>
                  <span className="text-sm font-medium">12 items</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '34%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Destroyed</span>
                  <span className="text-sm font-medium">5 items</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
            </div>

            {/* Financial Impact */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Financial Impact (YTD)</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-3">
                  <p className="text-sm text-gray-600">Total Value Lost</p>
                  <p className="text-2xl font-bold text-gray-900">$8,340</p>
                  <p className="text-xs text-gray-500">6% of total inventory value</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-3">
                  <p className="text-sm text-gray-600">Items Written Down</p>
                  <p className="text-2xl font-bold text-gray-900">35</p>
                  <p className="text-xs text-gray-500">5.6% of total inventory</p>
                </div>
              </div>
            </div>

            {/* Trends */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Damage Trends</h4>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-3">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-red-900">Damage rate increasing</p>
                      <p className="text-xs text-red-700 mt-1">Up 0.8% from last month. Most damage occurs during transfers.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-luxury-charcoal/50 rounded-lg p-3">
                  <p className="text-sm font-medium text-blue-900">Top damage causes:</p>
                  <ul className="text-xs text-blue-700 mt-2 space-y-1">
                    <li>• Transport damage: 45%</li>
                    <li>• Client use: 32%</li>
                    <li>• Warehouse handling: 23%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Performing Items */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Most Utilized Items</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Times Staged</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days Utilized</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Modern Gray Sofa</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12 times</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">156 days (85%)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$2,400</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Excellent
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Oak Coffee Table</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10 times</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">142 days (77%)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$1,800</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      Good
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Dining Table Set</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">9 times</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">128 days (70%)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$2,175</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      Good
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
