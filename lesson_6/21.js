const readline = require('readline-sync');

const suit = ['clubs', 'diamonds', 'hearts', 'spades'];
const rank = ['Ace', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
const rankValue = {
  Ace: 1,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  Jack: 10,
  Queen: 10,
  King: 10
};


function joinOr(arr, delimiter = ', ', word = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) + `${delimiter}${word} ${arr[arr.length - 1]}`;
  }
}

function shuffleDeck(suit, rank) {
  let deck = [];

  for (let suitIndex = 0; suitIndex < 52; suitIndex += 1) {
    let suitChoice;
    let rankChoice;

    while (deck.length < 52) {
      suitChoice = Math.floor(Math.random() * suit.length);
      rankChoice = Math.floor(Math.random() * rank.length);

      if (!deck.includes([rankChoice, suitChoice])) {
        deck.push(rank[rankChoice]);
        break;
      }
    }
  }
  return deck;
}

function dealPlayerCards(deck) {
  let playerHand = [];
  playerHand.push(deck.pop());
  playerHand.push(deck.pop());

  return playerHand;
}

function dealDealerCards(deck) {
  let dealerHand = [];
  dealerHand.push(deck.pop());
  dealerHand.push(deck.pop());

  return dealerHand;
}

function hit(deck, hand) {
  hand.push(deck.pop());
  return hand;
}

function aceAnalysis (total, ranks) {

  if (total < 10 && ranks.includes('Ace')) {
    total += 10;
  }

  if (total > 21) {
    switch (ranks.includes('Ace').length) {
      case 2:
      case 3:
      case 4: total -= 10;
    }

  }
  return total;
}

function getTotal(hand, rankValue) {
  let ranks =  hand.map( card => {
    return card.split(' ')[0];
  });

  let total = ranks.map( card => {
    return rankValue[card];
  }).reduce( (a, b) => a + b);

  return aceAnalysis(total, ranks);

}
debugger
while (true) {
  let deck = shuffleDeck(suit, rank);

  let playerHand = dealPlayerCards(deck);
  let dealerHand = dealDealerCards(deck);

  let playerTotal = getTotal(playerHand, rankValue);
  let dealerTotal = getTotal(dealerHand, rankValue);

  while (playerTotal <= 21) {

    console.clear();
    console.log(`The Dealer has:`);
    console.log(`${dealerHand[0]} and unknown card(s).`);
    console.log(`Your cards are:`);
    console.log(`${joinOr(playerHand,', ', 'and')} for a total of: ${playerTotal} `);

    let playerAnswer;
    do {
      playerAnswer = readline.question("Would you like to hit or pass?");
    }
    while (playerAnswer.charAt(0).toLowerCase() !== 'p' && playerAnswer.charAt(0).toLowerCase() !== 'h'); {}

    if (playerAnswer.charAt(0).toLowerCase() === 'p') {
      break;
    } else if (playerAnswer.charAt(0).toLowerCase() === 'h') {
      hit(deck, playerHand);
    }

    playerTotal = getTotal(playerHand, rankValue);
    
  }
  
  while (dealerTotal < 17) {
    hit(deck, dealerHand);
    dealerTotal = getTotal(dealerHand, rankValue);
  }

  console.log();
  console.log(`Dealer total : ${dealerTotal}`);
  console.log(`Your total : ${playerTotal}`);

  if (playerTotal > 21) {
    console.log('Player busts, dealer wins!');
  } else if (dealerTotal> 21) {
    console.log('Dealer busts, player wins!');
  } else if (playerTotal > dealerTotal) {
    console.log('Player wins!');
  } else if (playerTotal < dealerTotal) {
    console.log('Dealer wins!');
  } else {
    console.log('Tie!');
  }


  let answer;
  do {
    (answer = readline.question("play again?"));
  }
  while (answer !== 'n' && answer !== 'y');

  if (answer === 'n') {
    break;
  }
}