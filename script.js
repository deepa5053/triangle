//let base =  10;
//let height = 13;
//console.log((base*height)/2);

function Area() {
    var base = parseInt(document
        .getElementById("base").value);
     console.log (base);
    var height = parseInt(document
        .getElementById("height").value);

    console.log(typeof(base));
    var Area = (base + height) / 2;

    //var area = Math.sqrt(s * ((s - side1) 
      //              * (s - side2) * (s - side3)));
    document.getElementById(
        "display").innerHTML = area;
}