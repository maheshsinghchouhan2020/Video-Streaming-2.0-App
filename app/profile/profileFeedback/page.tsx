import React, { useState } from "react";

const ProfileFeedback = () => {
  const [feedback, setFeedBack] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [successMSg, setSuccessMSg] = useState<boolean>(false);

  const handleSend = () => {
    if (!feedback.trim()) {
      setError("Please Enter Your Feedback");
      setSuccessMSg(false);
    } else {
      setError("");
      setSuccessMSg(true);
      setFeedBack("");
      setTimeout(() => {
        setSuccessMSg(false);
      }, 3000);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedBack(e.target.value);
    if (e.target.value.trim()) {
      setError("");
    }
  };

  const handleCancel = () => {
    setFeedBack("");
    setError("");
    setSuccessMSg(false);
  };
  return (
    <div>
      <div className="text-2xl text-white font-bold py-4">
        Feel free to share your Feedback
      </div>
      <div className="w-full lg:w-3/4 ">
        <textarea
          value={feedback}
          onChange={handleInputChange}
          placeholder="Enter text here..."
          className="p-2 rounded-2xl border text-white border-gray-700 bg-transparent h-44 w-full text-start placeholder-gray-500 focus:outline-none "
        />
        <div className="text-gray-500 text-sm">Maximum Limit 350 Characters</div>

        {error && <div className="text-vividRed text-sm">{error}</div>}
        {successMSg && (
          <div className="text-gray-400 text-sm py-1">
            <div>Connected Successfully!</div>
            <div>We have received your feedback. Thank you!!</div>
          </div>
        )}
        <div className="flex justify-center sm:justify-end py-2 gap-4">
          <button
            onClick={handleCancel}
            className="rounded-full border border-white w-24 items-center text-white py-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSend}
            className="rounded-full bg-vividRed w-24 items-center text-white py-2"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileFeedback;
