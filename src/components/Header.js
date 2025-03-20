const Banner = () => {
    return (
      <div className="relative bg-gray-100 py-16">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                Scale design &amp; dev operations with Avocode Enterprise
              </h1>
              <p className="mt-6 text-gray-600">
                A fully integrated suite of authentication &amp; authorization products, 
                Stytch’s platform removes the headache of.
              </p>
              <a
                href="#"
                className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md mt-8 hover:bg-gray-200 transition"
              >
                Download The Theme
              </a>
            </div>
  
            {/* Right Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="/images/banner-img.png"
                width={603}
                height={396}
                alt="Banner"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  