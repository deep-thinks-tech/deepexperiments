/*
t = t0/sqrt(1-(v^2/c^2))
v = velocity of the travelling spacecraft
t0 = proper time / time measured on the travelling spacecraft
t = dilated time / time felt by a stationary observer on earth
c = velocity of light = 300000 km/sec
*/
document.getElementById('enterbtn').addEventListener('click', timedilation);

function timedilation(){
    delta_t = document.getElementById('delta_t').value; //Dilated Time: Time For The Light From Distant Object to Reach Earth (Years)
    units = document.getElementById('transtype').value; //light years for now
    t_0 = document.getElementById('t_0').value; //Years
    v = document.getElementById('traveller_speed').value;
    c = 1;
    console.log('v= ',v);   
   lorentz_constant = 1/Math.sqrt(1-((v^2)/(c^2)))
    console.log("Lorentz Constant = ",lorentz_constant);
    dilated_time = t_0 * lorentz_constant;
    console.log("Dilated Time =",dilated_time);
}