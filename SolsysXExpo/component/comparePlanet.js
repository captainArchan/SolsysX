function findRadius(planet1, planet2){
    if(planet1 == 0 && planet2 == 0){
        return [0,0]
    }
    else if(planet1 > planet2){
        if(planet1/4 > planet2){
            return [270, planet2*270/planet1];
        }else{
            return [150, planet2*150/planet1];
        }
    }else{
        if(planet2/4 > planet1){
            return [planet1*270/planet2, 270];
        }else{
            return [planet1*150/planet2, 150];
        }
    }
}

export default findRadius;