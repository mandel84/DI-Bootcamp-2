import chalk from 'chalk';

export function displayColorfulMessage() {
    const message = chalk.blue.bgYellow.bold('This is a colorful message!');
    console.log(message);
}
