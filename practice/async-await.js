// async function fetchQuotes(url) {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         const quote = data.quote;
//         await displayDiv(quote);

//         return true;

//     } catch (error) {
//        console.log("error handling ", error);
//     }
// }

// async function displayDiv(quote) {
//     try {
//         const element = document.getElementById("container");
//         element.textContent = quote;

//         const newContainer = document.createElement("div");
//         newContainer.innerHTML = "asdasdas";

//         document.body.appendChild(newContainer);
//         return true
//     } catch (error) {
//         console.log("error handling ", error);
//     }
// }

// console.log("1111");
// const url = `https://api.kanye.rest/`;
// fetchQuotes(url);
// console.log("2222");