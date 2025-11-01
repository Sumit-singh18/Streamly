import UserProfile from "../assets/user_profile.svg";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-start  bg-slate-100 rounded-lg shadow-sm w-full">
      <img
        className="w-10 h-10 item flex-shrink-0"
        src={UserProfile}
        alt="UserProfile"
      />
      <div className="ml-1 flex flex-col rounded-xl p-2 max-w-80">
        <span className="font-bold text-sm">{name}</span>
        <span className="break-words whitespace-pre-wrap max-w-full text-sm">
          {message}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;
