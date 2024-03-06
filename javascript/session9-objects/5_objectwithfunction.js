const circle={
    radius:2.2,
    area:function(){
        return Math.PI * this.radius * this.radius;
    },
    cir: function(){
        return 2 * Math.PI * this.radius;
    }
}
console.log("Area:",circle.area());
console.log("Circumference:",circle.cir());