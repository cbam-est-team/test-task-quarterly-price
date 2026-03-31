"use client";

import { User, ChevronDown, Building2 } from "lucide-react";

export function AppHeader() {
  return (
    <header className="h-16 border-b border-border bg-white flex items-center justify-between px-6 shrink-0">
      {/* Left section - User greeting */}
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center">
          <User className="h-5 w-5 text-gray-500" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-foreground">
            Hello, Victor Burge!
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-teal-200 bg-teal-50 text-xs font-medium text-teal-700">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            Global Administrator
          </span>
        </div>
      </div>

      {/* Right section - Actions */}
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <button className="h-9 w-9 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-500"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
          <ChevronDown className="h-3 w-3 text-gray-400 ml-0.5" />
        </button>

        {/* Language selector */}
        <button className="h-9 flex items-center gap-2 px-3 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors">
          <span className="text-lg">🇬🇧</span>
          <span className="text-sm font-medium text-gray-700">EN</span>
        </button>

        {/* Company selector (coral/orange) */}
        <button className="h-9 flex items-center gap-2 px-4 rounded-md bg-coral-500 hover:bg-coral-600 transition-colors text-white text-sm font-medium"
          style={{ backgroundColor: '#f97316' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
          3A Composites GmbH
          <ChevronDown className="h-4 w-4" />
        </button>

        {/* Building button (outlined) */}
        <button className="h-9 flex items-center gap-2 px-4 rounded-md border-2 border-primary bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors">
          <Building2 className="h-4 w-4" />
          3A Composites GmbH
        </button>
      </div>
    </header>
  );
}
