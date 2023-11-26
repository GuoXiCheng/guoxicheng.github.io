export {};

// 工作流状态接口
interface WorkflowState {
    approve(workflowContext: WorkflowContext): void;
    reject(workflowContext: WorkflowContext): void;
    audit(workflowContext: WorkflowContext): void;
    complete(workflowContext: WorkflowContext): void;
}

// 工作流上下文
class WorkflowContext {
    private state: WorkflowState;

    constructor(state: WorkflowState) {
        this.state = state;
        console.log(`初始化工作流，状态为：${state.constructor.name}`);
    }

    setState(state: WorkflowState): void {
        this.state = state;
        console.log(`工作流状态变为：${state.constructor.name}`);
    }

    approve(): void {
        this.state.approve(this);
    }

    reject(): void {
        this.state.reject(this);
    }

    audit(): void {
        this.state.audit(this);
    }

    complete(): void {
        this.state.complete(this);
    }
}

// 具体状态：审批
class ApprovalState implements WorkflowState {
    approve(workflowContext: WorkflowContext): void {
        console.log('审批通过');
        workflowContext.setState(new AuditState());
    }

    reject(workflowContext: WorkflowContext): void {
        console.log('审批被拒绝');
        workflowContext.setState(new RejectedState());
    }

    audit(workflowContext: WorkflowContext): void {
        console.log('当前状态不支持审核操作');
    }

    complete(workflowContext: WorkflowContext): void {
        console.log('当前状态不支持完成操作');
    }
}

// 具体状态：审核
class AuditState implements WorkflowState {
    approve(workflowContext: WorkflowContext): void {
        console.log('已通过审核');
        workflowContext.setState(new CompletedState());
    }

    reject(workflowContext: WorkflowContext): void {
        console.log('审核被拒绝');
        workflowContext.setState(new RejectedState());
    }

    audit(workflowContext: WorkflowContext): void {
        console.log('正在进行审核');
    }

    complete(workflowContext: WorkflowContext): void {
        console.log('当前状态不支持完成操作');
    }
}

// 具体状态：拒绝
class RejectedState implements WorkflowState {
    approve(workflowContext: WorkflowContext): void {
        console.log('拒绝状态下不能进行审批');
    }

    reject(workflowContext: WorkflowContext): void {
        console.log('已经是拒绝状态');
    }

    audit(workflowContext: WorkflowContext): void {
        console.log('拒绝状态下不能进行审核');
    }

    complete(workflowContext: WorkflowContext): void {
        console.log('拒绝状态下不能标记为完成');
    }
}

// 具体状态：完成
class CompletedState implements WorkflowState {
    approve(workflowContext: WorkflowContext): void {
        console.log('完成状态下不能进行审批');
    }

    reject(workflowContext: WorkflowContext): void {
        console.log('完成状态下不能被拒绝');
    }

    audit(workflowContext: WorkflowContext): void {
        console.log('完成状态下不能进行审核');
    }

    complete(workflowContext: WorkflowContext): void {
        console.log('已经是完成状态');
    }
}

// 示例使用
const workflow = new WorkflowContext(new ApprovalState());
workflow.approve(); // 审批通过，进入审核状态
workflow.approve(); // 通过审核，进入完成状态
workflow.complete(); // 已经是完成状态
