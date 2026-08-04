import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      navbar: {
        features: "Fonctionnalités",
        architecture: "Architecture technique",
        github: "Mon GitHub"
      },
      hero: {
        title1: "Conçu pour scaler.",
        title2: "Pensé pour l'utilisateur.",
        subtitle: "Découvrez SynerStock, un ERP SaaS Multi-Tenant complet. Une architecture C# ASP.NET Core robuste couplée à 3 micro-frontends React ultras-rapides.",
        btnDemo: "Voir les démos interactives",
        btnTech: "Découvrir la stack technique"
      },
      showcase: {
        title: "L'ERP en action",
        subtitle: "Plongez au cœur des interfaces métiers conçues sur-mesure pour chaque type d'utilisateur, garantissant une séparation stricte des données et des responsabilités.",
        
        master: {
          title: "Administration Centrale (AppMaster)",
          desc: "Le panneau de contrôle suprême de SynerStock. Ce micro-frontend permet de gérer les clients SaaS (Tenants), de superviser la facturation globale et garantit l'isolation absolue des données d'administration système vis-à-vis des locataires.",
          feat1: "Supervision centralisée",
          feat2: "Tableaux de bord en temps réel",
          feat3: "Gestion des abonnements SaaS"
        },
        boutique: {
          title: "Interface Boutique (Point de Vente)",
          desc: "Le micro-frontend dédié aux vendeurs. Une interface épurée, rapide, optimisée pour un usage intensif en point de vente avec gestion des paniers, paiements et facturation instantanée.",
          btnMore: "Voir plus",
          feat1: "Architecture 100% isolée",
          feat2: "Performances optimales",
          feat3: "Ergonomie orientée utilisateur"
        },
        magasin: {
          title: "Administration Magasin",
          desc: "Le centre de contrôle du gérant. Suivi des stocks en temps réel, alertes de seuils, gestion des employés et tableau de bord analytique complet de l'entreprise (Tenant).",
          feat1: "Gestion des stocks & seuils d'alerte",
          feat2: "Réception des commandes fournisseurs",
          feat3: "Rapports analytiques détaillés"
        }
      },
      architecture: {
        title: "Une architecture technique professionnelle",
        subtitle: "Des choix technologiques assumés pour garantir la sécurité, la scalabilité et la maintenabilité à long terme de la plateforme SaaS.",
        card1Title: "Micro-Frontends",
        card1Desc: "La séparation en 3 applications React distinctes (Master, Subscription, Tenant) réduit drastiquement la surface d'attaque et optimise la taille des bundles envoyés au client.",
        card2Title: "Isolation Multi-Tenant",
        card2Desc: "L'utilisation avancée des \"Global Query Filters\" dans Entity Framework Core garantit mathématiquement qu'aucun client ne peut accéder aux données d'un autre (Single DB, Logical Isolation).",
        card3Title: "API REST Stateless",
        card3Desc: "Une architecture ASP.NET Core orientée services, 100% Stateless via JWT, couplée au pattern d'Inversion de Contrôle (IoC) pour une testabilité maximale du code métier."
      },
      footer: {
        text: "© 2026 Jedeon Lontchi. Créé pour démontrer mes compétences en Fullstack Engineering."
      },
      slideshow: {
        expand: "Agrandir l'image",
        slideOf: "Slide {{idx}} de {{title}}",
        expandedView: "Vue agrandie - {{title}}"
      },
      modal: {
        close: "Fermer",
        testLive: "Tester l'interface en direct",
        explore: "Découvrez à quel point il est simple d'administrer votre réseau de boutiques. (Mode Démonstration Statique)",
        tabs: {
          server: "Serveur & Logs",
          sales: "Ventes Globales"
        },
        metrics: {
          cpu: "CPU (Serveur)",
          ram: "RAM (Serveur)",
          disk: "Espace Disque",
          api: "Réponse API",
          revenue: "Chiffre d'Affaires (Aujourd'hui)",
          stores: "Boutiques Actives",
          normal: "Normale",
          stable: "Stable",
          fast: "Très Rapide"
        },
        table: {
          title: "État des services backend",
          th1: "SERVICE",
          th2: "DISPONIBILITÉ",
          th3: "STATUT",
          active: "ACTIF"
        },
        days: {
          mon: "Lun", tue: "Mar", wed: "Mer", thu: "Jeu", fri: "Ven", sat: "Sam", sun: "Dim"
        }
      }
    }
  },
  en: {
    translation: {
      navbar: {
        features: "Features",
        architecture: "Tech Stack",
        github: "My GitHub"
      },
      hero: {
        title1: "Built to scale.",
        title2: "Designed for users.",
        subtitle: "Discover SynerStock, a complete Multi-Tenant SaaS ERP. A robust C# ASP.NET Core architecture coupled with 3 lightning-fast React micro-frontends.",
        btnDemo: "View interactive demos",
        btnTech: "Discover the tech stack"
      },
      showcase: {
        title: "The ERP in action",
        subtitle: "Dive into tailored business interfaces designed for each user type, ensuring strict separation of data and responsibilities.",
        
        master: {
          title: "Central Administration (AppMaster)",
          desc: "The supreme control panel of SynerStock. This micro-frontend manages SaaS clients (Tenants), oversees global billing, and guarantees absolute isolation of system administration data from tenants.",
          feat1: "Centralized supervision",
          feat2: "Real-time dashboards",
          feat3: "SaaS subscription management"
        },
        boutique: {
          title: "Store Interface (Point of Sale)",
          desc: "The micro-frontend dedicated to salespeople. A clean, fast interface optimized for intensive point-of-sale use with cart management, payments, and instant billing.",
          btnMore: "See more",
          feat1: "100% isolated architecture",
          feat2: "Optimal performance",
          feat3: "User-oriented ergonomics"
        },
        magasin: {
          title: "Store Administration",
          desc: "The manager's control center. Real-time stock tracking, threshold alerts, employee management, and a complete analytical dashboard for the enterprise (Tenant).",
          feat1: "Inventory management & alerts",
          feat2: "Supplier order reception",
          feat3: "Detailed analytical reports"
        }
      },
      architecture: {
        title: "A Professional Technical Architecture",
        subtitle: "Deliberate technology choices to ensure security, scalability, and long-term maintainability of the SaaS platform.",
        card1Title: "Micro-Frontends",
        card1Desc: "The separation into 3 distinct React applications (Master, Subscription, Tenant) drastically reduces the attack surface and optimizes bundle sizes sent to the client.",
        card2Title: "Multi-Tenant Isolation",
        card2Desc: "Advanced use of \"Global Query Filters\" in Entity Framework Core mathematically guarantees that no client can access another's data (Single DB, Logical Isolation).",
        card3Title: "Stateless REST API",
        card3Desc: "A service-oriented ASP.NET Core architecture, 100% Stateless via JWT, coupled with the Inversion of Control (IoC) pattern for maximum business code testability."
      },
      footer: {
        text: "© 2026 Jedeon Lontchi. Created to demonstrate my Fullstack Engineering skills."
      },
      slideshow: {
        expand: "Expand image",
        slideOf: "Slide {{idx}} of {{title}}",
        expandedView: "Expanded view - {{title}}"
      },
      modal: {
        close: "Close",
        testLive: "Test the interface live",
        explore: "Discover how easy it is to manage your store network. (Static Demo Mode)",
        tabs: {
          server: "Server & Logs",
          sales: "Global Sales"
        },
        metrics: {
          cpu: "CPU (Server)",
          ram: "RAM (Server)",
          disk: "Disk Space",
          api: "API Response",
          revenue: "Revenue (Today)",
          stores: "Active Stores",
          normal: "Normal",
          stable: "Stable",
          fast: "Very Fast"
        },
        table: {
          title: "Backend services status",
          th1: "SERVICE",
          th2: "UPTIME",
          th3: "STATUS",
          active: "ACTIVE"
        },
        days: {
          mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat", sun: "Sun"
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
