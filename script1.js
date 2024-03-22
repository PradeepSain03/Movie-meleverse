let ps;

function viwePage(val) {
    let viewimg = val.parentElement.parentElement;
    let h1 = viewimg.children[1];
     ps=h1.innerHTML;
    // let div = document.getElementById("movie");
    // div.innerHTML = "hiii"
    localStorage.setItem("id",JSON.stringify(ps))
    myl();
   

}

function myl(){
 
    let demo = document.getElementById("movie2");
    let data = JSON.parse(localStorage.getItem("movie"))
    let id=JSON.parse(localStorage.getItem("id"))
    data.forEach(element=>{
      
       
         if(element.name===id){
            let mainDiv = document.createElement("div");
            let div=document.createElement('div');
         div.innerHTML=`<div class="card">
         <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
         <div class="carousel-inner">
           <div class="carousel-item active">
             <img src=${element.imgs1} class="d-block w-100" alt="...">
           </div>
           <div class="carousel-item">
             <img src=${element.imgs2} class="d-block w-100" alt="...">
           </div>
           <div class="carousel-item">
             <img src=${element.imgs3} class="d-block w-100" alt="...">
           </div>
         </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Previous</span>
         </button>
         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
           <span class="carousel-control-next-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Next</span>
         </button>
       </div>
         </div>
         <div class="text-center"> <h1>Movie Name: ${element.name}</h1>
         <h1>Movie Type:${element.type}</h1>
         <h1>Movie Rating${element.rating}`;
            mainDiv.appendChild(div);
            demo.appendChild(mainDiv)
         }
    
    })
}