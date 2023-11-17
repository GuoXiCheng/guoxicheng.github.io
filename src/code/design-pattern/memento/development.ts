class FormMemento {
    private formData: Record<string, any>;

    constructor(formData: Record<string, any>) {
        this.formData = formData;
    }

    getFormData(): Record<string, any> {
        return this.formData;
    }
}

class Form {
    private formData: Record<string, any> = {};

    setField(field: string, value: any): void {
        this.formData[field] = value;
    }

    save(): FormMemento {
        return new FormMemento({ ...this.formData });
    }

    restore(memento: FormMemento): void {
        this.formData = memento.getFormData();
    }

    getFormData(): Record<string, any> {
        return this.formData;
    }
}

const form = new Form();
form.setField("name", "Alice");
form.setField("email", "alice@example.com");

console.log("初始表单数据:", form.getFormData());

// 自动保存当前状态
const savedState = form.save();

// 模拟表单数据更改
form.setField("name", "Bob");

console.log("修改后的表单数据:", form.getFormData()); 

// 恢复到之前保存的状态
form.restore(savedState);

console.log("恢复到保存时的数据:", form.getFormData()); 
