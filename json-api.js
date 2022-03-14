// fetching an api (only works in browser, node can not access the api data)

const showData = (data) =>{
    const keys = data.keys();
    console.log(keys);
} 
const callAPI = (searchTerms)=>{
    console.log(searchTerms);
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchTerms}`;
    fetch(url)
    .then(res => res.json())
    .then(jsonData => showData(jsonData))    
}
callAPI();