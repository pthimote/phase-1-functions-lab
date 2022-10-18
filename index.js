// Code your solution in this file!
// function distanceFromHqInBlocks(start) {
//     console.log(start)
//     if (42 > start) {
//         return 42 - start;
//     } else if (42 < start){
//         return start - 42;
//     }
// }
// function distanceFromHqInFeet(start) {
//     console.log(start)
//    if (start < 42) {
//     return (42 - start) * 264;
//    } else if (42 < start) {
//     return (start - 42 ) * 264;
//    }
// }
// function distanceTravelledInFeet(start, destination) {
//     console.log(start)
//     console.log(destination)
//     if (start < destination)  {
//         return (destination - start) * 264;
//     } else if ( destination < start) {
//         return (start - destination) * 264
//     }
// }
// function calculatesFarePrice(start, destination) {
//    const distance = distanceTravelledInFeet(start, destination)
//    if (distance <= 400) {
//     return 0;
//    } else if (distance > 400 && distance <= 2000) {
//     return 2.56;
//    } else if (distance > 2000 && distance <=2500) {
//     return 25;
//    } else {
//     return "cannot travel that far";
//    }
// }

function distanceFromHqInBlocks(start) {
    if (42 > start) {
        return 42 - start
    }else if (42 < start) {
        return start - 42
    }
}

function distanceFromHqInFeet(start) {
    if (start < 42) {
        return (42 - start) * 264
    } else if (42 < start) {
        return (start - 42) * 264
    }
}

function distanceTravelledInFeet (start, destination) {
    if (start < destination) {
        return (destination - start) * 264
    } else if (destination < start) {
        return (start - destination) * 264
    }
}

function calculatesFarePrice(start, destination) {
   const distance = distanceTravelledInFeet(start, destination)
   if (distance <= 400) {
    return 0;
   } else if (distance > 400 && distance <= 2000) {
    return 2.56;
   } else if (distance > 2000 && distance <=2500) {
    return 25;
   } else {
    return "cannot travel that far";
   }
}function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
     return 0;
    } else if (distance > 400 && distance <= 2000) {
     return 2.56;
    } else if (distance > 2000 && distance <=2500) {
     return 25;
    } else {
     return "cannot travel that far";
    }
 }