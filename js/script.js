const validUrl = ["https://bothofyou.github.io/GdG-Prozesse/navbar.html", "https://bothofyou.github.io/GdG-Prozesse/project_1.html", "https://bothofyou.github.io/GdG-Prozesse/project_2.html", "https://bothofyou.github.io/GdG-Prozesse/project_3.html","https://bothofyou.github.io/GdG-Prozesse/project_4.html", "https://bothofyou.github.io/GdG-Prozesse/project_5.html"];

if(!validUrl.includes(window.location.href)) {
    location.replace("https://bothofyou.github.io/GdG-Prozesse/navbar.html");
}
