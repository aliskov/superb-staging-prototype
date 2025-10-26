import Link from 'next/link'
import { Home, Package, Calendar, BarChart3, Settings } from 'lucide-react'

export default function Dashboard() {
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
                <Link href="/" className="border-luxury-gold text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
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
                <Link href="/analytics" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
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
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Calendar className="h-6 w-6 text-luxury-charcoal" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Projects in Progress
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">30</div>
                      <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        ↑ 2 this week
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Package className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Inventory Available
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">82.8%</div>
                      <div className="ml-2 text-sm text-gray-500">
                        518 of 626 items
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <BarChart3 className="h-6 w-6 text-amber-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Revenue This Month
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">$18,450</div>
                      <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        ↑ 12%
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Upcoming Events */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Upcoming Events</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-luxury-gold pl-4">
                <p className="text-sm text-gray-500">Tomorrow · Oct 26</p>
                <p className="font-medium text-gray-900">🚛 9:00 AM - 1:00 PM</p>
                <p className="text-sm text-gray-700">STAGE: 290 N Wyoming Ave, South Orange</p>
                <p className="text-sm text-gray-500">• 23 items to load</p>
                <button className="mt-2 text-sm text-luxury-charcoal hover:text-luxury-charcoal/80">View Pick List</button>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <p className="text-sm text-gray-500">Oct 28</p>
                <p className="font-medium text-gray-900">🚛 9:30 AM - 1:30 PM</p>
                <p className="text-sm text-gray-700">STAGE: 224 Manning Rd, River Edge</p>
                <p className="text-sm text-gray-500">• 19 items to load</p>
              </div>

              <div className="border-l-4 border-amber-500 pl-4">
                <p className="text-sm text-gray-500">Oct 30</p>
                <p className="font-medium text-gray-900">🏠 3:00 PM - 7:00 PM</p>
                <p className="text-sm text-gray-700">DESTAGE: 337 Pasadena, Hasbrouck Heights</p>
                <p className="text-sm text-gray-500">• 25 items to return</p>
              </div>
            </div>
          </div>

          {/* Project Status */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Project Status</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Leads</span>
                <span className="text-sm font-medium">1 (3%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-luxury-silver h-2 rounded-full" style={{ width: '3%' }}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Design</span>
                <span className="text-sm font-medium">3 (10%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-luxury-charcoal/70 h-2 rounded-full" style={{ width: '10%' }}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Staged</span>
                <span className="text-sm font-medium">26 (87%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '87%' }}></div>
              </div>

              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Inventory Health</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-600">Excellent:</span>
                    <span className="ml-2 font-medium">312 (51%)</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Good:</span>
                    <span className="ml-2 font-medium">198 (32%)</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Fair:</span>
                    <span className="ml-2 font-medium">67 (11%)</span>
                  </div>
                  <div className="text-red-600">
                    <span>Damaged:</span>
                    <span className="ml-2 font-medium">35 (6%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
            <button className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">➕</div>
              <div className="text-sm font-medium text-gray-900">New Project</div>
            </button>
            <button className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">📦</div>
              <div className="text-sm font-medium text-gray-900">Scan Item</div>
            </button>
            <button className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🚛</div>
              <div className="text-sm font-medium text-gray-900">Create Transfer</div>
            </button>
            <button className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🤖</div>
              <div className="text-sm font-medium text-gray-900">Virtual Staging</div>
            </button>
            <button className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">📊</div>
              <div className="text-sm font-medium text-gray-900">Run Report</div>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
