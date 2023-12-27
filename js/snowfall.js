// 在脚本顶部添加一个标记
window.snowfallInitialized = window.snowfallInitialized || false;
// snowfall.js
(function () {
    if (window.snowfallInitialized) return;
    window.snowfallInitialized = true;

    // 配置参数
    const snowflakeCount = 100; // 雪花数量
    const snowflakeColor = "#fff"; // 雪花颜色
    const snowflakeMinSize = 2; // 最小雪花大小
    const snowflakeMaxSize = 6; // 最大雪花大小
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
        constructor() {
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
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.beginPath();

            for (let i = 0; i < 6; i++) {
                ctx.lineTo(
                    Math.cos((Math.PI / 3) * i) * this.size,
                    Math.sin((Math.PI / 3) * i) * this.size
                );
                ctx.lineTo(
                    (Math.cos((Math.PI / 3) * i + Math.PI / 6) * this.size) / 2,
                    (Math.sin((Math.PI / 3) * i + Math.PI / 6) * this.size) / 2
                );
            }

            ctx.closePath();
            ctx.fillStyle = snowflakeColor;
            ctx.fill();
            ctx.restore();
        }
    }

    // 创建雪花
    const snowflakes = [];
    for (let i = 0; i < snowflakeCount; i++) {
        snowflakes.push(new Snowflake());
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
})();
