import render from './render.js';

const getApiResponse = async (url, id) => {
  try {
    const response = await fetch(`${url}${id}/scores`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const apiResponse = await response.json();
    render(apiResponse.result);
  } catch (error) {
    console.error('Error', error);
  }
};

export default getApiResponse;