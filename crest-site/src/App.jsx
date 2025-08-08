import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 leading-relaxed">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img src="/src/assets/logo.svg" alt="Crest Education logo" className="w-10 h-10" />
            <div>
              <h1 className="font-extrabold text-xl">Crest Education</h1>
              <p className="text-sm text-gray-500">Learning that lifts you higher</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center text-gray-700">
            <a href="#courses" className="hover:text-blue-600">Courses</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
            <a href="#contact" className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700">Enroll</a>
          </nav>
          <button className="md:hidden" aria-label="Open menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="bg-white">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 py-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Inspire. Learn. Achieve.</h2>
              <p className="mt-4 text-gray-600 text-lg">High-quality tutoring and structured courses for primary to high school students. Hands-on lessons, experienced tutors, and a friendly learning environment.</p>

              <div className="mt-6 flex gap-4">
                <a href="#courses" className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md inline-block">Explore Courses</a>
                <a href="#contact" className="px-6 py-3 border border-gray-200 rounded-md inline-block">Contact Us</a>
              </div>

              <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-gray-600">
                <li>Experienced Tutors</li>
                <li>Flexible Timings</li>
                <li>Exam Preparation</li>
                <li>Small Class Sizes</li>
              </ul>
            </div>
            <div className="flex justify-center md:justify-end">
              <img src="/src/assets/hero.jpg" alt="Students studying" className="w-full max-w-md rounded-xl shadow-lg" />
            </div>
          </div>
        </section>

        {/* Courses */}
        <section id="courses" className="py-12">
          <div className="container">
            <h3 className="text-2xl font-bold">Our Programs</h3>
            <p className="text-gray-600 mt-2">From primary support to A-levels — structured tracks that build confidence and results.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <article className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-lg">Primary Tuition</h4>
                <p className="mt-2 text-gray-600 text-sm">Foundations in literacy, numeracy and sciences with activity-led lessons.</p>
                <div className="mt-4">
                  <a href="#" className="text-blue-600 text-sm">Learn more →</a>
                </div>
              </article>

              <article className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-lg">Secondary (KS3/4)</h4>
                <p className="mt-2 text-gray-600 text-sm">Exam-focused coaching and revision plans for KS3 and GCSE.</p>
                <div className="mt-4">
                  <a href="#" className="text-blue-600 text-sm">Learn more →</a>
                </div>
              </article>

              <article className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-lg">A-Level / IB Support</h4>
                <p className="mt-2 text-gray-600 text-sm">Advanced subject coaching and university preparation.</p>
                <div className="mt-4">
                  <a href="#" className="text-blue-600 text-sm">Learn more →</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-gray-50 py-12">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">About Crest</h3>
              <p className="mt-4 text-gray-600">Crest Education Center is dedicated to helping students discover their potential through clear, caring instruction. We focus on building study skills and confidence alongside subject knowledge.</p>

              <ul className="mt-4 text-gray-600 list-disc pl-5 space-y-1">
                <li>Individualized study plans</li>
                <li>Progress tracking</li>
                <li>Parent updates</li>
              </ul>
            </div>
            <div>
              <img src="/src/assets/teacher-1.jpg" alt="Teacher" className="rounded-lg shadow" />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-12">
          <div className="container">
            <h3 className="text-2xl font-bold">What parents say</h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <blockquote className="bg-white p-6 rounded-lg shadow-sm">“My child improved two grades in maths within three months — the tutors are fantastic.” <cite className="block mt-4 text-sm text-gray-500">— Sarah N.</cite></blockquote>
              <blockquote className="bg-white p-6 rounded-lg shadow-sm">“Engaging lessons and great feedback.” <cite className="block mt-4 text-sm text-gray-500">— Michael K.</cite></blockquote>
              <blockquote className="bg-white p-6 rounded-lg shadow-sm">“Flexible schedules and friendly teachers.” <cite className="block mt-4 text-sm text-gray-500">— Amina H.</cite></blockquote>
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section id="contact" className="bg-blue-600 text-white py-12">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold">Ready to join?</h3>
              <p className="mt-2">Book a free assessment or contact us for more information.</p>
            </div>
            <form className="bg-white text-gray-900 rounded-lg p-6 shadow-sm">
              <label className="block">
                <span className="text-sm font-medium">Full name</span>
                <input className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" placeholder="Jane Doe" />
              </label>

              <label className="block mt-4">
                <span className="text-sm font-medium">Email</span>
                <input className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" placeholder="you@example.com" />
              </label>

              <div className="mt-4 flex gap-2">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Send</button>
                <button type="reset" className="px-4 py-2 border rounded-md">Reset</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Crest Education Center — All rights reserved.</p>
          <div className="text-sm text-gray-600">123 Learning Lane, Nairobi • +254 700 000 000</div>
        </div>
      </footer>
    </div>
  );
}