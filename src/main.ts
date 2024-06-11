import chalk from 'chalk';

// Проверка наличия тайпскрипта
type RequiredName = { name: string };
type PartialName = Partial<RequiredName>;

const message = chalk.green('Поздравляю! Вы успешно запустили проект!');
const time = chalk.blue(new Date().toISOString().split('T')[1].split('.')[0]);

console.log(`${time} ${message}`)