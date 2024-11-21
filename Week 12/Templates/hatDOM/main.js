import homeModel from "./models/home.js";

/**
 * Loads htnml content from a url and adds it to a container
 * @param string url 
 * @param HTMLElement container 
 */
async function loadHTML(url) {
  const response = await fetch(url);
  return await response.text();
};

const _selectedLink = new Binder();
const _mainContent = new Binder(homeModel);

const navPages = ["about", "projects", "contact"];

DOM.set({
  title: 'My Portfolio',
  link: "style.css",
  header: {
    h1: {
      a: {
        id: "pageTitle",
        text: "My Portfolio",
        onclick: async () => {
          _mainContent.value = homeModel;
          _selectedLink.value = null;
        },
      }
    },
    nav: {
      ul: {
        li: navPages.map(name => ({
          a: {
            class: {
              selected: _selectedLink.as(val => val === name),
            },
            href: "#" + name,
            text: name,
            onclick: async () => {
              _mainContent.value = await loadHTML(`./templates/${name}.html`);
              _selectedLink.value = name;
            },
          },
        })),
      },
    },
  },
  main: {
    class: "content-container",
    content: _mainContent,
  },
  footer: {
    p: "&copy; 2024 My Portfolio. All rights reserved.",
  },
});