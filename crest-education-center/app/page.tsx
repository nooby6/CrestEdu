// app/page.tsx
export default function Home() {
  return (
    <section className="bg-blue-50 py-20 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mb-6">
        Welcome to Crest Education Center
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
        Empowering learners for a brighter future through quality education and innovative teaching.
      </p>
      <a
        href="#about"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
      >
        Learn More
      </a>
    </section>
  );
}
