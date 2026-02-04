import React from "react";

export default function SplitAboutPage() {
  return (
    <div className="w-screen h-screen flex">
      
      {/* LEFT SIDE — IMAGE */}
      <div id="about-image" className="w-1/2 h-full">
        <img
          src="/image.jpg"   // replace with your image
          alt="Professional Headshot"
          className="w-16 h-16 object-cover"
        />
      </div>

      {/* RIGHT SIDE — DESCRIPTION */}
      <div className="w-1/2 h-full flex items-center justify-center bg-white px-16">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-6">
            About Me
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I am an Information Technology undergraduate at SLIIT with hands-on experience in full-stack web and mobile application development. I specialize in MERN stack development and have built multiple academic and personal projects using React, Node.js, Java, Kotlin, and MySQL/MongoDB.

I enjoy designing and developing user-focused applications, from responsive web interfaces to backend systems and Android apps. Through my projects, I have gained practical experience in REST APIs, database design, authentication systems, and MVC architecture.

I am currently seeking internship opportunities in Web Development, Software Engineering, or QA Engineering where I can contribute my technical skills, continue learning, and build real-world industry experience.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            I enjoy designing clean interfaces and developing backend logic,
            and I am currently seeking internship opportunities in software
            and web development to grow my industry experience.
          </p>
        </div>
      </div>

    </div>
  );
}
