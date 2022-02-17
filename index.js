//
// function to check whether its a string or not
function funtion1(name) {
    if (isNaN(document.getElementById(name).value)) {
        return false;
    } else if (document.getElementById(name).value.length < 1)
        return false;
    else
        return true;

}
// function to check whether its a negative number or not
function funtion2(name) {
    if (parseFloat(document.getElementById(name).value) < 0)
        return false;
    else
        return true;
}
// Event for "calculate" button
 function calculate() {
    if (!funtion1('income') || !funtion1('food-expenses') || !funtion1('rent-expenses') || !funtion1('cloth-expenses')) {
        document.getElementById('balance').innerText = 0;
        document.getElementById('total-expenses').innerText = 0;
        alert('Please enter number');
    } else if (!funtion2('income') || !funtion2('food-expenses') || !funtion2('rent-expenses') || !funtion2('cloth-expenses'))
        alert('Value cannot be negative');

    else {
        const income = parseFloat(document.getElementById('income').value);
        const food = parseFloat(document.getElementById('food-expenses').value);
        const rent = parseFloat(document.getElementById('rent-expenses').value);
        const cloth = parseFloat(document.getElementById('cloth-expenses').value);
        const total = food + rent + cloth;
        if (total > income) {
            alert('expenses cannot be greater than income')
            document.getElementById('total-expenses').innerText = 0;
            document.getElementById('balance').innerText = 0;
        } else {
            document.getElementById('total-expenses').innerText = total;
            document.getElementById('balance').innerText = income - total;
        }
    }
}

// Event for save button
 function saver() {
    if (!funtion1('save-percent'))
        alert('Please enter number');
    else if (!funtion2('save-percent'))
        alert('Value cannot be negative');
    else {
        const sval = parseFloat(document.getElementById('save-percent').value);
        const income = parseFloat(document.getElementById('income').value);
        const balance = parseFloat(document.getElementById('balance').innerText);
        const temp = (income / 100) * sval;
        if (temp > balance) {
            alert('savings cannot be greater than balance');
            document.getElementById('save-percent').value = '';
        } else if (temp < 0)
            alert('savings cannot be negative');
        else {
            document.getElementById('savings').innerText = temp;
            document.getElementById('remainings').innerText = balance - temp;
        }
    }
}