const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxJhBvfkGmR6BGmFNqHorDG9tlJUk43O1OcoJgVus5caIbPOaIfjzGDMParMJNCc2VNgg/exec';

exports.handler = async function(event) {
  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      body: event.body
    });
    const data = await response.json();

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Submission failed' })
    };
  }
};