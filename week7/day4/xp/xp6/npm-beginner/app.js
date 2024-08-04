// const chalk = require('chalk');
import chalk from "chalk";

const message = `
  ${chalk.blue.bold('Hello')} ${chalk.green.bold('World')}!
  ${chalk.yellow('This is a')} ${chalk.magenta.underline('colorful message')} ${chalk.red('using')} ${chalk.cyan('chalk.')}
`;

console.log(message);

console.log(chalk.green('Success! The operation completed successfully.'))
console.log(chalk.red.bold('Error! Something went wrong.'))
console.log(chalk.blue.bgWhite.bold('Information:') + ' Chalk is a powerful tool for styling terminal output.')
