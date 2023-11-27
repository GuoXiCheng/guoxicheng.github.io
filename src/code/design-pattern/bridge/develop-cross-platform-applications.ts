export {};

// 平台接口
interface Platform {
    renderUI(): void;
}

// 具体的平台类
class WindowsPlatform implements Platform {
    renderUI(): void {
        console.log('Rendering UI in Windows style');
    }
}

class MacOSPlatform implements Platform {
    renderUI(): void {
        console.log('Rendering UI in MacOS style');
    }
}

class LinuxPlatform implements Platform {
    renderUI(): void {
        console.log('Rendering UI in Linux style');
    }
}

// 用户界面抽象类
abstract class UserInterface {
    protected platform: Platform;

    constructor(platform: Platform) {
        this.platform = platform;
    }

    abstract draw(): void;
}

// 具体的用户界面类
class ApplicationUI extends UserInterface {
    draw(): void {
        console.log('Application UI is being drawn');
        this.platform.renderUI();
    }
}

// 使用示例
const windowsPlatform = new WindowsPlatform();
const appUIOnWindows = new ApplicationUI(windowsPlatform);
appUIOnWindows.draw();

const macPlatform = new MacOSPlatform();
const appUIOnMac = new ApplicationUI(macPlatform);
appUIOnMac.draw();

const linuxPlatform = new LinuxPlatform();
const appUIOnLinux = new ApplicationUI(linuxPlatform);
appUIOnLinux.draw();
