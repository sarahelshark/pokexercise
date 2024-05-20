# Pokexercise Documentation

## Introduction

Pokexercise is a simple web application that allows users to view a list of Pokémon and add new Pokémon to the Pokédex. This documentation will provide an overview of the application's structure, functionality, and usage.

## Features

- View a list of Pokémon with their names and images.
- Add new Pokémon to the Pokédex by entering their names and image URLs.
- Receive feedback on successful or failed addition of Pokémon via modal messages.
- Delete existing Pokémon cards from the Pokédex.

## Technologies Used

- HTML: Markup language for creating the structure of the web pages.
- CSS (SCSS): Styling language to enhance the visual presentation and layout.
- JavaScript: Programming language for adding interactivity and fetching data asynchronously.
- Fetch API: Used for making asynchronous HTTP requests to fetch and send data.
- MockAPI: Utilized to simulate a backend server for storing Pokémon data.

## File Structure

```
- index.html          // Main HTML file for the application's layout and structure.
- main.js             // JavaScript file containing the application logic.
- style.scss          // SCSS file for styling the application.
- Pokemon.png         // Icon for the web page.
```

## Usage

1. Open the `index.html` file in a web browser.
2. View the list of Pokémon displayed on the page.
3. To add a new Pokémon:
   - Enter the Pokémon's name in the "Pokemon name" input field.
   - Enter the image URL of the Pokémon in the "Pokemon image URL" input field, 
     the url is the following > https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{num}.png.
     ! please fill the {num} endpoint with a number from 1 to 999.
   - Click the "Add" button.
4. Upon successful addition, a success modal will appear briefly confirming the addition.
5. If the addition fails, a fail modal will appear briefly indicating the failure.

## Application Flow

- Upon loading the page, the JavaScript file (`main.js`) is executed.
- The `fetchDataAndDisplay` function fetches the Pokémon data from the MockAPI and displays it on the page.
- Users can add new Pokémon by submitting the form.
- The form submission triggers an AJAX request (`fetch`) to add the new Pokémon data to my MockAPI.
- Depending on the response from the server, success or fail modals are displayed briefly.
- After adding a new Pokémon, the list of Pokémon is refreshed to display the updated data.
- Each Pokémon card includes a "Delete" button with an event listener that calls the deletePokemon function when clicked.
- The deletePokemon function sends a DELETE request to the MockAPI to delete the corresponding Pokémon data.
- Upon successful deletion, the Pokémon cards are refreshed to reflect the updated Pokédex.
- Success or fail modals are displayed based on the result of the deletion operation.

## Styling

- The styling for the application is defined in the `style.scss` file.
- It utilizes the Google Fonts API for the "Poppins" and "Press Start 2P" fonts.
- The layout is designed to be responsive and user-friendly (mogile-first).

## Conclusion

Pokexercise is a straightforward web application for managing a Pokédex. With its simple interface and intuitive functionality, users can easily view existing Pokémon and add new ones to their collection.
