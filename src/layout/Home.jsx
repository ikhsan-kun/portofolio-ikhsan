import TiltedCard from "../components/TiltedCard";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex flex-col justify-center items-center px-4 pt-24"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl py-12">
        {/* Card/Profile */}
        <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
          <div className="w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] md:w-[320px] md:h-[320px]">
            <TiltedCard
              imageSrc="/IMG_20231024_151436_383.jpg"
              altText="Mohammad Maulana Ikhsan"
              captionText="Mohammad Maulana Ikhsan"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="bg-black/60 text-white rounded-xl px-4 py-2 text-center font-semibold text-lg">
                  Mohammad Maulana Ikhsan
                </p>
              }
            />
          </div>
        </div>
        {/* Intro */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Hi, I am <span className="text-blue-700">Ikhsan</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            I am a passionate{" "}
            <span className="font-semibold text-blue-600">Web Developer</span> who
            loves building beautiful and functional websites. Explore my projects
            and skills below!
          </p>
          <div className="flex flex-row gap-4 justify-center md:justify-start mt-6">
            <a
              href="https://github.com/ikhsan-username"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold shadow hover:bg-gray-800 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ikhsan-username"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
