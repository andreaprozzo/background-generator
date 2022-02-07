const myPromises = new Promise((resolve,reject) => {
  if(false) {
    setTimeout(() => {
    resolve('ho avuto SUCCESSO');
    }, 1000);
  } else {
    reject('Ho fallito!')
  }
});



myPromise
  .then(value => console.log(value + '!!!!'))
  .catch(rejectValue => console.log(rejectValue));
