/* const score = {
      Win: 0,
      Loose: 0,
      Tie: 0
    };
    */
    let score = JSON.parse( localStorage.getItem('score')) || {
      Win: 0,
      Loose: 0,
      Tie: 0
    };
    // Get data form local storage
    // Get data form local storage
    // console.log(JSON.parse( localStorage.getItem('score')));

    updateScoreElement();
  
   if(score===null){
     score = {
      Win: 0,
      Loose: 0,
      Tie: 0
    };
   } 
     
    function playGame(playerMove) {
      let computerMove = pickComputerMove();
      let result = '';

      if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
          result = 'Loose';
        }

        else if (computerMove === 'paper') {
          result = 'Win';
        }

        else if (computerMove === 'scissors') {
          result = 'Tie';
        }
      }

      else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
          result = 'Win';
        }

        else if (computerMove === 'paper') {
          result = 'Tie';
        }

        else if (computerMove === 'scissors') {
          result = 'Loose';
        }

      }

      else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
          result = 'Tie';
        }

        else if (computerMove === 'paper') {
          result = 'Loose';
        }

        else if (computerMove === 'scissors') {
          result = 'Win';
        }
      }
      //  <__________For updating Score___________>
      if (result === 'Win') {
        score.Win += 1;
      }
      else if (result === 'Loose') {
        score.Loose += 1;
      }
      else if (result === 'Tie') {
        score.Tie += 1;
      } 

      //<------------For storing in local storage-------- JSON.stringify convest js obj into string>

      localStorage.setItem('score', JSON.stringify(score)); 

      updateScoreElement();
      
      document.querySelector('.js_result').innerHTML=result;

      document.querySelector('.js_moves').innerHTML=`You
     <img src="imgs/${playerMove}-emoji.png" class="move-icon" >
     <img src="imgs/${computerMove}-emoji.png" class="move-icon" > Computer`;

      // alert(`Your choice is ${playerMove}. Computer choice is ${computerMove}. ${result}.
      // Wins:${score.Win},Looses:${score.Loose},Ties:${score.Tie}`);

    }
    function updateScoreElement(){
      document.querySelector('.js_score')
      .innerHTML=`Wins:${score.Win},Looses:${score.Loose},Ties:${score.Tie}`;
    }

    function pickComputerMove() {
      let computerMove = '';
      const rand_value = Math.random();
      if (rand_value >= 0 && rand_value < 1 / 3) {
        computerMove = 'rock';
      }

      else if (rand_value >= 1 / 3 && rand_value < 2 / 3) {
        computerMove = 'paper'
      }

      else if (rand_value >= 2 / 3 && rand_value <= 1) {
        computerMove = 'scissors'
      }

      return computerMove;

    }