async function mostrarDataAdministradores(){
    
    const administradores_counter = document.getElementById("administradores-counter");

    let contadorAdmins = 0;
    template = "";
    
    await fetch("http://localhost:3000/admins").then(r=> r.json()).then(data =>{

        data.forEach(function(element){
            contadorAdmins += 1;

            template = `
                <h3 class="text-dark mt-1"><span data-plugin="counterup">${contadorAdmins}</span></h3>
                <p class="text-muted mb-1 text-truncate">Administradores</p>
            `
        })
        administradores_counter.innerHTML = template;

    });

}    

mostrarDataAdministradores();

async function mostrarDataMarcas(){
    
    const marcas_counter = document.getElementById("marcas-counter");

    let contadorMarcas = 0;
    template = "";
    
    await fetch("http://localhost:3000/brands").then(r=> r.json()).then(data =>{

        data.forEach(function(element){
            contadorMarcas += 1;

            template = `
                <h3 class="text-dark mt-1"><span data-plugin="counterup">${contadorMarcas}</span></h3>
                <p class="text-muted mb-1 text-truncate">Marcas</p>
                </div>
            `
        })
        marcas_counter.innerHTML = template;

    });

}    

async function mostrarDataPQRS(){
    
    const pqrs_counter = document.getElementById("pqrs-counter");

    let contadorPQRS = 0;
    template = "";
    
    await fetch("http://localhost:3000/pqrs").then(r=> r.json()).then(data =>{

        data.forEach(function(element){
            contadorPQRS += 1;

            template = `
                <h3 class="text-dark mt-1"><span data-plugin="counterup">${contadorPQRS}</span></h3>
                <p class="text-muted mb-1 text-truncate">PQRS</p>
            `
        })

        pqrs_counter.innerHTML = template;

    });

}    

mostrarDataAdministradores();
mostrarDataMarcas();
mostrarDataPQRS();



