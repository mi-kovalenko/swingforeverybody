
let grid = new Isotope('.eventsList', {
    itemSelector: '.monthEventsRow',
    layoutMode: 'vertical',
    vertical: {
    horizontalAlignment: 0.5,
    }
});

let filterBtn = document.querySelectorAll('.tagCloud .filter-btn');
for (let i = 0; i < filterBtn.length; i++) {
    // Если кликнули по ссылке
    filterBtn[i].onclick = function (click) {
        // Отменяем переход
        click.preventDefault();
        // Получаем значение дата-атрибута кнопки
        let filterData = event.target.getAttribute('data-filter');
        // Применяем фильтрацию элементов в Isotope
        grid.arrange({
            filter: filterData
        });
    };
}