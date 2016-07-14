
'use strict';

class Fighter {
    constructor (name = 'Anonymous', power = 5, health = 100) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDemage(damage) {
        this.health -= damage;
        console.log(`${this.name}\'s health: ${this.health}`);
    }

    hit(enemy, point) {
        let damage = point * this.power;
        enemy.setDemage(damage);
    }
}

class ImprovedFighter extends Fighter {
    doubleHit(enemy, point) {
        super.hit(enemy, point * 2);
    }
}

function fight(fighter, improvedFighter, ...points) {

    let winner = -1;

    for (let i = 0; i < points.length; i++) {

        if ((i+1) % 2 == 0) {
            fighter.hit(improvedFighter, points[i]);
        } else {
            improvedFighter.doubleHit(fighter, points[i]);
        }

        let detectWinner = (fighter1, fighter2) => {
            if (fighter1.health <= 0 || fighter2.health <= 0) {
                if (fighter1.health < fighter2.health && fighter2.health > 0) {
                    console.log(`Winner is ${fighter2.name}`);
                    return 2;
                } else if (fighter1.health > fighter2.health && fighter1.health > 0) {
                    console.log(`Winner is ${fighter1.name}`);
                    return 1;
                } else {
                    console.log('Draw');
                    return 0;
                }
            } else {
                return -1;
            }
        };

        winner = detectWinner(fighter, improvedFighter);

        if (winner != -1) {
            return 0;
        }

    }

    if (winner == -1) {
        console.log('Draw');
    }

}

let fighter =  new Fighter('Rambo', 5, 1500);
let improvedFighter = new ImprovedFighter('Terminator', 5, 1000);

let point = [10, 20, 31, 20, 37, 40, 50, 40, 10, 50, 40];

fight(fighter, improvedFighter, ...point);

