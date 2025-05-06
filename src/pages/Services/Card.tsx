function Card({ title, iconName }: { title: string; iconName: string }) {
    return (
        <div className="service-card text-center p-4 rounded-lg shadow-md bg-white text-black">
            <span className="material-symbols-outlined text-5xl mb-2">
                {iconName}
            </span>
            <h4 className="text-xl font-semibold">{title}</h4>
        </div>
    );
}

export default Card;
