import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserName } from "../Utils/userNameSlice";

const UserNameModal = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.name);
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show popup only if name not already saved
    if (!userName) {
      setShowModal(true);
    }
  }, [userName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;
    dispatch(setUserName(name));
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 animate-fadeIn">
      <div className="bg-gradient-to-br from-white to-gray-100 border border-gray-200 shadow-2xl rounded-2xl p-8 w-[90%] max-w-md text-center relative">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Welcome! 👋</h2>
        <p className="text-gray-500 mb-6">
          Let’s get to know you — please enter your name to continue.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            autoFocus
            className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-400"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium py-2.5 rounded-xl hover:from-blue-700 hover:to-blue-600 active:scale-95 transition-transform duration-200 shadow-md"
          >
            Continue →
          </button>
        </form>

        <div className="absolute bottom-3 left-0 right-0 text-xs text-gray-400">
          Your name is stored locally — no worries 😊
        </div>
      </div>

      {/* Animation styles */}
      <style>
        {`
      @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
      }
      .animate-fadeIn {
        animation: fadeIn 0.3s ease-out;
      }
    `}
      </style>
    </div>
  );
};

export default UserNameModal;
