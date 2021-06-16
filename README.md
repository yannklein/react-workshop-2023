# Workshop: Introduction to React 
Build on the top of [Le Wagon React boilerplate](https://github.com/lewagon/react-boilerplate).

## Demo

https://yannklein.github.io/react-workshop/

## 1. Set your laptop
### Setup for Mac

_Don't do the install below if you are a LW alumni_
- Install NodeJS (https://nodejs.org/en/)
- Install Yarn (https://classic.yarnpkg.com/en/docs/install/)
- Install Webpack (https://webpack.js.org/guides/installation/)

On a terminal do:
```
git --version
cd ~/Desktop
git clone https://github.com/yannklein/react-workshop.git react-giphy 
cd react-giphy
rm -rf .git
git init
git add .
git commit -m "initial setup ready for workshop" 
cd workshop
yarn install
yarn start
```
Open the "react-giphy" folder with SublimeText or VS Code

In your browser go to this url: `localhost:8080`

### Setup for Windows

_Don't do the install below if you are a LW alumni_
- Install NodeJS (https://nodejs.org/en/)
- Install Git (https://git-scm.com/download/win, during the installation select the option "use git from a Win command prompt"
- Install Yarn (https://classic.yarnpkg.com/en/docs/install/)
- Install Webpack (https://webpack.js.org/guides/installation/)

Search for "Node.js prompt" in the Win menu search bar (or your normal terminal for LW students), open it and tap (press Enter after each line):
```
cd Desktop
git clone https://github.com/yannklein/react-workshop.git react-giphy 
cd react-giphy
rm -rf .git
git init
git add .
git commit -m "initial setup ready for workshop" 
cd workshop
yarn install
yarn start
```

Open the "react-giphy" folder with SublimeText or VS Code

In your browser go to this url: `localhost:8080`


## 2. Set you code editor
### Setup for Sublime Text
1. Go to _SublimeText > Preferences > Package Control_

Search for "Package Control: Install Package" and press `Enter`.

In the appearing list, search for "Babel" and press `Enter`.

2. Same operations for "Babel Snippets" (some doc [here](https://github.com/babel/babel-sublime-snippets))

3. Got to _SublimeText > Preferences > Key Bindings_

Add the code of this [link](https://gist.github.com/ssaunier/60d33d212564daadd5eeaebd3961be44) on the right side.

### Setup for VS code
1. Go to _Code > Preferences > Extensions_

Search and install "Reactjs code snippets" (some doc [here](https://github.com/babel/babel-sublime-snippets))

## 3. Commands to run your code locally
To start the local Webpack Dev Server (usually on port 8080):
```
yarn start
```

To lint all JavaScript files in the src folder:
```
yarn lint
```
To build and deploy your app to gh-pages branch on the GitHub repo:

Install `gh` : https://cli.github.com/ (not needed for LW alumni)

```
gh repo create react-giphy
git push origin master
yarn deploy
```
