# 💰 Money Tracker Web App 💳

The Money Tracker Web App is a simple application that allows users to track their expenses and incomes. Users can input details such as category, amount, information, and date for each expense or income entry. The app provides a table to visualize the list of expenses and incomes, along with a total amount.

## 🚀 Features

- **Expense and Income Tracking**: Users can add their expenses and incomes, along with relevant details such as category, amount, information, and date.
- **Dynamic Table**: The app dynamically updates a table to display the list of expenses and incomes added by the user.
- **Total Amount Calculation**: The app calculates the total amount based on the expenses and incomes entered by the user.
- **Delete Functionality**: Users can delete specific expenses or incomes from the list.

## 🛠️ Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js with Express.js
- **Database**: MongoDB Atlas (NoSQL database)
- **Object Modeling Tool**: Mongoose (for MongoDB object modeling)
- **Middleware**: Body-parser (for parsing request bodies)
- **Styling**: Bootstrap (for basic styling)

## 🌐 Deployment

🚀 Check out the deployed version of the Money Tracker Web App by clicking the button below! 🌟

[![Deployed Version](https://img.shields.io/badge/Money%20Tracker%20Web%20App-purple.svg)](https://money-tracker-webpage.onrender.com/)

## 🖼️ Preview

![Screenshot](public/screenshots/Screenshot%202024-04-09%20121739.png)

Add Income 
![Screenshot 1](public/screenshots/Screenshot%202024-04-09%20121824.png)

Add Expenses
![Screenshot 2](public/screenshots/Screenshot%202024-04-09%20122401.png)

## 🚀 Installation

1. Clone this repository to your local machine:

    ```
    git clone https://github.com/your-username/money-tracker-web-app.git
    ```

2. Navigate to the project directory:

    ```
    cd money-tracker-web-app
    ```

3. Install the required dependencies using npm:

    ```
    npm install
    ```

4. Set up your MongoDB database:
   
   - Create a MongoDB Atlas account and set up a database.
   - Update the MongoDB connection string in `index.js` with your database credentials.

5. Start the server:

    ```
    node index.js
    ```

6. Open your web browser and navigate to `http://localhost:5000` to access the Money Tracker Web App.

## 🔥 Usage

- Select the category (Expense or Income).
- Enter the amount, information, and date for the expense or income.
- Click the "Add" button to add the entry to the list.
- View the list of expenses and incomes in the table.
- Click the "Delete" button next to an entry to remove it from the list.
