function returnFirstTwoDrivers( drivers){
  return drivers.slice(0, 2)
}
function  returnLastTwoDrivers (drivers){
    return drivers.slice(2,4) ;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] ;

function createFareMultiplier(numMultiply){
   return (num) => num * numMultiply ;
}

let fareDoubler =  createFareMultiplier(2) ;

let fareTripler = createFareMultiplier(3) ;

function selectDifferentDrivers (drivers, returnDrivers){
  return returnDrivers(drivers) ;
}
    
