import { useState } from 'react';
import { contactConfig } from '../data/contactData';

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!email) return "Email is required";
  if (!emailRegex.test(email)) return "Please enter a valid email address";
  return null;
};

const validatePhone = (phone) => {
  const phoneRegex = /^\+?[0-9\s\-().]{7,20}$/;
  if (!phone) return null;
  if (!phoneRegex.test(phone)) return "Please enter a valid phone number";
  return null;
};

const validateName = (name) => {
  if (!name || name.trim().length < 2) return "Name must be at least 2 characters";
  return null;
};

const validateMessage = (message) => {
  if (!message || message.trim().length < 5) return "Message must be at least 5 characters";
  return null;
};

export const useContactForm = () => {
  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success');
  const [errors, setErrors] = useState({});

  const showToastMessage = (type, message) => {
    setToastType(type);
    setResult(message);
    setShowToast(true);
    
    setTimeout(() => {
      setShowToast(false);
    }, contactConfig.toastDuration);
  };

  const getDetailedErrorMessage = (errors) => {
    const errorMessages = [];
    
    if (errors.name) errorMessages.push(errors.name);
    if (errors.email) errorMessages.push(errors.email);
    if (errors.phone) errorMessages.push(errors.phone);
    if (errors.message) errorMessages.push(errors.message);
    
    if (errorMessages.length === 0) return "Please fix the errors in the form";
    
    return (
      <div className="text-left">
        <div className="font-semibold mb-2">Please fix the following errors:</div>
        <ul className="list-disc list-inside space-y-1 text-sm">
          {errorMessages.map((msg, idx) => (
            <li key={idx} className="text-red-100">{msg}</li>
          ))}
        </ul>
      </div>
    );
  };

  const validateForm = (formData) => {
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    const newErrors = {};

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const phoneError = validatePhone(phone);
    const messageError = validateMessage(message);

    if (nameError) newErrors.name = nameError;
    if (emailError) newErrors.email = emailError;
    if (phoneError) newErrors.phone = phoneError;
    if (messageError) newErrors.message = messageError;

    setErrors(newErrors);
    return { isValid: Object.keys(newErrors).length === 0, errors: newErrors };
  };

  const validateField = (name, value) => {
    let error = null;
    
    switch (name) {
      case 'name':
        error = validateName(value);
        break;
      case 'email':
        error = validateEmail(value);
        break;
      case 'phone':
        error = validatePhone(value);
        break;
      case 'message':
        error = validateMessage(value);
        break;
      default:
        break;
    }

    setErrors(prev => ({
      ...prev,
      [name]: error
    }));

    return error === null;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(event.target);
    
    const validation = validateForm(formData);
    if (!validation.isValid) {
      setIsSubmitting(false);
      setResult(null);
      const detailedErrorMessage = getDetailedErrorMessage(validation.errors);
      showToastMessage('error', detailedErrorMessage);
      return;
    }

    formData.append("access_key", contactConfig.accessKey);

    try {
      const response = await fetch(contactConfig.apiEndpoint, {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        const successMessage = (
          <div className="text-center">
            <div className="font-semibold text-green-100">Thanks! Message sent successfully!</div>
            <div className="text-sm text-green-200 mt-1">Shall contact back ASAP!</div>
          </div>
        );
        showToastMessage('success', successMessage);
        event.target.reset();
        setErrors({});
      } else {
        console.log("Error", data);
        const errorMessage = (
          <div className="text-center">
            <div className="font-semibold text-red-100">Oops! Something went wrong!</div>
            <div className="text-sm text-red-200 mt-1">
              {data.message || "Please try again."}
            </div>
          </div>
        );
        showToastMessage('error', errorMessage);
      }
    } catch (error) {
      console.error("Network error:", error);
      const networkErrorMessage = (
        <div className="text-center">
          <div className="font-semibold text-red-100">Network Error!</div>
          <div className="text-sm text-red-200 mt-1">Please check your connection and try again.</div>
        </div>
      );
      showToastMessage('error', networkErrorMessage);
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
    errors,
    onSubmit,
    hideToast,
    validateField,
    validateEmail,
    validatePhone
  };
};