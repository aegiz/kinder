## Project description.

This is a custom Wordpress/Gutemberg plugin that will import automatically a kinder iframe into a page or blog post as a custom block.

## Dev stack

-  React
-  PHP

## Project Structure (TODO)

```sh
.
├── block/                    # This folder contains the code logic.
│   └── block.js              # JS behaviour for the Frontend+Backend.
│   └── editor.scss           # Specific styles for the Wordpress editor.
│   └── style.scss            # CSS for both Frontend+Backend.
├── blocks.js                 # This file initialize the JS.
├── common.scss               # This style file include things like variables and mixins that are used across the project.
├── demo/                     # This folder contains all the demo files.
│   └── kinder-block-demo.zip # Final plugin archive.
│   └── demo.mov              # Quick demo on the Wordpress UI.
│   └── demo.gif              # Quick demo in GIF format.
├── init.php                  # This file initialize the PHP plugin.
└── README.md                 # This file
```

## Installation

If you just want to install the pluggin:
In this folder you will find a `kinder-block-demo.zip` file which contains a production-ready pluggin.

To install it, you can either decompress this zip file into the Wordpress pluggin folder.
Alternatively, on the Wordpress UI, you can manually select this zip file to install.

Once the pluggin has been imported, don't forget to activate it!

## Usage

Once the pluggin active, go to a page or article and try to add a block.
You should now be able to see the Kinder block (it has a smiley icon).

Then, to use it, simply type in the input the organization or charity you want to donate to. For example simavi.

Finally, to make sure everything works fine, you can preview the embeded iframe by clicking on the little preview icon.

See it in action:
(TODO gif)

## Development

First, create a new Wordpress instance and have it run locally (for this demo I am using MAMP).

Then, cd into your pluggin folder and type the following command (don't forget to give it a descriptive name).

```bash
npx create-guten-block my-custom-block-from-scratch
```

What I am using here is the super cool library: (Create Guten Block [Link](https://github.com/ahmadawais/create-guten-block/)) which allows to create Wordpress block with React by providing a boilerplate of code.

Finally to start developping, cd into the plugin folder you just created and run the following command

```bash
npm start
```

## Building the final plugin

First, hit Ctrl/Cmd+C to stop npm from monitoring your files.

Then, run:

```bash
npm run build
```
