//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];

        function wrapper(...args) {
            const hash = md5(args); // Создаем хеш на основе аргументов
            let objectInCache = cache.find((item) => item.hash === hash); // Ищем объект в кеше

            if (objectInCache) {
                console.log("Из кеша: " + objectInCache.value);
                return "Из кеша: " + objectInCache.value;
            }

            // Если в кеше нет результата, вычисляем его
            let result = func(...args);
            cache.push({ hash, value: result }); // Сохраняем в кеше

            if (cache.length > 5) {
                cache.shift(); // Удаляем самый старый элемент, если кеш переполнен
            }

            console.log("Вычисляем: " + result);
            return "Вычисляем: " + result;
        }

        return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId; // Таймер для задержки
        let isFirstCall = true; // Флаг для первого вызова
        const wrapper = function (...args) {
            // Увеличиваем количество вызовов
            wrapper.allCount++;

            if (isFirstCall) {
                // Если это первый вызов, выполняем функцию моментально
                func(...args);
                wrapper.count++;
                isFirstCall = false;
            } else {
                // Если это не первый вызов, сбрасываем таймер и устанавливаем новый
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    func(...args);
                    wrapper.count++;
                }, delay);
            }
        };

        // Свойства для подсчёта вызовов
        wrapper.count = 0; // Количество выполненных вызовов функции
        wrapper.allCount = 0; // Общее количество вызовов декоратора

        return wrapper;
}
