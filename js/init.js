const discordId = "Ruthless#5405";

function c2c() {
     navigator.clipboard.writeText(discordId);
}

tippy('#discordContactSpy', {
    content: "Click to copy: " + discordId,
    arrow: true,
    placement: 'top',
    hideOnClick: false,
});

tippy('#discordSpy', {
    content: "Click to copy",
    arrow: true,
    placement: 'top',
    hideOnClick: false,
});

tippy("#twitterSpy", {
    content: "Heh, haven't used it ever.",
    arrow: true,
    placement: 'top',
    hideOnClick: false,
});

tippy("#githubSpy", {
    content: "All my beloved projects.",
    arrow: true,
    placement: 'top',
    hideOnClick: false,
});