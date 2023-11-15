export {};

interface Player {
    setNext(player: Player): Player;
    handle(): string;
}

abstract class AbstractPlayer implements Player {

    private nextPlayer!: Player;

    private playerName: string;

    constructor(playerName: string) {
        this.playerName = playerName;
    }

    setNext(player: Player): Player {
        this.nextPlayer = player;
        return player;
    }
    handle(): string {
        if (Math.random() < 0.1) { // 10%概率拿到花
            return `${this.playerName} 拿到了花`;
        }
        return this.nextPlayer.handle();
    }
}

class GamePlayer extends AbstractPlayer {
    constructor(playerName: string) {
        super(playerName);
    }
}

const player1 = new GamePlayer("小明");
const player2 = new GamePlayer("小红");
const player3 = new GamePlayer("小李");

player1.setNext(player2).setNext(player3).setNext(player1);

const result = player1.handle();

console.log(result);