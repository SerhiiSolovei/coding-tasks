/**
 * Array.isArray() - возвращает true, если значение является массивом и false, если он массивом не является.
 *
 * Параметры: Array.isArray(value)
 *
 * value - Проверяемое значение.
 *
 * Примеры:
 */

// Все следующие вызовы вернут true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
// Малоизвестный факт: Array.prototype сам является массивом:
Array.isArray(Array.prototype);

// Все следующие вызовы вернут false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
