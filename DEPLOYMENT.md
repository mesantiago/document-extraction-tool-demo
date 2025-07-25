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
Install node 20
```
nvm install 20
```
Set it as default
```
nvm alias default 20
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
Update .env file
```
cp .env.sample .env.local
vi .env.local
```
Build and run the client app
```
yarn prod
```
Forward port 80 to 3001
```
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 3001
```