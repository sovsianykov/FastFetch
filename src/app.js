// fetch('https://api.github.com/users')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         } else {
//             // console.log(response)
//             return response;
//
//         }
//     })
//     .then(response => response.json())
//     .then(myBlob => myBlob.forEach( el => {
//         let objectURL = el.avatar_url
//         let image = document.createElement('img');
//         image.src = objectURL;
//         document.body.appendChild(image);
//     }))
//     .catch(e => {
//         console.log('There has been a problem with your fetch operation: ' + e.message);
//     });
 let j = 0;
const container = document.querySelector('.cont')
const output = document.querySelector('#output')
const pic = document.querySelector('#picture')
let catStore = [];
async function myFetch() {
    try {
        let response = await fetch('https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
             response = await response.json();
             console.log(response)

             response.forEach(el => {

                     let image = document.createElement('img');
                     image.src = el.url;

                     // image.style.cssText = 'width: 200px ; height: 200px; display: inline-block'
                     catStore.push(image)


               }
            )

            output.appendChild(catStore[j])
            console.log(output, j,catStore, catStore[j])
            output.removeChild(output.firstChild)

        }

    } catch (e) {
        console.log(e);
    }
    j++
    if (catStore.length > 20) {
        catStore.splice(0, 10)
        j = catStore.length - 2

    }
}
document.addEventListener('DOMContentLoaded',myFetch() )
container.addEventListener('click', (e) => myFetch())
