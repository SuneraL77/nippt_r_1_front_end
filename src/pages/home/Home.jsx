import React, { useState, useEffect } from 'react';
import Typewriter from 'react-typewriter-effect';
import axios from 'axios'; // Axios for making API calls
import { loginFunctions, singUpfunction } from '../../functions/auth';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { createReview } from '../../functions/review';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Home = () => {
  const [emoji, setEmoji] = useState('');
  const [description, setDescription] = useState('');
  const [userType, setUserType] = useState('');
  const [show, setShow] = useState(true);
  const [view, setView] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [typewriterKey, setTypewriterKey] = useState(0);
  const [loading, setLoading] = useState('');

  // States for login/registration form
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [p_name, setPname] = useState('');

  // State for collapse menu
  const [collapseMenuVisible, setCollapseMenuVisible] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const submitFeedback = async () => {
    if (emoji && description && userType) {
      const storedUser = localStorage.getItem("user");
      const parsedUser = JSON.parse(storedUser);
      try {
        setLoading(true);
        const response = await createReview(token, emoji, description, userType);
        toast.success(response.message);

        setView(false);
        setEmoji('');
        setDescription('');
        setUserType('');
        setSubmitted(true);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      alert('Please select an emoji, a description, and a user type');
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setToken(parsedUser.token);
      setPname(parsedUser.name);
    }
  }, []);

  const handleRegister = async () => {
    try {
      const response = await singUpfunction(username, password);
      toast.success(response.message);
      // Store user and token in localStorage
      localStorage.setItem("user", JSON.stringify({
        name: response.user.name,
        token: response.user.token,
      }));
      setToken(response.user.token);
      setPname(response.user.name);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await loginFunctions(username, password);
      // Store user and token in localStorage
      localStorage.setItem("user", JSON.stringify({
        name: response.user.name,
        token: response.user.token,
      }));
      toast.success("Login success");
      setToken(response.user.token);
      setPname(response.user.name);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data from localStorage
    setToken(''); // Clear token state
    setPname(''); // Clear name state
    toast.success("Logout successful"); // Notify the user
  };

  // Go to Ratings
  const goToRatings = () => {
    navigate('/feedback'); // Navigate to the ratings page
  };

  return (
    <div className="flex gap-20 h-screen items-center justify-center flex-wrap p-5 bg-black">
      <div className="bg-gray-900 shadow-xl w-full sm:max-w-md rounded-md">
        <div className="py-11 px-9 relative">
          <i
            className="fas fa-times cursor-pointer text-gray-600 text-xl absolute top-5 right-5"
            onClick={() => setShow(false)}
          ></i>
          <h1 className="mx-14 text-center text-4xl font-bold text-white uppercase mb-5">
            {p_name}
          </h1>

          {token ? ( // Check if user is logged in
            <>
              {submitted ? (
                <div className="text-center mt-5 text-white">
                  <h2 className="text-xl font-bold">Thank you for your feedback!</h2>
                  <p className="mt-2">We appreciate your input.</p>
                  <button
                    className="mt-5 bg-indigo-700 rounded-md py-2.5 px-10 text-white hover:bg-indigo-800 transition duration-300"
                    onClick={() => setSubmitted(false)}
                  >
                    Rate Again
                  </button>
                </div>
              ) : (
                <>
                  <ul className="flex gap-7 justify-center my-8 w-full">
                    <li
                      onClick={() => { setEmoji('🙁'); setView(true); }}
                      className={`cursor-pointer flex-grow hover:bg-gray-800 hover:shadow-2xl transition duration-300 rounded-lg flex justify-center items-center text-6xl ${emoji === '🙁' ? 'bg-gray-800 shadow-2xl' : ''}`}
                    >
                      🙁
                    </li>
                    <li
                      onClick={() => { setEmoji('😐'); setView(true); }}
                      className={`cursor-pointer flex-grow hover:bg-gray-800 hover:shadow-2xl transition duration-300 rounded-lg flex justify-center items-center text-6xl ${emoji === '😐' ? 'bg-gray-800 shadow-2xl' : ''}`}
                    >
                      😐
                    </li>
                    <li
                      onClick={() => { setEmoji('😃'); setView(true); }}
                      className={`cursor-pointer flex-grow hover:bg-gray-800 hover:shadow-2xl transition duration-300 rounded-lg flex justify-center items-center text-6xl ${emoji === '😃' ? 'bg-gray-800 shadow-2xl' : ''}`}
                    >
                      😃
                    </li>
                  </ul>
                  {view && (
                    <>
                      <select
                        className="w-full mt-3 p-2 rounded-lg bg-gray-800 text-white"
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                      >
                        <option value="Student">Student</option>
                        <option value="Professional">Professional</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Other">Other</option>
                      </select>
                      <textarea
                        className="w-full mt-3 p-2 rounded-lg bg-gray-800 text-white"
                        placeholder="Add your description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      <div className="flex justify-center items-center mt-5">
                        <button
                          className="bg-indigo-700 w-full rounded-md py-2.5 px-10 text-white hover:bg-indigo-800 transition duration-300"
                          onClick={submitFeedback}
                        >
                          Submit
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}

              {/* Collapse Button */}
              <button
                className="mt-5 bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300"
                onClick={() => setCollapseMenuVisible(!collapseMenuVisible)}
              >
                {collapseMenuVisible ? 'Hide Options' : '...'}
              </button>

              {/* Collapse Menu */}
              {collapseMenuVisible && (
                <div className="mt-4 bg-gray-800 p-4 rounded-lg">
                  <button
                    className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                  <button
                    className="w-full mt-2 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                    onClick={goToRatings}
                  >
                    Go to Ratings
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <h2 className="text-white text-center text-2xl mb-5">
                {isRegistering ? 'Register' : 'Login'}
              </h2>
              <input
                className="w-full mt-3 p-2 rounded-lg bg-gray-800 text-white"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="w-full mt-3 p-2 rounded-lg bg-gray-800 text-white"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="w-full mt-5 bg-indigo-700 rounded-md py-2.5 px-10 text-white hover:bg-indigo-800 transition duration-300"
                onClick={isRegistering ? handleRegister : handleLogin}
              >
                {isRegistering ? 'Register' : 'Login'}
              </button>
              <button
                className="w-full mt-3 bg-gray-700 text-white py-2.5 rounded-md hover:bg-gray-800 transition duration-300"
                onClick={() => setIsRegistering(!isRegistering)}
              >
                {isRegistering ? 'Switch to Login' : 'Switch to Register'}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
