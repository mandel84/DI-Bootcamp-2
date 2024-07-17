const API_KEY = 'b393208d5ebb6e9233a32d6f'; 

document.addEventListener('DOMContentLoaded', () => {
    const fromCurrency = document.getElementById('from-currency');
    const toCurrency = document.getElementById('to-currency');
    const amountInput = document.getElementById('amount');
    const convertBtn = document.getElementById('convert-btn');
    const switchBtn = document.getElementById('switch-btn');
    const resultDiv = document.getElementById('result');

    console.log("Fetching supported currencies...");
    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/codes`)
        .then(response => response.json())
        .then(data => {
            console.log("Supported currencies data:", data);
            const { supported_codes } = data;
            supported_codes.forEach(([code, name]) => {
                const optionFrom = document.createElement('option');
                optionFrom.value = code;
                optionFrom.text = `${code} - ${name}`;
                fromCurrency.appendChild(optionFrom);

                const optionTo = document.createElement('option');
                optionTo.value = code;
                optionTo.text = `${code} - ${name}`;
                toCurrency.appendChild(optionTo);
            });
        })
        .catch(error => {
            console.error("Error fetching supported currencies:", error);
            resultDiv.textContent = 'Error fetching supported currencies';
        });

    convertBtn.addEventListener('click', () => {
        const from = fromCurrency.value;
        const to = toCurrency.value;
        const amount = amountInput.value;

        if (!from || !to || !amount) {
            resultDiv.textContent = 'Please fill out all fields';
            return;
        }

        console.log(`Fetching conversion rate from ${from} to ${to} for amount ${amount}...`);
        fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amount}`)
            .then(response => response.json())
            .then(data => {
                console.log("Conversion rate data:", data);
                const { conversion_result } = data;
                resultDiv.textContent = `${amount} ${from} = ${conversion_result} ${to}`;
            })
            .catch(error => {
                console.error("Error fetching conversion rate:", error);
                resultDiv.textContent = 'Error fetching conversion rate';
            });
    });

    switchBtn.addEventListener('click', () => {
        const from = fromCurrency.value;
        const to = toCurrency.value;

        fromCurrency.value = to;
        toCurrency.value = from;

        const amount = amountInput.value;
        convertBtn.click();
    });
});
