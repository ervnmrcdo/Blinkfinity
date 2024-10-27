# **Blinkfinity**

## Cloning the repository
Before running `git clone`, make sure you have WSL installed on your machine. If you don't have WSL yet, run:
```
wsl --install
```

Then, run:
```
wsl
```
to activate the WSL terminal.

Now, you can `cd` to any directory you want and clone the repository using:
```
git clone <repository link>
```

## How to start
Before starting the app, make sure you `cd` into the `Blinkfinity` directory, then run:
```
code .
```
to open the `Blinkfinity` directory in Visual Studio Code.

To start the React app, run a terminal in Visual Studio Code and run:
```
npm start
```

## Potential errors
If you're getting an error similar to this:
```
'\\wsl.localhost\Ubuntu\home\<user>\...\Blinkfinity'
CMD.EXE was started with the above path as the current directory.
UNC paths are not supported.  Defaulting to Windows directory.
'FORCE_COLOR' is not recognized as an internal or external command,
operable program or batch file.
```
then that means that npm is trying to use Windows paths. To fix this, run:
```
# Remove existing Node and npm
sudo apt remove nodejs npm
rm -rf ~/.npm ~/.nvm

# Clean any remaining node-related files
sudo rm -rf /usr/local/bin/npm /usr/local/bin/node
sudo rm -rf /usr/local/lib/node_modules
```

Then properly install nvm and Node.js using:
```
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reload shell configuration
source ~/.bashrc

# Install the latest LTS version of Node
nvm install --lts
nvm use --lts

# Verify installation
node --version
npm --version
```

Lastly, run:
```
# Remove existing node_modules and lock files
rm -rf node_modules package-lock.json

# Install dependencies fresh
npm install
```

Then, run the React app using:
```
npm start
```