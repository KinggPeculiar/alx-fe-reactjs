function Header() {
    return (
        <header style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center' }}>
            <h1>My Favorite Cities</h1>
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