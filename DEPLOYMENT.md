# Deployment Instructions

## Setting up the server

Requirements: 
 - pem file (put it in your .ssh directory ~/.ssh/***.pem)

### Login to the aws server using the pem file
```
cd ~/.ssh
ssh -i "***.pem" ubuntu@***.amazonaws.com
```

### Install node version manager
Update system
```
sudo apt update
```
Download nvm
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
If ~/.zshrc or ~/.bash_profile is not updated automatically, add this yourself
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```
Reload shell configuration
```
source ~/.bashrc
```
Verify if nvm is installed
```
nvm -v
```
Install node 16
```
nvm install 16
```
Set it as default
```
nvm alias default 16
```

### Install global node packages
```
npm install -g forever yarn
```

### Clone git repository
```
git clone https://github.com/mesantiago/document-extraction-tool-demo.git
```

### Running the server
Pull latest and install dependencies
```
cd document-extraction-tool-demo
git pull
cd backend
yarn
```
Update .env file
```
cp .env.sample .env
vi .env
```
Run the server
```
yarn prod
```

### Running the client

Pull latest and install dependencies
```
cd ../frontend
yarn
```
Build and run the client app
```
yarn build
yarn start
```
