document.addEventListener("DOMContentLoaded", function () {
  const dragContainers = document.querySelectorAll(".drag-container .box");
  const dropContainer = document.querySelector(".drop-container");

  dragContainers.forEach((box) => {
    box.addEventListener("dragstart", dragStart);
    box.addEventListener("dragend", dragEnd);
  });

  dropContainer.addEventListener("dragover", dragOver);
  dropContainer.addEventListener("drop", drop);

  function dragStart() {
    this.classList.add("dragging");
  }

  function dragEnd() {
    this.classList.remove("dragging");
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function drop() {
    const draggedBox = document.querySelector(".dragging");
    this.appendChild(draggedBox);
  }
});
