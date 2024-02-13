const ADMINS_END_POINT = "http://localhost:3000/admins";

/* CAPTURO INPUTS */

const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");

/* Funcion para comprobar las credenciales de un usuario */
async function singInUser() {

    try {
        /* Se verifica  si el correo existe mediante una peticon http */
        const response = await fetch(`http://localhost:3000/admins?email=${inputEmail.value}`)
        const data = await response.json()

        console.log(data);
        /* Queremos que si la respuesta tiene informacion valide la contraseña 
        -> data.length retorna TRUE cuando el array contiene algo
        -> data.length retorna FALSE cuando el array este vacio [] */
        if(data.length){

            /* una vez verificamos el correo, veridicamos la contraseña */
            if(inputEmail.value !="" && inputPassword.value !=""){
                
                console.log(inputEmail.value);
                console.log(inputPassword.value);

                if( data[0].email == inputEmail.value && data[0].password == inputPassword.value){
                    
                    /* Guardar la informacion del usuario en el LocalStorage */
                    localStorage.setItem("UserLogin",data[0].id)
                    console.log(localStorage);
                    /* una vez se pasan todas las credenciales
                        redireccionar al usuario */
                    window.location.href = "../riwi-filtro-final/admin/admins/index.html"
    
                } else {    /* La contraseña no es correcta y avisar */
                    alert("Correo o contraseña incorrecta")
                }
            }
            else{
                alert("Rellene todos los campos marcados");
            }

        } else { /* EL correo no esta registrado y avisar */
            alert("Correo o contraseña incorrecta")
        }

    } catch (error) { /* manejo de errores */
        console.error(error)
    }
}
