window.Card = function Card(content, className = "") {
  const classes = `card ${className}`.trim();
  return `<div class="${classes}">${content}</div>`;
};
