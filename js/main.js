$(document).ready(() => {

    let mainLink = $('a.logo');

    let isGitHubPages = () => {
        return location.host === 'kornatalya.github.io';
    };

    if (isGitHubPages()) {
        mainLink.attr('href', '/Burgers-for-LoftSchool/index.html');
    }
    else {
        mainLink.attr('href', '/');
    }
});