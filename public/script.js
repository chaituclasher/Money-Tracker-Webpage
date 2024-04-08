let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category_select');
const amountInput = document.getElementById('amount_input');
const infoInput = document.getElementById('info');
const dateInput = document.getElementById('date_input');
const addBtn = document.getElementById('add_btn');
const expenseTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');

function addExpenseToTable(expense) {
    const newRow = expenseTableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const infoCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    infoCell.textContent = expense.info;

    // Format the date in DD MM YY format
    const date = new Date(expense.date);
    const formattedDate = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: '2-digit' });
    dateCell.textContent = formattedDate;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        const index = expenses.indexOf(expense);
        if (index !== -1) {
            const { category, amount } = expense;
            if (category === 'Income') {
                totalAmount -= amount;
            } else if (category === 'Expense') {
                totalAmount += amount;
            }
            totalAmountCell.textContent = totalAmount;
            expenses.splice(index, 1);
            expenseTableBody.removeChild(newRow);
        }
    });

    deleteCell.appendChild(deleteBtn);
}


addBtn.addEventListener('click', function() {
    const category = categorySelect.value;
    const info = infoInput.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category === '') {
        alert('Please select a category');
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    if (info === '') {
        alert('Please enter a valid info');
        return;
    }
    if (date === '') {
        alert('Please select a date');
        return;
    }

    expenses.push({ category, amount, info, date });

    if (category === 'Income') {
        totalAmount += amount;
    } else if (category === 'Expense') {
        totalAmount -= amount;
    }

    totalAmountCell.textContent = totalAmount;

    addExpenseToTable({ category, amount, info, date });
});
