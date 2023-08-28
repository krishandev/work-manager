import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-blue-500 min-h-screen flex flex-col items-center justify-center">
      <header className="text-white text-4xl mb-6">Task Manager</header>
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        {/* Task list */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Tasks</h2>
          <ul>
            {/* Example task */}
            <li className="flex justify-between items-center py-2 border-b">
              <span>Task 1</span>
              <button className="text-blue-500 hover:underline">Edit</button>
            </li>
            {/* Add more tasks here */}
          </ul>
        </div>

        {/* Task creation */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Add Task</h2>
          <form className="flex">
            <input
              type="text"
              placeholder="Enter task..."
              className="flex-grow border rounded-l px-3 py-2"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
