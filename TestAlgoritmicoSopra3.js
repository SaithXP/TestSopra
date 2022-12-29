
var tarifa = 6;


function leerTarifa(tarifa){
    return tarifa;
};

function leerHorasTrabajadas(horasSemanales){
    return horasSemanales;
};

function calcularSalarioEmpleado(tarifa, horasSemanales){
    if(horasSemanales <= 40){
        return tarifa *  horasSemanales;
    }else{
        return (tarifa * 40) + ((tarifa + tarifa / 2) * (horasSemanales - 40));
    }

};

var salario = calcularSalarioEmpleado (leerTarifa(6), leerHorasTrabajadas(40));

console.log(salario);


