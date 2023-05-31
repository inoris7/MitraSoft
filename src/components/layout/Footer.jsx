function Footer() {
    return (
        <footer className="page-footer cyan darken-3">          
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Nikolay Chernikov
            <a className="grey-text text-lighten-4 right" href="https://github.com/inoris7/MitraSoft">Repo</a>
            </div>
          </div>
        </footer>
    )
};

export {Footer};