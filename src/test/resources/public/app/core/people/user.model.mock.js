jQuery.mockjax({
	url: "/security/users",
	type: "POST",
	status: 200,
	contentType: "application/text"
	responseText: {
		"username": "yev",
		"accessToken": "AccessToken123"
	}
});