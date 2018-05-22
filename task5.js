(function(){
var count =1;
document.getElementById('Button').addEventListener('click', function(){

	count ++
	if (count%2===0) {
		document.getElementById('Box').style.backgroundColor ="green"
		document.addEventListener('Button').innerHTML = 'make red'

	}
else {
	document.getElementById('Box').style.backgroundColor = "red"
    document.addEventListener('Button').innerHTML = 'make green'

}

})
})()