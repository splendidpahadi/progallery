import { FaFacebookF, FaLinkedinIn, FaGithub, FaBehance, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Contact Section */}
      <section className="contact-area py-16 border-b border-gray-700 bg-[#1A1E25] text-[#868c96]" id="contact">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="text-center max-w-lg">
              <a href="#">
                <img
                  src="https://i.ibb.co/QDy827D/ak-logo.png"
                  alt="logo"
                  className="mx-auto max-w-[210px]"
                />
              </a>
              <p className="text-sm mt-6 mb-12 relative after:absolute after:bg-gray-700 after:h-px after:w-4/5 after:left-1/2 after:-translate-x-1/2 after:bottom-[-30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
              </p>
              <h6 className="text-sm text-gray-400">1120 Lorem ipsum dolor sit amet, KC 179050, Chandigarh.</h6>
              <h6 className="text-sm text-gray-400 mt-2">
                +01 2345 6789 12 <span className="text-gray-700 mx-2">|</span> +01 2345 6789 12
              </h6>
              <div className="contact-social mt-6">
                <ul className="flex justify-center space-x-4">
                  <li>
                    <a className="border border-gray-400 text-gray-400 flex items-center justify-center w-10 h-10 transition-all hover:border-yellow-500 hover:text-yellow-500" href="#">
                      <FaFacebookF size={18} />
                    </a>
                  </li>
                  <li>
                    <a className="border border-gray-400 text-gray-400 flex items-center justify-center w-10 h-10 transition-all hover:border-yellow-500 hover:text-yellow-500" href="#">
                      <FaLinkedinIn size={18} />
                    </a>
                  </li>
                  <li>
                    <a className="border border-gray-400 text-gray-400 flex items-center justify-center w-10 h-10 transition-all hover:border-yellow-500 hover:text-yellow-500" href="#">
                      <FaGithub size={18} />
                    </a>
                  </li>
                  <li>
                    <a className="border border-gray-400 text-gray-400 flex items-center justify-center w-10 h-10 transition-all hover:border-yellow-500 hover:text-yellow-500" href="#">
                      <FaBehance size={18} />
                    </a>
                  </li>
                  <li>
                    <a className="border border-gray-400 text-gray-400 flex items-center justify-center w-10 h-10 transition-all hover:border-yellow-500 hover:text-yellow-500" href="#">
                      <FaPinterestP size={18} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1E25] text-[#868c96] text-center py-10">
        <p>
          Copyright &copy; 2019{" "}
          <img
            src="#"
            alt="logo"
            className="inline-block w-11 mx-1"
          />{" "}
          All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
