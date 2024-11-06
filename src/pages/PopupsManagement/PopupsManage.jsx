import React, { useState } from 'react';

const PopupsManage = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);
  const [actionButton, setActionButton] = useState('');
  const [trigger, setTrigger] = useState('first_open');
  const [duration, setDuration] = useState(5); // in seconds
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [analytics, setAnalytics] = useState([]);

  const handleCreatePopup = () => {
    // Logic to create a new popup
    const newPopup = {
      title,
      message,
      image,
      actionButton,
      trigger,
      duration,
      startTime,
      endTime,
    };
    
    // Simulate adding to analytics
    setAnalytics([...analytics, newPopup]);
    
    // Reset form
    setTitle('');
    setMessage('');
    setImage(null);
    setActionButton('');
    setTrigger('first_open');
    setDuration(5);
    setStartTime('');
    setEndTime('');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Popups Management</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Create New Popup</h2>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Title</label>
            <input
              type="text"
              className="border rounded-lg w-full p-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              className="border rounded-lg w-full p-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Image (Optional)</label>
            <input
              type="file"
              className="border rounded-lg w-full p-2"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Action Button</label>
            <input
              type="text"
              className="border rounded-lg w-full p-2"
              value={actionButton}
              onChange={(e) => setActionButton(e.target.value)}
              placeholder="e.g., Shop Now"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Display Trigger</label>
            <select
              className="border rounded-lg w-full p-2"
              value={trigger}
              onChange={(e) => setTrigger(e.target.value)}
            >
              <option value="first_open">First App Open</option>
              <option value="specific_page">Specific Page Load</option>
              <option value="time_based">Time-Based</option>
            </select>
          </div>

          {trigger === 'time_based' && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Time (in seconds)</label>
              <input
                type="number"
                className="border rounded-lg w-full p-2"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                min="1"
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Start Time</label>
            <input
              type="datetime-local"
              className="border rounded-lg w-full p-2"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">End Time</label>
            <input
              type="datetime-local"
              className="border rounded-lg w-full p-2"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="bg-blue-500 text-white rounded-lg px-4 py-2"
            onClick={handleCreatePopup}
          >
            Create Popup
          </button>
        </form>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Popup Analytics</h2>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Title</th>
              <th className="p-2 text-left">Message</th>
              <th className="p-2 text-left">Trigger</th>
              <th className="p-2 text-left">Action Button</th>
              <th className="p-2 text-left">Start Time</th>
              <th className="p-2 text-left">End Time</th>
            </tr>
          </thead>
          <tbody>
            {analytics.map((popup, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-2">{popup.title}</td>
                <td className="p-2">{popup.message}</td>
                <td className="p-2">{popup.trigger}</td>
                <td className="p-2">{popup.actionButton}</td>
                <td className="p-2">{popup.startTime}</td>
                <td className="p-2">{popup.endTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PopupsManage;
