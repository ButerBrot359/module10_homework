/*Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert. */

const btn = document.getElementById("btn")
btn.addEventListener("click", function() {
    const ans = `Ширина-${window.innerWidth}, Высота-${window.innerHeight}`
    alert(ans)
})

// Если нужно было найти просто данные об экране то:
/*
const btn = document.getElementById("btn")
btn.addEventListener("click", function() {
    const ans = `Ширина-${window.screen.width}, Высота-${window.screen.height}`
    alert(ans)
})
*/