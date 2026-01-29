const sub=function (a,b){
    return a-b;
};

const add=function(a,b){
    return a+b;
};

const mul=function(a,b){
    return a*b;
};

exports.div=function(a,b){
    return a/b;
};


const dayy=function(datee){
    return datee.getDay();
}
exports.dayy=dayy;

exports.sub=sub;
exports.add=add;
exports.mul=mul;