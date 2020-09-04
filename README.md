## Project description.

Creates a custom Wordpress Gutember plugin that will import automatically a kinder iframes into a page or blog post as a custom block.

## Dev stack

- React
- PHP

## Project Structure (TODO)

```sh
TODO
```

## Installation

If you just want to install the pluggin:
In this folder you will find a `kinder-block.zip` file which contains a production-ready pluggin.

To install it, you can either decompress this zip file into the Wordpress pluggin folder.
Alternatively on the Wordpress UI, manually select this zip file to install.

Once the pluggin has been imported, don't forget to activate it!

## Usage

Once the pluggin is active go to a page or article and try to add a block.
You should now be able to see the Kinder block (it has a smiley icon).

Then, to use it, simply type in the input the organization or charity you want to donate to.
To make sure everything works fine, you can preview the embed by clicking on the little preview icon.

See it in action: (TODO gif)

## Development

First, create a new Wordpress instance and have it run locally (for this demo I am using MAMP)

Then, cd into your pluggin folder and type the following command (don't forget to give it a descriptive name).

```bash
npx create-guten-block my-custom-block-from-scratch
```

What we are using here is the super cool library: (Create Guten Block [Link](https://github.com/ahmadawais/create-guten-block/)) that allows to create Wordpress block with React by providing a boilerplate of code.

Finally to start developping cd into the plugin folder you just created and run the following command

```bash
npm start
```

## Building the final plugin

First, hit Ctrl/Cmd+C to stop npm from monitoring your files.

Then, run:

```bash
npm run build
```
