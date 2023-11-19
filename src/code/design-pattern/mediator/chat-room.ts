export {};

interface Mediator {
    registerUser(user: User): void;
    sendMessage(message: string, user: User): void;
}

interface User {
    send(message: string): void;
    receive(message: string): void;
}

class ChatRoom implements Mediator {
    private users: User[] = [];

    registerUser(user: User): void {
        this.users.push(user);
    }

    sendMessage(message: string, user: User): void {
        this.users.forEach(u => {
            if (u !== user) { // 发送给除了自己之外的所有用户
                u.receive(message);
            }
        });
    }
}

class ChatUser implements User {
    private name: string;
    private chatRoom: Mediator;

    constructor(name: string, chatRoom: Mediator) {
        this.name = name;
        this.chatRoom = chatRoom;
        this.chatRoom.registerUser(this);
    }

    send(message: string): void {
        console.log(`${this.name} sends: ${message}`);
        this.chatRoom.sendMessage(message, this);
    }

    receive(message: string): void {
        console.log(`${this.name} receives: ${message}`);
    }
}

const chatRoom = new ChatRoom();

const user1 = new ChatUser('Alice', chatRoom);
const user2 = new ChatUser('Bob', chatRoom);
const user3 = new ChatUser('Charlie', chatRoom);

user1.send("Hi there!");
user2.send("Hey!");
user3.send("Hello everyone!");
