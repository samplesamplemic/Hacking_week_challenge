const url ='https://api.spaceflightnewsapi.net/v3/articles'

async function a(){ 
 const response = await fetch(url);
 const data = await response.json();
 data.forEach(data => {
    const b = data.newsSite;
    console.log(b);
 })

};
a();