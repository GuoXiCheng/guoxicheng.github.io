// 在脚本顶部添加一个标记
window.snowfallInitialized = window.snowfallInitialized || false;
// snowfall.js
(function () {
    const month = new Date().getMonth();
    if (month < 11 && month > 1) return; // 仅在 12 月到 2 月显示雪花

    if (window.snowfallInitialized) return;
    window.snowfallInitialized = true;

    // 配置参数
    const snowflakeCount = 25; // 雪花数量
    const snowflakeSvgUrl = '/assets/image/snowflake.svg'; // SVG 文件的 URL
    const snowflakeMinSize = 5; // 最小雪花大小
    const snowflakeMaxSize = 10; // 最大雪花大小
    const snowflakeSpeed = 1; // 下落速度

    let canvas = document.getElementById("snowfall-canvas");
    if (canvas) {
        document.body.removeChild(canvas);
    }

    // 创建画布
    canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d"); // 初始化 ctx

    // 添加画布到文档中
    document.body.appendChild(canvas);
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";

    // 设置画布大小
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 监听窗口大小改变
    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // 雪花对象
    class Snowflake {
        constructor(image) {
            this.image = image;
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size =
                Math.random() * (snowflakeMaxSize - snowflakeMinSize) +
                snowflakeMinSize;
            this.speed = snowflakeSpeed;
        }

        move() {
            this.y += this.speed;
            if (this.y > canvas.height) {
                this.y = 0 - this.size;
                this.x = Math.random() * canvas.width;
            }
        }

        draw() {
            ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
        }
    }

    // 加载 SVG 并创建雪花
    const img = new Image();
    img.onload = function () {
        const snowflakes = [];
        for (let i = 0; i < snowflakeCount; i++) {
            snowflakes.push(new Snowflake(img));
        }

        // 绘制雪花
        function drawSnowflakes() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (const snowflake of snowflakes) {
                snowflake.move();
                snowflake.draw();
            }
            requestAnimationFrame(drawSnowflakes);
        }

        drawSnowflakes();
    };
    img.src = snowflakeSvgUrl;
})();
