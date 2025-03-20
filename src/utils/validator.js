/**
 * Validates a mobile number.
 * @param {string | number} mobile - The mobile number to validate.
 * @param {Object} [options] - Optional configuration.
 * @param {string} [options.countryCode="IN"] - Country code to determine validation rules (default: "IN" for India).
 * @returns {{ isValid: boolean, error: string | null }} - Validation result with error message if invalid.
 */
export const validateMobileNumber = (mobile, options = { countryCode: "IN" }) => {
  const mobileStr = mobile ? String(mobile).trim() : "";

  if (!mobileStr) {
    return {
      isValid: false,
      error: "Mobile number is required.",
    };
  }

  const { countryCode } = options;

  if (countryCode === "IN") {
    const mobileRegex = /^[6-9]\d{9}$/;

    if (!mobileRegex.test(mobileStr)) {
      if (mobileStr.length !== 10) {
        return {
          isValid: false,
          error: `Mobile number must be exactly 10 digits (current length: ${mobileStr.length}).`,
        };
      }
      if (!/^[6-9]/.test(mobileStr)) {
        return {
          isValid: false,
          error: "Mobile number must start with 6, 7, 8, or 9.",
        };
      }
      return {
        isValid: false,
        error: "Mobile number contains invalid characters. Only digits are allowed.",
      };
    }
  } else {
    const genericRegex = /^\d{8,15}$/;
    if (!genericRegex.test(mobileStr)) {
      return {
        isValid: false,
        error: "Mobile number must be between 8 and 15 digits.",
      };
    }
  }

  return {
    isValid: true,
    error: null,
  };
};