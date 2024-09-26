import chalk from 'chalk';
import readline from 'readline';  

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let todoList = [];


let todolist = [];

const displayTodo = () => {
    console.log(chalk.blue('\nTo-Do List:'));
    if (todolist.length === 0){
        console.log(chalk.yellow('No tasks in the list.'));
    }
    else{
        todolist.forEach((task, index) => {
            console.log(chalk.cyan(`${index +1}: `) + chalk.white.bold(task));
        });
    }
};

const promptUser = () => {
    rl.question('\nChoose an action (add("a")/view("v")/remove("r")/exit("e")): ',(action) => {
        if (action === 'a'){
            rl.question('Enter a task to add: ', (task) => {
                todolist.push(task);
                console.log(chalk.green(`Added: "${task}"`));
                displayTodo();
                promptUser();
            });
        }

        else if (action === 'v'){
            displayTodo();
            promptUser();

        }

        else if(action === 'r'){
            rl.question('Enter the task number to remove: ', (index) => {
                const remtask = todolist.splice(index - 1, 1);
                if (remtask.length > 0){
                    console.log(chalk.red(`Removed: "${remtask[0]}"`));
                } 
                else{
                    console.log(chalk.red('Invalid task number.'));
                }
                displayTodo();
                promptUser();
            });
        }

        else if (action === 'e'){
            console.log(chalk.blue.bold('Bye bye!'));
        }
        else{
            console.log(chalk.red('Invalid action. Please choose (add("a")/view("v")/remove("r")/exit("e")).'));
            promptUser();
        }

    });
};

console.log(chalk.green.bold("Welcome to the To-Do List App!"));
promptUser();