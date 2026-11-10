import api from "./api";

/**
 * Submit business and general enquiry data to the backend.
 *
 * @param {Object} data - Contact enquiry details.
 * @param {string} data.name - Full name.
 * @param {string} data.organization - Organization or company name.
 * @param {string} data.email - Email address.
 * @param {string} data.phone - Phone number.
 * @param {string} data.enquiryCategory - Enquiry category.
 * @param {string} data.productInterest - Product or solution of interest.
 * @param {string} data.deploymentCity - Intended deployment location.
 * @param {string} data.message - Enquiry message.
 * @returns {Promise<Object>} Backend response data.
 */
export const submitContact = async (data) => {
  try {
    const response = await api.post("/contact", data);

    return response.data;
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error(
        "Contact form submission failed:",
        error.response?.data || error.message
      );
    }

    throw error;
  }
};