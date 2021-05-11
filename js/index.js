function Character(params) {
    this.name = params.name;
    this.age = params.age;    
    this.isHuman = params.isHuman;
    this.isCharacter = true;
    this.canSpeak = true;
    this.timeToSpeak = params.timeToSpeak;    

    this.say = function(phrase) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${this.name} says: ` + phrase);
                resolve();
            }, this.timeToSpeak);
        });
    };
};

function Human(params) {
    this.characteristic = params.characteristic;   
};

Object.setPrototypeOf(Human.prototype, Character.prototype);

function Kolobok() {
    this.canSing = true; 
};

Object.setPrototypeOf(Kolobok.prototype, Character.prototype);

Kolobok.prototype.say = function(phrase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${this.name} says: ` + phrase);
            resolve();
        }, 5000);
    });
};

async function story() {
    let kolobok = new Character({name: 'Kolobok', age: 0.003, isHuman: false, timeToSpeak: 3000});
    let grandFa = new Character({name: 'ded Varfolomei', age: 89, characteristic: 'hungry', isHuman: true});
    let grandMa = new Character({name: 'babka Marfusha', age: 85, characteristic: 'enterprising', isHuman: true});   

    await chapter1(kolobok, grandFa, grandMa);   
};

 async function chapter1(kolobok, grandFa, grandMa) {
    console.log('C H A P T E R : 1');   
    grandFa.say(`"Hi my lovely, ${grandMa.name}, can you bake very delicious ${kolobok.name}? I\'m very very ${grandFa.characteristic}."`);
    grandMa.say(`"Oh, ${grandFa.name}, how can I bake ${kolobok.name} if we have no flour?!"`);
    grandFa.say(`"Please don\'t worry, ${grandMa.name}, go to suseki and find something there.\nYou are very ${grandMa.characteristic}, I believe in you."`);
    grandMa.say(`"Okay, ${grandFa.name}, I go to bake!!"`);
    grandMa.say(`"Oh, ${kolobok.name}, welcome to our world!"`);    
    await kolobok.say(`"Hello, ${grandMa.name}!"`);
    await grandMa.say(`"I'm ${grandMa.age} years old but first time in my life I see such miracle!!"`);    
    await kolobok.say(`"Zdoroven'ki buly, ${grandFa.name}!"`);
    await grandFa.say(`"${kolobok.name}, I'm ${grandFa.age} years old but I'm really in shock to see you alive!!"`);
    await kolobok.say('"Okay predki, let me walk a little and explore nature around))"');   
    console.log('TO BE CONTINUED...');  
};

story();