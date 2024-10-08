import banner from "../../assets/banner.jpeg";

const Banner = () => {
  return (
    <div
      className="w-full h-[50vh] bg-center bg-cover object-cover bg-no-repeat flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg)",
        backgroundColor: "#000",
      }}>
      <h1 className="text-white text-5xl font-bold">Kalyan's</h1>
      <p className="text-black bg-white px-4 py-2 mt-4 text-base font-medium">
        Blog Management System
      </p>
    </div>
  );
};

export default Banner;
