const findTheOldest = function(people) {
    let maxPeople = people[0];
    let maxLife = 0;
    let life = 0;

    for(let i = 0; i < people.length; i++) {
        if(people[i].yearOfDeath === undefined){
            life = new Date().getFullYear() - people[i].yearOfBirth;
        } else {
            life = people[i].yearOfDeath - people[i].yearOfBirth;
        }
        
        if(life > maxLife) {
            maxPeople = people[i];
            maxLife = life;
        }
    }

    return maxPeople;
};

// Do not edit below this line
module.exports = findTheOldest;
