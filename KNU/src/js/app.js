import { Visual } from "./visual.js";
import { Img } from "./img.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas"); // 캔버스객체생성
    this.ctx = this.canvas.getContext("2d"); // 캔버스 문법임: getContext -> 그래픽과 관련된 다양한 메소드와 프로퍼티를 가진 객체 반환 (ctx)
    document.body.appendChild(this.canvas);

    this.stageWidth = document.body.clientWidth; // document.body.clientWidth -> app.stageWidth -> canvas.width
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1; // 윈도우 가로세로 비율이 가로가 더긴경우(2) 세로가 더 긴경우(1)

    window.addEventListener("resize", this.resize.bind(this)); // resize되었을때 처리해주는 함수인듯.

    const img = new Img(this.ctx, this.stageWidth, this.stageHeight);

    img.image.onload = () => {
      const pixeles = img.getDotPos();
      this.resize();

      this.visual = new Visual(pixeles, this.stageWidth, this.stageHeight, this.pixelRatio);
      this.visual.animate(this.ctx);

      window.addEventListener("mousedown", this.onMouseDown.bind(this));
      window.addEventListener("mouseup", this.onMouseUp.bind(this));
      window.addEventListener("mousemove", this.onMouseMove.bind(this));
      requestAnimationFrame(this.animate.bind(this));
    };
  }

  // 도트들이 뭉쳐지게함
  onMouseDown() {
    this.visual.onMouseDown();
  }

  // 도트들이 밀려나게함
  onMouseMove(event) {
    this.visual.onMouseMove(event.clientX, event.clientY);
  }

  // 도트들이 퍼지게함
  onMouseUp() {
    this.visual.onMouseUp();
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);
  }

  animate(t) {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.visual.animate(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new App();
};
