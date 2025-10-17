import { ArrowLeft, Shield, Leaf, TrendingUp, Droplets, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import aquaGreenProductImage from "figma:asset/f2837d7d1f5b6a1b3133f2961699c98f6c1afb03.png";
import impetusProductImage from "figma:asset/bd3eb5bd84f4e538e95910b5c5464520bcbe4cbc.png";
import maricidinProductImage from "figma:asset/1a08eda53058be16636a28c8aedfdad7276d64cd.png";
import maricidinBottomImage from "figma:asset/75e2ded75ccbcc63992f52e3ccc42748e6309f4e.png";
import sporexProductImage from "figma:asset/0c2989b7fdfae6ae073d3258fd789b04cf1fee8b.png";
import vibroshieldProductImage from "figma:asset/b736b7d12251085a4c66b31f308795262e006d8a.png";
import marinoxProductImage from "figma:asset/583f58778288ac74fd1412e8873372f8708059aa.png";
import ecocystProductImage from "figma:asset/6a60b93fd54d4f7a489e0272a9519d050bdf3100.png";
import crustaminProductImage from "figma:asset/d6ab9faa9ddffe1ca19a3536c5264a6060eccfcb.png";
import detoxifyXProductImage from "figma:asset/75b74a47613e17f1c8eff360b420990e40935c6c.png";

interface ProductDetailProps {
  productId: string;
  onBack: () => void;
}

export function ProductDetail({ productId, onBack }: ProductDetailProps) {
  // const productsData: { [key: string]: any } = {
  //   "aqua-green": {
  //     name: "AQUA GREEN",
  //     tagline: "Soil Organic Carbon Enhancer",
  //     image: aquaGreenProductImage,
  //     description: "AQUA GREEN is an advanced soil organic carbon enhancer specifically designed to improve pond bottom conditions. It enriches the soil with beneficial organic matter, promoting a healthier ecosystem for shrimp farming.",
  //     benefits: [
  //       "Enhances soil organic carbon content",  
  //       "Improves pond bottom health",
  //       "Promotes beneficial microbial activity",
  //       "Reduces toxic gas accumulation",
  //       "Supports sustainable aquaculture practices"
  //     ],
  //     dosage: "Apply 5-10 kg per acre during pond preparation. Repeat every 30 days for optimal results.",
  //     composition: [
  //       { component: "Organic Carbon", percentage: "40%" },
  //       { component: "Humic Acids", percentage: "25%" },
  //       { component: "Fulvic Acids", percentage: "15%" },
  //       { component: "Trace Minerals", percentage: "10%" },
  //       { component: "Bio-activators", percentage: "10%" }
  //     ]
  //   },
  //   "impetus": {
  //     name: "Impetus",
  //     tagline: "Guanylated Aqua Probiotics",
  //     image: impetusProductImage,
  //     description: "Impetus is a scientifically formulated guanylated aqua probiotic blend designed to maintain optimal water and soil quality in aquaculture ponds. This advanced formulation supports natural biological processes, enhances disease prevention, and promotes a healthy pond ecosystem for superior shrimp growth.",
  //     benefits: [
  //       "Maintains beneficial bacterial balance",
  //       "Improves water quality parameters",
  //       "Reduces ammonia and nitrite levels",
  //       "Enhances nutrient cycling",
  //       "Supports shrimp immunity"
  //     ],
  //     dosage: "Apply 1-2 kg per acre weekly. Increase to 2-3 kg during high stocking density periods.",
  //     composition: [
  //       { component: "Bacillus subtilis", percentage: "30%" },
  //       { component: "Bacillus licheniformis", percentage: "25%" },
  //       { component: "Lactobacillus spp.", percentage: "20%" },
  //       { component: "Nitrosomonas spp.", percentage: "15%" },
  //       { component: "Carrier & stabilizers", percentage: "10%" }
  //     ]
  //   },
  //   "maricidin": {
  //     name: "Maricidin",
  //     tagline: "Nano Disinfectant for clean ponds",
  //     image: maricidinProductImage,
  //     description: "Maricidin is an advanced nano-technology based disinfectant that provides superior pathogen control while being safe for shrimp and the environment. This cutting-edge formulation offers broad-spectrum antimicrobial action to maintain pristine pond conditions.",
  //     benefits: [
  //       "Nano-particle technology for enhanced efficacy",
  //       "Broad-spectrum pathogen control",
  //       "Safe for shrimp and beneficial organisms",
  //       "Quick action and long-lasting effect",
  //       "Environmentally friendly formulation"
  //     ],
  //     dosage: "Mix 500ml-1L per acre in water. Apply during pond preparation and every 15 days during culture.",
  //     composition: [
  //       { component: "Nano Silver particles", percentage: "15%" },
  //       { component: "Stabilized Hydrogen peroxide", percentage: "20%" },
  //       { component: "Organic acids", percentage: "25%" },
  //       { component: "Surfactants", percentage: "10%" },
  //       { component: "Water & stabilizers", percentage: "30%" }
  //     ]
  //   },
  //   "sporex": {
  //     name: "Sporex",
  //     tagline: "EHP Control solution",
  //     image: sporexProductImage,
  //     description: "Sporex is a specially formulated solution targeting Enterocytozoon hepatopenaei (EHP) in shrimp. This advanced formulation combines phytogenic extracts with probiotics to effectively manage EHP and support overall shrimp health and growth performance.",
  //     benefits: [
  //       "Targets EHP spores effectively",
  //       "Reduces EHP load in pond environment",
  //       "Supports digestive health",
  //       "Improves growth performance",
  //       "Natural and safe formulation"
  //     ],
  //     dosage: "Apply 2-3 kg per acre bi-weekly. For high EHP pressure, use weekly at 3-4 kg per acre.",
  //     composition: [
  //       { component: "Phytogenic extracts", percentage: "35%" },
  //       { component: "Specific probiotics", percentage: "30%" },
  //       { component: "Immunostimulants", percentage: "20%" },
  //       { component: "Organic acids", percentage: "10%" },
  //       { component: "Carriers", percentage: "5%" }
  //     ]
  //   },
  //   "vibroshield": {
  //     name: "VibroShield",
  //     tagline: "Vibrio Control for shrimp health",
  //     image: vibroshieldProductImage,
  //     description: "VibroShield is an advanced Vibrio control solution utilizing competitive exclusion and natural antimicrobials. This powerful formulation effectively manages pathogenic Vibrio species while maintaining beneficial bacteria for optimal pond health.",
  //     benefits: [
  //       "Controls pathogenic Vibrio species",
  //       "Maintains beneficial bacterial balance",
  //       "Reduces disease incidence",
  //       "Improves survival rates",
  //       "Eco-friendly and non-toxic"
  //     ],
  //     dosage: "Apply 1.5-2 kg per acre twice weekly. During disease outbreaks, increase to 3 kg daily.",
  //     composition: [
  //       { component: "Competitive bacteria", percentage: "40%" },
  //       { component: "Bacteriophages", percentage: "20%" },
  //       { component: "Organic acids blend", percentage: "25%" },
  //       { component: "Herbal extracts", percentage: "10%" },
  //       { component: "Stabilizers", percentage: "5%" }
  //     ]
  //   },
  //   "marinox": {
  //     name: "MarinoX",
  //     tagline: "Nano Selenium + Vitamin C",
  //     image: marinoxProductImage,
  //     description: "MarinoX is a premium antioxidant formulation combining nano selenium with vitamin C for enhanced bioavailability. This cutting-edge feed supplement supports shrimp immunity, promotes growth, and enhances stress resistance.",
  //     benefits: [
  //       "Enhanced bioavailability through nano-technology",
  //       "Powerful antioxidant protection",
  //       "Boosts immune system",
  //       "Improves stress tolerance",
  //       "Promotes healthy molting"
  //     ],
  //     dosage: "Mix 500g-1kg per ton of feed. Double the dose during stress periods or disease challenges.",
  //     composition: [
  //       { component: "Nano Selenium", percentage: "25%" },
  //       { component: "Vitamin C (stabilized)", percentage: "30%" },
  //       { component: "Vitamin E", percentage: "15%" },
  //       { component: "Amino acids", percentage: "20%" },
  //       { component: "Carriers & binders", percentage: "10%" }
  //     ]
  //   },
  //   "ecocyst": {
  //     name: "EcoCyst",
  //     tagline: "Microcystis Control",
  //     image: ecocystProductImage,
  //     description: "EcoCyst is a biological solution for controlling harmful blue-green algae (Microcystis). This advanced formulation uses competitive microorganisms and natural algicides to maintain balanced phytoplankton populations and ensure clear, healthy pond water.",
  //     benefits: [
  //       "Controls harmful blue-green algae",
  //       "Prevents algal bloom formation",
  //       "Maintains water clarity",
  //       "Reduces toxin production",
  //       "Promotes beneficial phytoplankton"
  //     ],
  //     dosage: "Apply 2-3 kg per acre at first sign of Microcystis. Repeat every 7-10 days if needed.",
  //     composition: [
  //       { component: "Competitive algae strains", percentage: "35%" },
  //       { component: "Beneficial bacteria", percentage: "30%" },
  //       { component: "Natural algicides", percentage: "20%" },
  //       { component: "Enzyme complex", percentage: "10%" },
  //       { component: "Stabilizers", percentage: "5%" }
  //     ]
  //   },
  //   "crustamin": {
  //     name: "CrustaMin Pro",
  //     tagline: "Chelated Mineral Supplement",
  //     image: crustaminProductImage,
  //     description: "CrustaMin Pro is a complete chelated mineral supplement formulated specifically for crustaceans. This premium feed supplement provides essential minerals in highly bioavailable form for optimal shell formation, successful molting, and enhanced growth.",
  //     benefits: [
  //       "Chelated minerals for superior absorption",
  //       "Supports strong exoskeleton formation",
  //       "Improves molting success",
  //       "Enhances growth rates",
  //       "Prevents mineral deficiencies"
  //     ],
  //     dosage: "Mix 500g-1kg per ton of feed. Apply 2-3 kg per acre in water during molting periods.",
  //     composition: [
  //       { component: "Chelated Calcium", percentage: "25%" },
  //       { component: "Chelated Magnesium", percentage: "15%" },
  //       { component: "Chelated Zinc", percentage: "10%" },
  //       { component: "Chelated Iron", percentage: "8%" },
  //       { component: "Trace minerals & carriers", percentage: "42%" }
  //     ]
  //   },
  //   "detoxify-x": {
  //     name: "Detoxify-X",
  //     tagline: "Pond Bottom Management",
  //     image: detoxifyXProductImage,
  //     description: "Detoxify-X is a comprehensive pond bottom management solution that neutralizes toxic compounds and improves sediment quality. This powerful formulation combines oxidizers, minerals, and beneficial microbes to create a healthier pond environment.",
  //     benefits: [
  //       "Neutralizes toxic gases (H2S, NH3)",
  //       "Improves pond bottom conditions",
  //       "Reduces sludge accumulation",
  //       "Enhances oxygen levels",
  //       "Creates healthier pond environment"
  //     ],
  //     dosage: "Apply 5-8 kg per acre every 15 days. Increase to 10 kg during heavy feeding periods.",
  //     composition: [
  //       { component: "Mineral oxidizers", percentage: "30%" },
  //       { component: "Zeolites", percentage: "25%" },
  //       { component: "Beneficial bacteria", percentage: "20%" },
  //       { component: "Organic acids", percentage: "15%" },
  //       { component: "Bio-catalysts", percentage: "10%" }
  //     ]
  //   }
  // };

  const productsData: { [key: string]: any } = {
    "aqua-green": {
      name: "AQUA GREEN",
      tagline: "Soil Organic Carbon Enhancer",
      image: aquaGreenProductImage,
      description:
        "AQUA GREEN is an advanced soil organic carbon enhancer specifically designed to improve pond bottom conditions. It enriches the soil with beneficial organic matter, promoting a healthier ecosystem for shrimp farming.",
      benefits: [
        "Enhances soil organic carbon content",
        "Improves pond bottom health",
        "Promotes beneficial microbial activity",
        "Reduces toxic gas accumulation",
        "Supports sustainable aquaculture practices",
      ],
      dosage:
        "Apply 5-10 kg per acre during pond preparation. Repeat every 30 days for optimal results.",
      composition: [
        { component: "Organic Carbon", percentage: "40%" },
        { component: "Humic Acids", percentage: "25%" },
        { component: "Fulvic Acids", percentage: "15%" },
        { component: "Trace Minerals", percentage: "10%" },
        { component: "Bio-activators", percentage: "10%" },
      ],
    },
    impetus: {
      name: "Impetus",
      tagline: "Guanylated Aqua Probiotics",
      image: impetusProductImage,
      description:
        "Impetus is a scientifically formulated guanylated aqua probiotic blend designed to maintain optimal water and soil quality in aquaculture ponds. This advanced formulation supports natural biological processes, enhances disease prevention, and promotes a healthy pond ecosystem for superior shrimp growth.",
      benefits: [
        "Maintains beneficial bacterial balance",
        "Improves water quality parameters",
        "Reduces ammonia and nitrite levels",
        "Enhances nutrient cycling",
        "Supports shrimp immunity",
      ],
      dosage:
        "Apply 1-2 kg per acre weekly. Increase to 2-3 kg during high stocking density periods.",
      composition: [
        { component: "Bacillus subtilis", percentage: "30%" },
        { component: "Bacillus licheniformis", percentage: "25%" },
        { component: "Lactobacillus spp.", percentage: "20%" },
        { component: "Nitrosomonas spp.", percentage: "15%" },
        { component: "Carrier & stabilizers", percentage: "10%" },
      ],
    },
    maricidin: {
      name: "Maricidin",
      tagline: "Nano Disinfectant for clean ponds",
      image: maricidinProductImage,
      description:
        "Maricidin is an advanced nano-technology based disinfectant that provides superior pathogen control while being safe for shrimp and the environment. This cutting-edge formulation offers broad-spectrum antimicrobial action to maintain pristine pond conditions.",
      benefits: [
        "Nano-particle technology for enhanced efficacy",
        "Broad-spectrum pathogen control",
        "Safe for shrimp and beneficial organisms",
        "Quick action and long-lasting effect",
        "Environmentally friendly formulation",
      ],
      dosage:
        "Mix 500ml-1L per acre in water. Apply during pond preparation and every 15 days during culture.",
      composition: [
        { component: "Nano Silver particles", percentage: "15%" },
        { component: "Stabilized Hydrogen peroxide", percentage: "20%" },
        { component: "Organic acids", percentage: "25%" },
        { component: "Surfactants", percentage: "10%" },
        { component: "Water & stabilizers", percentage: "30%" },
      ],
      // extraSection: {
      //   title: "Advanced Nano Technology",
      //   paragraphs: [
      //     "Maricidin utilizes cutting-edge nano-particle technology to deliver superior pathogen control in aquaculture environments. The advanced formulation ensures deep penetration and long-lasting antimicrobial action.",
      //     "Our nano-silver particles work at the molecular level to eliminate harmful pathogens while maintaining the delicate balance of beneficial microorganisms essential for a healthy pond ecosystem.",
      //     "Designed for maximum efficacy and minimal environmental impact, Maricidin represents the next generation of aquaculture biosecurity solutions.",
      //   ],
      //   highlight: {
      //     title: "Safe & Effective",
      //     description:
      //       "Thoroughly tested and proven safe for shrimp, fish, and beneficial pond organisms while providing powerful protection against pathogenic threats.",
      //   },
      //   image: maricidinBottomImage,
      // },
    },
    sporex: {
      name: "Sporex",
      tagline: "EHP Control solution",
      image: sporexProductImage,
      description:
        "Sporex is a specially formulated solution targeting Enterocytozoon hepatopenaei (EHP) in shrimp. This advanced formulation combines phytogenic extracts with probiotics to effectively manage EHP and support overall shrimp health and growth performance.",
      benefits: [
        "Targets EHP spores effectively",
        "Reduces EHP load in pond environment",
        "Supports digestive health",
        "Improves growth performance",
        "Natural and safe formulation",
      ],
      dosage:
        "Apply 2-3 kg per acre bi-weekly. For high EHP pressure, use weekly at 3-4 kg per acre.",
      composition: [
        { component: "Phytogenic extracts", percentage: "35%" },
        { component: "Specific probiotics", percentage: "30%" },
        { component: "Immunostimulants", percentage: "20%" },
        { component: "Organic acids", percentage: "10%" },
        { component: "Carriers", percentage: "5%" },
      ],
      // extraSection: {
      //   title: "Advanced Nano Technology",
      //   paragraphs: [
      //     "Maricidin utilizes cutting-edge nano-particle technology to deliver superior pathogen control in aquaculture environments. The advanced formulation ensures deep penetration and long-lasting antimicrobial action.",
      //     "Our nano-silver particles work at the molecular level to eliminate harmful pathogens while maintaining the delicate balance of beneficial microorganisms essential for a healthy pond ecosystem.",
      //     "Designed for maximum efficacy and minimal environmental impact, Maricidin represents the next generation of aquaculture biosecurity solutions.",
      //   ],
      //   highlight: {
      //     title: "Safe & Effective",
      //     description:
      //       "Thoroughly tested and proven safe for shrimp, fish, and beneficial pond organisms while providing powerful protection against pathogenic threats.",
      //   },
      //   image: maricidinBottomImage,
      // },
    },
    vibroshield: {
      name: "VibroShield",
      tagline: "Vibrio Control for shrimp health",
      image: vibroshieldProductImage,
      description:
        "VibroShield is an advanced Vibrio control solution utilizing competitive exclusion and natural antimicrobials. This powerful formulation effectively manages pathogenic Vibrio species while maintaining beneficial bacteria for optimal pond health.",
      benefits: [
        "Controls pathogenic Vibrio species",
        "Maintains beneficial bacterial balance",
        "Reduces disease incidence",
        "Improves survival rates",
        "Eco-friendly and non-toxic",
      ],
      dosage:
        "Apply 1.5-2 kg per acre twice weekly. During disease outbreaks, increase to 3 kg daily.",
      composition: [
        { component: "Competitive bacteria", percentage: "40%" },
        { component: "Bacteriophages", percentage: "20%" },
        { component: "Organic acids blend", percentage: "25%" },
        { component: "Herbal extracts", percentage: "10%" },
        { component: "Stabilizers", percentage: "5%" },
      ],
      // extraSection: {
      //   title: "Advanced Nano Technology",
      //   paragraphs: [
      //     "Maricidin utilizes cutting-edge nano-particle technology to deliver superior pathogen control in aquaculture environments. The advanced formulation ensures deep penetration and long-lasting antimicrobial action.",
      //     "Our nano-silver particles work at the molecular level to eliminate harmful pathogens while maintaining the delicate balance of beneficial microorganisms essential for a healthy pond ecosystem.",
      //     "Designed for maximum efficacy and minimal environmental impact, Maricidin represents the next generation of aquaculture biosecurity solutions.",
      //   ],
      //   highlight: {
      //     title: "Safe & Effective",
      //     description:
      //       "Thoroughly tested and proven safe for shrimp, fish, and beneficial pond organisms while providing powerful protection against pathogenic threats.",
      //   },
      //   image: maricidinBottomImage,
      // },
    },
    marinox: {
      name: "MarinoX",
      tagline: "Nano Selenium + Vitamin C",
      image: marinoxProductImage,
      description:
        "MarinoX is a premium antioxidant formulation combining nano selenium with vitamin C for enhanced bioavailability. This cutting-edge feed supplement supports shrimp immunity, promotes growth, and enhances stress resistance.",
      benefits: [
        "Enhanced bioavailability through nano-technology",
        "Powerful antioxidant protection",
        "Boosts immune system",
        "Improves stress tolerance",
        "Promotes healthy molting",
      ],
      dosage:
        "Mix 500g-1kg per ton of feed. Double the dose during stress periods or disease challenges.",
      composition: [
        { component: "Nano Selenium", percentage: "25%" },
        { component: "Vitamin C (stabilized)", percentage: "30%" },
        { component: "Vitamin E", percentage: "15%" },
        { component: "Amino acids", percentage: "20%" },
        { component: "Carriers & binders", percentage: "10%" },
      ],
      // extraSection: {
      //   title: "Advanced Nano Technology",
      //   paragraphs: [
      //     "Maricidin utilizes cutting-edge nano-particle technology to deliver superior pathogen control in aquaculture environments. The advanced formulation ensures deep penetration and long-lasting antimicrobial action.",
      //     "Our nano-silver particles work at the molecular level to eliminate harmful pathogens while maintaining the delicate balance of beneficial microorganisms essential for a healthy pond ecosystem.",
      //     "Designed for maximum efficacy and minimal environmental impact, Maricidin represents the next generation of aquaculture biosecurity solutions.",
      //   ],
      //   highlight: {
      //     title: "Safe & Effective",
      //     description:
      //       "Thoroughly tested and proven safe for shrimp, fish, and beneficial pond organisms while providing powerful protection against pathogenic threats.",
      //   },
      //   image: maricidinBottomImage,
      // },
    },
    ecocyst: {
      name: "EcoCyst",
      tagline: "Microcystis Control",
      image: ecocystProductImage,
      description:
        "EcoCyst is a biological solution for controlling harmful blue-green algae (Microcystis). This advanced formulation uses competitive microorganisms and natural algicides to maintain balanced phytoplankton populations and ensure clear, healthy pond water.",
      benefits: [
        "Controls harmful blue-green algae",
        "Prevents algal bloom formation",
        "Maintains water clarity",
        "Reduces toxin production",
        "Promotes beneficial phytoplankton",
      ],
      dosage:
        "Apply 2-3 kg per acre at first sign of Microcystis. Repeat every 7-10 days if needed.",
      composition: [
        { component: "Competitive algae strains", percentage: "35%" },
        { component: "Beneficial bacteria", percentage: "30%" },
        { component: "Natural algicides", percentage: "20%" },
        { component: "Enzyme complex", percentage: "10%" },
        { component: "Stabilizers", percentage: "5%" },
      ],
      // extraSection: {
      //   title: "Advanced Nano Technology",
      //   paragraphs: [
      //     "Maricidin utilizes cutting-edge nano-particle technology to deliver superior pathogen control in aquaculture environments. The advanced formulation ensures deep penetration and long-lasting antimicrobial action.",
      //     "Our nano-silver particles work at the molecular level to eliminate harmful pathogens while maintaining the delicate balance of beneficial microorganisms essential for a healthy pond ecosystem.",
      //     "Designed for maximum efficacy and minimal environmental impact, Maricidin represents the next generation of aquaculture biosecurity solutions.",
      //   ],
      //   highlight: {
      //     title: "Safe & Effective",
      //     description:
      //       "Thoroughly tested and proven safe for shrimp, fish, and beneficial pond organisms while providing powerful protection against pathogenic threats.",
      //   },
      //   image: maricidinBottomImage,
      // },
    },
    crustamin: {
      name: "CrustaMin Pro",
      tagline: "Chelated Mineral Supplement",
      image: crustaminProductImage,
      description:
        "CrustaMin Pro is a complete chelated mineral supplement formulated specifically for crustaceans. This premium feed supplement provides essential minerals in highly bioavailable form for optimal shell formation, successful molting, and enhanced growth.",
      benefits: [
        "Chelated minerals for superior absorption",
        "Supports strong exoskeleton formation",
        "Improves molting success",
        "Enhances growth rates",
        "Prevents mineral deficiencies",
      ],
      dosage:
        "Mix 500g-1kg per ton of feed. Apply 2-3 kg per acre in water during molting periods.",
      composition: [
        { component: "Chelated Calcium", percentage: "25%" },
        { component: "Chelated Magnesium", percentage: "15%" },
        { component: "Chelated Zinc", percentage: "10%" },
        { component: "Chelated Iron", percentage: "8%" },
        { component: "Trace minerals & carriers", percentage: "42%" },
      ],
    },
    "detoxify-x": {
      name: "Detoxify-X",
      tagline: "Pond Bottom Management",
      image: detoxifyXProductImage,
      description:
        "Detoxify-X is a comprehensive pond bottom management solution that neutralizes toxic compounds and improves sediment quality. This powerful formulation combines oxidizers, minerals, and beneficial microbes to create a healthier pond environment.",
      benefits: [
        "Neutralizes toxic gases (H2S, NH3)",
        "Improves pond bottom conditions",
        "Reduces sludge accumulation",
        "Enhances oxygen levels",
        "Creates healthier pond environment",
      ],
      dosage:
        "Apply 5-8 kg per acre every 15 days. Increase to 10 kg during heavy feeding periods.",
      composition: [
        { component: "Mineral oxidizers", percentage: "30%" },
        { component: "Zeolites", percentage: "25%" },
        { component: "Beneficial bacteria", percentage: "20%" },
        { component: "Organic acids", percentage: "15%" },
        { component: "Bio-catalysts", percentage: "10%" },
      ],
      extraSection: {
        title: "Advanced Nano Technology",
        paragraphs: [
          "Maricidin utilizes cutting-edge nano-particle technology to deliver superior pathogen control in aquaculture environments. The advanced formulation ensures deep penetration and long-lasting antimicrobial action.",
          "Our nano-silver particles work at the molecular level to eliminate harmful pathogens while maintaining the delicate balance of beneficial microorganisms essential for a healthy pond ecosystem.",
          "Designed for maximum efficacy and minimal environmental impact, Maricidin represents the next generation of aquaculture biosecurity solutions.",
        ],
        highlight: {
          title: "Safe & Effective",
          description:
            "Thoroughly tested and proven safe for shrimp, fish, and beneficial pond organisms while providing powerful protection against pathogenic threats.",
        },
        image: maricidinBottomImage,
      },
    },
  };

  const product = productsData[productId];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4" style={{ fontSize: '24px' }}>Product not found</h2>
          <Button onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const iconMap: { [key: string]: any } = {
    0: Shield,
    1: Leaf,
    2: TrendingUp,
    3: Droplets,
    4: CheckCircle
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/20 to-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-8">
        {/* <Button 
          onClick={onBack}
          variant="ghost"
          className="mb-8 bg-white/80 hover:bg-white/90 "
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button> */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6 group"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          <span style={{ fontSize: '16px', fontWeight: 600 }}>Back to Products</span>
        </button>

        {/* Product Overview - Image Left, Description Right */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left: Product Image */}
          <div className="relative">
            <div className="sticky top-24">
              {productId === 'aqua-green' ? (
                <div className="relative  rounded-lg  p-8 overflow-visible">
                  {/* Animated decorative circles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Large light blue circle - top left */}
                    {/* <div className="absolute top-[15%] left-[8%] w-28 h-28 rounded-full bg-muted/30 animate-float-circle-1"></div> */}

                    {/* Medium light blue circle - bottom left */}
                    {/* <div className="absolute bottom-[25%] left-[5%] w-16 h-16 rounded-full bg-muted/40 animate-float-circle-2"></div> */}

                    {/* Small light blue circle - top left corner */}
                    {/* <div className="absolute top-[8%] left-[2%] w-12 h-12 rounded-full bg-muted/35 animate-float-circle-3"></div> */}

                    {/* Large light blue circle - top right */}
                    {/* <div className="absolute top-[12%] right-[10%] w-32 h-32 rounded-full bg-muted/25 animate-float-circle-4"></div> */}

                    {/* Medium light blue circle - bottom right */}
                    {/* <div className="absolute bottom-[15%] right-[5%] w-20 h-20 rounded-full bg-muted/35 animate-float-circle-5"></div> */}

                    {/* Dark blue circle - left side */}
                    {/* <div className="absolute top-[40%] left-[12%] w-10 h-10 rounded-full bg-primary/40 animate-float-circle-6"></div> */}

                  </div>

                  {/* Product image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-contain relative z-10"
                  />
                </div>
              ) : productId === 'impetus' || productId === 'maricidin' || productId === 'sporex' || productId === 'vibroshield' || productId === 'marinox' || productId === 'ecocyst' || productId === 'crustamin' || productId === 'detoxify-x' ? (
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-contain animate-float-uneven scale-110"
                  />
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-contain"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right: Product Description */}
          <div>
            <div className="mb-4">
              <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full" style={{ fontSize: '14px', fontWeight: 600 }}>
                {product.tagline}
              </span>
            </div>

            <h1 className="text-primary mb-6" style={{ fontSize: '42px', fontWeight: 700, lineHeight: 1.2 }}>
              {product.name}
            </h1>

            <div className="mb-8">
              <h2 className="text-foreground mb-4" style={{ fontSize: '24px', fontWeight: 600 }}>
                Product Description
              </h2>
              <p className="text-foreground/80" style={{ fontSize: '16px', lineHeight: 1.8 }}>
                {product.description}
              </p>
            </div>

            {/* Dosage Information */}
            <Card className="mb-8 border-l-4 border-l-accent">
              <CardContent className="p-6">
                <h3 className="text-primary mb-3" style={{ fontSize: '18px', fontWeight: 600 }}>
                  Dosage & Application
                </h3>
                <p className="text-foreground" style={{ fontSize: '16px' }}>
                  {product.dosage}
                </p>
              </CardContent>
            </Card>

            {/* Composition */}
            <div>
              <h3 className="text-primary mb-4" style={{ fontSize: '20px', fontWeight: 600 }}>
                Composition
              </h3>
              <div className="space-y-2">
                {product.composition.map((item: any, index: number) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded">
                    <span className="text-foreground" style={{ fontSize: '15px' }}>
                      {item.component}
                    </span>
                    <span className="text-primary" style={{ fontSize: '15px', fontWeight: 600 }}>
                      {item.percentage}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-16">
          <h2 className="text-primary mb-8 text-center" style={{ fontSize: '32px', fontWeight: 600 }}>
            Key Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {product.benefits.map((benefit: string, index: number) => {
              const Icon = iconMap[index % 5];
              return (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-secondary" />
                        </div>
                      </div>
                      <p className="text-foreground flex-1" style={{ fontSize: '16px', lineHeight: 1.6 }}>
                        {benefit}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>



        {product.extraSection && (
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <h2 style={{ fontSize: "32px", fontWeight: 600 }} className="text-primary mb-6">
                  {product.extraSection.title}
                </h2>
                <div className="space-y-4" style={{ fontSize: "16px", lineHeight: 1.8 }}>
                  {product.extraSection.paragraphs.map((p: string, i: number) => (
                    <p key={i}>{p}</p>
                  ))}
                  <div className="mt-8 p-6 bg-primary/5 rounded-lg border-l-4 border-l-primary">
                    <h4 style={{ fontSize: "18px", fontWeight: 600 }} className="text-primary mb-2">
                      {product.extraSection.highlight.title}
                    </h4>
                    <p className="text-foreground/90">{product.extraSection.highlight.description}</p>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="flex items-center justify-center">
                <img
                  src={product.extraSection.image}
                  alt={product.extraSection.title}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

















