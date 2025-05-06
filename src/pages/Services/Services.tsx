import Card from './Card';
import './Services.css';



function Services() {
    return (
        <div className="services-container bg-black text-white px-6 py-10 md:px-16 md:py-20 text-lg leading-relaxed">
            <section className="intro mb-12">
                <h2 className="text-5xl md:text-6xl font-bold mb-6">What I Do?</h2>
            </section>

            <section className="about-me max-w-4xl">
                <h3 className="text-3xl font-semibold mb-4">About Me</h3>
                <p>
                    I'm an expert Web Developer from Sri Lanka who enjoys working on challenging designs and innovative functionalities.
                    I have hands-on experience in developing and designing modern web applications. In addition to my passion for technology,
                    I'm also deeply interested in investing and building businesses that thrive through research and development.
                </p>
            </section>

            <section className="services-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Use Material icon directly */}
                <Card title="Front End Development" iconName="code_blocks" />
                <Card title="Back End Development" iconName="logo_dev" />
                <Card title="Reaserch & Development" iconName="query_stats" />
            </section>
        </div>
    );
}

export default Services;
