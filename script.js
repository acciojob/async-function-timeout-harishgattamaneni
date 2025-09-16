function helper(text,delay){
	return new Promise((resolve)=>{
		setTimeout(() => {
            resolve(text)
        }, delay);
	})
}
async function run(event){
    event.preventDefault();
	let text=document.getElementById("text").value
    let delay=parseInt(document.getElementById("delay").value)
	if (isNaN(delay) || delay < 0) {
        alert("Please enter a valid delay.");
        return;
    }
    let result=await helper(text,delay)
    document.getElementById("output").innerText=result
}