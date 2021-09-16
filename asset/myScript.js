
let count = 0;

let span = document.querySelector('.section_one .countText');
let allBtn = document.querySelectorAll('#btn');

allBtn.forEach(function(item){
	item.addEventListener('click', function(event){
		const matching = event.target.classList;
		if (matching.contains('decrease')) {
			count--;
			span.style.color = '#dc3545';
		}
		else if(matching.contains('increase')){
			count++;
			span.style.color = '#05ab31';
		}
		else{
			count = 0;
			span.style.color = '#000000';
		}
		span.textContent = count;
	});
});


