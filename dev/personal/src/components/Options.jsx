import PropTypes from 'prop-types'

const Options = ({ tab, handle }) => {

    const navItems = [
        { id: 0, label: "About Me" },
        { id: 1, label: "Experience" },
        { id: 2, label: "Current Learning" },
    ];

    return (
        <nav>
            <div className="flex items-center gap-4 sm:gap-8">
                {navItems.map((item) => {
                    const active = tab === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => handle(item.id)}
                            className={`relative text-sm sm:text-base font-medium tracking-wide transition-colors duration-200 ${
                                active
                                    ? "text-sky-500"
                                    : "text-current opacity-60 hover:text-sky-500 hover:opacity-100"
                            }`}
                        >
                            {item.label}
                            <span
                                className={`absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-sky-500 transition-transform duration-300 origin-left ${
                                    active ? "scale-x-100" : "scale-x-0"
                                }`}
                            />
                        </button>
                    );
                })}
            </div>
        </nav>
    )
};
Options.propTypes = {
    tab: PropTypes.number,
    handle: PropTypes.func.isRequired,
};
export default Options;
