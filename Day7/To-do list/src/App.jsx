// App.js File
import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);

        // Setting up state
        this.state = {
            userInput: "",
            list: [],
        };
    }

    // Set a user input value
    updateInput(value) {
        this.setState({
            userInput: value,
        });
    }

    // Add item if user input is not empty
    addItem() {
        if (this.state.userInput !== "") {
            const userInput = {
                // Add a random id which is used to delete
                id: Math.random(),

                // Add a user value to list
                value: this.state.userInput,
            };

            // Update list
            const list = [...this.state.list];
            list.push(userInput);

            // reset state
            this.setState({
                list,
                userInput: "",
            });
        }
    }

    // Function to delete item from list use id to delete
    deleteItem(key) {
        const list = [...this.state.list];

        // Filter values and leave value which we need to delete
        const updateList = list.filter((item) => item.id !== key);

        // Update list in state
        this.setState({
            list: updateList,
        });
    }

    editItem = (index) => {
        const todos = [...this.state.list];
        const editedTodo = prompt('Edit the todo:');
        if (editedTodo !== null && editedTodo.trim() !== '') {
            let updatedTodos = [...todos];
            updatedTodos[index].value = editedTodo;
            this.setState({
                list: updatedTodos,
            });
        }
    }

    render() {
        return (
            <div className="p-8">
                <div className="text-center text-4xl font-bold mb-6">
                    TODO LIST
                </div>

                <hr className="mb-6" />

                <div className="flex justify-center mb-6">
                    <div className="w-full max-w-md">
                        <div className="flex mb-4">
                            <input
                                type="text"
                                placeholder="Add item..."
                                className="border border-gray-300 rounded-l-lg p-2 w-full"
                                value={this.state.userInput}
                                onChange={(e) => this.updateInput(e.target.value)}
                            />
                            <button
                                className="bg-gray-800 text-white rounded-r-lg px-4 py-2"
                                onClick={() => this.addItem()}
                            >
                                ADD
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="w-full max-w-md">
                        <ul className="list-group">
                            {/* map over and print items */}
                            {this.state.list.map((item, index) => {
                                return (
                                    <li key={index} className="flex justify-between items-center bg-gray-700 text-white rounded-lg mb-2 p-2">
                                        {item.value}
                                        <div>
                                            <button
                                                className="bg-red-500 text-white px-4 py-1 rounded mr-2"
                                                onClick={() => this.deleteItem(item.id)}
                                            >
                                                Delete
                                            </button>
                                            <button
                                                className="bg-blue-500 text-white px-4 py-1 rounded"
                                                onClick={() => this.editItem(index)}
                                            >
                                                Edit
                                            </button>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
