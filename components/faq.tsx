"use client"

import { useState } from "react"

const faqs = [
  {
    question: "Which LLM models does Hebo support?",
    answer:
      "Hebo supports a wide range of LLM models including OpenAI's GPT models, Anthropic's Claude models, and open-source models like Llama and Mistral.",
  },
  {
    question: "Does Hebo integrate with my existing systems?",
    answer:
      "Yes, Hebo is designed to integrate seamlessly with your existing systems through our comprehensive API and various SDKs.",
  },
  {
    question: "How is my data in Hebo secured?",
    answer:
      "Hebo implements industry-standard security practices including encryption at rest and in transit, role-based access control, and regular security audits.",
  },
  {
    question: "Can Hebo be deployed on premise?",
    answer:
      "Yes, Hebo offers on-premise deployment options for enterprise customers with specific security or compliance requirements.",
  },
  {
    question: "Is Hebo free to use?",
    answer:
      "Hebo offers a free tier with limited features for individuals and small teams. We also offer paid plans with additional features for larger teams and enterprises.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              className="flex items-center justify-between w-full text-left py-2"
              onClick={() => toggleFaq(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform ${openIndex === index ? "transform rotate-45" : ""}`}
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>

            {openIndex === index && <div className="mt-2 text-gray-600">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
