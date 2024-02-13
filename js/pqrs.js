async function guardarPQR(){

    const inputTipoPQRS = document.getElementById("inputTipoPQRS");
    const inputEmail = document.getElementById("inputEmail");
    const inputMensaje = document.getElementById("inputMensaje");
    const formulario = document.getElementById("formulario");


    // const btnSaveChangesCreateAdmin = document.getElementById("btnSaveChangesCreateAdmin");
    
    if(inputTipoPQRS.value!= "seleccionar" && inputEmail.value!= "" && inputMensaje.value!= ""){

        await fetch("http://localhost:3000/pqrs",{

        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            tipo:inputTipoPQRS.value,
            emailUser:inputEmail.value,
            mensajePQR:inputMensaje.value

        })
        
    }).then(r => r.json()).then(data => {});
    
        formulario.reset();
        
    }
    else{
        alert("rellene todos los campos debidamente");
    }

    

}




function listarPQRS(){
    
    const tBody = document.getElementById("tBody");
    console.log(tBody)
    template = "";
    
    fetch("http://localhost:3000/pqrs").then(r=> r.json()).then(data =>{

        data.forEach(function(element){
            console.log(element);
            let idElement = element.id;
            console.log(idElement);
            template = `
            <tr>
                                                        
                <td>${element.id}</td>
                <td>${element.tipo}</td>
                <td>${element.emailUser}</td>
                <td>
                    ${element.mensajePQR}
                </td>
                <td>
                    <button class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#modalDelete" onclick="cargarEliminar('${idElement}')">Eliminar</button>
                </td>
            </tr>
            `
            tBody.innerHTML += template;
        })

    });

}    


listarPQRS();

function cargarEliminar(id){
    const btnDeleteModal = document.getElementById("btnDeleteModal");
    console.log("asdsad")
    const modal_body = document.getElementById("modalDelete");
    console.log("modal_body")
    template = "";
    
    fetch(`http://localhost:3000/pqrs/${id}`).then(r=> r.json()).then(data =>{

        console.log(data);
        // data.forEach(function(element){

            console.log(id);

            template = `
                    <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Eliminar PQRS</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                
                        <div class="modal-body" id="modal_body">

                            <label for="inputIdDelete">ID #</label>
                            <input type="text" id="inputIdDelete" disabled value="">

                            <label for="inputTipoDelete">Tipo de PQRS</label>
                            <input type="text" id="inputTipoDelete" disabled value="">

                            <label for="inputEmailDelete">Email del user que interpuso la PQRS</label>
                            <input type="email" id="inputEmailDelete" disabled value="">

                            <label for="inputNameDelete">Mensaje de la PQRS</label>
                            <input type="text" id="inputNameDelete" disabled value="">

                        </div>
                        
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" id="btnDeleteModal" onclick="eliminar('${id}')">Eliminar</button>
                        </div>
                    </div>
                </div>
                `  
        
        modal_body.innerHTML = template;

            let inputIdDelete = document.getElementById("inputIdDelete");
            let inputTipoDelete = document.getElementById("inputTipoDelete");
            let inputEmailDelete = document.getElementById("inputEmailDelete");
            let inputNameDelete = document.getElementById("inputNameDelete");

            console.log("entro")
            inputIdDelete.value = data.id;
            inputTipoDelete.value = data.tipo;
            inputEmailDelete.value = data.emailUser;
            inputNameDelete .value = data.mensajePQR;
            

        });
}


function eliminar(id){
    console.log(id);
    if(confirm(`Està seguro de eliminar la #${id}?`)){

        fetch(`http://localhost:3000/pqrs/${id}`,
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





function cerrarSesion(){
    if(confirm("¿Seguro que quieres cerra sesiòn?")){
        document.getElementById("cerrarSesionBtn").setAttribute("href","../../index.html")
        // window.location.href = "../../../riwi-filtro-final(1)/riwi-filtro-final/index.html"
        console.log("adentro")
        console.log(location);
    }
    /* FALTA VALIDAR LOGEADO */
}