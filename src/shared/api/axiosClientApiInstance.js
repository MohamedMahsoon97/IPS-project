// lib/api.js
import axios from 'axios';
import Cookies from 'js-cookie';
const apiClient = axios.create({
  baseURL: 'https://hamimm.app/api/dashboard', // Set your base URL for the API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Perform actions before the request is sent
    const token = localStorage.getItem('token'); // Example: Add Authorization header
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => {
    // Any status code that lies within the range of 2xx causes this function to trigger
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx causes this function to trigger
    if (error.response) {
      // Server responded with a status other than 2xx
      const { status, data } = error.response;
      // Handle different status codes
      switch (status) {
        case 401:
          console.error('Unauthorized - redirecting to login');
          // Optional: Redirect to login page
          // Cookies.remove('oboor_admin');
          // window.location.href = '/dashboard/pages/login/';
          break;
        case 403:
          console.error('Forbidden - you do not have permission');
          break;
        case 404:
          console.error('Not Found - the resource does not exist');
          break;
        case 500:
          console.error('Internal Server Error');
          break;
        default:
          console.error(
            `Error ${status}: ${data.message || 'An error occurred'}`
          );
      }

      return Promise.reject({
        status: status,
        message: data.message || 'An error occurred',
        data: data,
      });
    } else if (error.request) {
      // Request was made but no response received
      console.error('No response from server');
      return Promise.reject({
        status: null,
        message: 'No response from server. Please try again later.',
      });
    } else {
      // Something happened in setting up the request
      console.error('Error setting up request:', error.message);
      return Promise.reject({
        status: null,
        message: error.message,
      });
    }
  }
);

export default apiClient;
