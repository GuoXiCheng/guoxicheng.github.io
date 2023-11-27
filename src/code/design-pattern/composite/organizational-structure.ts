export {};

// OrganizationComponent 接口
interface OrganizationComponent {
    print(): void;
    add?(component: OrganizationComponent): void;
}

// Employee 类
class Employee implements OrganizationComponent {
    constructor(private name: string, private position: string) {}

    print(): void {
        console.log(`${this.name} works as ${this.position}`);
    }
}

// Department 类
class Department implements OrganizationComponent {
    private name: string;
    private components: OrganizationComponent[] = [];

    constructor(name: string) {
        this.name = name;
    }

    add(component: OrganizationComponent): void {
        this.components.push(component);
    }

    print(): void {
        console.log(`Department: ${this.name}`);
        for (const component of this.components) {
            component.print();
        }
    }
}

// 使用示例
const headOffice = new Department("Head Office");
const salesDepartment = new Department("Sales Department");
const itDepartment = new Department("IT Department");

const employee1 = new Employee("John Doe", "Manager");
const employee2 = new Employee("Jane Smith", "Sales Representative");
const employee3 = new Employee("Mike Johnson", "Developer");

salesDepartment.add(employee2);
itDepartment.add(employee3);
headOffice.add(employee1);
headOffice.add(salesDepartment);
headOffice.add(itDepartment);

headOffice.print();
