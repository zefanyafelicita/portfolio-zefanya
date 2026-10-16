
(() => {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;

  const ctx = canvas.getContext("2d");
  let icon = document.querySelector('link[rel~="icon"]');

  if (!icon) {
    icon = document.createElement("link");
    icon.rel = "icon";
    document.head.appendChild(icon);
  }

  let frame = 0;

  function draw() {
    const bounce = -Math.abs(Math.sin(frame * Math.PI / 8)) * 6;
    const tail = Math.sin(frame * Math.PI / 4) * 5;

    ctx.clearRect(0, 0, 64, 64);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#9d94c4";
    ctx.lineWidth = 6;

    // Huruf ZF
    ctx.beginPath();
    ctx.moveTo(5, 12);
    ctx.lineTo(30, 12);
    ctx.lineTo(6, 50);
    ctx.lineTo(32, 50);
    ctx.moveTo(37, 50);
    ctx.lineTo(37, 12);
    ctx.lineTo(54, 12);
    ctx.moveTo(37, 31);
    ctx.lineTo(49, 31);
    ctx.stroke();

    // Ekor kucing yang bergoyang
    ctx.beginPath();
    ctx.moveTo(55, 53 + bounce);
    ctx.quadraticCurveTo(
      64, 57 + bounce,
      60 + tail * 0.4, 46 + bounce
    );
    ctx.stroke();

    // Badan dan kepala kucing
    ctx.fillStyle = "#f8f4e2";
    ctx.strokeStyle = "#9d94c4";
    ctx.lineWidth = 1.5;

    ctx.beginPath();
    ctx.ellipse(54, 52 + bounce, 5, 6, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(49, 41 + bounce);
    ctx.lineTo(49, 35 + bounce);
    ctx.lineTo(53, 39 + bounce);
    ctx.lineTo(59, 41 + bounce);
    ctx.lineTo(59, 35 + bounce);
    ctx.lineTo(55, 39 + bounce);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(54, 43 + bounce, 5, 5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Mata
    ctx.fillStyle = "#5a5282";
    const eyeH = frame % 16 === 10 ? 0.3 : 1.2;

    [52, 56].forEach(x => {
      ctx.beginPath();
      ctx.ellipse(x, 43 + bounce, 0.7, eyeH, 0, 0, Math.PI * 2);
      ctx.fill();
    });

    icon.type = "image/png";
    icon.href = canvas.toDataURL("image/png");
    frame = (frame + 1) % 16;
  }

  draw();
  setInterval(draw, 100);
})();
