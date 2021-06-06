
const ConsultarAPI = async (category) => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=a2fcbe48525a4f83b9096cdc6946be3f`);

    const data = await response.json();

    return data.articles;
}
 
export default ConsultarAPI;
