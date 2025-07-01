/*
t = t0/sqrt(1-(v^2/c^2))
v = velocity of the travelling spacecraft
t0 = proper time / time measured on the travelling spacecraft
t = dilated time / time felt by a stationary observer on earth
c = velocity of light = 300000 km/sec
*/

//https://www.wolframalpha.com/input?i=time+dilation+calculator
//https://www.omnicalculator.com/physics/time-dilation
document.getElementById('enterbtn').addEventListener('click', timedilation);

function timedilation(){
    delta_t = document.getElementById('delta_t').value; //Dilated Time: Time For The Light From Distant Object to Reach Earth (Years)
    units = document.getElementById('transtype').value; //light years for now
    t_0 = document.getElementById('t_0').value; //Years
    traveller_speed = document.getElementById('traveller_speed').value;
    c = 2.998 * (10**8); //meters per second
    v = traveller_speed * c;   
   lorentz_factor = 1/Math.sqrt(1-((v**2)/(c**2)))

    dilated_time = (t_0 * lorentz_factor);
    document.getElementById('delta_t').innerHTML = Math.round(dilated_time,2);
    console.log("Dilated Time =",dilated_time, " Rounded value ",Math.round(dilated_time,2));
}