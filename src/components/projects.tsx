import dialogflow from '../assets/Dialogflow.png';

export default function Projects() {
  return (
    <div id='projects' className="flex gap-9 flex-col w-full  min-h-[500px] mt-4">
        <div className="h-[3px] rounded-sm w-full my-4 bg-white"></div>
        <h1 className="text-center text-4xl font-extrabold">Projects</h1>

        <div className="w-full border-2 p-6 rounded-md hover:shadow-lg transition-shadow duration-300">
            <h1 className="text-3xl font-extrabold mb-2">SCYM - Santa Cruz Youth Ministry Information System <span className='text-sm '>(capstone project)</span></h1>
            <div className="h-[3px] rounded-sm w-full my-4 bg-white"></div>
            
            <p className="font-extralight text-justify mb-4 leading-relaxed">
                A comprehensive information system for managing Catholic youth organization members across barangays under one ministry. 
                Features include member management, event organization, QR code-based attendance monitoring, blog system for articles, 
                and automated email notifications for announcements. Built as my college capstone project.
            </p>
            
            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                <ul className="text-sm font-light list-disc list-inside space-y-1 ml-4">
                    <li>Member registration and management system</li>
                    <li>QR code generation and attendance tracking</li>
                    <li>Event management and monitoring</li>
                    <li>AI-powered chatbot for user assistance</li>
                    <li>Blog system for articles</li>
                    <li>Automated email notification system</li>
                </ul>
            </div>
            
            <div>
                <h3 className="text-lg font-semibold mb-3">Technologies Used:</h3>
                <div className="flex flex-wrap gap-3 items-center">
                    <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-md">
                        <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"} alt="Next.js" className="w-6 h-6" />
                        <span className="text-sm">Next.js</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-md">
                        <img src="https://www.prisma.io/images/favicon-32x32.png" alt="Prisma" className="w-6 h-6" />
                        <span className="text-sm">Prisma</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-md">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-6 h-6" />
                        <span className="text-sm">MySQL</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-md">
                        <img src={dialogflow} alt="Dialogflow" className="w-6 h-6 rounded" />
                        <span className="text-sm">Dialogflow</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-md">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-6 h-6" />
                        <span className="text-sm">Nodemailer</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full border-2 p-6 rounded-md hover:shadow-lg transition-shadow duration-300">
            <h1 className="text-3xl font-extrabold mb-2">FATE - Gender-Based Violence Complaints Management System</h1>
            <div className="h-[3px] rounded-sm w-full my-4 bg-white"></div>
            
            <p className="font-extralight text-justify mb-4 leading-relaxed">
                A sensitive complaints management system developed during my OJT at the Gender and Development office. 
                FATE provides a safe, confidential platform for students to report gender-based violence incidents like sexual harassment. 
                The system serves as a crucial pre-step to formal complaint processes, addressing the challenge where students 
                may feel shy or afraid to report incidents directly.
            </p>
            
            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                <ul className="text-sm font-light list-disc list-inside space-y-1 ml-4">
                    <li>Secure user registration and authentication</li>
                    <li>Anonymous complaint submission system</li>
                    <li>Office review and approval workflow</li>
                    <li>Case status tracking and management</li>
                    <li>Confidential communication channels</li>
                    <li>Bridge to formal legal processes</li>
                </ul>
            </div>
            
            <div>
                <h3 className="text-lg font-semibold mb-3">Technologies Used:</h3>
                <div className="flex flex-wrap gap-3 items-center">
                    <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-md">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" alt="Laravel" className="w-6 h-6" />
                        <span className="text-sm">Laravel</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-md">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-6 h-6" />
                        <span className="text-sm">PostgreSQL</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-md">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/alpinejs/alpinejs-original.svg" alt="Alpine.js" className="w-6 h-6" />
                        <span className="text-sm">Alpine.js</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}