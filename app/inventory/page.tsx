import Link from 'next/link'
import { Home, Package, Calendar, BarChart3, Filter, Grid3x3, List, AlertCircle } from 'lucide-react'

export default function InventoryPage() {
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
                <Link href="/inventory" className="border-luxury-gold text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
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
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Inventory</h2>
            <p className="text-sm text-gray-500 mt-1">518 available of 626 total items (82.8%)</p>
          </div>
          <button className="bg-luxury-charcoal text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-luxury-charcoal/90">
            + Add Item
          </button>
        </div>

        {/* Filters and View Toggle */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-sm font-medium text-white bg-luxury-charcoal rounded-md">
              Available (518)
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              Staged (108)
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              Damaged (35)
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </button>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 text-luxury-charcoal bg-purple-50 rounded-md">
              <Grid3x3 className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-md">
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Inventory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Item 1 - Excellent condition */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              <Package className="w-16 h-16 text-gray-400" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-900">Modern Gray Sofa</h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                  Excellent
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-2">QR-1234</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Warehouse</span>
                <span className="font-medium text-gray-900">$1,200</span>
              </div>
            </div>
          </div>

          {/* Item 2 - Good condition */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              <Package className="w-16 h-16 text-gray-400" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-900">Oak Coffee Table</h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700">
                  Good
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-2">QR-1235</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Warehouse</span>
                <span className="font-medium text-gray-900">$450</span>
              </div>
            </div>
          </div>

          {/* Item 3 - Staged */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow border-2 border-purple-200">
            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              <Package className="w-16 h-16 text-gray-400" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-900">Modern Desk Lamp</h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-luxury-silver">
                  Staged
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-2">QR-1236</p>
              <div className="flex flex-col text-xs space-y-1">
                <span className="text-gray-600">290 N Wyoming Ave</span>
                <span className="font-medium text-gray-900">$95</span>
              </div>
            </div>
          </div>

          {/* Item 4 - Fair condition */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              <Package className="w-16 h-16 text-gray-400" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-900">Decorative Mirror</h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                  Fair
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-2">QR-1237</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Warehouse</span>
                <span className="font-medium text-gray-900">$180</span>
              </div>
            </div>
          </div>

          {/* Item 5 - Damaged */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow border-2 border-red-200">
            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              <Package className="w-16 h-16 text-gray-400" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-900">Accent Chair</h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                  Damaged
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-2">QR-1238</p>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center text-red-600">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  Minor damage
                </div>
                <span className="font-medium text-gray-900 line-through">$320</span>
              </div>
              <p className="text-xs text-red-600 mt-1">Value: $128 (40%)</p>
            </div>
          </div>

          {/* Item 6 - Excellent */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              <Package className="w-16 h-16 text-gray-400" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-900">Queen Bed Frame</h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                  Excellent
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-2">QR-1239</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Warehouse</span>
                <span className="font-medium text-gray-900">$890</span>
              </div>
            </div>
          </div>

          {/* Item 7 - Good */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              <Package className="w-16 h-16 text-gray-400" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-900">Dining Table Set</h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700">
                  Good
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-2">QR-1240</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Warehouse</span>
                <span className="font-medium text-gray-900">$1,450</span>
              </div>
            </div>
          </div>

          {/* Item 8 - Staged */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow border-2 border-purple-200">
            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              <Package className="w-16 h-16 text-gray-400" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-900">Wall Art Set</h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-luxury-silver">
                  Staged
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-2">QR-1241</p>
              <div className="flex flex-col text-xs space-y-1">
                <span className="text-gray-600">224 Manning Rd</span>
                <span className="font-medium text-gray-900">$275</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-2 text-sm font-medium text-white bg-luxury-charcoal border border-blue-600 rounded-md">
              1
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              3
            </button>
            <span className="px-3 py-2 text-sm text-gray-500">...</span>
            <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              65
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>

        {/* Summary Stats */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Inventory Health Summary</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            <div>
              <p className="text-2xl font-bold text-green-600">312</p>
              <p className="text-xs text-gray-600">Excellent (51%)</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-500">198</p>
              <p className="text-xs text-gray-600">Good (32%)</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-yellow-500">67</p>
              <p className="text-xs text-gray-600">Fair (11%)</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-red-500">35</p>
              <p className="text-xs text-gray-600">Damaged (6%)</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-400">14</p>
              <p className="text-xs text-gray-600">Destroyed (2%)</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
