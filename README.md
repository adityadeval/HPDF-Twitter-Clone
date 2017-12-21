# HPDF-Twitter-Clone
-------------------------------------------------------------
# Introduction
-------------------------------------------------------------
This file contains necessary steps to launch the Twitter
clone app.The "create-react-native-app" method has been used.


-------------------------------------------------------------
# Steps
-------------------------------------------------------------
1. Install node.js using the nvm.
   
   Steps for installing nvm :-
    1. apt-get install build-essential libssl-dev
    2. curl https://raw.githubusercontent.com/creationix/nvm/v0.25.0/install.sh | bash
       (replace v0.25.0 with the required version.)
 
   Steps for installing nodejs :-
   1. To download, compile, and install the latest version in the v0.11.x release of node.js:
       nvm install 0.11. (Again replace 0.11 with required version.) 
   2. To download the latest stable version:
       nvm install stable
   3. To show all installed versions:
       nvm ls
      And finally, if you want to modify PATH to use v0.x.x again, then use the following command:
       nvm use 0.x.x
   
2. Assuming that you have Node installed, you can use npm to install the create-react-native-app command 
   line utility:
   npm install -g create-react-native-app

3. Create a new project using:
   create-react-native-app Temp

4. Download the git repo and rename the folder as "twitterClone".

5. Using terminal navigate to "twitterClone".

6. Copy "node_modules" from Temp to twitterClone.

7. Using native base inside "twitterClone":
   i. Run command "npm install native-base --save"
   ii.Run command "@expo/vector-icons --save"

8. Use "npm start" to run the project.
   Press a to open Android device or emulator, or i to open iOS emulator.
   Press q to display QR code.
   Press r to restart packager, or R to restart packager and clear cache.
   Press d to toggle development mode.
