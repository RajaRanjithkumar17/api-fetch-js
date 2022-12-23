var btn = document.getElementById("run")
const res = ()=>{
  var url = "https://fakestoreapi.com/products";
fetch(url)
  .then((res) => {
    if (!res.ok) {
      throw Error(res.status);
    }

    return res.json();
  })

  .then((data) => {
    console.log(data);
    data.map((item)=>{
        var h1 = document.createElement("h6");
        h1.innerText = item.title

        document.body.appendChild(h1)
    })


  })
  .catch((error) => {
    alert(error + "not found");
  });

}

btn.addEventListener("click",res)








var url = "https://fakestoreapi.com/products";

const apifetch = ()=>{

  fetch(url)
  .then((response)=>{ 
    if(!response.ok){
      throw Error(response.status)
    }
    return response.json()})
  .then((data)=>{
    console.log(data);


  })
  .catch((error)=>{
    alert(error+"not found")
  })

}

apifetch();

 


