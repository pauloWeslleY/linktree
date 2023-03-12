
const LinksSocialMedia = {
	github: "pauloWeslleY",
	instagram: "weslley.lima_13",
	facebook: "weslley.lima.9834",
	twitter: "@PauloWeslley15",
	youtube: "youtube.com.br",
};

function changeSocialMediaLinks() {

	for (let li of listSocialsLinks.children) {
		const social = li.getAttribute('class');

		li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

		alert(li.children[0].href)

	}

}

changeSocialMediaLinks();

