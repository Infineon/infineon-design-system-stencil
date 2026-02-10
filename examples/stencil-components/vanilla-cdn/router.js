const page = document.getElementById('page');

export async function navigate(route) {
  const module = await import(`./pages/${route}.js`);
  page.innerHTML = '';
  module.render(page);
}
