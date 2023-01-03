var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt);
calculator.setExpression({ id: 'parabola', latex: 'f(x)=x^2' });
calculator.setExpression({ id: 'line', latex: 'l(x)=\\frac{f(x_1)(x_2 - x) + f(x_2)(x - x_1)}{x_2 - x_1}' });
calculator.setExpression({ id: 'x_1', latex: 'x_1=0' });
calculator.setExpression({
  id: 'x_1',
  sliderBounds: { min: -10, max: 10, step: 1 }
});
calculator.setExpression({ id: 'x_2', latex: 'x_2=2' });
calculator.setExpression({
  id: 'x_2',
  sliderBounds: { min: -10, max: 10, step: 1 }
});