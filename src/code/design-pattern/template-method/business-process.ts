export {};

// 定义抽象的工作流程类
abstract class WorkflowProcess {
    // 模板方法，定义了工作流程的步骤
    public execute(): void {
        this.validate();
        this.process();
        this.complete();
    }

    // 抽象方法，由子类实现具体的业务逻辑
    protected abstract validate(): void;
    protected abstract process(): void;
    protected abstract complete(): void;
}

// 特定的订单处理流程实现
class OrderProcessing extends WorkflowProcess {
    protected validate(): void {
        console.log('Validating order...');
        // 实现订单验证逻辑
    }

    protected process(): void {
        console.log('Processing payment...');
        // 实现支付处理逻辑
    }

    protected complete(): void {
        console.log('Completing order and shipping...');
        // 实现订单完成和发货逻辑
    }
}

// 特定的审批流程实现
class ApprovalProcess extends WorkflowProcess {
    protected validate(): void {
        console.log('Validating approval request...');
        // 实现审批请求验证逻辑
    }

    protected process(): void {
        console.log('Processing approval...');
        // 实现审批处理逻辑
    }

    protected complete(): void {
        console.log('Completing approval...');
        // 实现审批完成逻辑
    }
}

// 使用
const orderProcess = new OrderProcessing();
orderProcess.execute();

const approvalProcess = new ApprovalProcess();
approvalProcess.execute();
