import {SunIcon, BoltIcon, ExclamationTriangleIcon} from "@heroicons/react/24/outline";
function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
            <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

            <div className="flex space-x-2 text-center">
                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        <SunIcon className="h-8 w-8"/>
                        <h2>Exemples</h2>
                    </div>

                    <div className="space-y-2">
                        <p className="infoText">Explique moi quelque chose</p>
                        <p className="infoText">"Quelle est la différence entre un chien et un chat ?" </p>
                        <p className="infoText">"Quelle est la couleur du soleil" </p>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        <BoltIcon className="h-8 w-8"/>
                        <h2>Capacités</h2>
                    </div>

                    <div className="space-y-2">
                        <p className="infoText">Modifier le modèle ChatGPT à utiliser </p>
                        <p className="infoText">Les messages sont stockés dans le Firestore de Firebase</p>
                        <p className="infoText">Notifications Hot Toast lorsque ChatGPT réfléchit!</p>
                    </div>
                </div>



                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        <ExclamationTriangleIcon className="h-8 w-8"/>
                        <h2>Limites</h2>
                    </div>

                    <div className="space-y-2">
                        <p className="infoText">Peut occasionnellement générer des informations incorrectes</p>
                        <p className="infoText">Peut parfois produire des instructions préjudiciables ou un contenu biaisé</p>
                        <p className="infoText">Connaissance limitée du monde et de l'événement après 2021</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;