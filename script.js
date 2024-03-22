
let obj ={

};
let imgs1;
let imgs2;
let imgs3;

function onimg(e){
    let val=e.target;
    let img1=document.getElementById("image1");
    const fr=new FileReader();
    fr.readAsDataURL(img1.files[0]);
    fr.addEventListener('load',()=>{
        const url=fr.result;
        const img= new Image();
        img.src=url;
        imgs1=img.src;
    
    })
  
}
function onimg1(e){
    let val=e.target;
    let img1=document.getElementById("image2");
    const fr=new FileReader();
    fr.readAsDataURL(img1.files[0]);
    fr.addEventListener('load',()=>{
        const url=fr.result;
        const img= new Image();
        img.src=url;
        imgs2=img.src;
    
    })
  
}
function onimg2(e){
    let val=e.target;
    let img1=document.getElementById("image3");
    const fr=new FileReader();
    fr.readAsDataURL(img1.files[0]);
    fr.addEventListener('load',()=>{
        const url=fr.result;
        const img= new Image();
        img.src=url;
        imgs3=img.src;
     
    })
  
}

   


function myMovie() {
 
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let type = document.getElementById("type").value;
    let rating = document.getElementById("rating").value;


  
    if (name !== "" && id !== "" && type !== "" && rating !== "" ) {
        addData(name, id, type, rating, imgs1, imgs2, imgs3);

    }
 
    else {
        alert("Fill all Details")
    }
    
console.log(imgs2)
console.log(imgs3)


}


function addData(name, id, type, rating, imgs1, imgs2, imgs3) {
    let obj = {
        name, id, type, rating,imgs1,imgs2, imgs3
    }
    let arr;
    if (JSON.parse(localStorage.getItem("movie"))) {
        arr = JSON.parse(localStorage.getItem("movie"))
    }
    else {
        arr = [];
    }
    arr.push(obj);
    localStorage.setItem("movie", JSON.stringify(arr));
    console.log(obj)
    alert("data added successfully")
}

function mylist(){
    listData(0,3)
}
function listData(from,to) {
    let demo = document.getElementById("content");
    demo.innerHTML=''
    console.log(from,to)
    let data = JSON.parse(localStorage.getItem("movie"));
    console.log(data)
    let filter=data.slice(from,to);
    let href = "./movie.html";
    filter.forEach((element,i) => {

        let mainDiv = document.createElement("div");
        mainDiv.classList.add("col-md-4")
        let img = document.createElement("img");
        img.src = element.imgs1;
        let h1 = document.createElement("h1");
        h1.innerHTML = element.name;
        let p = document.createElement("p");
        p.innerHTML = `Movie Type:${element.type}`;
        let q = document.createElement("p");
        q.innerHTML = `Rating:${element.type}`;
        let btn = document.createElement("button");
        btn.innerHTML = `<a href="${href}" onclick="viwePage(this)">View</a>`
        demo.appendChild(mainDiv)
        mainDiv.appendChild(img);
        mainDiv.appendChild(h1);
        mainDiv.appendChild(p);
        mainDiv.appendChild(q);
        mainDiv.appendChild(btn);

    });
}


function filterBy() {
    let drop = document.getElementById("drop").value;
    let demo = document.getElementById("content");
    console.log(drop)
    let data = JSON.parse(localStorage.getItem("movie"))
    if (drop === "name") {
        demo.innerHTML = '';
        sortByname()
    }
    else if (drop === "rating") {
        demo.innerHTML = '';
        sortByrate()
    }
}
function sortByname() {
    let href = "./movie.html";
    let data = JSON.parse(localStorage.getItem("movie"));
    let demo = document.getElementById("content");
    data.sort(function (a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
    data.forEach(element => {
        let mainDiv = document.createElement("div");
        mainDiv.classList.add("col-md-4")
        let img = document.createElement("img");
        img.src = element.imgs1;
        let h1 = document.createElement("h1");
        h1.innerHTML = element.name;
        let p = document.createElement("p");
        p.innerHTML = `Movie Type:${element.type}`;
        let q = document.createElement("p");
        q.innerHTML = `Rating:${element.type}`;
        let btn = document.createElement("button");
        btn.innerHTML = `<a href="${href}" onclick="viwePage(this)">View</a>`
        mainDiv.appendChild(img);
        mainDiv.appendChild(h1);
        mainDiv.appendChild(p);
        mainDiv.appendChild(q);
        mainDiv.appendChild(btn);
        demo.appendChild(mainDiv);
    });
}
function sortByrate() {
    let href = "./movie.html";
    let demo = document.getElementById("content");
    let data = JSON.parse(localStorage.getItem("movie"))
    data.sort(function (a, b) {
        if (a.rating < b.rating) {
            return -1;
        }
        if (a.rating > b.rating) {
            return 1;
        }
        return 0;
    });
    data.forEach(element => {
        let mainDiv = document.createElement("div");
        mainDiv.classList.add("col-md-4")
        let img = document.createElement("img");
        img.src = element.imgs1;
        let h1 = document.createElement("h1");
        h1.innerHTML = element.name;
        let p = document.createElement("p");
        p.innerHTML = `Movie Type:${element.type}`;
        let q = document.createElement("p");
        q.innerHTML = `Rating:${element.type}`;
        let btn = document.createElement("button");
        btn.innerHTML = `<a href="${href}" onclick="viwePage(this)">View</a>`
        mainDiv.appendChild(img);
        mainDiv.appendChild(h1);
        mainDiv.appendChild(p);
        mainDiv.appendChild(q);
        mainDiv.appendChild(btn);
        demo.appendChild(mainDiv)
    });
}

let paginationBox=document.querySelector(".pagination-box")
let pageData=JSON.parse(localStorage.getItem("movie"));
let length=pageData.length/3;
let dataSkip=0,loadData=3
if(length.toString().indexOf("."!=-1)){
    length=length+1
}
for(let i=1;i<length;i++){
    paginationBox.innerHTML +=`
    <button data-skip="${dataSkip}" load-data="${loadData}" id="btn">${i}</button>`
    dataSkip=dataSkip+3;
    loadData=loadData+3;
}
let allPaginateBtn=document.querySelectorAll("#btn")

for(let btn of allPaginateBtn){
    btn.onclick=()=>{
      
        let skip=btn.getAttribute("data-skip");
        let loaded=btn.getAttribute("load-data");
        listData(skip,loaded)
    }
}
// function myMovie() {

//     let name = document.getElementById("name").value;
//     let id = document.getElementById("id").value;
//     let type = document.getElementById("type").value;
//     let rating = document.getElementById("rating").value;
//     let img1 = document.getElementById("image1").value;
//     let img2 = document.getElementById("image2").value;
//     let img3 = document.getElementById("image3").value;

//     if (name !== "" && id !== "" && type !== "" && rating !== "" && img1 !== "" && img2 !== "" && img3 !== "") {
//         addData(name,id,type,rating,img1,img2,img3);

//     }
//     else {
//         alert("Fill all Details")
//     }


// }