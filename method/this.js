var myBike2 = {
    maxSpeed : 60,
    driver : "net boy",
    drive: function(speed,time){
        console.log(speed*time);
    },
    test: function(){
        console.log(this);
    }
};
myBike2.test();
console.log(myBike2.maxSpeed);
myBike2.drive(50,3)