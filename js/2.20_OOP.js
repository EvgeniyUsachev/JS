const soldier = {
    health: 400,
    armor: 100
}

const john = Object.create(soldier)

////

Object.setPrototypeOf(john, soldier)