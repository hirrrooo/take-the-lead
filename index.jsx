const { useEffect } = React;

const teamMembers = [
  {
    name: "Siam Siam",
    bio: "Siam is a senior Computer Science student expected to graduate in Fall 2026. He was raised in Newport News, Virginia, and graduated from Warwick High School. Outside of school, he enjoys creating art, working out, fashion, and playing the guitar.",
    image: "images/Siam.jpg"
  },
  {
    name: "Madeline Lacey",
    bio: "Madeline is a Computer Science student expected to graduate in 2026. She was born in Pasadena, California, and moved to Virginia Beach in 2017. She attended Tidewater Community College for an associate degree and continued her education at Old Dominion University.",
    image: "images/Madeline.jpg"
  },
  {
    name: "Jordan Lopez",
    bio: "Jordan is a Computer Science student born in Hampton, Virginia, and is expected to graduate in Fall 2026. He is currently employed at Huntington Ingalls Industries as a software developer with project manager responsibilities.",
    image: "images/Jordan.jpg"
  },
  {
    name: "Jaden Evans",
    bio: "Jaden is a senior Computer Science major at Old Dominion University and a Virginia Beach native. He graduated from Green Run Collegiate in 2022 and expects to graduate from ODU in Fall 2026. He enjoys software development, cooking, and writing.",
    image: "images/Jaden.jpg"
  },
  {
    name: "Jermaine Lockett",
    bio: "Jermaine is a Computer Science student currently working for Systems Group as a consultant. Outside of school, he enjoys biking, cars, homelabbing, and cooking.",
    image: "images/Jermaine.jpg"
  },
  {
    name: "Harrison Basil",
    bio: "Harrison is a Computer Science student working for Systems Group as a system administrator.",
    image: "images/Harrison.jpg"
  }
];

function App() {
  useEffect(() => {

    const revealItems = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${index * 90}ms`;
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const year = new Date().getFullYear();

  return (
    <>
      <div className="bg-shape bg-shape-one" aria-hidden="true"></div>
      <div className="bg-shape bg-shape-two" aria-hidden="true"></div>

      <header className="site-header">
        <nav className="nav" aria-label="Main Navigation">
          <a className="brand" href="#home">Take the Lead</a>
          <div className="nav-links">
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#presentations">Presentations</a>
            <a className="nav-link" href="#team-bio">Team Bio</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero reveal">
          <p className="eyebrow">CS 410 Workforce Development</p>
          <h1>Take the Lead</h1>
          <p className="hero-copy">
            This landing page is intentionally simple right now. We will add our final
            intro text, team highlights, and project summary here later.
          </p>
        </section>

        <section className="section-shell reveal" aria-labelledby="home-landing-title">
          <h2 id="home-landing-title" className="section-title">Home / Landing</h2>
          <div className="landing-placeholder">Landing content area (currently blank)</div>
        </section>

        <section
          id="presentations"
          className="section-shell reveal"
          aria-labelledby="presentations-title"
        >
          <h2 id="presentations-title" className="section-title">Presentations</h2>
          <p className="section-note">
            Embedded Working Draft Feasibility Presentation.
          </p>
          <iframe
            className="presentation-frame"
            title="Working Draft Feasibility Presentation"
            src="https://docs.google.com/presentation/d/13J3pDjo19514LrfHQJPUIonnyia8IgNYAghUEXkNVUs/embed?start=false&loop=false&delayms=3000"
            allowFullScreen
          ></iframe>
          {/*
          <p className="frame-help">
            If the deck does not display, set sharing to <code>Anyone with the link</code>
            or publish it to the web in Google Slides.
          </p>
          */}
        </section>

        <section id="team-bio" className="section-shell reveal" aria-labelledby="team-bio-title">
          <h2 id="team-bio-title" className="section-title">Team Bio</h2>
          <p className="section-note">
            All bios are written in a consistent third-person style. 
          </p>
          <div className="bios-grid">
            {teamMembers.map((member) => (
              <article key={member.name} className="bio-card">
                <img className="bio-photo" src={member.image} alt={`${member.name} portrait`} />
                <div className="bio-content">
                  <h3>{member.name}</h3>
                  <p className="bio-text">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <small>&copy; {year} Take the Lead</small>
      </footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
