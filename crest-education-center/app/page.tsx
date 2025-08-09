export default function Home() {
  return (
    <section className="text-center py-16">
      <h1 className="text-4xl font-bold text-blue-700">Welcome to Crest Education Center</h1>
      <p className="mt-4 text-lg text-gray-600">
        Quality homeschooling & tuition services for multiple curriculums in Nairobi.
      </p>
      <a
        href="/contact"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Enroll Now
      </a>
    </section>
  );
}
