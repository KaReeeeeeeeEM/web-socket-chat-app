/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { BiSend } from "react-icons/bi";
import { FaImage } from "react-icons/fa";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import { MdCancel } from "react-icons/md";

function PromptBar({ isCollapsed }) {
  const [message, setMessage] = useState(""); // State to store the text input
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); // State to show/hide emoji picker
  const [attachedImage, setAttachedImage] = useState(null); // State for image attachment

  // Handle text input change
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  // Handle emoji selection
  const handleEmojiSelect = (emoji) => {
    setMessage((prev) => prev + emoji.native);
    setShowEmojiPicker(false); // Close the emoji picker after selection
  };

  // Handle image file change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAttachedImage(URL.createObjectURL(file)); // Preview image URL
    }
  };

  // Handle cancel image action
  const handleCancelImage = () => {
    setAttachedImage(null); // Remove the image
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send the message and the attached image
    console.log("Message:", message);
    console.log("Attached Image:", attachedImage);

    // Reset the form after submission
    setMessage("");
    setAttachedImage(null);
  };

  return (
    <div className={`bg-gray-200 fixed bottom-0 right-0 ${isCollapsed ? 'w-[95%]' : 'w-full lg:w-[75%]'} h-auto p-2 transition-all ease-in-out duration-700`}>
      <div className="relative flex items-center">
        {/* Image Upload Icon */}
        <div className="mr-2">
          <label htmlFor="image-upload" className="cursor-pointer">
            <FaImage className="text-xl hover:opacity-75 transition ease-in-out duration-300" />
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        {/* Emoji Picker Toggle Button */}
        <button
          type="button"
          onClick={() => setShowEmojiPicker((prev) => !prev)}
          className="bg-gray-200 mr-2 hover:opacity-75 transition ease-in-out duration-300"
        >
          😊
        </button>

        {/* Text Input */}
        <input
          type="text"
          value={message}
          onChange={handleChange}
          className="relative bg-white w-full h-12 ring-2 focus:ring-purple-600 focus:outline-none rounded-md p-2"
          placeholder="Type a message..."
          autoFocus={true}
        />

        {/* Send Button */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-auto h-10 hover:border-purple-600 hover:opacity-75 absolute bottom-1 right-2 flex items-center text-sm md:text-md transition ease-in-out duration-700"
        >
          Send
          <BiSend className="ml-2" />
        </button>
      </div>

      {/* Emoji Picker */}
      {showEmojiPicker && (
        <div className="absolute bottom-16 left-0 z-50">
          <Picker onSelect={handleEmojiSelect} />
        </div>
      )}

      {/* Image Preview (optional) */}
      {attachedImage && (
        <div className="bg-gray-200 p-2 absolute bottom-16 left-24 mt-2">
          <button
            onClick={handleCancelImage}
            className="block mt-1 bg-red-600 text-white hover:underline text-sm"
          >
            <MdCancel />
          </button>
          <img
            src={attachedImage}
            alt="Attachment Preview"
            className="max-w-xs max-h-40 object-cover rounded-md"
          />
        </div>
      )}
    </div>
  );
}

export default PromptBar;
