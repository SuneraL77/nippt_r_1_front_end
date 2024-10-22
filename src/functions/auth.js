import axios from "axios"
import { authRegisterUrl,loginUrl } from "./urls"
export const singUpfunction = async (username,password) => {
 
    // Make a POST request with the Authorization header containing the Bearer token
    const response = await axios.post(authRegisterUrl, {username,password}
    );
    
    return response.data;

  
};

export const loginFunctions = async (username,password) => {
 
  // Make a POST request with the Authorization header containing the Bearer token
  const response = await axios.post(loginUrl, {username,password}
  );
  
  return response.data;


};
