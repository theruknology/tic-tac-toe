const boxes = document.querySelectorAll('.board-box');

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', () => {
        console.log(boxes[i].id)
    })
}