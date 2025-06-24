import TiltedCard from "../components/TiltedCard";

function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-center py-12">
          Welcome to My Portfolio
        </h1>
        <p className="text-center text-lg text-gray-700">
          Explore my projects and skills.
        </p>
        <div className="max-w-4xl mx-auto px-4">
          <TiltedCard
            imageSrc="/IMG_20231024_151436_383.jpg"
            altText="Mohammad Maulana Ikhsan"
            captionText="Mohammad Maulana Ikhsan"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text bg-zinc-600 rounded-2xl p-2">Mohammad Maulana Ikhsan</p>
            }
          />
        </div>
      </div>
    </>
  );
}
export default Home;
