function Header() {
    return (
        <header>
            <nav>
                {/* INLINE STYLING */}
                <ul style={{listStyle: 'none'}}>
                    <li><a href="#" className="navigation">Home</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;