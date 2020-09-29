async function caclulate() {
    const apiURL = `https://api.exchangerate-api.com/v4/latest/USD`;

    try {
        const res = await fetch(apiURL);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

caclulate()