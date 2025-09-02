const Footer = () => {
  return (
    <footer className="bg-white shadow-sm mt-auto py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <span className="text-muted">
          © {new Date().getFullYear()} MiniBlog
        </span>
        <span className="text-muted">Hecho con ❤️ y React + TS</span>
      </div>
    </footer>
  );
};

export default Footer;
