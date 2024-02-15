// Get username from input element ✅
// Get data from https://api.github.com/users/${username}
// Add data to the html page (profile.html)
// When user adds wrong username then show him an alert with "This username is not found"
// https://api.github.com/users/zeyad-k


 
 
// Using async-await
 
const submitButton = document.querySelector('#button');

async function fetchingData(username){
	let githubResponse = await fetch(`https://api.github.com/users/${username}`);
	let githubUser = await githubResponse.json();
	if (githubUser.status === 'Not Found') {
		alert('This username is not found');
	  } else {
		  updateData(githubUser);
}}

const updateData = (data)=>{
	document.getElementById('avatar_url').src = data.avatar_url;
	document.getElementById('name').innerHTML = data.name;
	document.getElementById('bio').innerHTML = data.bio;
	document.getElementById('twitter_username').innerHTML = data.twitter_username;
	document.getElementById('followers').innerHTML = data.followers;

}

 
const onClickHandler = (event) => {
	event.preventDefault();

	const username = document.querySelector('#input').value;
	const data= fetchingData(username);
}

submitButton.addEventListener('click',onClickHandler);




// using then


// document.getElementById('button').onclick =  (event) => {
// // document.getElementById('button').addEventListener('click', function(event) {
// 	event.preventDefault(); // Prevent the form from submitting
// 	let username = document.getElementById('input').value;
  
// 	fetch(`https://api.github.com/users/${username}`)
// 	  .then(response => response.json())
// 	  .then(data => {
// 		if (data.message === 'Not Found') {
// 		  alert('This username is not found');
// 		} else {
// 			// updateData(data);
// 		  document.getElementById('avatar_url').src = data.avatar_url;
// 		  document.getElementById('name').innerHTML = data.name;
// 		  document.getElementById('bio').innerHTML = data.bio;
// 		  document.getElementById('twitter_username').innerHTML = data.twitter_username;
// 		  document.getElementById('followers').innerHTML = data.followers;
// 		}
// 	  })
// 	  .catch(error => console.error('Error:', error));
// 	};


//    });