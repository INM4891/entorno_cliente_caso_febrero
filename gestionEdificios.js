
//Creamos la función constructora que se inicializa con varios parámetros que se asignan como propiedades de this

function Edificio(calle, numero, codigoPostal) {

    this.calle = calle;
    this.numero = numero;
    this.codigoPostal = codigoPostal;
    this.plantas = new Array();

    this.agregarPlantasyPuertas = function (numplantas, puertas) { // Método para añadir plantas y puertas al edificio indicadas por parámetros

        if (this.plantas.length == 0)   // Comprobamos si el array está vacío
        {
            for (var i = 0; i < numplantas; i++)  // Utilizamos bucle para rellenar el array de plantas con un array por planta
            {
                this.plantas[i] = new Array();
                for (var j = 0; j < puertas; j++)   // Utilizamos bucle para añadir en cada array de plantas las puertas que hay, tb array
                {
                    this.plantas[i].push("");    // Mediante metodo push añadimos elementos al array de puertas
                }
            }
        }
        else    // Si esta creado el array se añaden plantas y puertas a las que ya había
        {
            for (var i = 0; i < numplantas; i++) {
                this.plantas[this.plantas.length] = new Array();
                for (var j = 0; j < puertas; j++) {
                    this.plantas[this.plantas.length - 1].push("");
                }
            }
        }
    }

    this.modificarNumero = function (numero) { //Método para modificar el número del edificio
        this.numero = numero;
    };

    this.modificarCalle = function (calle) { //Método para modificar la calle del edificio
        this.calle = calle;
    };

    this.modificarCodigoPostal = function (codigoPostal) { //Método para modificar el código postal del edificio
        this.codigoPostal = codigoPostal;
    };

    this.mostrarCalle = function () { //Método que devolverá el nombre de la calle
        return this.calle;
    }
    this.mostrarNumero = function () {//Método que devolverá el número donde está situado el edificio
        return this.numero;
    }
    this.mostrarCodigoPostal = function () {//Método que devolverá el código postal de donde está situado el edificio
        return this.codigoPostal;
    }

    this.agregarPropietario = function (nombre, planta, puerta) { // Método para asignar un propietario a un piso.

        this.plantas[planta][puerta] = nombre;
        
        document.write("<li>" + nombre + " es el nuevo propietario de la puerta " +
            (puerta+1) + " de la planta " +
            (planta+1) + ".</br></li>");
    }
    //Imprimimos por pantalla los datos 
    this.imprimePlantas = function () {

        document.write("<h3>Listado de propietarios del edificio de la calle " + this.mostrarCalle() + " con numero: " + this.mostrarNumero() +" y CP: " + this.codigoPostal +  "</h3>");
        for (var i = 0; i < this.plantas.length; i++) {
            for (var j = 0; j < this.plantas[i].length; j++) {

                if (this.plantas[i][j] == ""){
                    this.plantas[i][j] = "--------------------"; //Comprabamos si hay propietario o no para mostrar un dato u otro
                } 
                
                document.write(
                    "<li>El propietario de la puerta " + parseInt(j + 1) +
                    " de la planta " + parseInt(i + 1) +
                    ": " + this.plantas[i][j] + "</li>");
            }
        }
    }

    document.write('Nuevo edificio construido en: <br>Calle: ' + this.calle + '<br>nº: ' + this.numero + ', <br>CP:' + this.codigoPostal + '<br>'); //Mostramos la información por pantalla
}
document.write("<h1>Caso Febrero: Gestión de Edificios</h1>");

var edificioUno = new Edificio('Gran Capitán', '58', '41001');
document.write('<br>');
var edificioDos = new Edificio('Mora Claros', '29', '41003');

document.write('<br>');

edificioUno.agregarPlantasyPuertas(2, 3);

document.write("<br/>Agregamos 4 propietarios al Edificio Uno: <br/><br/>");
edificioUno.agregarPropietario("José Martín", 0, 0);
edificioUno.agregarPropietario("María Jiménez", 0, 1);
edificioUno.agregarPropietario("Pablo Carbonell", 0, 2);
edificioUno.agregarPropietario("Silvia Portillo", 1, 1);
edificioUno.imprimePlantas();