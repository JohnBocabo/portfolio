export default function Skills() {
  return (
    <div id="skills" className="flex gap-5 flex-col w-full mt-5">
      <h1 className="text-center text-2xl md:text-3xl font-semibold">Skills & Technologies used</h1>
      
      {/* First Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Programming Languages */}
        <div className="w-full">
          <h2 className="text-lg md:text-xl font-bold mb-3">Programming Languages</h2>
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-2 bg-gray-800 px-2 py-1 md:px-3 md:py-2 rounded-lg hover:bg-gray-700 transition-colors">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="size-4 md:size-6" />
              <span className="text-xs font-medium">JavaScript</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-2 py-1 md:px-3 md:py-2 rounded-lg hover:bg-gray-700 transition-colors">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="size-4 md:size-6" />
              <span className="text-xs font-medium">TypeScript</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-2 py-1 md:px-3 md:py-2 rounded-lg hover:bg-gray-700 transition-colors">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" className="size-4 md:size-6" />
              <span className="text-xs font-medium">PHP</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-2 py-1 md:px-3 md:py-2 rounded-lg hover:bg-gray-700 transition-colors">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="size-4 md:size-6" />
              <span className="text-xs font-medium">Python</span>
            </div>
          </div>
        </div>

        {/* Frontend Technologies */}
        <div className="w-full">
          <h2 className="text-lg md:text-xl font-bold mb-3">Frontend Technologies</h2>
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-2 bg-gray-800 px-2 py-1 md:px-3 md:py-2 rounded-lg hover:bg-gray-700 transition-colors">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="size-4 md:size-6" />
              <span className="text-xs font-medium">HTML5</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-2 py-1 md:px-3 md:py-2 rounded-lg hover:bg-gray-700 transition-colors">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="size-4 md:size-6" />
              <span className="text-xs font-medium">CSS3</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-2 py-1 md:px-3 md:py-2 rounded-lg hover:bg-gray-700 transition-colors">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="size-4 md:size-6" />
              <span className="text-xs font-medium">React</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-2 py-1 md:px-3 md:py-2 rounded-lg hover:bg-gray-700 transition-colors">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="size-4 md:size-6" />
              <span className="text-xs font-medium">Next.js</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-2 py-1 md:px-3 md:py-2 rounded-lg hover:bg-gray-700 transition-colors">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Next.js" className="size-4 md:size-6" />
              <span className="text-xs font-medium">Tailwind</span>
            </div>
          </div>
        </div>

        {/* Backend & Frameworks */}
        <div className="w-full">
          <h2 className="text-lg md:text-xl font-bold mb-3">Backend & Frameworks</h2>
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-2 bg-gray-800 px-2 py-1 md:px-3 md:py-2 rounded-lg hover:bg-gray-700 transition-colors">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" alt="Laravel" className="size-4 md:size-6" />
              <span className="text-xs font-medium">Laravel</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-2 py-1 md:px-3 md:py-2 rounded-lg hover:bg-gray-700 transition-colors">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" className="size-4 md:size-6" />
              <span className="text-xs font-medium">Django</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-2 py-1 md:px-3 md:py-2 rounded-lg hover:bg-gray-700 transition-colors">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="size-4 md:size-6" />
              <span className="text-xs font-medium">Next.js</span>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Databases & ORM */}
        <div className="w-full">
          <h2 className="text-lg md:text-xl font-bold mb-3">Databases & ORM</h2>
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-2 bg-gray-800 px-2 py-1 md:px-3 md:py-2 rounded-lg hover:bg-gray-700 transition-colors">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="size-4 md:size-6" />
              <span className="text-xs font-medium">MySQL</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-2 py-1 md:px-3 md:py-2 rounded-lg hover:bg-gray-700 transition-colors">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="size-4 md:size-6" />
              <span className="text-xs font-medium">PostgreSQL</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-2 py-1 md:px-3 md:py-2 rounded-lg hover:bg-gray-700 transition-colors">
              <img src="https://www.prisma.io/images/favicon-32x32.png" alt="Prisma" className="size-4 md:size-6" />
              <span className="text-xs font-medium">Prisma</span>
            </div>
          </div>
        </div>

        {/* Tools & Deployment */}
        <div className="w-full">
          <h2 className="text-lg md:text-xl font-bold mb-3">Tools & Deployment</h2>
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-2 bg-gray-800 px-2 py-1 md:px-3 md:py-2 rounded-lg hover:bg-gray-700 transition-colors">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="size-4 md:size-6" />
              <span className="text-xs font-medium">Git</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-2 py-1 md:px-3 md:py-2 rounded-lg hover:bg-gray-700 transition-colors">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" alt="Digital Ocean" className="size-4 md:size-6" />
              <span className="text-xs font-medium">Digital Ocean</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-2 py-1 md:px-3 md:py-2 rounded-lg hover:bg-gray-700 transition-colors">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Digital Ocean" className="size-4 md:size-6" />
              <span className="text-xs font-medium">Postman</span>
            </div>
          </div>
        </div>

        {/* Empty third column for balance */}
        <div className="w-full"></div>
      </div>
    </div>
  )
}