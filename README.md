# CSMA-CD

Welcome to the documentation for our website, which teaches CSMA/CD. Our website is aimed to provide an easy-to-understand introduction to the ideas of CSMA/CD. This website will enable the user to visualize and simulate the protocol's working from the user node's perspective.

Website link:  https://unrivaled-stardust-8895de.netlify.app

Repository Link: https://github.com/TANUJA-RA/CSMA-CD.git

How to Run?

  •	Clone the repository: Use the "git clone" command to clone the repository to your local machine. 
For example, if the repository URL is "https://github.com/TANUJA-RA/CSMA-CD.git", you can run the command "git clone https://github.com/TANUJA-RA/CSMA-CD.git" in your terminal to clone the repository, and you're all set to start.

  •	After cloning, you can run the csmacdexplo1.html file, which will direct you to the website's home page.

Description of Codebase

  •	Our code base is written in HTML, CSS, and JavaScript.

  •	It consists of the following-

    o	img – contains the image used in the website

    o	csmacdexplo1.html -home page

    o	flowchart.html -about page

    o	style.css -all styling content

    o	main.js -contains JavaScript


All about Its Working!

  •	Navigating the About page will give you some basic CSMA/CD Protocol information. There is a flowchart for a better understanding of the protocol.

  •	The student interacts and controls the actions on behalf of the user node.

  •	The user will receive a data packet that needs to be sent to Destination Node. 

  •	The user will have to check the status of the channel. If the channel is free, then the packet can be sent. Otherwise, it has to wait till the channel becomes idle again.

  •	The "Sense" button verifies the channel status. If the channel is free, the user can "Transmit" the frame by clicking the "Send Frame" button.

  •	If the channel was transmitting a frame and we again "Send Frame," it will cause "Collision," and a prompt will show collision occurred.

  •	User have to enter the collision no. in the prompt to determine wait time(back off). 

  •	There is a "History log" which maintains the history of activities that happened.

  •	The "Clear History" or "LOG" buttons in the upper right corner will reset the log.





