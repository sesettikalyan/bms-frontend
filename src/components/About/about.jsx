import { FaGithub, FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full">
      <div
        className="bg-contain bg-center h-64 sm:h-80 md:h-96"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/digital-tablet-photography-design-studio-editing-concept_53876-146880.jpg?t=st=1728407321~exp=1728410921~hmac=615c8287141b3f4a9c2ec5aa4de39d3f5db015099c77aeab8da17a3e06f53558&w=996)",
        }}></div>

      <div className="p-5 md:p-10">
        {/* Title */}
        <h3 className="text-3xl font-semibold mt-10 md:mt-12 text-blue-800">
          About Me
        </h3>

        {/* Introduction */}
        <p className="text-gray-700 text-lg mt-5 md:mt-10 leading-relaxed">
          Hello! My name is{" "}
          <span className="font-bold text-blue-700">Kalyan Sesetti</span>, and I
          am an undergraduate student pursuing my 2nd year in Electronics and
          Communication Engineering. I have a strong passion for technology,
          particularly in the areas of{" "}
          <span className="font-semibold">
            MongoDB, React, Express.js, Node.js, React Native, C,
          </span>{" "}
          and <span className="font-semibold">C++</span>. I’m also deeply
          interested in AI and Machine Learning.
        </p>

        {/* AI Chatbot Section */}
        <div className="mt-8">
          <h4 className="text-2xl font-medium text-blue-800">AI Chatbot</h4>
          <p className="text-gray-600 mt-2">
            Recently, I developed an AI chatbot that can engage users in
            intelligent conversations and provide answers based on natural
            language processing. You can interact with the chatbot below:
          </p>
          {/* Embed the chatbot here, either via an iframe or a component */}
          <div className="mt-6">
            {/* Example of embedding an iframe chatbot */}
            <iframe
              src="https://a-ichat-bot.vercel.app/" // Add the link to your chatbot here
              title="AI Chatbot"
              className="w-full h-[50vh] md:h-[70vh] border border-gray-300 rounded-lg"></iframe>
          </div>
        </div>

        {/* Project Links */}
        <div className="mt-8">
          <h4 className="text-2xl font-medium text-blue-800">
            Projects and GitHub
          </h4>
          <p className="text-gray-600 mt-2">
            Check out some of my projects on GitHub:
          </p>
          <div className="flex mt-4 space-x-4">
            <a
              href="https://github.com/sesettikalyan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-500">
              <FaGithub size={36} />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8">
          <h4 className="text-2xl font-medium text-blue-800">
            Connect with Me
          </h4>
          <p className="text-gray-600 mt-2">
            Feel free to connect with me on LinkedIn or send me an email:
          </p>
          <div className="flex mt-4 space-x-4">
            <a
              href="https://www.linkedin.com/in/kalyan-sesetti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-500">
              <FaLinkedin size={36} />
            </a>
            <a
              href="https://www.instagram.com/sesettikalyan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400">
              <FaInstagram size={36} />
            </a>
            <a
              href="mailto:sesettikalyan@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-500">
              <FaEnvelope size={36} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
