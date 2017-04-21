var message = "Vrphwklqjp phdqlqjixo";

var ascii_code=[]


for (var i = 0; i < message.length; i++) {

  	ascii_code.push(message.charCodeAt(i))

}

var meaningful_msg=""

for (var i=0; i<ascii_code.length;i++){
	
	meaningful_msg=meaningful_msg + String.fromCharCode(ascii_code[i]-3) + ""	
	
	
}

console.log(meaningful_msg)