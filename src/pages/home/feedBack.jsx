import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { filterFeedBack, getReview } from '../../functions/review'; // API functions

const Feedback = () => {
  const [feedbackList, setFeedbackList] = useState([]); // Feedback list state
  const [filterEmoji, setFilterEmoji] = useState(''); // Filter by emoji state
  const [filterUserType, setFilterUserType] = useState(''); // Filter by user type state
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  // Fetch all feedback
  const fetchAllFeedback = async (token) => {
    try {
      const response = await getReview(token); // Fetch feedback using the token
      setFeedbackList(response); // Set feedback list
    } catch (error) {
      toast.error('Failed to fetch feedback');
      setFeedbackList([]); // Set an empty array in case of error
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user'); // Retrieve stored user from localStorage

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser); // Parse stored user
      setName(parsedUser.name);
      setToken(parsedUser.token);
      fetchAllFeedback(parsedUser.token); // Call fetchAllFeedback with the user's token
    } else {
      toast.error('User not found, unable to fetch feedback');
      setFeedbackList([]); // Ensure feedbackList is initialized to an empty array
    }
  }, []); // Empty dependency array to ensure this runs only once on component mount

  // Search and filter feedback by user type
  const search = async (userType) => {
    if (!userType) {
      fetchAllFeedback(token); // Reset to all feedback if no filter is selected
      return;
    }
    try {
      const response = await filterFeedBack(token, userType);
      setFeedbackList(response);
    } catch (error) {
      toast.error('Failed to filter feedback');
    }
  };

  // Navigate to home page
  const goToHome = () => {
    navigate('/'); // Navigate to home page or any other route you'd like
  };

  return (
    <div className="flex gap-20 h-screen items-center justify-center flex-wrap p-5 bg-black">
      <div className="bg-gray-900 shadow-xl w-full sm:max-w-md rounded-md">
        <div className="py-11 px-9 relative">
          <h2 className="text-white text-xl mb-4 uppercase">{name}</h2>

          {/* Filter options */}
          <div className="flex justify-between mb-4">
            <select
              className="w-1/3 bg-gray-800 text-white p-2 rounded-lg"
              value={filterUserType}
              onChange={(e) => {
                setFilterUserType(e.target.value); // Update filter state
                search(e.target.value); // Trigger filter search
              }}
            >
              <option value="">Filter by User Type</option>
              <option value="Student">Student</option>
              <option value="Professional">Professional</option>
              <option value="Teacher">Teacher</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Display filtered feedback */}
          <ul className="feedback-list">
            {feedbackList && feedbackList.length > 0 ? (
              feedbackList.map((item, index) => (
                <li key={index} className="text-white p-2 bg-gray-800 rounded-lg mb-2">
                  <p> {item.userType} -- {item.emoji} </p>
                  <p>{item.description}</p>
                </li>
              ))
            ) : (
              <li className="text-white">No feedback available.</li>
            )}
          </ul>

          {/* Go to Home button */}
          <button
            onClick={goToHome}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
