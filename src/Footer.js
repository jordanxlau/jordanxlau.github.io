function Footer() {
    return (
      <footer class="container-fluid p-3 text-white bg-primary text-right">
        <div class = "row p-2" style = {{marginLeft: 40}}>
            <p class = "col text-left">
                <i id = "linkedinbutton" class="fab fa-linkedin" style={{color:'#FFFFFF'}}></i>
                <i id = "youtubebutton" class="fab fa-youtube" style={{color: '#FFFFFF'}}></i>
                <i id = "githubbutton" class="fab fa-github" style={{color: '#FFFFFF'}}></i>
            </p>
        </div>
        <div class = "row p-2" style = {{marginLeft: 40}}>
            <p class = "col text-left"> Toronto | Ottawa | jordanxlau@yahoo.ca | &copy;2025 Jordan Lau </p>
        </div>
      </footer>
    );
}

export default Footer;