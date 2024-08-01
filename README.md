# RestAPI
Pre-Sales Software Engineering Test

Prompt: 
Using the programming language/framework of your choice, create a small REST
API with two endpoints:
GET - Fetch a list of (aircraft) engines with the following properties
• Id - a unique identifier for the engine
• Name - the name of the type of engine (i.e. Gas, Diesel, Electric)
• Manufacture Date - the date of manufacture (can be a randomly
generated date, it just needs to be consistent between calls to the
API)
PUT - Update the Manufacture date of a specific engine
The API should store the data in a way that can be retrieved between runs of the
program, such as a file on the disk or other database or your choosing (i.e. don't
store them in memory)
Then, create a small web client that fetches the engines and displays them in a
simple table. A user should be able to select one of the engines and update the
Manufacture Date (see the PUT request mentioned above).
You do not need to use a web framework of any kind, nor are you required to use
any CSS styling. You can create this all in a simple index.html file.
It just needs to be functional, not pretty!


HOW TO RUN------
1. download each file. please make sure they are all in the same folder.
2. open zip file
3. in terminal navigate to the folder where all of the files are located.
4. once you are in the fold where all of the files are located run the command "node app.js"
5. this will begin running our node server. you should see a confirmation that says:
  Server is running on port 3000
  Connected to engines database.
6. once you see this confirmation open up the index.html page.
7. the page will display the current engine information
8. you may then select a new date for the engine and press update date.
9. this will show a confirmation of the new date.
10. once the page is refreshed then it will display the new date on engine 
