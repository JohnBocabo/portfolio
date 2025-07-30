export default function Nav() {
  return (
    <div className="flex justify-between items-center w-full bg-gray-900 text-white py-4">
        <h1 className="text-2xl font-bold">JB</h1>
        <nav className="flex gap-6 px-2">
            <a href="#skills" className="hover:text-blue-400 transition-colors duration-300">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
        </nav>
    </div>
  )
}