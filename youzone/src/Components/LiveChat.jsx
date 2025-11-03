import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/ChatSlice";
import { getRandomName, getRandomMessage } from "../Utils/Helper";
import { useAutoScrollPause } from "../CustomHooks/useAutoscroll";

const LiveChat = () => {
  const [livemessage, setLivemessage] = useState("");
  const dispatch = useDispatch();
  const chatmessage = useSelector((store) => store.chat.messages);
  const userName = useSelector((state) => state.user.name);

  // Add random messages every 5 seconds
  useEffect(() => {
    // API polling
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: getRandomName(),
          message: getRandomMessage(),
        })
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // custom hook
  const { ref: chatContainerRef, handleScroll } =
    useAutoScrollPause(chatmessage);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!livemessage.trim()) return;
    dispatch(
      addMessage({
        name: userName,
        message: livemessage,
      })
    );
    setLivemessage("");
  };

  return (
    <div className="flex flex-col h-[80vh] sm:h-[85vh] md:h-[90vh] lg:h-[650px] w-full max-w-4xl mx-auto mt-2 border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-white">
      {/* Chat container */}
      <div
        ref={chatContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto p-2 sm:p-3 md:p-4 rounded-2xl flex flex-col-reverse gap-2 scroll-smooth"
      >
        {[...chatmessage].reverse().map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>

      {/* Message input */}
      <form
        className="flex items-center gap-2 p-2 sm:p-3 border-t border-gray-300 bg-white"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 sm:p-3 rounded-full border border-gray-300 outline-none focus:ring-1 focus:ring-gray-400 text-sm sm:text-base"
          value={livemessage}
          onChange={(e) => setLivemessage(e.target.value)}
        />
        <button className="px-4 sm:px-5 py-2 bg-amber-800 hover:bg-red-600 text-white font-semibold rounded-full transition text-sm sm:text-base">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
