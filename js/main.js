const LinksSocialMedia = {
	github: "pauloWeslleY",
	instagram: "weslleylima_13",
	facebook: "weslley.lima.9834",
	twitter: "@PauloWeslley15",
	linkedin: "in/paulo-weslley-de-lima-firmino-17851a17b/",
};

function changeSocialMediaLinks() {
	for (let li of listSocialsLinks.children) {
		const social = li.getAttribute("class");

		li.children[0].href = `
			https://${social}.com/${LinksSocialMedia[social]}
		`;

	}
}

function getGitHubProfileInfos() {
	const url = `https://api.github.com/users/${LinksSocialMedia.github}`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			userName.textContent = data.name;
			userBio.textContent = data.bio;
			userLink.href = data.html_url;
			userLogin.textContent = data.login;
			userImage.src = data.avatar_url;
		});
}

getGitHubProfileInfos();
changeSocialMediaLinks();
