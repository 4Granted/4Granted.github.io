const discordId = "Ruthless#5405";

(function ($) {
    $(function () {
        $('.sidenav').sidenav();

        tippy('#portfolioSpy', {
            content: "Eventually possible",
            arrow: true,
            placement: 'bottom',
            hideOnClick: false,
        });

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
            content: "Mostly useless",
            arrow: true,
            placement: 'top',
            hideOnClick: false,
        });

        tippy("#githubSpy", {
            content: "My projects",
            arrow: true,
            placement: 'top',
            hideOnClick: false,
        });

        tippy("#ampliusSpy", {
            content: 'Translates to: "More"; in this case, More.NET',
            arrow: true,
            placement: 'top',
            hideOnClick: false,
        });
    });
})(jQuery);

function c2c() {
    navigator.clipboard.writeText(discordId);
}