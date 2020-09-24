/**
 * - setDate() - устанавливает день месяца указанной даты по местному времени.
 * - Параметры - .setDate(day)
 *
 *   - day - Целое число от 1 до 31, представляющее день месяца.
 *
 * Пример:
 */

const theBigDay = new Date(1962, 6, 7); // 1962-07-07
theBigDay.setDate(24); // 1962-07-24
theBigDay.setDate(32); // 1962-08-01
theBigDay.setDate(33); // 1962-08-02
theBigDay.setDate(0); // 1962-06-30
theBigDay.setDate(-1); // 1962-06-29
