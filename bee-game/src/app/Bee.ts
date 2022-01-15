export class Bee {
    id: number;
    name: string;
    hp: number;
    quantity: number;
    damage: number;
    isDead: boolean;

    constructor(id: number, name: string, hp: number, quantity: number, damage: number, isDead: boolean){
        this.id = id;
        this.name = name;
        this.hp = hp;
        this.quantity = quantity;
        this.damage = damage;
        this.isDead = isDead;
    }

}