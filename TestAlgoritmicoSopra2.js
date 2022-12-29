
//Dado el eanunciado, he interpretado que los datos de personas vienen dados de esta forma, en caso de que sean otorgados de otra forma adaptaria el codigo.

var personasPrueba = ["masculino", 18, "femenino", 20, "masculino", 19, "femenino", 15, "masculino", 65, "femenino", 10, "masculino", 13, "femenino", 18, "masculino", 23, "femenino", 17, "masculino", 17, "femenino", 40, "masculino", 34, "femenino", 4, "masculino", 7];


function leerPersonas(datosPersonas){
    
    var personas = [];

    for(i = 0; i < datosPersonas.length; i += 2){
        personas.push([datosPersonas[i], datosPersonas[i + 1]]);
      console.log([datosPersonas[i], datosPersonas[i + 1]]);
    };

    var canPerMayEda = 0;
    var canPerMenEda = 0;
    var canPerMasMayEda = 0;
    var canPerFemMenEda = 0;
    var porPerMayEda = 0;
    var porMujTot = 0;
    var mujTot = 0;
      
     console.log(personas.length);
    for(i = 0; i < personas.length; i++){
        
        if(personas[i][1] >= 18){
            canPerMayEda ++;
        };

        if(personas[i][1] < 18){
            canPerMenEda ++;
        };

        if(personas[i][0] == "masculino" && personas[i][1] >= 18){
            canPerMasMayEda ++;
        };

        if(personas[i][0] == "femenino" && personas[i][1] < 18){
            canPerFemMenEda ++;
        };
        console.log(personas[i][0]);
        if(personas[i][0] == "femenino"){
            mujTot ++;
          
        };
        
    };

    console.log(mujTot);
    console.log(canPerFemMenEda);
  
    porPerMayEda = (canPerMayEda / personas.length)*100;

    porMujTot = (mujTot / personas.length)*100;

    console.log("Cantidad de personas mayores de edad: " + canPerMayEda, "Cantidad de personas menores de edad: " + canPerMenEda, "Camtidad de personas masculinas mayores de edad: " + canPerMasMayEda, 
                    "Cantidad de personas femeninas menores de edad: " + canPerFemMenEda, "Porcentaje de personas mayores de edad: " + porPerMayEda, "Porcentaj de mujeres total: " + porMujTot);
};

var personasResultado = leerPersonas(personasPrueba);


