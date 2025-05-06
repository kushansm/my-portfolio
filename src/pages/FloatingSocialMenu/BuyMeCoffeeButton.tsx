function BuyMeCoffeeButton() {
    return (
        <a
            href="https://buymeacoffee.com/kushandileep"
            target="_blank"
            rel="noopener noreferrer"
            title="Buy Me a Coffee"
            className="fixed cursor-pointer right-6 bottom-24 z-30 w-14 h-14 bg-yellow-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-600 transition-all duration-300"
        >
            <img src="/src/assets/BuyMeACoffe.gif" alt="Buy Me a Coffee" className="w-8 h-8 cursor-pointer" />
        </a>

    );
}

export default BuyMeCoffeeButton;
