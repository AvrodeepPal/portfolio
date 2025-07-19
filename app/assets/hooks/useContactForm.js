import { useState } from 'react';
import { contactConfig } from '../data/contactData';

export const useContactForm = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success');

  const showToastMessage = (type, message) => {
    setToastType(type);
    setResult(message);
    setShowToast(true);
    
    setTimeout(() => {
      setShowToast(false);
    }, contactConfig.toastDuration);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(event.target);
    formData.append("access_key", contactConfig.accessKey);

    try {
      const response = await fetch(contactConfig.apiEndpoint, {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        showToastMessage('success', "Thanks! Message sent successfully! Will contact back asap!");
        event.target.reset();
      } else {
        console.log("Error", data);
        showToastMessage('error', data.message || "Oops! Something went wrong! Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      showToastMessage('error', "Network error! Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const hideToast = () => {
    setShowToast(false);
  };

  return {
    result,
    isSubmitting,
    showToast,
    toastType,
    onSubmit,
    hideToast
  };
};