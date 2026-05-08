window.Page = function Page() {
  return `
    ${window.Header()}
    <main>
      ${window.Hero()}
      ${window.Advantages()}
      ${window.Destinations()}
      ${window.Reviews()}
      ${window.FAQ()}
      ${window.ContactForm()}
    </main>
    ${window.Footer()}
  `;
};
