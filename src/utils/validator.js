export const validateMobileNumber = (mobile) => {
  const mobileRegex = /^[6-9]\d{9}$/; // Validates a 10-digit mobile number starting with 6-9
  if (!mobile) {
    return "Mobile number is required.";
  } else if (!mobileRegex.test(mobile)) {
    return "Enter a valid 10-digit mobile number.";
  }
  return null; // No errors
};
