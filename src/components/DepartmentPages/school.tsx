

const galleryImages: { src: string; alt: string }[] = [
  { src: '/images/school1.jpg', alt: 'Campus 1' },
  { src: '/images/school2.jpg', alt: 'Campus 2' },
  { src: '/images/school3.jpg', alt: 'Library' },
  { src: '/images/school4.jpg', alt: 'Science Lab' },
  { src: '/images/school5.jpg', alt: 'Sports Ground' },
];

export default function School(): JSX.Element {
  return (
    <div className="min-h-screen bg-pink-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">School Department</h1>

        {/* Dynamic Image Gallery */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="rounded-xl shadow hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>

        {/* Aims Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Aims</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Provide quality education to all students.</li>
            <li>Foster creativity, critical thinking, and lifelong learning.</li>
            <li>Promote inclusivity and a positive learning environment.</li>
            <li>Encourage academic excellence and holistic development.</li>
          </ul>
        </div>

        {/* Features Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Features</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Smart classrooms with modern technology.</li>
            <li>Library and research resources.</li>
            <li>Highly qualified and experienced faculty.</li>
            <li>Well-equipped labs and sports facilities.</li>
          </ul>
        </div>

        {/* Contact or Footer */}
        <div className="text-center text-sm text-gray-500">
          <p>© 2025 School Department. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
