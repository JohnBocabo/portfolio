export default function Contact() {
  return (
    <div id="contact" className="w-full mx-auto py-4 mt-4 flex flex-col items-center justify-center">
      <div className="h-[5px] rounded-sm w-full my-5 bg-white"></div>
      <h1 className="text-2xl md:text-3xl font-semibold text-center">Contact Me</h1>
      <p className="font-extralight text-center mb-2">You can Contact me through my email or LinkedIn </p>
      <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center justify-center ">
        <a href="mailto:your.johndoebocabo@gmail.com" className="w-full text-red-400 hover:text-red-300 transition-colors text-center">
          johndoebocabo@gmail.com
        </a>
        <p className="hidden md:block text-white">|</p>
        <a href="https://www.linkedin.com/in/john-bocabo-b8a798240/" className="w-full text-blue-400 hover:text-blue-300 transition-colors text-center">
          LinkedIn
        </a>
      </div>
    </div>
  )
}