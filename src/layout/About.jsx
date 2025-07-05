function About() {
  return (
    <section id="about" className="min-h-screen bg-neutral-900 text-white py-20 px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#b2c2e2] text-center tracking-tight">
          About Me
        </h2>
        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#232946] rounded-2xl shadow-xl p-8 mb-12 flex flex-col md:flex-row gap-8 items-center border-2 border-[#3b4252]">
          <img
            src="/IMG_20231024_151436_383.jpg"
            alt="Ikhsan"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#b2c2e2] shadow-none grayscale-0"
          />
          <div>
            <p className="text-lg md:text-xl mb-3 font-medium text-white">
              Hi, I am <span className="text-[#8ca0c6] font-bold">Mohammad Maulana Ikhsan</span>, a passionate Web Developer with a strong interest in building modern, responsive, and user-friendly web applications.
            </p>
            <p className="text-base md:text-lg text-[#b2c2e2]">
              I enjoy learning new technologies, collaborating in teams, and always eager to take on new challenges in the world of technology.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-5 text-[#b2c2e2]">Skills</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 justify-items-center">
            {/* Contoh logo, ganti src sesuai kebutuhan */}
            <div className="flex flex-col items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-12 h-12 mb-2" />
              <span className="text-[#8ca0c6] text-sm font-semibold">HTML</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-12 h-12 mb-2" />
              <span className="text-[#8ca0c6] text-sm font-semibold">CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12 mb-2" />
              <span className="text-[#8ca0c6] text-sm font-semibold">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12 mb-2" />
              <span className="text-[#8ca0c6] text-sm font-semibold">React</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="TailwindCSS" className="w-12 h-12 mb-2" />
              <span className="text-[#8ca0c6] text-sm font-semibold">TailwindCSS</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-12 h-12 mb-2" />
              <span className="text-[#8ca0c6] text-sm font-semibold">Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-12 h-12 mb-2" />
              <span className="text-[#8ca0c6] text-sm font-semibold">Git</span>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-5 text-[#b2c2e2]">Projects</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Project 1 */}
            <div className="bg-[#232946] rounded-xl border border-[#3b4252] p-5 flex flex-col h-full">
              <img
                src="/project-portfolio.png"
                alt="Personal Portfolio"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="font-bold text-[#8ca0c6] mb-2">Personal Portfolio</h4>
              <p className="text-[#b2c2e2] mb-3 flex-1">
                Website portofolio pribadi yang menampilkan profil, projek, dan sertifikat. Dibangun dengan React dan TailwindCSS.
              </p>
              <a
                href="https://github.com/ikhsan-username/portofolio-ikhsan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto px-4 py-2 bg-[#b2c2e2] text-[#232946] rounded-lg font-semibold border border-[#3b4252] hover:bg-[#8ca0c6] hover:text-white transition"
              >
                View Project
              </a>
            </div>
            {/* Project 2 */}
            <div className="bg-[#232946] rounded-xl border border-[#3b4252] p-5 flex flex-col h-full">
              <img
                src="/project-company-profile.png"
                alt="Company Profile"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="font-bold text-[#8ca0c6] mb-2">Company Profile Landing Page</h4>
              <p className="text-[#b2c2e2] mb-3 flex-1">
                Landing page untuk perusahaan lokal, responsif dan modern, menggunakan React dan TailwindCSS.
              </p>
              <a
                href="https://github.com/ikhsan-username/company-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto px-4 py-2 bg-[#b2c2e2] text-[#232946] rounded-lg font-semibold border border-[#3b4252] hover:bg-[#8ca0c6] hover:text-white transition"
              >
                View Project
              </a>
            </div>
            {/* Tambahkan project lain di sini */}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-5 text-[#b2c2e2]">Experience</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="bg-[#232946] rounded-xl border border-[#3b4252] p-5 flex flex-col h-full">
              <div className="flex items-center mb-3">
                <img src="/exp-intern.png" alt="Intern" className="w-12 h-12 rounded-full mr-3 object-cover" />
                <span className="font-bold text-[#8ca0c6]">Web Developer Intern</span>
              </div>
              <span className="text-[#b2c2e2] mb-2">PT. Teknologi Digital (2023)</span>
              <span className="text-[#b2c2e2]">
                Developed and maintained company website, collaborated with UI/UX team, and improved website performance.
              </span>
            </div>
            <div className="bg-[#232946] rounded-xl border border-[#3b4252] p-5 flex flex-col h-full">
              <div className="flex items-center mb-3">
                <img src="/exp-freelance.png" alt="Freelance" className="w-12 h-12 rounded-full mr-3 object-cover" />
                <span className="font-bold text-[#8ca0c6]">Freelance Web Developer</span>
              </div>
              <span className="text-[#b2c2e2] mb-2">(2022 - Present)</span>
              <span className="text-[#b2c2e2]">
                Built several landing pages and company profiles for local businesses using React and TailwindCSS.
              </span>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div>
          <h3 className="text-2xl font-semibold mb-5 text-[#b2c2e2]">Certificates</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="bg-[#232946] rounded-xl border border-[#3b4252] p-5 flex flex-col h-full">
              <div className="flex items-center mb-3">
                <img src="/cert-dicoding.png" alt="Dicoding" className="w-12 h-12 rounded mr-3 object-cover" />
                <span className="font-bold text-[#8ca0c6]">Dicoding - Front-End Web Developer</span>
              </div>
              <span className="text-[#b2c2e2] mb-2">Issued: 2023</span>
              <a
                href="https://www.dicoding.com/certificates/XXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-[#b2c2e2] text-[#232946] rounded-lg font-semibold border border-[#3b4252] hover:bg-[#8ca0c6] hover:text-white transition"
              >
                View Certificate
              </a>
            </div>
            <div className="bg-[#232946] rounded-xl border border-[#3b4252] p-5 flex flex-col h-full">
              <div className="flex items-center mb-3">
                <img src="/cert-freecodecamp.png" alt="FreeCodeCamp" className="w-12 h-12 rounded mr-3 object-cover" />
                <span className="font-bold text-[#8ca0c6]">FreeCodeCamp - Responsive Web Design</span>
              </div>
              <span className="text-[#b2c2e2] mb-2">Issued: 2022</span>
              <a
                href="https://freecodecamp.org/certification/XXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-[#b2c2e2] text-[#232946] rounded-lg font-semibold border border-[#3b4252] hover:bg-[#8ca0c6] hover:text-white transition"
              >
                View Certificate
              </a>
            </div>
            {/* Tambahkan sertifikat lain di sini */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;