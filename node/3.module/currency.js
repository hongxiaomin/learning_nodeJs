var canadianDollar=0.91;
function roundTwoDecimals(amount){
    return Math.round(amount*100)/100;
}

exports.canadianTous=function(canadian){
    return roundTwoDecimals(canadian*canadianDollar);
}
exports.USTOCanadian=function (us) {
    return roundTwoDecimals(us/canadianDollar);
}