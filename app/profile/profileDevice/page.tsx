import React, { useState } from "react";

const ProfileDevice = () => {
  const [device, setDevice] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSend = () => {
    if (!device.trim()) {
      setError("Device cannot be empty");
    } else {
      setError("");
    }
  };

  const handleDeviceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDevice(e.target.value);
    if (e.target.value.trim()) {
      setError("");
    }
  };
  return (
    <div>
      <div className="text-2xl text-white font-bold py-4">Add a device</div>
      <div className="w-full lg:w-2/4 flex gap-2 flex-col">
        <div className="text-white">
          Enter the code visible on your device to activate
        </div>
        <input
          placeholder="Enter Code"
          value={device}
          onChange={handleDeviceChange}
          className="p-2 rounded-2xl border text-white bg-transparent w-full "
        />
        {error && <div className="text-vividRed text-sm">{error}</div>}
        <div className="flex justify-center sm:justify-end py-1 gap-4">
          <button
            onClick={handleSend}
            className="rounded-full bg-vividRed w-24 items-center text-white py-2"
          >
            Activate
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDevice;
