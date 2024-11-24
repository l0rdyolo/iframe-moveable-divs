let highestZIndex = 1;

document.querySelectorAll('.movable-div').forEach(div => {
  const header = div.querySelector('.header'); // Sadece header'ı seç
  div.style.zIndex = ++highestZIndex;

  let offsetX = 0;
  let offsetY = 0;
  let isDragging = false;

  header.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - div.offsetLeft;
    offsetY = e.clientY - div.offsetTop;
    div.style.zIndex = ++highestZIndex;
    document.body.style.userSelect = 'none'; // Disable text selection
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      div.style.left = `${e.clientX - offsetX}px`;
      div.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.userSelect = ''; // Enable text selection
  });
});
