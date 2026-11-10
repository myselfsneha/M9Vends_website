
import api from "./api";

/**
 * Submit a career application.
 * @param {Object} form - Career application details.
 * @returns {Promise<Object>} Backend response data.
 */
export const applyForCareer = async (form) => {
  try {
    const response = await api.post("/career/apply", form, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Career Application Error:",
      error.response?.data || error.message
    );

    throw error;
  }
};