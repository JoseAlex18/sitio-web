/* fetch('https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe')
   .then(response => response.json())
      .then(json => console.log(json.title)) */

      const btnAdd = document.getElementById("btnCargar");
      btnAdd.addEventListener("click",()=>{
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then(json => {
       let info = "";
       for (let i=0;i<json.length;i++){
         info += `<option value = '${json[i].id}'> ${json[i].name} </option>`
       }
       const datos = document.getElementById("users")
       datos.innerHTML=info;
      });
    });
    
    const menuUser = document.getElementById("users");
      menuUser.addEventListener("change",()=>{
      const divdatos = document.getElementById("posts") 
      let id = document.getElementById("users").value
      fetch('https://jsonplaceholder.typicode.com/posts?userId='+ id)
      .then((response) => response.json())
      .then((json) => {
        let datos = '';
        for (let i=0;i<json.length;i++){
           datos += `<div class="posts" >
            <h3>  ${json[i].title}</h3> 
            <p>  ${json[i].body}</p>
            <button class="buttons" type="button" onclick="cargarComments(${json[i].id})" >show comments</button>
            <div id="comment${json[i].id}"></div> 
          </div>`
        }
        divdatos.innerHTML = datos;
      });
    });
    
    
     const btnInfo = document.getElementById("btnInfo");
      btnInfo.addEventListener("click", ()=>{
       const divid = document.getElementById("information");
       let id = document.getElementById("users").value
       fetch('https://jsonplaceholder.typicode.com/users?userId=' + id)
       .then((response) => response.json())
       .then((json)=> {
         let info = "";
         for (let i=0;i<json.length;i++){
           info += `<div class="information >  
            <p> id:  ${json[i].id}  </p> 
             <p> email:  ${json[i].email} </p>
             <p> cuidad: ${json[i].address.city} </p>
             <p> calle:  ${json[i].address.street} </p> 
             <p> telefono: ${json[i].phone} </p>
             <p> sitio web: ${json[i].website} </p>
           </div>`
         }
         divid.innerHTML = info;
       });
      }
     );
    
    
    
function cargarComments(postid){
  let comments = document.getElementById("comment" + postid);
    fetch('https://jsonplaceholder.typicode.com/comments?postId=' + postid )
      .then((response) => response.json())
      .then((json)=> {
      let comentario = "<button type='button'  class='buttons' onclick='eliminarComments("+ postid +")' >remove comments</button>";
      for (let i=0; i<json.length;i++){
          comentario += `<div class="comments">
            <h3> Nombre:  ${json[i].name} </h3> 
            <h4> Email:  ${json[i].email} </h4>
            <p> Texto:  ${json[i].body} </p>
              </div>`
           } 
           comments.innerHTML = comentario;
         });
    };
    
    
    function eliminarComments (postid){
      let quitar = document.getElementById("comment" +postid);
      quitar.innerHTML = "";
    };