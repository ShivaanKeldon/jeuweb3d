function deg2rad(deg){
    return deg*Math.PI/180;
}

function inArray(val,ar){
    for(var i=0,n=ar.length; i<n; i++){
        if(ar[i]===val) return true;
    }
    return false;
};
function objectExtend(child,mom){
    for(var i in mom){
        child[i] = mom[i];
    }
};
