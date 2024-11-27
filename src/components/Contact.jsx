export default function Contact ()
{
    return (
        <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-pink-900 to-red-900 text-white">
          <div className="text-center max-w-2xl px-6">
            <h1 className="text-5xl font-bold mb-6">Contact Me</h1>
            <p className="text-xl leading-relaxed mb-8">
              Let's connect and create something amazing together. 
              I'm always open to exciting opportunities and collaborative projects.
            </p>
            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-xl">
                <h3 className="text-2xl font-semibold">Email</h3>
                <p>your.email@example.com</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl">
                <h3 className="text-2xl font-semibold">Social</h3>
                <div className="flex justify-center space-x-4 mt-2">
                  {['LinkedIn', 'GitHub', 'Twitter'].map((platform, index) => (
                    <a 
                      key={index} 
                      href="#" 
                      className="px-4 py-2 bg-white/20 rounded-full hover:bg-white/30 transition-all"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}