const btnDetails = document.querySelectorAll("btnDetails");
const btnEdit = document.querySelectorAll("btnEdit");
const btnDelete = document.querySelectorAll("btnDelete");


/* listar- MOSTRAR ADMINS USERS */
function listarUsers(){
    
    const tBody = document.getElementById("tBody");
    console.log(tBody)
    template = "";
    
    fetch("http://localhost:3000/admins").then(r=> r.json()).then(data =>{

        data.forEach(function(element){
            console.log(element);
            let idElement = element.id;
            console.log(idElement);
            template = `

            <tr>
                <td>${element.id}</td>
                <td>${element.names}</td>
                <td>${element.email}</td>

                <td>

                    <button data-id="${element.id}" type="button" class="btn btn-sm btn-info btnDetails" data-bs-toggle="modal" data-bs-target="#detailsModal" onclick="cargarEditar('${idElement}')">Detalles</button>

                    <button data-id="${element.id}" type="button" class="btn btn-sm btn-warning btnEdit" data-bs-toggle="modal" data-bs-target="#editarModal">Editarrrrr</button>

                    <button data-id="${element.id}" type="button" class="btn btn-sm btn-danger btnDelete" data-bs-toggle="modal" data-bs-target="#eliminarModal" onclick="cargarEliminar('${idElement}')">Eliminar</button>

                </td>

            </tr>
            `
            tBody.innerHTML += template;
        })

    });

}    


listarUsers();



function crearUserAdmin(){

    const inputNameCreate = document.getElementById("inputNameCreate");
    const inputEmailCreate = document.getElementById("inputEmailCreate");
    const btnSaveChangesCreateAdmin = document.getElementById("btnSaveChangesCreateAdmin");
    
    if(inputNameCreate.value!= "" && inputEmailCreate.value!= ""){

        fetch("http://localhost:3000/admins",{

        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            names:inputNameCreate.value,
            email: inputEmailCreate.value,
            password: "password2"

        })

    }).then(r => r.json()).then(data => {

        console.log(data);  

    });
  
    }
    else{
        alert("rellene todos los campos debidamente");
    }

    


}


function cargarEliminar(id){
    const btnDeleteModal = document.getElementById("btnDeleteModal");
    console.log(id)
    const modal_body = document.getElementById("eliminarModal");
    console.log("modal_body")
    template = "";
    
    fetch(`http://localhost:3000/admins/${id}`).then(r=> r.json()).then(data =>{

        console.log(data);

            console.log(id);

            template = `
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Eliminar</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <label for="inputIdDelete">Id</label>
                    <input type="text" id="inputIdDelete" disabled>
    
                    <label for="inputNameDelete">Nombre</label>
                    <input type="text" id="inputNameDelete" disabled>
    
                    <label for="inputEmailDelete">Email</label>
                    <input type="email" id="inputEmailDelete" disabled>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" id="btnDeleteModal" onclick="eliminar('${id}')" >Eliminar</button>
                </div>
            </div>
            </div>`  
        
        modal_body.innerHTML = template;

            let inputIdDelete = document.getElementById("inputIdDelete");
            let inputNameDelete = document.getElementById("inputNameDelete");
            let inputEmailDelete = document.getElementById("inputEmailDelete");

            console.log("entro")

            inputIdDelete.value = id;
            inputNameDelete .value = data.names;
            inputEmailDelete.value = data.email;

            

        });
}


function eliminar(id){
    console.log(id);
    if(confirm(`Està seguro de eliminar la #${id}?`)){

        fetch(`http://localhost:3000/admins/${id}`,
        {method: 'DELETE'})
        .then(respuesta => {
            return respuesta.json()})
        .then(data => {
            alert("Se ha eliminado con exito!")
            location.href="";

        })     
    }
    else{
        console.log("no fue eliminado");
    }

}


// function listarPQRS(){
    
//     const tBody = document.getElementById("tBody");
//     console.log(tBody)
//     template = "";
    
//     fetch("http://localhost:3000/pqrs").then(r=> r.json()).then(data =>{

//         data.forEach(function(element){
//             console.log(element);
//             let idElement = element.id;
//             console.log(idElement);
//             template = `
//             <tr>
                                                        
