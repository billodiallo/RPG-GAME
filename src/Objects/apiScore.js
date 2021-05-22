import 'regenerator-runtime';
// global variables

const apiKey = 'Zl4d7IVkemOTTVg2fUdz';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores`;

export const postScore = async (name, s) => {
    const userScore = {
      user: name,
      score: s,
    };

  const payload = {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'Application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userScore),
  };