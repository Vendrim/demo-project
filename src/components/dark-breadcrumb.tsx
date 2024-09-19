'use client'

import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function DarkBreadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex px-5 py-3 text-gray-400 bg-gray-800 " aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a href="/" className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white">
            <Home className="w-4 h-4 mr-2" />
            Home
          </a>
        </li>
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <ChevronRight className="w-5 h-5 text-gray-500" />
              <a
                href={item.href}
                className={`ml-1 text-sm font-medium md:ml-2 ${
                  index === items.length - 1
                    ? "text-gray-100"
                    : "text-gray-400 hover:text-white"
                }`}
                aria-current={index === items.length - 1 ? "page" : undefined}
              >
                {item.label}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}