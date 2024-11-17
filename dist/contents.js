var data = {
    "decode4.0": {
        "title": "DECODE 4.0",
        "description": `An online cryptic hunt hosted under the banner of MUJ ACM. Personally, One of my favourite projects so far. Quite hectic since I had to manage the webserver from going down (0% downtime BTW) and create, manage and give all hints and lead confirmation to participants for the entire duration.\npersonal score [9/10]`,
        "techstack": "Python, FastAPI, MongoDB, HTML, CSS, JavaScript, Tailwind CSS, Docker, GIT, REST API, slowapi (rate-limits)",
        "link": ["GITHUB", "https://github.com/krishsharma0413/decode4.0/"],
        "image": "./dist/projects/decode4.png",
        "next": ["secret society", "secret-society"]
    },
    "secret-society": {
        "title": "SECRET SOCIETY",
        "description": `Another event hosted through MUJ ACM under ELICIT'24. This was a secret society themed treasure hunt event where participants had to solve a series of puzzles to get to the final answer. The website essentially was for scanning QRs which you find throughout the campus and it locks you on your own path so other QRs don't give you access to hints.\npersonal score [8/10]`,
        "techstack": "Python, FastAPI, MongoDB, HTML, CSS, JavaScript, Tailwind CSS, Docker, GIT, REST API, slowapi (rate-limits)",
        "link": ["GITHUB", "https://github.com/krishsharma0413/secret-society/"],
        "image": "./dist/projects/secret-society.png",
        "next": ["tinder for reviews", "tinder-for-reviews"]
    },
    "tinder-for-reviews": {
        "title": "TINDER FOR REVIEWS",
        "description": `Tired of labelling your dataset the boring way? Introducing Tinder for Reviews. Now label your dataset as if you are scrolling on tinder! Okay so, to give you a little context about the project since everything think it's just tinder related project, I created this project to label the dataset for the sentiment (the "reviews" from certain social media handles and pages) analysis model I was working on in a little fun way.\n The only "tinder" this project has is the swipe left and right feature. Apart from that, I really loved this project since it was fun to make and understand more about CSS this way.\npersonal score [8.5/10]`,
        "techstack": "Python, FastAPI, SQL, JSON, HTML, CSS, JavaScript, Tailwind CSS, GIT, REST API",
        "link": ["GITHUB", "https://github.com/krishsharma0413/tinder-for-reviews/"],
        "image": "./dist/projects/tinderforreviews.png",
        "next": ["discordlevelingcard", "discordlevelingcard"]
    },
    "discordlevelingcard": {
        "title": "DISCORD LEVELING CARD",
        "description": "Back in 2022, when I was still a discord bot developer. I saw this need for a library that helps create leveling cards for XP bots in python. JavaScript had its own library but not in Python and so I thought of making this project. It got pretty famous and the repository on GitHub is still stared by many people.\nPersonal Score: [9.5/10]",
        "techstack": "Python, FastAPI, MongoDB, HTML, CSS, JavaScript, Tailwind CSS, Docker, GIT, REST API, slowapi (rate-limits)",
        "link": ["GITHUB", "https://github.com/krishsharma0413/DiscordLevelingCard"],
        "image": "./dist/projects/discordlevelingcard.png",
        "next": ["SPOTIFY-DL WEBUI", "spotify-dl-webui"]
    },
    "spotify-dl-webui": {
        "title": "SPOTIFY DL WEBUI",
        "description": "A web interface for the Spotify Downloader API I created. Uses youtube-dl to install audio Mp3 while taking all the information like BPM, artist name, etc from Spotify API.\nPersonal Score: [8.2/10]",
        "techstack": "Python, FastAPI, HTML, CSS, JavaScript, Tailwind CSS, GIT, mutagen, REST API, websockets, youtube-dl, Spotify API",
        "link": ["GITHUB", "https://github.com/krishsharma0413/spotify-dl-webui"],
        "image": "./dist/projects/spotifydlwebui.png",
        "next": ["sherlocked", "sherlocked"]
    },
    "sherlocked": {
        "title": "SHERLOCKED",
        "description": "Cryptic Hunt hosted during Incognito in 2021 and 2022. Cool project and due to this I got myself into back-end work and Databases.\nPersonal Score: [7/10]",
        "techstack": "Python, FastAPI, MongoDB, HTML, CSS, JavaScript, Tailwind CSS, REST API, slowapi (rate-limits)",
        "link": ["", ""],
        "image": "./dist/projects/sherlocked.png",
        "next": ["nirvana", "nirvana"]
    },
    "nirvana": {
        "title": "NIRVANA",
        "description": "First Prize winner for the Game Jam hosted by Kothari International School. The theme was 'It wasn't supposed to do that...' and My team including Aditya (3D guy), Yash (Music guy) and me (Cool programmer guy). We created this game in 48 hours and it was a great experience. I learned a lot about game development and also how to work under pressure.\nPersonal Score: [8.5/10]",
        "techstack": "Python, FastAPI, MongoDB, HTML, CSS, JavaScript, Tailwind CSS, Docker, GIT, REST API, slowapi (rate-limits)",
        "link": ["ITCH.IO", "https://resetxd.itch.io/nirvana"],
        "image": "./dist/projects/nirvana.png",
        "next": ["resapi", "resapi"]
    },
    "resapi": {
        "title": "RESAPI",
        "description": "Don't as too many questions. Very old project (mid 2022) and I have forgotten half of it. All I can remember is the love I got from the community for this project and also a crazy achievement for me which was hitting 1 million requests to the API within a month. I loved it when I used to spend hours and hours on working on this and actively asking the users what they liked and what next I should add.\nPersonal Score: [7.5/10]",
        "techstack": "Python, FastAPI, HTML, CSS, JavaScript, BootStrap CSS, GIT, REST API, slowapi (rate-limits)",
        "link": ["GITHUB", "https://github.com/reset-xd/resetAPI"],
        "image": "./dist/projects/resapi.png",
        "next": ["incognito 2k22", "incognito-2k22"]
    },
    "incognito-2k22": {
        "title": "INCOGNITO 2K22",
        "description": "While being the Technical Lead of my School CS Club, I had to make the websites for the events and landing website for the Club. Great memories I have and the reason behind my love for coding.",
        "techstack": "Python, FastAPI, MongoDB, HTML, CSS, JavaScript, Tailwind CSS, Docker, GIT, REST API, slowapi (rate-limits)",
        "link": ["", ""],
        "image": "./dist/projects/2k22.png",
        "next": ["decode 4.0", "decode4.0"]
    },
}

const urlParams = new URLSearchParams(window.location.search);
const project = urlParams.get('id');

if (project === null || data[project] === undefined) {
    window.location.href = `/`;
} else {
    const projectData = data[project];
    for (let x = 0; x < document.getElementsByClassName("title").length; x++)
        document.getElementsByClassName("title")[x].innerText = projectData.title;
    document.getElementById('description').innerText = projectData.description;
    document.getElementById('techstack').innerText = projectData.techstack;
    document.getElementById("project-image").src = projectData.image;

    document.getElementById("link").href = projectData.link[1];
    document.getElementById('link').innerText = projectData.link[0];

    document.getElementById('next').innerText = projectData.next[0];
    document.getElementById('next').href = `/projects.html?id=${projectData.next[1]}`;

}