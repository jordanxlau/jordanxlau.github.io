function Footer() {
    return (
      <footer class="container-fluid p-3 text-white bg-primary text-right">
        <div class = "row p-2" style = {{marginLeft: 40}}>
            <p class = "col text-left">
                <a href = "https://www.linkedin.com/in/jordan-lau-40454b233" class="fab fa-linkedin" style={{color:'#FFFFFF'}}></a>
                <a href = "https://www.youtube.com/channel/UC2FWBp83ePz_3naCMxBYbng" class="fab fa-youtube" style={{color: '#FFFFFF'}}></a>
                <a href = "https://github.com/jordanxlau" class="fab fa-github" style={{color: '#FFFFFF'}}></a>
            </p>
        </div>
        <div class = "row p-2" style = {{marginLeft: 40}}>
            <p class = "col text-left"> Toronto | Ottawa | jordanxlau@yahoo.ca | &copy;2025 Jordan Lau </p>
        </div>
      </footer>
    );
}

export default Footer;