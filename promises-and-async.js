console.clear();


const washUp = () => {
    console.log("Wash your hands!!!!");
}

const callMe = async name => {
    await new Promise((resolve, reject) => {
setTimeout(() => {
    console.log(`Time for dinner, ${name}!!!`);    

    return resolve();
    }, 2000);
})    
}

/*setTimeout(name => {
   console.log("done like dinner");

    callMe(name);
}, 2000, 'Seunghwan Kim');


new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Done like dinner");
        resolve();
    }, 2000);
})
.then(() => callMe('Seunghwan Kim'));*/


const main = async (name) => {
 await new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Done like dinner");
        return resolve();
    });
 });

 await callMe(name);

 washUp();
};
main('Seunghwan Kim');

(() => {
    console.log("I'm iffy about IFFEs");
})();