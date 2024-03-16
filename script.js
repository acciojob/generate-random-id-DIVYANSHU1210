function makeid(l) {
	const charStr = "abcdefghigklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	  let res = "";
	// write your code here  
	for(let i=0; i<l; i++){
		const p = Math.floor((Math.random()*charStr.length));
		res += charStr.charAt(p)
	}
	return res;
} 

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
