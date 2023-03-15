const LinksSocialMedia = {
	github: "pauloWeslleY",
	instagram: "weslley.lima_13",
	facebook: "weslley.lima.9834",
	twitter: "@PauloWeslley15",
	youtube: "youtube.com.br",
};

function changeSocialMediaLinks() {
	for (let li of listSocialsLinks.children) {
		const social = li.getAttribute("class");

		li.children[0].href = `
			https://${social}.com/${LinksSocialMedia[social]}
		`;
	}
}

changeSocialMediaLinks();

function getGitHubProfileInfos() {
	const url = `https://api.github.com/users/${LinksSocialMedia.github}`;

	fetch(url)
		.then(response => response.json())
		.then(data => {
			userName.textContent = data.name;
			userBio.textContent = data.bio;
			userLink.href = data.html_url;
			userLogin.textContent = data.login;
			userImage.src = data.avatar_url;
		})

}

getGitHubProfileInfos();
