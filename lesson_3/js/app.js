console.log("saaan");


letusers = ["jaks", "justin_1099_test", "alber" ,"kiloo"]
console.log("my folowings;", letusers.length);

for(letusers of letusers) {
    console.log("@" + letusers + "😿")
}


letoperations = [10_000, -1000, +5000];
let doxod = 0;
let rasxod = 0;


for (letoperation of letoperations ) {
    if (letoperation >0) {
        doxod += letoperation;
    } else {
        rasxod += Math.abs(letoperation);
    }
}

console.log("Doxod;", doxod)
console.log("Rasxod", rasxod)


letcars = ["01kg123rte", "02kg123rte", "03kg123rte"];

for (let car of letcars) {
    letcarCode = car.slice(0,2);
    console.log(letcarCode)

    switch (letcarCode) {
        case "01":
            console.log(letcarCode + "= Bishkek");
            break;
        case "02":
            console.log(letcarCode + "= Osh");
            break;
        case "03":
            console.log(letcarCode + "= Batken");
            break;
    }
    console.log("invalid code")
}