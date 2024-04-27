# Chrome Extension with React + TailwindCSS Content Script Template 

This is a lightweight template for creating a Chrome Extension that is content script based. It allows you to use React and TailwindCSS to build the content script. It also creates a shadow DOM to prevent CSS conflicts with the host page.

## Getting Started
We are using Bun to bundle the scripts, so make sure you have it installed. If not, visit [Bun](https://bun.sh/).
1. Clone the repository
2. Run `./install.sh` to install the dependencies
3. Run `./build.sh` to build the extension in the `dist` folder
4. Load the extension in Chrome by going to `chrome://extensions/` and clicking on `Load unpacked` and selecting the `dist` folder. 

If installed correctly, you should see a shadow DOM injected into the host page with a div containing the text "Hello, World!".

## Structure
### Backgroud Script (Service Worker)
In the `background-script` folder, you will find the background script. This script is responsible for listening to events and managing the extension.

### Content Script
In the `content-script` folder, you will find the content script. This script is responsible for injecting the React app into the host page.

### Shared
This folder contains the shared code between the background script and the content script. I usually use it to define constants and types.
