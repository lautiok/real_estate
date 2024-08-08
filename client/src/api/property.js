import axios from './axios';

export const postProperty = async (filters) => {
    try {
      const response = await axios.post('/filter', filters);
      return response;
    } catch (error) {
      console.error('Error posting property filters:', error);
      throw error;
    }
  };