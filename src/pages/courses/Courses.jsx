import Contact from "@components/contact/contact";
import Footer from "@components/footer/Footer";
import BookCall from "@components/book-call/BookCall";

export function Courses() {
  return (
    <main>
      {/* /////////////////////  YouTube Courses */}
      <section className="section mt-32 mb-32">
        <h2 className="h2 text-center mb-8">Learn from Our YouTube Channel</h2>
        <p className="text-sub-para text-center mb-16">
          Check out our latest video courses on various programming and software
          development topics on our YouTube channel.
        </p>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <Iframe videoSrc={"https://www.youtube.com/embed/yvV5UHYWtpk?si=6BTK8Ocy2bx11B1f"} title="Ruby on Rails Interview Series" />
          <Iframe videoSrc={"https://www.youtube.com/embed/videoseries?si=3f9rIrmdzO9hKr4S&amp;list=PL9WbyKqkuCAYT-IPvo5PxR_hijMuR1RCB"} title="Ruby on Rails Complete Course" />
          <Iframe videoSrc={"https://www.youtube.com/embed/videoseries?si=kFVbjPYFvZWk3LXi&amp;list=PL9WbyKqkuCAaRg4Z2_T-TSm7k2MZlCBKZ"} title="Ruby on Rails Tips" />
          <Iframe videoSrc={"https://www.youtube.com/embed/videoseries?si=kQaMvKKxXFNi4MHR&amp;list=PL9WbyKqkuCAY9qhsoZpdqq62ZrjY2y-2P"} title="HTML Complete Course" />
          <Iframe videoSrc={"https://www.youtube.com/embed/videoseries?si=w9VZ2hZ31UZ5Esr-&amp;list=PL9WbyKqkuCAaxrlsDs3y87Ckp0L6qQdIE"} title="CSS Complete Course" />
          <Iframe videoSrc={"https://www.youtube.com/embed/videoseries?si=Uax4XK7bogxeofWW&amp;list=PL9WbyKqkuCAajVIrT9lFBQduvh9P7tGSb"} title="JavaScript Complete Course" />
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-10">
          <a
            href="https://www.youtube.com/@CodeWithNaqvi"
            className="inline-block bg-blue-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore More on YouTube
          </a>
        </div>
      </section>

      {/* /////////////////////  Book a call */}
      <BookCall />

      {/* /////////////////////  Contact */}
      <Contact />

      {/* /////////////////  Footer */}
      <Footer />
    </main>
  );
}


function Iframe({videoSrc, title}){
  return <div className="relative w-full pb-[56.25%] h-0 overflow-hidden">
  <iframe
    className="absolute top-0 left-0 w-full h-full"
    src={videoSrc}
    title={title}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
  <a
    href={videoSrc}
    target="_blank"
    rel="noopener noreferrer"
    className="absolute inset-0 flex items-center justify-center bg-blue-600 bg-opacity-50 text-white font-bold hover:bg-blue-700 transition duration-300"
  >
   </a>
</div>
}