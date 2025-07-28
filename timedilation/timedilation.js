/*
t = t0/sqrt(1-(v^2/c^2))
v = velocity of the travelling spacecraft
t0 = proper time / time measured on the travelling spacecraft
t = dilated time / time felt by a stationary observer on earth
c = velocity of light = 300000 km/sec
*/

//https://www.wolframalpha.com/input?i=time+dilation+calculator
//https://www.omnicalculator.com/physics/time-dilation
document.getElementById('enterbtn').addEventListener('click', wrapper);

function wrapper(){
    document.getElementById("tooltip").innerHTML = ""
    delta_t = document.getElementById('delta_t').value; //Dilated Time: Time For The Light From Distant Object to Reach Earth (Years)
    units = document.getElementById('transtype').value; //light years for now
    t_0 = document.getElementById('t_0').value; //Years
    traveller_speed = document.getElementById('traveller_speed').value;
    c = 2.998 * (10**8); //meters per second

    switch(units){
        case "LY":
            v = traveller_speed * c;
            break;
        case "KM":
            v = traveller_speed * (10**3);
            break;
        case "MiPS":
            v = traveller_speed * 1609.34;
            break;
        default:
            v = traveller_speed;
    }
    if(v > c){
        document.getElementById("tooltip").innerHTML = "Warning! Speed of any object can't exceed speed of light!"
    }
    
    if (delta_t == "")  {
        timedilation(t_0,v,c);
    }else {
        propertime(delta_t,v,c);
    }
   
}

function timedilation(t,v,c){
    lorentz_factor = 1/Math.sqrt(1-((v**2)/(c**2)))

    dilated_time = (t * lorentz_factor);
    document.getElementById('delta_t').value = dilated_time.toFixed(5); //use .value for input field types. use .innerHTML for p type fields
}

function propertime(t,v,c){
    lorentz_factor = 1/Math.sqrt(1-((v**2)/(c**2)))

    proper_time = (t / lorentz_factor);
    document.getElementById('t_0').value = proper_time.toFixed(5); //use .value for input field types. use .innerHTML for p type fields
}