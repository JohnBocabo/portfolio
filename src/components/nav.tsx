import { useState, useRef, useEffect } from "react";
import { Menu, X, Lightbulb, Briefcase, Mail } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  const closeDialog = () => {
    setIsOpen(false);
  };
  return (
    <div className="flex justify-between items-center  w-full     py-4">
      <h1 className="text-2xl font-bold">JB</h1>
      <nav className="gap-6 px-2 hidden md:flex">
        <a href="#skills" className="hover:text-blue-400 transition-colors duration-300">Skills</a>
        <a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Projects</a>
        <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
      </nav>
      {/* mobile nav */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(true)}>
          <Menu className="h-6 w-6" />
        </button>
        
        <dialog 
          ref={dialogRef}
          className="fixed inset-y-0 right-0 w-80 max-w-[80vw] h-full bg-gray-800 text-white shadow-2xl border-l border-gray-700 p-0 m-0 backdrop:bg-black/50 backdrop:backdrop-blur-sm"
          onClose={() => setIsOpen(false)}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h2 className="text-xl font-semibold">Menu</h2>
              <button 
                onClick={closeDialog}
                className="p-2 hover:bg-gray-700 rounded-md transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex flex-col gap-2 p-6 flex-1">
              <a 
                href="#skills" 
                className="flex items-center gap-4 hover:bg-gray-700 transition-colors duration-300 text-lg py-3 px-4 rounded-md" 
                onClick={closeDialog}
              >
                <Lightbulb className="h-5 w-5 text-blue-400" />
                Skills
              </a>
              <a 
                href="#projects" 
                className="flex items-center gap-4 hover:bg-gray-700 transition-colors duration-300 text-lg py-3 px-4 rounded-md" 
                onClick={closeDialog}
              >
                <Briefcase className="h-5 w-5 text-blue-400" />
                Projects
              </a>
              <a 
                href="#contact" 
                className="flex items-center gap-4 hover:bg-gray-700 transition-colors duration-300 text-lg py-3 px-4 rounded-md" 
                onClick={closeDialog}
              >
                <Mail className="h-5 w-5 text-blue-400" />
                Contact
              </a>
            </nav>
          </div>
        </dialog>
      </div>

    </div>
  )
}