const result= document.getElementById('result');
const restart= document.querySelector('.submit');
restart.addEventListener('click',()=>{
	result.innerText = 'DRAW';
    restart.innerText = 'PLAY AGAIN';
	secondgame();
	restart.addEventListener('click', () => {
		window.location.reload();
	})
})
const secondgame = ()=>{
    let Ai_score = 0;
    let player_score = 0;
    const paper = document.querySelector('.paper');
    const two = document.querySelector('.two');
    const rock = document.querySelector('.rock');
    const player_movement = [rock, paper, two];
    const Ai_movement = ['rock', 'paper', 'two'];

    const playgame = () =>{
        player_movement.forEach(action => {
			action.addEventListener('click', () => {
				const actionList = action.classList;
				const actionClassName = actionList[0];
				const num = Math.floor(Math.random()*3);
				const Ai_choice = Ai_movement[num];
				winner(actionClassName, Ai_choice)
			})
		})
    }
    
	const winner = (player, Ai) => {
		const playerScore = document.querySelector('.player-score');
		const AiScore = document.querySelector('.Ai-score');
        const return_report = document.querySelector('.turn');

        if (player == 'rock') {
			if (Ai == 'paper') {
				result.innerText = 'You Lost!';
				result.style.color = "red";
                return_report.textContent = 'Ai choosed paper'
				Ai_score++;
				AiScore.textContent = Ai_score.toString();

			} else {
				result.innerText = 'You Won!'
				result.style.color = "green";
                return_report.textContent = 'Ai choosed two'
				player_score++;
				playerScore.textContent = user_score.toString();
			}
		}
        else if (player == 'two') {
			if (Ai == 'rock') {
				result.innerText = 'You Lost!';
				result.style.color = "red";
                return_report.textContent = 'Ai choosed rock'
				Ai_score++;
				AiScore.textContent = Ai_score.toString();
			} else {
				result.innerText = 'You Won!';
				result.style.color = "green";
                return_report.textContent = 'Ai choosed paper'
				player_score++;
				playerScore.textContent = player_score.toString();
			}
		}
        else if (player == 'paper') {
			if (Ai == 'two') {
				result.innerText = 'You Lost!';
				result.style.color = "red";
                return_report.textContent = 'Ai choosed two'
				Ai_score++;
				AiScore.textContent = Ai_score.toString();
			} else {
				result.innerText = 'You Won!';
				result.style.color = "green";
                return_report.textContent = 'Ai choosed rock'
				player_score++;
				playerScore.textContent = player_score.toString();
			}
		}
    }
    playgame();   
}