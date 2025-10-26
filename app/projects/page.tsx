import Link from 'next/link'
import { Home, Package, Calendar, BarChart3, ArrowLeft, MapPin, Clock, CheckCircle2 } from 'lucide-react'

export default function ProjectsPage() {
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
                <Link href="/projects" className="border-luxury-gold text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
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
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
          <button className="bg-luxury-charcoal text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-luxury-charcoal/90">
            + New Project
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-4 mb-6 border-b border-gray-200">
          <button className="pb-2 px-1 border-b-2 border-luxury-gold text-sm font-medium text-luxury-charcoal">
            All Projects (30)
          </button>
          <button className="pb-2 px-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700">
            Leads (1)
          </button>
          <button className="pb-2 px-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700">
            Design (3)
          </button>
          <button className="pb-2 px-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700">
            Staged (26)
          </button>
        </div>

        {/* Projects List */}
        <div className="space-y-4">
          {/* Project Card 1 - Active */}
          <div className="bg-white shadow rounded-lg p-6 border-l-4 border-green-500">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">290 N Wyoming Ave, South Orange</h3>
                  <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Staged
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    South Orange, NJ
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Oct 26, 2025
                  </div>
                  <div className="flex items-center">
                    <Package className="w-4 h-4 mr-1" />
                    23 items
                  </div>
                </div>
              </div>
              <button className="text-luxury-charcoal hover:text-luxury-charcoal/80 text-sm font-medium">
                View Details →
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              <div>
                <p className="text-xs text-gray-500">Client</p>
                <p className="text-sm font-medium text-gray-900">Sarah Johnson Realty</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Stage Date</p>
                <p className="text-sm font-medium text-gray-900">Oct 25, 2025</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Destage Date</p>
                <p className="text-sm font-medium text-gray-900">Nov 8, 2025</p>
              </div>
            </div>
          </div>

          {/* Project Card 2 - Active */}
          <div className="bg-white shadow rounded-lg p-6 border-l-4 border-green-500">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">224 Manning Rd, River Edge</h3>
                  <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Staged
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    River Edge, NJ
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Oct 28, 2025
                  </div>
                  <div className="flex items-center">
                    <Package className="w-4 h-4 mr-1" />
                    19 items
                  </div>
                </div>
              </div>
              <button className="text-luxury-charcoal hover:text-luxury-charcoal/80 text-sm font-medium">
                View Details →
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              <div>
                <p className="text-xs text-gray-500">Client</p>
                <p className="text-sm font-medium text-gray-900">Berkshire Hathaway</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Stage Date</p>
                <p className="text-sm font-medium text-gray-900">Oct 23, 2025</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Destage Date</p>
                <p className="text-sm font-medium text-gray-900">Nov 15, 2025</p>
              </div>
            </div>
          </div>

          {/* Project Card 3 - In Design */}
          <div className="bg-white shadow rounded-lg p-6 border-l-4 border-luxury-gold">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">337 Pasadena, Hasbrouck Heights</h3>
                  <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-luxury-charcoal">
                    Design
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Hasbrouck Heights, NJ
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Oct 30, 2025
                  </div>
                  <div className="flex items-center">
                    <Package className="w-4 h-4 mr-1" />
                    0 items assigned
                  </div>
                </div>
              </div>
              <button className="text-luxury-charcoal hover:text-luxury-charcoal/80 text-sm font-medium">
                View Details →
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              <div>
                <p className="text-xs text-gray-500">Client</p>
                <p className="text-sm font-medium text-gray-900">Coldwell Banker</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Consultation</p>
                <p className="text-sm font-medium text-gray-900">Oct 27, 2025</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">AI Virtual Staging</p>
                <p className="text-sm font-medium text-luxury-charcoal">3 rooms ready</p>
              </div>
            </div>
          </div>

          {/* Project Card 4 - Lead */}
          <div className="bg-white shadow rounded-lg p-6 border-l-4 border-luxury-silver">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">156 Oak Street, Montclair</h3>
                  <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-luxury-silver">
                    Lead
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Montclair, NJ
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Follow-up: Tomorrow
                  </div>
                </div>
              </div>
              <button className="text-luxury-charcoal hover:text-luxury-charcoal/80 text-sm font-medium">
                View Details →
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              <div>
                <p className="text-xs text-gray-500">Contact</p>
                <p className="text-sm font-medium text-gray-900">Michael Chen</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Company</p>
                <p className="text-sm font-medium text-gray-900">Keller Williams</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Estimate</p>
                <p className="text-sm font-medium text-gray-900">Pending</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-2 text-sm font-medium text-white bg-luxury-charcoal border border-luxury-gold rounded-md">
              1
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      </main>
    </div>
  )
}
