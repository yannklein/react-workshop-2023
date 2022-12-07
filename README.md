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

You should see this on the terminal:

<img width="727" alt="image" src="https://user-images.githubusercontent.com/26819547/188800617-8f08f06c-e8d9-4bfd-aaf5-62a45bd06661.png">

Open the "react-giphy" folder with SublimeText or VS Code

In your browser go to this url: `localhost:8080`

### Setup for Windows

_Don't do the install below if you are a LW alumni_
- Install NodeJS (https://nodejs.org/en/)
- Install Git (https://git-scm.com/download/win, during the installation select the option "use git from a Win command prompt"
- Install Yarn (https://classic.yarnpkg.com/en/docs/install/)
- Install Webpack (https://webpack.js.org/guides/installation/)

Search for "Node.js prompt" in the Win menu search bar (or your normal terminal for LW students), open it and tap the following (press Enter after each line):
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

You should see this on the terminal:

<img width="727" alt="image" src="https://user-images.githubusercontent.com/26819547/188800617-8f08f06c-e8d9-4bfd-aaf5-62a45bd06661.png">


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

## 4. Deploy your app to GH pages
To build and deploy your app to gh-pages branch on the GitHub repo:

Install `gh` : https://cli.github.com/ (not needed for LW alumni)

In your `workshop` folder inside your terminal do:

```
git add .
git commit -m "workshop done"
gh repo create --public --source=.
```

then follow the steps and finally do:

```
git push origin master
yarn deploy
```

Your website shoud be available at `YOUR_GITHUB_ACCOUNT.github.io/react-giphy`
