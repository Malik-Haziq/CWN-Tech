import logo from "@icons/logo.svg";
import mail from "@icons/mail.svg";
import phone from "@icons/phone.svg";
import linkedin from "@icons/social-media/linkedin.svg";
import facebook from "@icons/social-media/facebook.svg";
import youtube from "@icons/social-media/youtube.svg";
import instagram from "@icons/social-media/instagram.svg";
import x from "@icons/social-media/twitter.svg";

export default function Footer() {
  return (
    <footer className="section">
      <div className="py-10 flex flex-col xm:flex-row xm:items-center justify-between gap-10 border-b-[1px] border-sub">
        <div>
          <img src={logo} alt="cwn logo" />
          <p className="text-sub-para">
            4 Mann Island, Merseyside, Liverpool, England L3 1BP, United Kingdom
          </p>
        </div>
        <div>
          <ul className="flex flex-col items-start gap-2 text-sub-para">
            <li className="font-medium mb-2 text-sub-heading">Contact info</li>
            <li>
              <a
                href="mailto:info@codewithnaqvi.com"
                className="flex gap-2 items-center justify-center hover:text-para"
              >
                <img src={mail} alt="mail icon" className="w-5" />
                <span className="hover:text-inherit duration-200">
                  contact@codewithnaqvi.com
                </span>
              </a>
            </li>
            <li>
              <a className="flex gap-1 items-center justify-center">
                <img src={phone} alt="phone icon" className="w-4" />
                +92 3078875229
              </a>
            </li>
            <li>
              <a className="flex gap-1 items-center justify-center">
                <img src={phone} alt="phone icon" className="w-4" />
                +92 3054388079
              </a>
            </li>
          </ul>
        </div>
      </div>
      <section className="py-4 text-para flex flex-col xm:flex-row justify-between gap-4 items-center">
        <span className="text-sm">&copy; Copyright. All Rights Reserved.</span>
        <ul className="flex items-center gap-6">
          <li>
            <a href="https://www.linkedin.com/company/code-with-naqvi/" target="_blank">
              <img src={linkedin} alt="linkedin icon" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@CodeWithNaqvi" target="_blank">
              <img src={youtube} alt="youtube icon" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/codewithnaqvi/" target="_blank">
              <img src={instagram} alt="instagram icon" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/codewithnaqvi" target="_blank">
              <img src={facebook} alt="facebook icon" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img src={x} alt="x icon" />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
