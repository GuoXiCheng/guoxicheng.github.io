export {};

interface AirTrafficControlMediator {
    registerFlight(flight: Flight): void;
    requestLanding(flight: Flight): void;
    notifyAboutFlightPosition(flight: Flight, position: Position): void;
}

class Flight {
    constructor(private mediator: AirTrafficControlMediator, public flightNumber: string) {}

    requestLanding(): void {
        console.log(`${this.flightNumber} requesting landing`);
        this.mediator.requestLanding(this);
    }

    changePosition(newPosition: Position): void {
        console.log(`${this.flightNumber} changing position to ${JSON.stringify(newPosition)}`);
        this.mediator.notifyAboutFlightPosition(this, newPosition);
    }

    // 其他飞机相关的方法
}

interface Position {
    x: number;
    y: number;
    altitude: number;
}

class AirTrafficControl implements AirTrafficControlMediator {
    private flights: Flight[] = [];

    registerFlight(flight: Flight): void {
        this.flights.push(flight);
        console.log(`Flight ${flight.flightNumber} registered with air traffic control`);
    }

    requestLanding(flight: Flight): void {
        // 实现起降请求的逻辑，确保安全距离等
        console.log(`Flight ${flight.flightNumber} cleared to land`);
    }

    notifyAboutFlightPosition(flight: Flight, position: Position): void {
        // 实现对飞机位置的响应逻辑，比如调整其他飞机的飞行路径以保持安全距离
        console.log(`Received position update from Flight ${flight.flightNumber}: ${JSON.stringify(position)}`);
    }
}

const atcMediator = new AirTrafficControl();

const flight1 = new Flight(atcMediator, 'FL123');
const flight2 = new Flight(atcMediator, 'FL456');

atcMediator.registerFlight(flight1);
atcMediator.registerFlight(flight2);

flight1.changePosition({ x: 100, y: 200, altitude: 30000 });
flight2.changePosition({ x: 150, y: 250, altitude: 32000 });

flight1.requestLanding();
flight2.requestLanding();
