install: (this is using npm but you can also use yarn)
npm install axios,
npm install react-native-paper,
npm install @react-navigation/native and expo install react-native-screens react-native-safe-area-context,
npm install @react-navigation/stack,
npm install react-native-gesture-handler

Run frontend;

For Mac:
install and run expo
npm install --global expo-cli
if expo does not work try following these steps: https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally

this will open Xcode

For windows:

run the backend;

create a virtal enviornment (deployment-venv)
cd into backend
run : python3 manage.py runserver

How the app works:
Opening page,
The fisrt page that it opens to is the page where the list of songs are.
when a song is added, edited, or deleted you would need to refresh the song list by pulling it down.
on the bottom right there is a plus button when you click that it takes you to another page to add a song.
If you click on a song it will take you to a page with the song details (title and artist) where you can edit them.

Add song page,
Once in the add song(Create) you can add a song and an artist and click the button to add the song. This will bring you back to the to the opening page where you will need to bull the songs down to see your added song.

Details page,
there are 3 buttons one for editing which will take you to the edit page which is similar to the add song page.
the delete button deletes a song and returns back to the opening page.
The rate button takes you to a page where you can rate the song.
