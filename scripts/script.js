document.addEventListener("DOMContentLoaded", function () {
    const videosContainer = document.getElementById("videosContainer");
    const navbar = document.getElementById("navbar");
    const loadingScreen = document.getElementById("loading-screen");
    const videoData = [
      { id: "VIDEO_ID_1", subtitles: "C++", title: "Video 1", description: "Description Description for for Video 1" },
      { id: "VIDEO_ID_2", subtitles: "C++", title: "Video 2", description: "Description for Video 2" },
      { id: "VIDEO_ID_3", subtitles: "HTML/CSS/JS", title: "Website", description: "Description for Video 3" },
      { id: "VIDEO_ID_3", subtitles: "HTML/CSS/JS", title: "NodeJS Web App", description: "Description for Video 3" },
      { id: "VIDEO_ID_4", subtitles: "C#/.NET", title: "WinForms App", description: "Description for Video 4" },
      { id: "VIDEO_ID_5", subtitles: "C#/.NET", title: "WPF App", description: "Description for Video 5" },
      { id: "VIDEO_ID_5", subtitles: "C#/.NET", title: ".NET MVC Admin App", description: "Description for Video 5" },
      { id: "VIDEO_ID_5", subtitles: "C#/.NET", title: ".NET MVC Web App", description: "Description for Video 5" },
      { id: "VIDEO_ID_6", subtitles: "Java", title: "Video 6", description: "Description for Video 6" },
      { id: "VIDEO_ID_7", subtitles: "Java", title: "JavaFX Game Snippet", description: "Description for Video 7" },
    ];

  const videoGroups = {};
  videoData.forEach((video) => {
    if (!videoGroups[video.subtitles]) {
      videoGroups[video.subtitles] = [];
    }
    videoGroups[video.subtitles].push(video);
  });

  const aboutNavItem = document.createElement("li");
  aboutNavItem.innerHTML = `<a href="#about-anchor">ABOUT</a>`;
  navbar.querySelector("ul").appendChild(aboutNavItem);

  for (const subtitle in videoGroups) {
    const navItem = document.createElement("li");
    navItem.innerHTML = `<a href="#${subtitle
      .toLowerCase()
      .replace(" ", "-")}-anchor">${subtitle}</a>`;
    navbar.querySelector("ul").appendChild(navItem);
  }

  document.querySelectorAll('a[href*="-anchor"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      var targetId = this.getAttribute("href").substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        var targetOffsetTop = targetElement.offsetTop;

        window.scrollTo({
          top: targetOffsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  const aboutAnchor = document.createElement("a");
  aboutAnchor.id = `about-anchor`;

  const aboutAnchorDiv = document.createElement("div");
  aboutAnchorDiv.appendChild(aboutAnchor);

  videosContainer.appendChild(aboutAnchorDiv);

  const aboutDiv = document.createElement("div");
  aboutDiv.id = "about";
  aboutDiv.className = "row";
  aboutDiv.innerHTML = `
     <hr>
     <h2 class="col-12">ABOUT</h2>
     <hr>
 `;

  const aboutContentDiv = document.createElement("div");
  aboutContentDiv.className = "col-12";
  aboutContentDiv.innerHTML = `
         <p>This webpage showcases videos of projects from my GitHub directory and more, making it easier to demonstrate my past work!</p>
     `;

  aboutDiv.appendChild(aboutContentDiv);
  videosContainer.appendChild(aboutDiv);

  for (const subtitle in videoGroups) {
    // Create an empty anchor link before each subtitle
    const emptyAnchorLink = document.createElement("a");
    emptyAnchorLink.id = `${subtitle.toLowerCase().replace(" ", "-")}-anchor`;

    const emptyAnchorDiv = document.createElement("div");
    emptyAnchorDiv.appendChild(emptyAnchorLink);

    videosContainer.appendChild(emptyAnchorDiv);

    // Create the subtitle section
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";
    rowDiv.id = subtitle.toLowerCase().replace(" ", "-");

    const hrBeforeSubtitle = document.createElement("hr");
    rowDiv.appendChild(hrBeforeSubtitle);

    const subtitleDiv = document.createElement("h2");
    subtitleDiv.className = "col-12";
    subtitleDiv.textContent = subtitle;

    rowDiv.appendChild(subtitleDiv);

    // Add <hr> after the subtitle
    const hrAfterSubtitle = document.createElement("hr");
    rowDiv.appendChild(hrAfterSubtitle);

    videoGroups[subtitle].forEach((video) => {
        const colDiv = document.createElement("div");
        colDiv.className = "col-6";
  
        // Create video card
        const cardDiv = document.createElement("div");
        cardDiv.className = "card";
  
        // Video title
        const cardTitle = document.createElement("h3");
        cardTitle.textContent = video.title;
        cardDiv.appendChild(cardTitle);
  
        // Video iframe
        const iframe = document.createElement("iframe");
        iframe.setAttribute("src", `https://www.youtube.com/embed/${video.id}`);
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute(
          "allow",
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        );
        iframe.setAttribute("allowfullscreen", "");
  
        // Add iframe to the card
        cardDiv.appendChild(iframe);
  
        // Video description
        const cardDescription = document.createElement("p");
        cardDescription.textContent = video.description;
        cardDiv.appendChild(cardDescription);
  
        // Add card to the column
        colDiv.appendChild(cardDiv);
  
        // Add column to the row
        rowDiv.appendChild(colDiv);
    });

    videosContainer.appendChild(rowDiv);
  }
// Create footer section
const footerDiv = document.createElement('div');
footerDiv.id = 'footer';
footerDiv.className = 'row';

// Add <hr> before footer text
const hrBeforeFooter = document.createElement('hr');
footerDiv.appendChild(hrBeforeFooter);

// Add footer text
const footerTextDiv = document.createElement('div');
footerTextDiv.className = 'col-12';
footerTextDiv.innerHTML = `
    <p>This is the end of the page. Thanks for exploring!</p>
`;

footerDiv.appendChild(footerTextDiv);

// Add <hr> after footer text
const hrAfterFooter = document.createElement('hr');
footerDiv.appendChild(hrAfterFooter);

// Append the footer directly to the body of the document
document.body.appendChild(footerDiv);
  loadingScreen.classList.add("loaded");
  setTimeout(function () {
    loadingScreen.style.display = "none";
  }, 500);
});
