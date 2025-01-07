import Contact from "@components/contact/contact";
import Footer from "@components/footer/Footer";
import BookCall from "@components/book-call/BookCall";
import Whatsapp from "../../components/Whatsapp_Logo/Whatsapp";


export function Courses() {
  return (
    <main>

      
      {/* YouTube Courses Section */}
      <section className="section mt-32 mb-32">
        <h1 className=" h1 mb-8">Learn from Our YouTube Channel</h1>
        <p className="text-sub-para mb-16">
          Check out our latest video courses on various programming and software
          development topics on our YouTube channel.
        </p>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <CourseCard
            videoSrc="https://www.youtube.com/embed/yvV5UHYWtpk?si=6BTK8Ocy2bx11B1f"
            title="Ruby on Rails Interview Series"
            description="Free Course - Learn everything you need to crack Ruby on Rails interviews."
          />
          <CourseCard
            videoSrc="https://www.youtube.com/embed/videoseries?si=3f9rIrmdzO9hKr4S&amp;list=PL9WbyKqkuCAYT-IPvo5PxR_hijMuR1RCB"
            title="Ruby on Rails Complete Course"
            description="Free Course - A comprehensive guide to mastering Ruby on Rails from scratch."
          />
          <CourseCard
            videoSrc="https://www.youtube.com/embed/videoseries?si=kFVbjPYFvZWk3LXi&amp;list=PL9WbyKqkuCAaRg4Z2_T-TSm7k2MZlCBKZ"
            title="Ruby on Rails Tips"
            description="Quick Tips - Improve your Ruby on Rails skills with these practical tips."
          />
          <CourseCard
            videoSrc="https://www.youtube.com/embed/videoseries?si=kQaMvKKxXFNi4MHR&amp;list=PL9WbyKqkuCAY9qhsoZpdqq62ZrjY2y-2P"
            title="HTML Complete Course"
            description="Free Course - Master HTML for building responsive websites."
          />
          <CourseCard
            videoSrc="https://www.youtube.com/embed/videoseries?si=w9VZ2hZ31UZ5Esr-&amp;list=PL9WbyKqkuCAaxrlsDs3y87Ckp0L6qQdIE"
            title="CSS Complete Course"
            description="Free Course - Learn CSS to create beautifully styled web pages."
          />
          <CourseCard
            videoSrc="https://www.youtube.com/embed/videoseries?si=Uax4XK7bogxeofWW&amp;list=PL9WbyKqkuCAajVIrT9lFBQduvh9P7tGSb"
            title="JavaScript Complete Course"
            description="Free Course - Become a JavaScript pro with this detailed course."
          />
        </div>
      </section>
      <Whatsapp />


      {/* Book a call */}
      <BookCall />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}

function CourseCard({ videoSrc, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
      {/* Video */}
      <div className="relative w-full pb-[56.25%] h-0 mb-4">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-t-lg"
          src={videoSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      {/* Course Details */}
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Call to Action Button */}
      <div className="mt-4">
        <a
          href={videoSrc}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-main-shade hover:bg-main text-white font-medium py-2 px-4 rounded-lg shadow hover:bg-purple-700 transition duration-300"
        >
          Start Watching
        </a>
      </div>
    </div>
  );
}

