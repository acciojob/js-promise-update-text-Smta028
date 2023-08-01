//your JS code here. If required.
const output= document.getElementById("output");
return new Promise((resolve,reject)=>{
	resolve=>setTimeout(()=>{
		output.innerHTML="Hello,world!"
	},1000)
})

