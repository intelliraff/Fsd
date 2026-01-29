const prompt=require('prompt-sync')();

var c=prompt("Enter the number: ");

function factorial(x){
	if (x==1){
		return 1;
	}
	return x*factorial(x-1);

}

function add(y){
	let c=String(y);
	var lenofy=c.length;
	var result=0;
	for(let i=0;i<lenofy;i++){
		result=result+factorial(Number(c[i]));
	}
	return result;
}


var final=add(c);
console.log(final);
if(final==c){
	console.log("Yes "+c+" is a STRONG number");

}

else{

	console.log("No "+c+" is not a STRONG number");
}

