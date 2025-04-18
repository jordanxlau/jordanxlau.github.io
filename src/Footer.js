function Footer() {
    return (
      <footer className="container-fluid p-3 text-white bg-primary text-right">
        <div className = "row p-2" style = {{marginLeft: 40}}>
            <p className = "col text-left">
                <a href = "https://www.linkedin.com/in/jordan-lau-40454b233" className="fab fa-linkedin" style={{color:'#FFFFFF', margin: 3}}></a>
                <a href = "https://www.youtube.com/channel/UC2FWBp83ePz_3naCMxBYbng" className="fab fa-youtube" style={{color: '#FFFFFF', margin: 3}}></a>
                <a href = "https://github.com/jordanxlau" className="fab fa-github" style={{color: '#FFFFFF', margin: 3}}></a>
            </p>
        </div>
        <div className = "row p-2" style = {{marginLeft: 40}}>
            <p className = "col text-left"> Toronto | Ottawa | jordanxlau@yahoo.ca | &copy;2025 Jordan Lau </p>
        </div>
      </footer>
    );
}

export default Footer;