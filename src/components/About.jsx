export default function About ()
{
    return (
        <div className={`flex items-center justify-center h-full w-full bg-gradient-to-br from-indigo-900 to-purple-900 text-white`}>
          <div className="text-center max-w-2xl px-6">
            <h1 className="text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl leading-relaxed">
              I'm a passionate developer with a keen interest in creating innovative 
              web experiences. My journey began with a curiosity about how technology 
              can solve real-world problems. I specialize in React, modern web 
              technologies, and creating intuitive user interfaces.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <span className="px-4 py-2 bg-white/20 rounded-full">React</span>
              <span className="px-4 py-2 bg-white/20 rounded-full">JavaScript</span>
              <span className="px-4 py-2 bg-white/20 rounded-full">Web Development</span>
            </div>
          </div>
        </div>
    );
}