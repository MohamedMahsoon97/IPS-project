import { toast } from 'react-toastify';

export const handleApiErrors = (fail) => {
  if (fail?.errors && Object.keys(fail.errors).length > 0) {
    // Initialize an empty string to store the error messages
    let errorMessage = Object.keys(fail.errors)
      .map((key) => {
        // Extract each error message and join them with a newline character
        const errors = fail.errors[key].map((error) => error);
        return `${errors.join('\n')},`;
      })
      .join('\n');

    // Display the error messages in a toast notification
    toast.error(errorMessage);
  } else if (fail?.message) {
    // Handle a general error message if no specific errors are present
    toast.error(fail.message);
  } else {
    // Handle unexpected or unknown errors
    toast.error('An unexpected error occurred. Please try again.');
  }
};
