function About() {
  return (
    <section id="about" className="min-h-screen bg-white text-gray-900 py-20 px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-700 text-center tracking-tight">
          About Me
        </h2>
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-8 mb-12 flex flex-col md:flex-row gap-8 items-center">
          <img
            src="/IMG_20231024_151436_383.jpg"
            alt="Ikhsan"
            className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-blue-200 shadow-lg grayscale"
          />
          <div>
            <p className="text-lg md:text-xl mb-3 font-medium">
              Hi, I am <span className="text-blue-600 font-bold">Mohammad Maulana Ikhsan</span>, a passionate Web Developer with a strong interest in building modern, responsive, and user-friendly web applications.
            </p>
            <p className="text-base md:text-lg text-gray-700">
              I enjoy learning new technologies, collaborating in teams, and always eager to take on new challenges in the world of technology.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-5 text-blue-600">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "TailwindCSS",
              "Node.js",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold shadow hover:bg-blue-200 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Pengalaman */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-5 text-blue-600">Experience</h3>
          <ul className="space-y-4">
            <li className="bg-blue-50 rounded-xl p-5 shadow flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <span className="font-bold text-blue-700">Web Developer Intern</span> – PT. Teknologi Digital (2023)
                <br />
                <span className="text-gray-700">
                  Developed and maintained company website, collaborated with UI/UX team, and improved website performance.
                </span>
              </div>
            </li>
            <li className="bg-blue-50 rounded-xl p-5 shadow flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <span className="font-bold text-blue-700">Freelance Web Developer</span> (2022 - Present)
                <br />
                <span className="text-gray-700">
                  Built several landing pages and company profiles for local businesses using React and TailwindCSS.
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* Sertifikat */}
        <div>
          <h3 className="text-2xl font-semibold mb-5 text-blue-600">Certificates</h3>
          <ul className="space-y-4">
            <li className="bg-blue-50 rounded-xl p-5 shadow flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="font-bold text-blue-700">Dicoding - Front-End Web Developer</span>
                <br />
                <span className="text-gray-700">Issued: 2023</span>
              </div>
              <a
                href="https://www.dicoding.com/certificates/XXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 sm:mt-0 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition"
              >
                View Certificate
              </a>
            </li>
            <li className="bg-blue-50 rounded-xl p-5 shadow flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="font-bold text-blue-700">FreeCodeCamp - Responsive Web Design</span>
                <br />
                <span className="text-gray-700">Issued: 2022</span>
              </div>
              <a
                href="https://freecodecamp.org/certification/XXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 sm:mt-0 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition"
              >
                View Certificate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;