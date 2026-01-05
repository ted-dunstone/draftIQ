'use client';

import { useState } from 'react';
import { CheckCircle, FileText, Sparkles, Shield, Zap, ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is DraftIQ?",
    answer: "DraftIQ is a comprehensive document analysis tool powered by AI that provides grammar, spelling, consistency, and style analysis. It helps you improve your writing by identifying issues and providing detailed feedback."
  },
  {
    question: "How does DraftIQ work?",
    answer: "Simply paste your document text directly from Word or Google Docs. DraftIQ will analyze your content and provide detailed feedback on grammar, spelling, consistency, and style issues. You can then review and apply the suggested improvements."
  },
  {
    question: "What document formats are supported?",
    answer: "DraftIQ supports plain text and HTML formats. You can paste directly from Word or Google Docs. For the whole document, select all (Cmd/Ctrl + A), copy, and paste into DraftIQ."
  },
  {
    question: "Can I customize the analysis?",
    answer: "Yes! DraftIQ offers different analysis types and allows you to set focus instructions to tailor the analysis to your specific needs. You can also choose different backend models for the analysis."
  },
  {
    question: "Is my document data secure?",
    answer: "Yes, we take security seriously. Your documents are processed securely and are not stored permanently. We use industry-standard encryption and security practices to protect your data."
  },
  {
    question: "What types of issues does DraftIQ detect?",
    answer: "DraftIQ detects a wide range of issues including grammar errors, spelling mistakes, style inconsistencies, clarity problems, and formatting issues. It provides detailed explanations and suggestions for each issue."
  }
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know about DraftIQ
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0b0f]">
      {/* Hero Section */}
      <section className="w-full py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Elevate Your Writing with{' '}
              <span className="text-[#0a84ff]">DraftIQ</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive grammar, spelling, consistency, and style analysis powered by AI
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              className="
                !bg-[#0a84ff] !text-white
                inline-flex items-center justify-center gap-2
                px-8 py-3
                text-base font-medium
                rounded-lg
                border border-black/10
                shadow-[0_1px_2px_rgba(0,0,0,0.15)]
                hover:bg-[#007aff]
                active:scale-[0.98]
                transition
              "
            >
              Get Started
            </button>
            <button
              className="
                inline-flex items-center justify-center gap-2
                px-8 py-3
                text-base font-medium
                rounded-lg
                border border-black/10 dark:border-white/10
                bg-white/70 dark:bg-white/5
                text-gray-700 dark:text-gray-300
                hover:bg-black/5 dark:hover:bg-white/10
                active:scale-[0.98]
                transition
              "
            >
              Learn More
            </button>
          </div>

          {/* Info Box */}
          <div className="max-w-2xl mx-auto rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-6 text-center">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Paste directly from Word or Google Docs. For the whole document, select all (Cmd/Ctrl + A) and copy then paste.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 px-6 bg-gray-50 dark:bg-black/30">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Everything you need to perfect your documents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <CheckCircle className="w-6 h-6 text-[#0a84ff]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Grammar & Spelling
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Catch grammar mistakes and spelling errors with AI-powered analysis
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <FileText className="w-6 h-6 text-[#0a84ff]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Style Consistency
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Maintain consistent style and tone throughout your document
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <Sparkles className="w-6 h-6 text-[#0a84ff]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    AI-Powered Analysis
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Advanced AI models provide deep insights into your writing
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <Zap className="w-6 h-6 text-[#0a84ff]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Fast & Efficient
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Get instant feedback on your documents in seconds
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <Shield className="w-6 h-6 text-[#0a84ff]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Secure & Private
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Your documents are processed securely and never stored
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <FileText className="w-6 h-6 text-[#0a84ff]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Multiple Formats
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Support for Word, Google Docs, and various document formats
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="w-full py-8 px-6 border-t border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-6xl text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; 2026 DraftIQ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
