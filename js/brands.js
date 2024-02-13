const btnDetails = document.querySelectorAll("btnDetails");
const btnEdit = document.querySelectorAll("btnEdit");
const btnDelete = document.querySelectorAll("btnDelete");




/* listar- MOSTRAR ADMINS USERS */
function listarBrands(){
    
    const tbody = document.getElementById("tbody");
    console.log(tbody)
    template = "";
    
    fetch("http://localhost:3000/brands").then(r=> r.json()).then(data =>{

        data.forEach(function(element){
            console.log(element);
            let idElement = element.id;
            console.log(idElement);
            template = `
            <tr>
                
                <td>${element.id}</td>
                <td><img width="100px" src="${element.logo}" alt="logo"></td>
                <td>${element.nombre}</td>
                <td>${element.local}</td>
                <td>${element.piso}</td>
                <td>
                    ${element.horarios}
                </td>
                <td>
                    <a href="${element.sitioWeb}">Sitio web</a>
                </td>
                <td>
                    <button class="btn btn-sm btn-info">Detalles</button>
                    <button class="btn btn-sm btn-warning">Editar</button>
                    <button class="btn btn-sm btn-danger">Eliminar</button>
                </td>
            </tr>
            `
            tbody.innerHTML += template;

            // function cargarEditar(id){
            //     console.log("entro")
            //     let inputDetail = document.getElementById("inputIdDetail").value = element.id;
            //     let inputNameDetail = document.getElementById("inputNameDetail").value = element.names;
            //     let inputEmailDetail = document.getElementById("inputEmailDetail").value = element.email;
            // }

        })

    });

}    


listarBrands();



function crearBrand(){

    const inputLogoCreate = document.getElementById("inputLogoCreate");
    const inputNameCreate = document.getElementById("inputNameCreate");
    const inputLocalCreate = document.getElementById("inputLocalCreate");
    const inputPisoCreate = document.getElementById("inputPisoCreate");
    const inputHorariosCreate = document.getElementById("inputHorariosCreate");
    const inputPageCreate = document.getElementById("inputPageCreate");



    // const btnSaveChangesCreateAdmin = document.getElementById("btnSaveChangesCreateAdmin");
    
    if(inputLogoCreate.value!= "" && inputNameCreate.value!= "" && inputLocalCreate.value!= "" && inputPisoCreate.value!= "" && inputHorariosCreate.value!= "" && inputPageCreate.value!= "" ){

        fetch("http://localhost:3000/brands",{

        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            logo:inputLogoCreate.value,
            nombre:inputNameCreate.value,
            local:inputLocalCreate.value,
            piso:inputPisoCreate.value,
            horarios:inputHorariosCreate.value,
            sitioWeb: inputPageCreate.value,


        })

    }).then(r => r.json()).then(data => {

        alert("Usuario creado exitosamente!")

    });
  
    }
    else{
        alert("rellene todos los campos debidamente");
    }

    

}

