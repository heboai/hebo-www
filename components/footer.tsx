export function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-4 py-8 text-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-4">
        <div className="flex items-center gap-2">
          <div className="bg-yellow-300 p-1 rounded">
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
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
          <span className="font-bold">hebo.ai</span>
        </div>
        <span className="text-sm text-gray-600 md:ml-2">
          is designed, built and backed by <span className="font-semibold">Infinite Monkey Sdn Bhd</span> (202501003121)
        </span>
      </div>
    </footer>
  )
}
