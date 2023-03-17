// naming html elements needed as JavaScript variables
const contentELement = document.getElementById('content');
const colorElements = document.querySelectorAll('#color');
const buttons = document.querySelectorAll('#navigation button');

const text = document.querySelector('.md-block');
const code = text.getElementsByTagName('md-block');
// const child = code.firstChild;

// some dummy data. This could be a json document or object from a server
const data = {
  profile: [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quod asperiores nesciunt maxime molestias ducimus nisi ab sint repellendus quam.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ab impedit optio mollitia quidem eius?',
  ],
  settings: [
    'Facilis pariatur dolorem, optio hic quibusdam ea dolore deserunt? Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Quam veritatis quae perspiciatis minus architecto. Lorem ipsum dolor, sit amet consectetur.',
  ],
  options: [
    'This is an example...... adipisicing elit. Facilis pariatur dolorem, adipisicing elit dicta aliquid natus optio hic quibusdam ea dolore deserunt?',
    'Yea, an exampleeeee...... adipisicing elit. Quam veritatis quae elit assumenda minus architecto.',
  ],
};
// Use ES6 object destructing
// same as `const profile = data.profile, settings = profile.settings, options = profile.options`
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const { profile, settings, options } = data;

// Set color palette
function setColorPalette() {
  colorElements.forEach(
    (colorElement) =>
      (colorElement.style.backgroundColor = colorElement.accessKey),
  );
}
// Function that sets default UI. Since profile tab will be our default,
// we will set its text content and styles.
/**
 * Set the default UI (color, background-color, content)
 */
function setDefault() {
  profile.map((text) => {
    const paragraph = document.createElement('p');
    paragraph.id = 'paragraph';
    paragraph.textContent = text;
    p = contentELement.appendChild(paragraph);
  });
  // set default color
  let color = localStorage.getItem('color') || 'teal';
  buttons[0].setAttribute('style', `background-color: ${color}; color: #fff`);
  buttons[0].setAttribute('data-active', 'is-active');
  buttons[1].setAttribute('style', `color: ${color}`);
  buttons[2].setAttribute('style', `color: ${color}`);
  setColorPalette();
}

// gets tab name and sets content for that tab
function getTabNameAndSetContent(tabName) {
  const paragraphs = contentELement.children; // We have these elements from default
  switch (tabName) {
    case 'settings':
      settings.map((text) => {
        for (let i = 0; i < paragraphs.length; i++) {
          paragraphs[i].textContent = text;
          contentELement.appendChild(paragraphs[i]);
        }
      });
      break;
    case 'options':
      options.map((text) => {
        for (let i = 0; i < paragraphs.length; i++) {
          paragraphs[i].textContent = text;
          contentELement.appendChild(paragraphs[i]);
        }
      });
      break;
    default:
      profile.map((text) => {
        for (let i = 0; i < paragraphs.length; i++) {
          paragraphs[i].textContent = text;
          contentELement.appendChild(paragraphs[i]);
        }
      });
  }
}
function getElementAndApplyStyling(element) {
  getTabNameAndSetContent(element.id);
  // retrieve color from local storage
  let color = localStorage.getItem('color') || 'teal';
  for (let i = 0; i < buttons.length; i++) {
    // style other buttons aside the clicked one
    if (element != buttons[i])
      buttons[i].setAttribute('style', `color: ${color}`);
    buttons[i].removeAttribute('data-active');
  }
  // style the clicked button
  element.setAttribute('style', `background-color: ${color}; color: #fff`);
  element.setAttribute('data-active', 'is-active');
}
function handleToggle() {
  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const element = e.currentTarget;
      getElementAndApplyStyling(element);
    });
  });
}
function getAndSaveColor(color) {
  localStorage.setItem('color', color);
}
function switchColor() {
  colorElements.forEach((element) =>
    element.addEventListener('click', (e) => {
      let color = e.currentTarget.accessKey;
      for (let i = 0; i < buttons.length; i++) {
        // style other buttons aside the active one
        if (buttons[i].hasAttribute('data-active'))
          buttons[i].setAttribute(
            'style',
            `background-color: ${color}; color: #fff; transition: background-color 0.2s linear`,
          );
        else
          buttons[i].setAttribute(
            'style',
            `color: ${color}; transition: color 0.2s linear`,
          );
      }
      getAndSaveColor(color);
    }),
  );
}
switchColor();
setDefault();

handleToggle();
