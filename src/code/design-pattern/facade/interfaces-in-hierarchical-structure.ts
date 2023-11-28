export {};

// 数据访问层（DAL）
class DataAccessLayer {
    fetchData(): string {
        return 'Data fetched from database';
    }
}

// 业务逻辑层（BLL）
class BusinessLogicLayer {
    private dal: DataAccessLayer;

    constructor(dal: DataAccessLayer) {
        this.dal = dal;
    }

    processData(): string {
        const data = this.dal.fetchData();
        return `Processed ${data}`;
    }
}

// 表示层（UI）
class PresentationLayer {
    private bll: BusinessLogicFacade; // 使用 BusinessLogicFacade

    constructor(bll: BusinessLogicFacade) {
        this.bll = bll;
    }

    displayData(): void {
        const processedData = this.bll.processData();
        console.log(`Displaying ${processedData}`);
    }
}

// 外观类为每一层
class DataAccessFacade {
    private dal: DataAccessLayer;

    constructor() {
        this.dal = new DataAccessLayer();
    }

    fetchData(): string {
        return this.dal.fetchData();
    }
}

class BusinessLogicFacade {
    private bll: BusinessLogicLayer;

    constructor(dalFacade: DataAccessFacade) {
        const dal = dalFacade; // 使用 DataAccessFacade
        this.bll = new BusinessLogicLayer(dal);
    }

    processData(): string {
        return this.bll.processData();
    }
}

class PresentationFacade {
    private pl: PresentationLayer;

    constructor(bllFacade: BusinessLogicFacade) {
        this.pl = new PresentationLayer(bllFacade);
    }

    displayData(): void {
        this.pl.displayData();
    }
}

// 客户端代码
const dalFacade = new DataAccessFacade();
const bllFacade = new BusinessLogicFacade(dalFacade);
const presentationFacade = new PresentationFacade(bllFacade);

presentationFacade.displayData();
