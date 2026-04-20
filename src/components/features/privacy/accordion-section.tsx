import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
export default function AccordionSection({companyData}: {companyData: any}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-medium">
          1. Collecte des données
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground leading-relaxed">
          <p className="mb-2">
            Nous collectons les informations que vous nous fournissez
            volontairement, notamment via notre formulaire de contact ou de
            demande de devis :
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Identité (Nom, Prénom)</li>
            <li>Coordonnées (Email, Téléphone)</li>
            <li>Informations professionnelles (Nom de l'entreprise, Budget)</li>
            <li>Détails de votre projet (Message)</li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg font-medium">
          2. Utilisation des données
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground leading-relaxed">
          <p className="mb-2">
            Les données collectées sont utilisées exclusivement pour :
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Répondre à vos demandes de contact et devis.</li>
            <li>Assurer le suivi de la relation commerciale.</li>
            <li>Améliorer nos services et votre expérience utilisateur.</li>
            <li>Respecter nos obligations légales et réglementaires.</li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg font-medium">
          3. Sécurité et Stockage
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground leading-relaxed">
          <p className="mb-2">
            La sécurité de vos données est primordiale. Nous mettons en œuvre
            des mesures techniques et organisationnelles appropriées pour
            protéger vos données contre l'accès non autorisé, la divulgation, la
            modification ou la destruction.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg font-medium">
          4. Vos Droits (RGPD)
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground leading-relaxed">
          <p className="mb-2">
            Conformément au Règlement Général sur la Protection des Données
            (RGPD), vous disposez des droits suivants :
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Droit d'accès à vos données personnelles.</li>
            <li>Droit de rectification des informations inexactes.</li>
            <li>Droit à l'effacement ("droit à l'oubli").</li>
            <li>Droit à la limitation du traitement.</li>
            <li>Droit d'opposition au traitement.</li>
          </ul>
          <p className="mt-4">
            Pour exercer ces droits, contactez-nous à :{" "}
            <a
              href={`mailto:${companyData.email}`}
              className="text-primary hover:underline"
            >
              {companyData.email}
            </a>
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger className="text-lg font-medium">
          5. Cookies
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground leading-relaxed">
          <p>
            Ce site peut utiliser des cookies techniques nécessaires à son bon
            fonctionnement. Aucune donnée n'est revendue à des tiers.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
