# To-Do List Command Line App

A simple command-line To-Do List application built using Node.js. The app allows users to add, view, and remove tasks through the terminal.

## Features

- Add new tasks to your To-Do List.
- View all current tasks.
- Remove tasks by their number.
- Simple, easy-to-use command-line interface.
- Colored output for better readability using `chalk`.

## Requirements

- **Node.js** (v12 or later)

## Installation

1. Clone this repository or download the code.
2. Open a terminal and navigate to the project directory.
3. Run the following command to install necessary dependencies:

   ```bash
   npm install
   ```

## How to Use

1. After installing the dependencies, run the app with the following command:

   ```bash
   npm start
   ```

2. You'll be presented with options to:
   - **Add**: Add a new task.
   - **View**: View your current tasks.
   - **Remove**: Remove a task by its number.
   - **Exit**: Quit the application.

3. Follow the on-screen prompts to interact with the app.

### Example

```bash
Choose an action (add/view/remove/exit): add
Enter a task to add: Complete the project
Added: "Complete the project"

To-Do List:
1: Complete the project
```

## Using `chalk`

This project uses the `chalk` library to add colors to the terminal output for better readability.

- **Green**: For successful actions like adding a task.
- **Red**: For removing tasks or showing errors.
- **Blue/Cyan**: For highlighting task numbers and other important information.

## Future Enhancements

- Persistent storage of tasks (saving tasks to a file).
- Mark tasks as completed.
- Edit tasks.

## License

This project is licensed under the MIT License.
