/*crear una fincuon que reciba dos paremetros : "user" y " passwor". usando swicth 
 mostrar en consola los siguientes smensaje , segun corresponda 
 1 .- "buenvenido anuestro sitio!"(si el usuario es sadmin y la contraseña es 1234)
 2 .- contraseña incorrecta
 3.-usuario y contrasela incorrectos
 5.-debe ingresar los dator requeridos
 */

 function identificacion (user , password){
     switch (true){
        case user === undefined || password === undefined:
            console.log ("debes ingresar los datos requeridos")
            break ;
        case user ==="admin" && password === 1234 :
             console.log("¡bienvenido a nuestro sitio!")
             break;
             case user === "admin" && password !=1234:
                 console.log ("contraseña incorrecta");
                 break ;
                case  user != "admin" && password !== 1234:
                    console.log ("usuario y contraseña incorrecto")
                    break ; 
                     case user!= "admin" && password ===1234:
                         console.log ("usuario incorrecto")
                         default: "debe ingresar los datos"
                         break;
                         

     }
 }
  (identificacion( ))