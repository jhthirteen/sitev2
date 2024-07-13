const Navbar = () => {
    return (
        <nav className="bg-black p-4 text-white">
            <div className="container mx-auto flex justify-start space-x-8">
                <a href="/about" className="text-white px-4 py-2">About</a>
                <a href="/projects" className="text-white px-4 py-2">Projects</a>
                <a href="/connect" className="text-white px-4 py-2">Connect</a>
            </div>
        </nav>
    )
};
export default Navbar;