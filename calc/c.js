document.addEventListener('DOMContentLoaded', () => {
  const resultInput = document.getElementById('result');
  const buttons = document.querySelectorAll('.keys button');

  let currentExpression = '';
  let lastOperator = '';

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.value;

      if (value === 'C') {
        currentExpression = '';
        lastOperator = '';
        resultInput.value = '';
      } else if (value === 'ans') {
        try {
          const result = eval(currentExpression);
          resultInput.value = result;
          currentExpression = result.toString();
        } catch (error) {
          resultInput.value = 'Error';
          currentExpression = '';
        }
      } else {
        if (['+', '-', '*', '/'].includes(value)) {
          lastOperator = value;
        }

        currentExpression += value;
        resultInput.value = currentExpression;
      }
    });
  });
});

