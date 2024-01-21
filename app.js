// let x = prompt('Dame un numero maximo para la dificultad'); //incrementar la dificultad
x = 10;

// al incrementar la dificultad, tambien deberian de aumentar los intentos - PROYECTO FUTURO

//let pV = 'vez';
let c = 1; 
// c = contador , inicia en 1 por el intento por default
let nU = 0;
//nU = numeroUsuario
let nS = Math.floor(Math.random()*x) + 1; 
console.log(nS);
// nS = numeroSecreto 
mc = 3;
// mc = maximo contador 

while(nS != nU) //mientras nS sea diferente de nU se va a repetir el ciclo
{
    nU = parseInt(prompt(`Dame un numero entre el 1 y el ${x}: `)); 

    console.log(typeof(nU));
    //Guardamos el valor en la consola

    if (nS == nU) //Igualdad de los numeros
    {
        alert(`¡Adivinaste el número! : El número es ${nU}. Lo lograste en ${c} ${c == 1 ? 'vez' : 'veces' }`);
        // se llama a la variable nU, debemos de cambiar '' por `` para hacer un string
        // "?" se convierte en un "if" y ":" se convierte en "else"
    } else
    {
        if(nU > nS)
        {
            alert("El numero secreto es menor al introducido");
        } else 
        {
            alert("El numero secreto es mayor al introducido");
        }
        c ++; // incremento del contador cuando se repite el ciclo
        console.log(c); 
        //pV = 'veces'; //cambiamos la variable a plural una vez c >= 2

        if ( c > mc ) 
        {
            alert(`¡Llegaste al maximo de ${mc} intentos. El número era ${nS}`)
            break; 
        } //se forza el cierre una ves se pasen 3 intentos

        //alert('Lo lamento, no has adivinado el numero'); 
    }
}