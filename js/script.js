'use strict';
const field = document.querySelector('.game-flex');
const btn = document.querySelector('.start-btn');
const players = document.querySelector('.players');
const btns = document.querySelectorAll('.btn');

btn.onclick = start;
field.addEventListener('click',move);

function start(){
	const random = Math.random();
	if(random<=0.5){
		players.textContent = 'Ходит: X';
	}else players.textContent = 'Ходит: 0';
	btn.classList.toggle('unvisible');
	btns.forEach(item=>{
		item.textContent = '';
	})
}

function move(event){
	if(players.textContent === 'Ходит: X' && 
		event.target.textContent===''){
		event.target.textContent = 'X';
		players.textContent = 'Ходит: 0';
	}else if(players.textContent === 'Ходит: 0' && 
			event.target.textContent===''){
			event.target.textContent = '0';
			players.textContent = 'Ходит: X';
	}
	if(winner()){
		players.textContent = `Winner:${winner()}`;
		btn.classList.toggle('unvisible');
	}
	const arr = [];
	btns.forEach(btn=>{
		if(btn.textContent)arr.push(btn.textContent);
		
	});
	if(arr.length===9&&!winner()){
		players.textContent = 'Ничья';
		btn.classList.remove('unvisible');
	}
}

function winner(){
	if (btns[0].textContent == "X" && btns[1].textContent == 'X' && btns[2].textContent == 'X' ||
		 btns[3].textContent == "X" && btns[4].textContent == 'X' && btns[5].textContent == 'X' ||
		 btns[6].textContent == "X" && btns[7].textContent == 'X' && btns[8].textContent == 'X' ||
		 btns[0].textContent == "X" && btns[3].textContent == 'X' && btns[6].textContent == 'X' ||
		 btns[1].textContent == "X" && btns[4].textContent == 'X' && btns[7].textContent == 'X' ||
		 btns[2].textContent == "X" && btns[5].textContent == 'X' && btns[8].textContent == 'X' ||
		 btns[0].textContent == "X" && btns[4].textContent == 'X' && btns[8].textContent == 'X' ||
		 btns[6].textContent == "X" && btns[4].textContent == 'X' && btns[2].textContent == 'X' )
		return 'X';
	if (btns[0].textContent == "0" && btns[1].textContent == '0' && btns[2].textContent == '0' ||
		 btns[3].textContent == "0" && btns[4].textContent == '0' && btns[5].textContent == '0' ||
		 btns[6].textContent == "0" && btns[7].textContent == '0' && btns[8].textContent == '0' ||
		 btns[0].textContent == "0" && btns[3].textContent == '0' && btns[6].textContent == '0' ||
		 btns[1].textContent == "0" && btns[4].textContent == '0' && btns[7].textContent == '0' ||
		 btns[2].textContent == "0" && btns[5].textContent == '0' && btns[8].textContent == '0' ||
		 btns[0].textContent == "0" && btns[4].textContent == '0' && btns[8].textContent == '0' ||
		 btns[6].textContent == "0" && btns[4].textContent == '0' && btns[2].textContent == '0' )
		 return '0';
}
