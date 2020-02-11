const API_URL = process.env.API_HOST;

const fetcher = async (path) =>  {
  try {
    const res = await fetch(API_URL + path)
    const json = await res.json();
    return json;
  } catch (error) {
    return error;
  }

}
const post = async (path,data) =>  {
  try {
    const rawResponse = await fetch(API_URL + path, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data
    });
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    return error;
  }

}
const update = async (path,data) =>  {
  try {
    const rawResponse = await fetch(API_URL + path, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },               mode: 'cors',
  
      body: JSON.stringify(data)
    });
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    return error;
  }

}
const remove = async (path) =>  {
  try {
    const rawResponse = await fetch(API_URL + path, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    return error;
  }

}
export  {fetcher,post,update,remove};