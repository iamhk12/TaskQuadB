# ReactJS Application: TV Show Explorer

This is a ReactJS application that allows users to explore TV shows using the TV Maze API. It provides a simple and intuitive user interface with two screens. The first screen displays a list of TV shows along with some details, and the second screen shows the summary of a selected show. Additionally, the second screen allows users to book a movie ticket for the selected show.

## Screenshots

<img src="https://raw.githubusercontent.com/iamhk12/TaskQuadB/main/screenshots/1.png" width="300px">

<img src="https://raw.githubusercontent.com/iamhk12/TaskQuadB/main/screenshots/2.png" width="300px">

<img src="https://raw.githubusercontent.com/iamhk12/TaskQuadB/main/screenshots/res.png" width="300px">

## Features

- Fetches TV show data from the [TV Maze API](https://api.tvmaze.com/search/shows?q=all).
- Displays a list of TV show names and details on the home screen.
- Clicking on a show redirects the user to a screen displaying the show's summary.
- Provides a "Book Ticket" button on the summary screen to book a movie ticket for the selected show.
- The ticket booking form pre-populates with the movie name and relevant details.
- User details are stored using local/session storage, ensuring no data loss on page reload.

## Installation

To run this application locally, follow these steps:

1. Clone the repository.
2. Navigate to the project directory: `cd <repository-folder>`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000`

## Technologies Used

- ReactJS
- HTML
- CSS

Thank you for considering my application!
