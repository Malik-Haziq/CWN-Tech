import Contact from "@components/contact/contact";
import Footer from "@components/footer/Footer";
import BookCall from "@components/book-call/BookCall";
import Whatsapp from "../../components/Whatsapp_Logo/Whatsapp";

import image1 from "../courses/sir.jpeg";
import image2 from "../courses/html.jpeg";
import image3 from "../courses/css.jpeg";
import image4 from "../courses/js.jpeg";
import image5 from "../courses/rails.jpeg";
import image6 from "../courses/ruby.jpeg";
import image7 from "../courses/c++.jpeg";

import Button from "@components/button/button";

export function Courses() {
  return (
    <main>
      {/* YouTube Courses Section */}
      <header>
        <div className="m-20 flex justify-between">
          <div className="mt-10">
            <h4 className="text-4xl font-semibold mb-3 text-slate-900">
              {" "}
              Learn & become the{" "}
            </h4>
            <span className=" text-4xl font-semibold text-main ">
              Top 1% software developer
            </span>
            <p className="text-stone-900 mt-2 mb-5 text-xl font-semibold">
              Delta Web Development
            </p>
            <Button
              text={"Ultimate Placement Solution"}
              styles=""
              href="#contact"
            />
          </div>

          <img src={image1} alt="" className="rounded-full max-w-xs" />
        </div>

        <div className="text-center bg-main pb-5">
          <h2 className="mb-5 text-white text-2xl font-semibold p-5">
            Pakistan&apos;s Most Loved Coding Community ❤️
          </h2>
          <div className="flex justify-center gap-24 text-white">
            <div>
              <h3 className="text-2xl">1,000,000+</h3>
              <p className="text-xl font-semibold">Happy Learners</p>
            </div>
            <div>
              <h3 className="text-2xl">10000+</h3>
              <p className="text-xl font-semibold">monthly views</p>
            </div>
            <div>
              <h3 className="text-2xl">10000+</h3>
              <p className="text-xl font-semibold"> monthly subscribers</p>
            </div>
          </div>
        </div>
        <div className="text-center m-10">
          <h2 className="text-main text-xl mb-4">New PLACEMENT PREP Batch🔥</h2>
          <h5 className="text-2xl font-semibold mb-4">
            Sigma 1.0 : Full Stack Development
          </h5>
          <p className="mb-7 text-xl font-light">
            Start your placement preparation today!
          </p>
          <a href="" className="bg-main p-3 text-white text-xl rounded ">
            Explore More
          </a>
        </div>
      </header>
      <section className="mb-10">
        <h2 className="text-center text-3xl m-5 font-semibold pt-14">
          Level up your web development skills
        </h2>
        <div className="flex gap-10 justify-center">
          <div className="max-w-sm bg-red  rounded-lg shadow-2xl">
            <a href="#">
              <img className="rounded-t-lg " src={image2} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h3 className="mb-2 text-2xl font-bold tracking-tight  ">
                  The Creative HTML 5 Course
                </h3>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                HTML (HyperText Markup Language) is the standard language used
                to structure and display web content.
              </p>
              <a
                href="https://www.youtube.com/watch?v=VZHA_JHhyTw&list=PL9WbyKqkuCAY9qhsoZpdqq62ZrjY2y-2P"
                target="_blank"
                className="test-color  inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-main rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                rel="noreferrer"
              >
                View Courses
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-red  rounded-lg shadow-2xl">
            <a href="#">
              <img className="rounded-t-lg" src={image3} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  The Creative CSS 3 Course
                </h3>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                CSS (Cascading Style Sheets) is used to style and layout web
                pages, controlling visual presentation.
              </p>
              <a
                href="https://www.youtube.com/watch?v=BhRekLm9k6E&list=PL9WbyKqkuCAaxrlsDs3y87Ckp0L6qQdIE"
                target="_blank"
                rel="noreferrer"
                className="test-color inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-main rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                View Courses
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-red  rounded-lg shadow-2xl">
            <a href="#">
              <img className="rounded-t-lg" src={image4} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h3 className="mb-2 text-2xl font-bold">
                  The Creative JS Course
                </h3>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                JavaScript is a versatile programming language used primarily
                for creating interactive and dynamic web content.
              </p>
              <a
                href="https://www.youtube.com/watch?v=oC2NQVvhzTk&list=PL9WbyKqkuCAajVIrT9lFBQduvh9P7tGSb"
                target="_blank"
                rel="noreferrer"
                className="test-color inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-main rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                View Courses
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-10 justify-center mt-10">
          <div className="max-w-sm bg-red  rounded-lg shadow-2xl">
            <a href="#">
              <img className="rounded-t-lg" src={image5} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  The Creative Ruby Course
                </h3>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Ruby is a dynamic, object-oriented programming language known
                for its simplicity, readability, and flexibility.
              </p>
              <a
                href="https://www.youtube.com/watch?v=XEd4mZHUHDo&list=PL9WbyKqkuCAaRg4Z2_T-TSm7k2MZlCBKZ"
                target="_blank"
                rel="noreferrer"
                className="test-color inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-main rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                View Courses
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-red  rounded-lg shadow-2xl">
            <a href="#">
              <img className="rounded-t-lg" src={image6} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  The Creative Rails Course
                </h3>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Ruby on Rails is a web development framework simplifying
                database-driven applications using Ruby language.
              </p>
              <a
                href="https://www.youtube.com/watch?v=bT0DP3i3tlw&list=PL9WbyKqkuCAYT-IPvo5PxR_hijMuR1RCB"
                target="_blank"
                rel="noreferrer"
                className="test-color inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-main rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                View Courses
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-red  rounded-lg shadow-2xl">
            <a href="#">
              <img className="rounded-t-lg" src={image7} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h3 className="mb-2 text-2xl font-bold">
                  The Creative C++ Course
                </h3>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                C++ is a high-performance, object-oriented programming language
                used for system software, games, and applications.
              </p>
              <a
                href="https://www.youtube.com/watch?v=O5WedYY4bnI&list=PL9WbyKqkuCAbuaSfkGOVxaKfWQe3OkFcm"
                target="_blank"
                rel="noreferrer"
                className="test-color inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-main rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                View Courses
              </a>
            </div>
          </div>
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

// function CourseCard({ videoSrc, title, description }) {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
//       {/* Video */}
//       <div className="relative w-full pb-[56.25%] h-0 mb-4">
//         <iframe
//           className="absolute top-0 left-0 w-full h-full rounded-t-lg"
//           src={videoSrc}
//           title={title}
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           allowFullScreen
//         ></iframe>
//       </div>

//       {/* Course Details */}
//       <div className="flex-grow">
//         <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
//         <p className="text-gray-600">{description}</p>
//       </div>

//       {/* Call to Action Button */}
//       <div className="mt-4">
//         <a
//           href={videoSrc}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block bg-main-shade hover:bg-main text-white font-medium py-2 px-4 rounded-lg shadow hover:bg-purple-700 transition duration-300"
//         >
//           Start Watching
//         </a>
//       </div>
//     </div>
//   );
// }
