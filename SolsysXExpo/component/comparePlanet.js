function findRadius(planet1, planet2){
    if(planet1 > planet2){
        if(planet1/4 > planet2){
            return [300, planet2*300/planet1];
        }else{
            return [150, planet2*150/planet1];
        }
    }else{
        if(planet2/4 > planet1){
            return [planet1*300/planet2, 300];
        }else{
            return [planet1*150/planet2, 150];
        }
    }
}

export default findRadius;