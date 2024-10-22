import axios from "axios";
import { reviewUrl,fltrReview } from "./urls"

// Function to create a review
export const createReview = async (authToken, emoji, description, userType) => {
  try {
    // Make a POST request with the Authorization header containing the Bearer token
    const response = await axios.post(
     reviewUrl, // Replace with your actual review URL
      { 
        emoji,
        description,
        userType 
      }, 
      {
        headers: {
          Authorization: `Bearer ${authToken}` // Send the token in the headers
        }
      }
    );
    
    return response.data; // Return the response data
    
  } catch (error) {
    console.error("Error creating review:", error);
    throw error; // Handle errors as needed
  }
};

export const getReview = async (authToken) => {
  try {
    // Make a GET request to the review URL with the Authorization header containing the Bearer token
    const response = await axios.get(
      reviewUrl, // Replace with your actual review URL
      {
        headers: {
          Authorization: `Bearer ${authToken}`, // Send the token in the headers
        },
      }
    );

    return response.data; // Return the response data
  } catch (error) {
    console.error("Error fetching review:", error); // Corrected the error message
    throw error; // Handle errors as needed
  }
};



export const filterFeedBack = async (authToken,userType) => {
  try {
    // Make a GET request to the review URL with the Authorization header containing the Bearer token
    const response = await axios.post(
      filterFeedBack,
      {userType},
      // Replace with your actual review URL
      {
        headers: {
          Authorization: `Bearer ${authToken}`, // Send the token in the headers
        },
      }
    );

    return response.data; // Return the response data
  } catch (error) {
    console.error("Error fetching review:", error); // Corrected the error message
    throw error; // Handle errors as needed
  }
};