//                 <td>${element.id}</td>
//                 <td>${element.tipo}</td>
//                 <td>${element.emailUser}</td>
//                 <td>
//                     ${element.mensajePQR}
//                 </td>
//                 <td>
//                     <button class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#modalDelete" onclick="cargarEliminar('${idElement}')">Eliminar</button>
//                 </td>
//             </tr>
//             `
//             tBody.innerHTML += template;
//         })

//     });

// }    


// listarPQRS();









function cerrarSesion(){
    if(confirm("¿Seguro que quieres cerra sesiòn?")){
        document.getElementById("cerrarSesionBtn").setAttribute("href","../../index.html")
        // window.location.href = "../../../riwi-filtro-final(1)/riwi-filtro-final/index.html"
        console.log("adentro")
        console.log(location);
    }
}

















// function cargarEditar(idElement){
//     console.log(idElement);


//     fetch(`http://localhost:3000/admins/${idElement}`)
//     .then(respuesta => {return respuesta.json()})
//     .then(data =>{

//         console.log(data);
//         console.log(data.id)

//         btnDetails.addEventListener("click",cargarEditar(data.id));

//         let inputDetail = document.getElementById("inputIdDetail").value = data.id;
//         let inputNameDetail = document.getElementById("inputNameDetail").value = data.names;
//         let inputEmailDetail = document.getElementById("inputEmailDetail").value = data.email;
    
//     })
// }


// function cargarEditar(id){
//     console.log(id);


//     fetch(`http://localhost:3000/admins/${id}`)
//     .then(respuesta => {return respuesta.json()})
//     .then(data =>{

//         console.log(data);
//         console.log(data.id)

//         btnDetails.addEventListener("click",cargarEditar(data.id));

//         let inputDetail = document.getElementById("inputIdDetail").value = data.id;
//         let inputNameDetail = document.getElementById("inputNameDetail").value = data.names;
//         let inputEmailDetail = document.getElementById("inputEmailDetail").value = data.email;
    
//     })
// }






/* INTENTOS PARA CARGAR USUARIO EN INPUTS, DETAILS CON MODAL*/


// btnDetails.forEach(btn =>{
//     btn.addEventListener("click",()=>{
//         const btnId = btn.getAttribute("data-id");
//         detailsUsers(btnId);
//         console.log("asd");
//     })
// })

// function detailsUsers(){
//     const body = document.getElementById("body");
//     template = "";
    
//     btnDetails.forEach(btn =>{
//         btn.addEventListener("click",()=>{
//             const btnId = btn.getAttribute("data-id");
//             console.log(btnId);
//             console.log("asd");
//         })
//     })
    
//     fetch("http://localhost:3000/admins").then(r=> r.json()).then(data =>{

//         data.forEach(function(element){


//             template = `
//             <div class="modal fade" id="detailsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div class="modal-dialog">
//                 <div class="modal-content">
//                 <div class="modal-header">
//                     <h1 class="modal-title fs-5" id="exampleModalLabel">Detalles</h1>
//                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                 </div>
//                 <div class="modal-body">
    
//                     <label for="inputIdDetail">Id #</label>
//                     <input type="text" id="inputIdDetail" disabled value="${element.id}">
    
//                     <label for="inputNameDetail">Nombre</label>
//                     <input type="text" id="inputNameDetail" disabled value="${element.names}">
    
//                     <label for="inputEmailDetail">Email</label>
//                     <input type="email" id="inputEmailDetail" disabled value="${element.email}">
    
//                 </div>
//                 <div class="modal-footer">
//                     <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button> 
//                     <!-- <button type="button" class="btn btn-primary" id="btnCloseDetailsModal">Sabe Changes</button> -->
//                 </div>
//                 </div>
//             </div>
//             </div>`

//             body.innerHTML += template;
//         })

//     });
// }


// detailsUsers;

/* mostrar usuario -> DETAILS*/
// function detailsUsers(id){
//     fetch("http://localhost:3000/admins/"+id).then(r=>r.json()).then(data=>{
//         console.log(data);
//         console.log(id);
//     })
// }

