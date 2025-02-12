/* eslint-disable react/prop-types */

import Contact from "@components/contact/contact";
import Footer from "@components/footer/Footer";
import Whatsapp from "../../components/Whatsapp_Logo/Whatsapp";
import Header from "../../components/header/Header";

import courseHeaderImg from "../../assets/images/courses/sir.jpeg";
import htmlThumbnail from "../../assets/images/courses/html.jpeg";
import cssThumbnail from "../../assets/images/courses/css.jpeg";
import jsThumbnail from "../../assets/images/courses/js.jpeg";
import railsThumbnail from "../../assets/images/courses/rails.jpeg";
import rubyThumbnail from "../../assets/images/courses/ruby.jpeg";
import cppThumbnail from "../../assets/images/courses/c++.jpeg";

export function Courses() {
  return (
    <main>
      <Header
        heading="Learn & become the Top 1% software developer"
        text="We have the best professors who teach web development to beginners, And help them to become high level developer and to dominate the market."
        buttonText="Become Developer"
        buttonHref="#contact"
        img={courseHeaderImg}
        imgAlt="Course Header Image of Professor Toqeer Abbas"
      />

      <section className="section bg-main-shade mb-32">
        <div className="flex flex-col gap-3 items-center py-14">
          <h2 className="mb-5 text-white text-center text-2xl font-semibold font-poppins">
            Pakistan&apos;s Most Loved Coding Community ❤️
          </h2>
          <div className="grid xm:grid-cols-3 gap-12 xm:gap-24 text-center text-light leading-7 mb-4">
            <div>
              <h3 className="text-2xl">10,000+</h3>
              <p className="text-xl font-semibold">Happy Learners</p>
            </div>
            <div>
              <h3 className="text-2xl">10000+</h3>
              <p className="text-xl font-semibold">Monthly Views</p>
            </div>
            <div>
              <h3 className="text-2xl">1000+</h3>
              <p className="text-xl font-semibold">Monthly Subscribers</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section mb-32">
        <h2 className="h2">Level up your web development skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <CourseCard
            thumbnail={htmlThumbnail}
            thumbnailAlt={"HTML Video Thumbnail"}
            link={
              "https://www.youtube.com/watch?v=VZHA_JHhyTw&list=PL9WbyKqkuCAY9qhsoZpdqq62ZrjY2y-2P"
            }
            title={"The Creative HTML 5 Course"}
            description={
              "HTML (HyperText Markup Language) is the standard language used to structure and display web content."
            }
          />
          <CourseCard
            thumbnail={cssThumbnail}
            thumbnailAlt={"CSS Video Thumbnail"}
            link={
              "https://www.youtube.com/watch?v=BhRekLm9k6E&list=PL9WbyKqkuCAaxrlsDs3y87Ckp0L6qQdI"
            }
            title={"The Creative CSS Course"}
            description={
              "CSS (Cascading Style Sheets) is used to style and layout web pages, controlling visual presentation."
            }
          />
          <CourseCard
            thumbnail={jsThumbnail}
            thumbnailAlt={"Javascript Video Thumbnail"}
            link={
              "https://www.youtube.com/watch?v=oC2NQVvhzTk&list=PL9WbyKqkuCAajVIrT9lFBQduvh9P7tGSb"
            }
            title={"The Creative CSS Course"}
            description={
              "JavaScript is a versatile programming language used primarily for creating interactive and dynamic web content."
            }
          />
          <CourseCard
            thumbnail={rubyThumbnail}
            thumbnailAlt={"Ruby Video Thumbnail"}
            link={
              "https://www.youtube.com/watch?v=XEd4mZHUHDo&list=PL9WbyKqkuCAaRg4Z2_T-TSm7k2MZlCBKZ"
            }
            title={"The Creative Ruby Course"}
            description={
              "Ruby is a dynamic, object-oriented programming language known for its simplicity, readability, and flexibility."
            }
          />
          <CourseCard
            thumbnail={railsThumbnail}
            thumbnailAlt={"Rails Video Thumbnail"}
            link={
              "https://www.youtube.com/watch?v=bT0DP3i3tlw&list=PL9WbyKqkuCAYT-IPvo5PxR_hijMuR1RCB"
            }
            title={"The Creative Rails Course"}
            description={
              "Ruby on Rails is a web development framework simplifying database-driven applications using Ruby language."
            }
          />
          <CourseCard
            thumbnail={cppThumbnail}
            thumbnailAlt={"C++ Video Thumbnail"}
            link={
              "https://www.youtube.com/watch?v=O5WedYY4bnI&list=PL9WbyKqkuCAbuaSfkGOVxaKfWQe3OkFcm"
            }
            title={"The Creative C++ Course"}
            description={
              "C++ is a high-performance, object-oriented programming language used for system software, games, and applications."
            }
          />
        </div>
      </section>

      <Whatsapp />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}

function CourseCard({ thumbnail, thumbnailAlt, title, description, link }) {
  return (
    <div className="rounded-xl shadow-xl">
      <a href={link}>
        <img className="rounded-t-xl" src={thumbnail} alt={thumbnailAlt} />
      </a>
      <div className="px-5 py-10">
        <h3 className="mb-4 text-2xl font-semibold text-sub-heading   ">
          {title}
        </h3>
        <p className="mb-8 text-para">{description}</p>
        <a
          href={link}
          target="_blank"
          className="px-5 py-3 text-white text-lg font-semibold bg-main rounded-lg"
          rel="noreferrer"
        >
          View Courses
        </a>
      </div>
    </div>
  );
}
