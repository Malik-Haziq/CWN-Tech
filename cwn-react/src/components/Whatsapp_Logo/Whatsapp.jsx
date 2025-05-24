import { useState } from "react";
import WhatsappImg from "../../assets/images/Whatapp/whatsapp.jpeg";
import PhoneImg from "../../assets/images/Whatapp/phone.jpg";

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
      {/* WhatsApp Button */}
      <div className="fixed bottom-4 right-4 z-50">
        {" "}
        {/* Added z-index here */}
        <img
          src={WhatsappImg}
          alt="WhatsApp"
          className="w-16 rounded-full shadow-lg cursor-pointer transition-transform transform hover:scale-105"
          onClick={toggleChatbox}
        />
      </div>

      <div className="fixed bottom-4 left-4 z-50">
        <a href="tel://+923078875229">
          <img
            src={PhoneImg}
            alt="WhatsApp"
            className="w-12 rounded-full shadow-lg cursor-pointer transition-transform transform hover:scale-105"
          />
        </a>
      </div>

      {/* Chatbox Modal */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-4 w-80 bg-light-gray rounded-xl shadow-2xl animate-fadeIn z-50">
          {" "}
          {/* Added z-index here */}
          {/* Chatbox Header */}
          <div className="items-center justify-between mb-3 p-5 py-4 bg-main-dark rounded-t-xl">
            <div className="flex justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={WhatsappImg}
                  alt="WhatsApp logo"
                  className="w-10 h-22 rounded-full"
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
                className="bg-main-dark text-white p-1.5 px-4 rounded duration-200 hover:bg-main"
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
