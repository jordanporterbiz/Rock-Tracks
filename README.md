# Rock Tracks - Scottish Power Technical Test

This project demonstrates basic understanding of React JS concepts in the form of a music application which pulls music data into a list. Users can select a track from a list to be directed to a track details page displaying more track information. 

## Getting started

To get started, clone the repository by typing the following 'git clone https://github.com/jordanporterbiz/Rock-Tracks.git' command in your terminal. 
Once cloned to your local machine, navigate to the project directory. Once in the project directory, you can run:
### `yarn install` || `npm install`

This will install the necessary packages needed to successfully run the application. Once packages have fully installed, you are ready to start the project in development mode. 
### `yarn start` || `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



# Tech Test Documentation
## Obstacles 

- API endpoint produced an opaque response due to having no CORS headers present. To get around this, I pulled the data from 'https://itunes.apple.com/search?term=rock&media=music', parsed the text file into JSON and saved data.json in the project folder. This workaround allows the application to successfully request the data. 

## Future development considerations

Future improvements to consider: 
- UI library such as Material UI for simple, responsive and well designed components. 
- Redux logic can be simplified further with the introduction of redux toolkit
- State management can be broken down further into smaller, independant state objects
- add 
- To avoid the opaque response from the Itunes API endpoint, I would implement  a simple API which serves this data.
- Persist state upon refresh in the track details page
- introduce data persistance in the application by integrating a database solution.
-  Track rock song selection over time for analytics purposes, i.e what's hot & what's not, most popular selections. 
- Utilise data gathered to improve user experience. 

## Workflow considerations

In a real-world scenario, the project would be set up in the following way: 

- multi-branch git repository with 'dev' and 'feature' branches. feature branches will merge into dev once a feature has been completed. Tests will run and a preview deployment initiated. Once testing has been completed and code has been reviewed and passed, a merge can be made into the main branch triggering a production deployment. 
- CI/CD pipeline for automated build, testing and deployment. 
- Taskboard with clearly detailed tasks. 


### Languages and Tools used:

<img align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />
<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
<img align="left" alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />
<img align="left" alt="Terminal" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />

<br />
<br />

---

### Connect with me:

[<img align="left" alt="BlackPhoenixSolutions.co.uk" width="22px" src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" />][website]
[<img align="left" alt="Jordan Porter | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin]
[<img align="left" alt="Jordan Porter | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />][instagram]

<br />
<br />

---

[website]: https://blackphoenixsolutions.co.uk
[instagram]: https://www.instagram.com/jordansjourneythroughlife
[linkedin]: https://www.linkedin.com/in/creatingthefuture
