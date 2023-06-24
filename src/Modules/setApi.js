const setApi = async (url, id, obj) => {
  try {
    const response = await fetch(`${url}${id}/scores/`, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('error', error);
    return null;
  }
};

export default setApi;
