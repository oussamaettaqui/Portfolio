export default function Projects()
{
    return (
        <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-teal-900 to-blue-900 text-white">
          <div className="text-center max-w-2xl px-6">
            <h1 className="text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl leading-relaxed mb-8">
              A collection of projects that showcase my skills and creativity. 
              Each project represents a unique challenge I've solved using 
              modern web technologies.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {['Web App', 'Mobile Responsive', 'Interactive Design'].map((project, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-all"
                >
                  <h3 className="text-2xl font-semibold mb-4">{project}</h3>
                  <p className="text-sm opacity-70">Innovative solution demonstrating technical expertise</p>
                </div>
              ))}
            </div>
          </div>
        </div>
    );
}