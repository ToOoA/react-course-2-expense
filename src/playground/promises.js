const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(true) {
            resolve('This is my resolve Data');
        } else {
            reject('Something went wrong');
        }
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

console.log('after');