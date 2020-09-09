# algoworksAssignment

Commands to run the project: 
1.Run `npm install`
2.Run `npm start`

--By defult this will run on port: 5000.
--We need to send username as a request body to get tweets of the specific user.
  sample request body: 
  {
    "username":"SrBachchan"
  }
--For pagination I have user query string to get the page no.
  sample url : http://localhost:5000/getTweets?page=1
