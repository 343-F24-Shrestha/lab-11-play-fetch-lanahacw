const userList = document.getElementById("user-list");

document.addEventListener("DOMContentLoaded", async () => {
    // This function should GET the first page of users from reqres.in.
    // The users should be displayed in the user-list element.
    // Each user should be in a new <div> with the user's first name, last name, and profile image.
    // The format should follow the example user in the HTML file.
    try {
        const response = await fetch('https://reqres.in/api/users?page=1');
        const data = await response.json();
        const userList = document.getElementById("user-list");
        data.data.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('card'); 
            const userName = document.createElement('h2');
            userName.textContent = `${user.first_name} ${user.last_name}`;
            userCard.appendChild(userName);
            const userImage = document.createElement('img');
            userImage.src = user.avatar; 
            userImage.alt = `${user.first_name} ${user.last_name}`;
            userCard.appendChild(userImage);
            userList.appendChild(userCard);
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
});