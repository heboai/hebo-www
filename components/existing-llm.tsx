export function ExistingLLM() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-center">
      <h2 className="text-2xl font-bold mb-2">Already have an existing LLM / Agent?</h2>
      <p className="text-lg mb-6">Get started with Hebo Evals to bullet proof your response quality</p>

      <div className="bg-purple-950 text-white rounded-[16px] p-4 flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span className="mr-2">&gt;</span>
          <span>npx install hebo-eval@latest</span>
        </div>
        <button className="p-1 transition-all hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-400 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        </button>
      </div>

      <a href="#" className="text-blue-600 hover:underline hover:text-purple-600 transition-colors">
        Works with any LLM / agent framework, learn more...
      </a>
    </div>
  )
}
