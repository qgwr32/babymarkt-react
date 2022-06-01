import { useContext } from "react";
import { UserContext } from "../pages";

export default function Header(props) {
  const user = useContext(UserContext);
  return (
    <div className="bg-gray-800 text-white">
      <div className="container grid grid-cols-2 md:grid-cols-4 items-start gap-8 mx-auto p-8">
        <div className="space-y-2">
          <h2 className="text-lg font-medium mb-4">Über dich</h2>
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
          <h2 className="text-lg font-medium mb-4">Über uns</h2>
          <div>Unternehmen</div>
          <div>Karriere</div>
          <div>Entdecke unsere Filialen</div>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-medium mb-4">Alle Infos</h2>
          <div>Impressum</div>
          <div>AGB</div>
          <div>Datenschutz</div>
          <div>Dateneinstellungen</div>
          <div>Widerrufsrecht</div>
          <div>Entsorgung / Umweltschutz</div>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-medium mb-4">Deine Vorteile</h2>
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
