import './Contacts.css';

function Contacts() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold underline flex justify-center mb-8">
                Contacts
            </h1>

            <div className="flex flex-col items-center gap-6">

                {/* Contact Information */}
                <div className="text-gray-700">
                    <h2 className="font-bold text-lg mb-2">Email</h2>
                    <p className="text-sm">kushansm@example.com</p>
                </div>

                <div className="text-gray-700">
                    <h2 className="font-bold text-lg mb-2">Phone</h2>
                    <p className="text-sm">+94 777 123 456</p>
                </div>

                <div className="text-gray-700">
                    <h2 className="font-bold text-lg mb-2">LinkedIn</h2>
                    <p className="text-sm">
                        <a href="https://www.linkedin.com/in/kushansm/" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                            linkedin.com/in/kushansm
                        </a>
                    </p>
                </div>

                <div className="text-gray-700">
                    <h2 className="font-bold text-lg mb-2">GitHub</h2>
                    <p className="text-sm">
                        <a href="https://github.com/kushansm" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                            github.com/kushansm
                        </a>
                    </p>
                </div>

                <div className="text-gray-700">
                    <h2 className="font-bold text-lg mb-2">Location</h2>
                    <p className="text-sm">Colombo, Sri Lanka</p>
                </div>

            </div>
        </div>
    );
}

export default Contacts;
