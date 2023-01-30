# README-MAKER
## Description 

The index.js is the main file that uses the inquirer library to prompt the user for information to create a README file. 
The generateMarkdown.js file takes in the user's responses from index.js and generates a markdown format for the README file with sections for Title, Description, Installation, Usage, Contributing, Tests, License and License Badge. 
The renderLicenseBadge and renderLicenseSection functions create the markdown for the License and License Badge sections respectively. 
The generateMarkdown function puts all the user's responses and the output from the helper functions into the final markdown format for the README file.

## Install
Must have node.js and inquirer for the application to run.

## User Story 

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

## Acceptance Criteria 
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

## Demo Video [Untitled_ Jan 29, 2023 11_50 PM (1).webm](https://user-images.githubusercontent.com/116024194/215392675-faff2ee0-2954-4177-823c-0120acdb2262.webm)

## Functionality  
[Untitled_ Jan 29, 2023 11_59 PM.webm](https://user-images.githubusercontent.com/116024194/215392747-bdff8e57-b275-4f38-837a-76c5f59705fe.webm)
