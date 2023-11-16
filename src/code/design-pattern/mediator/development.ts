export {};

interface Mediator {
    notify(sender: object, event: string, data?: string): void;
}

class Controller implements Mediator {

    constructor(private view: View, private model: Model) {
        this.view = view;
        this.view.setMediator(this);
        this.model = model;
        this.model.setMediator(this);
    }

    notify(sender: object, event: string, data: string) {
        if (event === "viewChanged") {
            this.model.setData(data);
        } else if (event === "modelChanged") {
            this.view.render(data);
        }
    }
}

class Base {
    protected mediator!: Mediator;

    setMediator(mediator: Mediator) {
        this.mediator = mediator;
    }
}

class Model extends Base {
    private data = "";

    setData(data: string) {
        this.data = data;
        this.mediator.notify(this, "modelChanged", data);
    }

    getData() {
        console.log(this.data);
    }
}

class View extends Base {

    render(data: string) {
        console.log(`render data: ${data}`);
    }

    viewChange(data: string) {
        this.mediator.notify(this, "viewChanged", data);
    }
}

const model = new Model();
const view = new View();
const mediator = new Controller(view, model);

model.setData("Test");

view.viewChange("Test Again");
