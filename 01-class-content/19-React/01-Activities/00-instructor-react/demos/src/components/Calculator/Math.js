function getResult(num1, operator, num2) {
    switch (operator) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'divide':
            return num1 / num2;
        case 'multiply':
            return num1 * num2;
    }
}

export const Math = ({ num1, operator, num2 }) => (
    <span style={{ fontSize: getResult(num1, operator, num2) }}>
        {getResult(num1, operator, num2)}
    </span>
);
