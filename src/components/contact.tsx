export default function Contact() {
  return (
    <div id="contact" className="w-full mx-auto py-4 mt-4">
        <div className="h-[5px] rounded-sm w-full my-5 bg-white"></div>
        <h1 className="text-4xl font-extrabold text-center">Contact Me</h1>
        <p className="font-extralight text-center mb-8">You can Contact me through my email or facebook 😁</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
          {/* Gmail */}
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-red-600 rounded-full">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Gmail</h3>
            <a href="mailto:your.johndoebocabo@gmail.com" className="text-red-400 hover:text-red-300 transition-colors text-sm">
              johndoebocabo@gmail.com
            </a>
          </div>

          {/* Facebook */}
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-blue-600 rounded-full">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Facebook</h3>
            <a href="https://facebook.com/johndoe.bocabo.7" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
              John Bocabo
            </a>
          </div>
        </div>
    </div>
  )
}