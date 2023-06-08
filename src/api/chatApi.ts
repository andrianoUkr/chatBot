import { API_KEY_API, API_PATH } from 'constants/common';

export const fetchNewMessage = () => {
  return fetch(`${API_PATH}/v1/loremipsum?paragraphs=1`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': API_KEY_API,
    },
  }).then((response) => {
    return response.json();
  });
};
