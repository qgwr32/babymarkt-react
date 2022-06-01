import { useContext } from "react";
import { UserContext } from "../pages";

export default function Header(props) {
  const user = useContext(UserContext);
  return (
    <div className="text-white bg-gray-800">
      <div className="container grid items-start grid-cols-2 gap-8 p-8 mx-auto md:grid-cols-4">
        <div className="space-y-2">
          <h2 className="mb-4 text-lg font-medium">Über dich</h2>
          <div>Hey {user.firstName}</div>
          <div>Du besitzt {user.babypoints} babypoints.</div>
          <div>
            Aktuell warten {user.cartSize} Artikel in deinem Warenkorb auf dich.
          </div>
          <div>
            Auf insgesamt {user.wishlistCount} Wunschzetteln hast du dir Artikel
            vorgemerkt.
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="mb-4 text-lg font-medium">Über uns</h2>
          <div>Unternehmen</div>
          <div>Karriere</div>
          <div>Entdecke unsere Filialen</div>
        </div>
        <div className="space-y-2">
          <h2 className="mb-4 text-lg font-medium">Alle Infos</h2>
          <div>Impressum</div>
          <div>AGB</div>
          <div>Datenschutz</div>
          <div>Dateneinstellungen</div>
          <div>Widerrufsrecht</div>
          <div>Entsorgung / Umweltschutz</div>
        </div>
        <div className="space-y-2">
          <h2 className="mb-4 text-lg font-medium">Deine Vorteile</h2>
          <div>FAQ / Kontakt</div>
          <div>Retourenservice</div>
          <div>babypoints</div>
          <div>Freunde werben</div>
          <div>Bewertungen</div>
          <div>Aptamil und Milupa Reservierungsservice</div>
          <div>Ratgeber</div>
        </div>
      </div>
    </div>
  );
}
