async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const apiUrl = "https://jsonplaceholder.typicode.com/posts";
getData(apiUrl)
  .then((data) => {
    if (data) {
      console.log(data);
    } else {
      console.log("Failed to fetch data.");
    }
  });