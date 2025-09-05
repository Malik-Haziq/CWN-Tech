import { useState } from "react";
import WhatsappImg from "@images/Whatapp/whatsapp.jpeg";


export default function Whatsapp() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");

  const toggleChatbox = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message);
      window.open(
        `https://wa.me/+923078875229?text=${encodedMessage}`,
        "_blank"
      );
      setMessage(""); // Clear the input after sending
    }
  };

  return (
    <>
      {/* WhatsApp Floating Button (original logo image) */}
      <button
        aria-label="Chat on WhatsApp"
        onClick={toggleChatbox}
        className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 bg-white shadow-3xl active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-white/40"
      >
        <img
          src={WhatsappImg}
          alt="WhatsApp"
          className="w-full h-full object-contain p-2 rounded-full"
        />
      </button>

      {/* Phone Floating Button */}
      <a
        href="tel://+923078875229"
        aria-label="Call us"
        className="fixed bottom-6 left-6 z-50 rounded-full w-12 h-12 bg-main text-white flex items-center justify-center shadow-3xl hover:scale-105 active:scale-95 transition-transform focus:outline-none focus:ring-4 focus:ring-white/40"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-current"
        >
          <path d="M6.62 10.79a15.07 15.07 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.11.37 2.3.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.86 22 2 13.14 2 2.99a1 1 0 011-1H6.5a1 1 0 011 1c0 1.28.2 2.47.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
        </svg>
      </a>

      {/* Chatbox Modal */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white border border-light-gray rounded-2xl shadow-3xl animate-fade z-50">
          {" "}
          {/* Added z-index here */}
          {/* Chatbox Header */}
          <div className="items-center justify-between mb-3 p-5 py-4 bg-main-dark rounded-t-2xl">
            <div className="flex justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={WhatsappImg}
                  alt="WhatsApp logo"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-md text-white mb-1">
                    Code With Naqvi
                  </p>
                  <p className="text-secondary text-xs">
                    Typically replies within an hour
                  </p>
                </div>
              </div>
              <div>
                <button
                  onClick={toggleChatbox}
                  className="text-secondary text-3xl hover:text-gray-300"
                >
                  &times;
                </button>
              </div>
            </div>
          </div>
          <div className="p-4">
            {/* Chatbox Body */}
            <div className="text-sub-para text-sm mb-4 py-2">
              Hi there 👋
              <br />
              How can we help you?
            </div>
            {/* Message Input */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow text-sm p-2 w-44 border border-sub focus:border-sub-para outline-none rounded text-sub-para"
              />
              <button
                onClick={handleSendMessage}
                className="bg-main text-white p-2 px-5 rounded-lg duration-200 hover:bg-main-shade"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
