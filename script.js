function helper(){
    let text=document.getElementById("text").value
    let delay=parseInt(document.getElementById("delay").value)
	return new Promise((resolve,reject)=>{
		setTimeout(() => {
            resolve(text)
        }, delay);
	})
}
async function run(event){
    event.preventDefault();
    let text=await helper()
    console.log(text)
    document.getElementById("output").innerText=text
}