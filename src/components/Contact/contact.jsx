import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full">
      <div className="bg-[url('http://mrtaba.ir/image/bg2.jpg')] h-80 bg-cover bg-left-top md:bg-center"></div>

      <div className="p-6 md:p-12">
        <h3 className="text-3xl font-bold mt-8 md:text-4xl">
          Getting in touch is easy!
        </h3>

        <p className="text-gray-600 text-lg mt-6 md:text-xl">
          Reach out to me on
          <a
            href="https://github.com/sesettikalyan"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-blue-600 hover:text-blue-800">
            <FaGithub className="inline-block text-2xl" />
          </a>
          ,
          <a
            href="https://www.instagram.com/your_instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-pink-600 hover:text-pink-800">
            <FaInstagram className="inline-block text-2xl" />
          </a>
          , or send me an email at
          <a
            href="mailto:sesettikalyan@gmail.com?Subject=Hello"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-blue-600 hover:text-blue-800">
            <FaEnvelope className="inline-block text-2xl" />
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Contact;
