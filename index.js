async function GetData(){
    let tbody=document.querySelector("tbody");
    await fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => 
        json.slice(0,20).forEach(element => {
            let div=` <tr>
            <th scope="row">${element.id}</th>
            <td>   <img src="${element.url}" style="width:60px;"alt="">
            </td>
            <td>${element.title}</td>
            <td>${element.albumId}</td>
          </tr>`
tbody.innerHTML+=div;
        })
        );
}

GetData();

async function PostData() {
    let image = document.querySelector('#image').value;
    var isValid = /\.jpe?g$/i.test(imageInput.value);
    if (!isValid) {
return     ;
 }
    let albumId = document.querySelector("#albumId").value; 
    let title = document.querySelector("#title").value;
    console.log(image);
    await fetch('https://jsonplaceholder.typicode.com/photos', {
            method: 'POST',
            body: JSON.stringify({
                url: image,
                albumId: albumId,
                title: title
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
}



let button=document.querySelector(".btn");
button.addEventListener("click",function(){
    PostData()
})