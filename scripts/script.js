document.addEventListener("DOMContentLoaded", function () {
  const videosContainer = document.getElementById("videosContainer");
  const navbar = document.getElementById("navbar");
  const loadingScreen = document.getElementById("loading-screen");
  const videoData = [
    {
      id: "c-EMiZduwHY",
      subtitles: "C++",
      title: "Game of Life (C++/SFML)",
      description:
        "This project is a C++ implementation of the Game of Life, utilizing the SFML library for graphics. Developed for a school project, the program simulates cellular automata, demonstrating the emergence of patterns based on predefined rules. The project serves as an educational exploration of algorithmic concepts and scientific principles.",
      github: "https://github.com/cgmarko/gdambic-rvs19-spa-dz-02",
    },
    {
      id: "Qteq5rVQBvg",
      subtitles: "C++",
      title: "Shortest Path Algorithm (C++/SFML)",
      description:
        "This project involves the implementation of a shortest path algorithm in C++ using the SFML library for graphical representation. Developed for a school project, the program efficiently computes the shortest path between nodes in a graph. It serves as an educational tool for understanding algorithmic concepts and their practical application in solving real-world problems.",
      github: "https://github.com/cgmarko/spa-dz-03",
    },
    {
      id: "1KZzlNxEWTM",
      subtitles: "HTML/CSS/JS",
      title: "University Website (HTML/CSS/JS) - Desktop View",
      description:
        "This school project involves the creation of a university website, with a main focus on HTML, CSS, and JavaScript. Notably, the project integrates responsive design principles for optimal user experience across various devices. Furthermore, the implementation includes JWT for enhanced security and HTTP requests for seamless data retrieval. This comprehensive website showcases proficiency in front-end technologies, responsive design, and secure data communication, serving as a practical demonstration of web development skills. This video displays the desktop view.",
      github: "https://github.com/cgmarko/supit",
      website: "https://supit.onrender.com/",
    },
    {
      id: "W3JcqDdFMLg",
      subtitles: "HTML/CSS/JS",
      title: "University Website (HTML/CSS/JS) - Mobile View",
      description:
        "This school project involves the creation of a university website, with a main focus on HTML, CSS, and JavaScript. Notably, the project integrates responsive design principles for optimal user experience across various devices. Furthermore, the implementation includes JWT for enhanced security and HTTP requests for seamless data retrieval. This comprehensive website showcases proficiency in front-end technologies, responsive design, and secure data communication, serving as a practical demonstration of web development skills. This video displays the mobile view.",
      github: "https://github.com/cgmarko/supit",
      website: "https://supit.onrender.com/",
    },
    {
      id: "sVwx6xpAwIU",
      subtitles: "HTML/CSS/JS",
      title:
        "University Management Web Application (NodeJS/MongoDB) - Group Project",
      description:
        "This collaborative project involved the development of a web application with a focus on backend functionalities. My primary contribution centered around creating a robust backend system using MongoDB as the database and an Express server for handling API requests and database communication. The web application facilitates the storage and management of notifications, users, and courses, allowing for seamless CRUD operations. The system incorporates JWT authentication to distinguish between administrators and regular users, ensuring secure access to the application's features. This project demonstrates proficiency in backend development, database management, user authentication, and collaborative teamwork for a comprehensive web solution.",
      github: "https://github.com/cgmarko/pra-jwt",
      website: "https://pra-yh5m.onrender.com/",
    },
    {
      id: "m55jflfs6XQ",
      subtitles: "C#/.NET",
      title: "Football Desktop App (C#/Windows Forms)",
      description:
        "This project focuses on developing a C# Windows Forms application with the primary goal of retrieving data from an external API in JSON format. The application efficiently handles and organizes diverse datasets, including player details (name, gender, captain status), match information (events, location, teams, results), and various statistics (total goals, victories, losses, games played, etc.). The implementation also features the capability to establish links between different data sets, creating a coherent and informative database.",
    },
    {
      id: "MVz48Ibzg-c",
      subtitles: "C#/.NET",
      title: "Football Desktop App (C#/WPF)",
      description:
        "This project showcases the versatility of WPF in creating dynamic and interactive user interfaces for sports-related data visualization. The primary functionality revolves around visualizing player starting positions on a field for each match. Users can interact with the field, where players are clickable, displaying detailed information when selected.",
    },
    {
      id: "is3d96L7hKA",
      subtitles: "C#/.NET",
      title: "Video Link Web Application (.NET/MSSQL) - Administrative Module",
      description:
        "This MVC C# .NET application is a video platform with three modules: Administrative, Web, and API. Leveraging MSSQL for data storage, it seamlessly manages user accounts, video content, and country-related data. Key features include automapping, dependency injection, data validation, and secure user authentication via cookies. This video displays the administrative module.",
    },
    {
      id: "dXcKRtqOJUk",
      subtitles: "C#/.NET",
      title: "Video Link Web Application (.NET/MSSQL) - Web Module",
      description:
        "This MVC C# .NET application is a video platform with three modules: Administrative, Web, and API. Leveraging MSSQL for data storage, it seamlessly manages user accounts, video content, and country-related data. Key features include automapping, dependency injection, data validation, and secure user authentication via cookies. This video displays the web module.",
    },
    {
      id: "N5ncpqWHNIY",
      subtitles: "Java",
      title: "Movie Desktop Application (Java)",
      description:
        "This Java desktop app connects to a Microsoft SQL Server database, showcasing repository principles and effective dataset management. It efficiently handles XML document creation and integrates movie data from an online API, allowing users to perform CRUD operations on the data within the app. The application is designed with a focus on simplicity, modularity, and seamless database connectivity.",
    },
    {
      id: "T9x0l2-FiFs",
      subtitles: "Java",
      title: "Dominion Clone Desktop Game (JavaFX) - Unfinished",
      description:
        "The in-progress JavaFX app is a Dominion card game clone. Players strategically build decks by acquiring Kingdom Cards using Treasure Cards. Action Cards provide unique abilities, and Victory Cards contribute to final scores. The game focuses on efficient deck-building, with turns consisting of actions, buying cards, and cleanup. The goal is to have the highest score when the game ends. The app aims to replicate the basic mechanics and excitement of the Dominion card game in a digital format.",
    },
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
    const emptyAnchorLink = document.createElement("a");
    emptyAnchorLink.id = `${subtitle.toLowerCase().replace(" ", "-")}-anchor`;

    const emptyAnchorDiv = document.createElement("div");
    emptyAnchorDiv.appendChild(emptyAnchorLink);

    videosContainer.appendChild(emptyAnchorDiv);

    let rowDiv = document.createElement("div");
    rowDiv.className = "row";
    rowDiv.id = subtitle.toLowerCase().replace(" ", "-");

    const hrBeforeSubtitle = document.createElement("hr");
    rowDiv.appendChild(hrBeforeSubtitle);

    const subtitleDiv = document.createElement("h2");
    subtitleDiv.className = "col-12";
    subtitleDiv.textContent = subtitle;

    rowDiv.appendChild(subtitleDiv);

    const hrAfterSubtitle = document.createElement("hr");
    rowDiv.appendChild(hrAfterSubtitle);

    let cardCount = 0;

    videoGroups[subtitle].forEach((video) => {
      if (cardCount % 2 === 0 && cardCount > 0) {
        videosContainer.appendChild(rowDiv);
        rowDiv = document.createElement("div");
        rowDiv.className = "row";
      }

      const colDiv = document.createElement("div");
      colDiv.className = "col-6";

      const cardDiv = document.createElement("div");
      cardDiv.className = "card";

      const cardTitle = document.createElement("h3");
      cardTitle.textContent = video.title;
      cardDiv.appendChild(cardTitle);

      const iframe = document.createElement("iframe");
      iframe.setAttribute("src", `https://www.youtube.com/embed/${video.id}`);
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      );
      iframe.setAttribute("allowfullscreen", "");

      cardDiv.appendChild(iframe);

      if (video.github || video.website) {
        const iconContainer = document.createElement("div");
        iconContainer.className = "icon-container";

        if (video.github) {
          const githubLink = document.createElement("a");
          githubLink.href = video.github;
          githubLink.innerHTML = '<i class="fab fa-github"></i>';
          iconContainer.appendChild(githubLink);
        }

        if (video.website) {
          const websiteLink = document.createElement("a");
          websiteLink.href = video.website;
          websiteLink.innerHTML = '<i class="fas fa-globe"></i>';
          iconContainer.appendChild(websiteLink);
        }

        cardDiv.appendChild(iconContainer);
      }

      if (video.description) {
        const cardDescription = document.createElement("p");
        cardDescription.textContent = video.description;
        cardDiv.appendChild(cardDescription);
      }

      colDiv.appendChild(cardDiv);

      rowDiv.appendChild(colDiv);

      cardCount++;
    });

    if (cardCount % 2 !== 0) {
      videosContainer.appendChild(rowDiv);
    }
    videosContainer.appendChild(rowDiv);
  }
  const footerDiv = document.createElement("div");
  footerDiv.id = "footer";
  footerDiv.className = "row";

  const hrBeforeFooter = document.createElement("hr");
  footerDiv.appendChild(hrBeforeFooter);

  const footerTextDiv = document.createElement("div");
  footerTextDiv.className = "col-12";
  footerTextDiv.innerHTML = `
    <p>This is the end of the page. Thanks for exploring!</p>
`;

  footerDiv.appendChild(footerTextDiv);

  const hrAfterFooter = document.createElement("hr");
  footerDiv.appendChild(hrAfterFooter);

  document.body.appendChild(footerDiv);
  loadingScreen.classList.add("loaded");
  setTimeout(function () {
    loadingScreen.style.display = "none";
  }, 500);
});
