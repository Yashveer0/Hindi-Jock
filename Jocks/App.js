


let btn = document.querySelector("button");
let p = document.querySelector("p");

//  let name = prompt("Enter Your Name Plase...");



// p.innerText = `Hy ${name} Welcome  to my jokes website 
//                plase click Next button to start..`;

let url = "https://hindi-jokes-api.onrender.com/jokes?api_key=02a8dd10940f28b41394776725d7";


btn.addEventListener('click', async ()=>{
     let joke = await showJoke();
     p.innerText = joke;
})






async function showJoke() {

    try {
        let res = await axios.get(url);
     return res.data.jokeContent;
    }
    catch(error) {
         return  `Sorry We found something wrong plase try again... ${error}`;
    }
}