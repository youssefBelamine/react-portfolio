export default function ProjectMockup({ image, title, link }) {
  return (
    <div className="relative w-96 h-60 group">
      {/* Laptop frame */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-xl shadow-2xl overflow-hidden">
        <img
          src={image}
          alt={title}
          width={150}
          height={150}
        //   className='mb-6 rounded'
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 mb-6"
        />
      </div>

      {/* Simulated screen reflection */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

      {/* Hover overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/60 rounded-xl">
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-300"
        >
          View Live
        </a>
      </div>
    </div>
  );
}
