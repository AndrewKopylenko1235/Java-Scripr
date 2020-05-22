"use scrict"

// const colors = [
//     '#FFFFFF',
//     '#2196F3',
//     '#4CAF50',
//     '#FF9800',
//     '#009688',
//     '#795548',
//   ];

// let body = document.querySelector('body');

// let start = document.querySelector('.start');
// let stop = document.querySelector('.stop');
// let changeColor = () => body.style.backgroundColor = colors[Math.floor(Math.random() * 5)];
// let startInt;

// start.addEventListener('click', e => startInt ? '' : startInt = setInterval(changeColor, 1000));
// stop.addEventListener('click', () => clearInterval(startInt));





//_____________2.1__________//


// const delay = ms => {
//   let promise = new Promise((resolve, reject) =>
//   {
//     setTimeout(() => {
//       resolve(ms);
//     }, ms);
//   }
//   )
//   return promise;
// };

// const logger = time => console.log(`Resolved after ${time}ms`);


// delay(2000).then(logger); 
// delay(1000).then(logger); 
// delay(1500).then(logger); 


//_____________2.2____________//


// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: true },
//   { name: 'Lux', active: false },
// ];

// const toggleUserState = (allUsers, userName) => {
//    let changeState = new Promise((res, rej)=> {
//      const newArr = allUsers.map(user => user.name == userName ? {...user, active : !user.active} : user);
     
//      res(newArr);


//    })

//    return changeState;

// };

// const logger = updatedUsers => console.table(updatedUsers);


// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux').then(logger);

//______________3____________//

let value = document.querySelectorAll('.value');

let daysLeft = value[0];
let hoursLeft = value[1];
let minutesLeft = value[2];
let secondsLeft = value[3]; 

setInterval(
     ()=> {
    let date = new Date(); 
    let timer = new Date ('5.24.2020');
    let time = timer.getTime() - date.getTime();
    
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    daysLeft.textContent = days
    hoursLeft.textContent = hours
    minutesLeft.textContent = mins
    secondsLeft.textContent = secs
  }
, 1000);

