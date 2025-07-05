"use client";

import { useEffect, useRef } from "react";
import { X, Sparkles, Zap, Brush, Wrench, Droplets, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// 👇 SERVICES ARRAY moved outside the component
const services = [
  {
    id: "marble-restoration",
    title: "Marble Restoration",
    description:
      "Complete restoration of damaged marble surfaces, bringing them back to their original beauty with professional techniques and premium materials.",
    icon: Sparkles,
    hoverBg: "group-hover:bg-gradient-to-br group-hover:from-[#c59d5f] group-hover:to-[#e7c992]",
    details:
      "Our marble restoration process includes crack repair, stain removal, surface leveling, and complete refinishing to restore your marble's natural elegance.",
    videoUrl: "/videos/s21.mp4",
    videoDescription:
      "Watch our expert team restore damaged marble to its original pristine condition using advanced restoration techniques.",
    serviceImages: ["/images/s2.jpg", "/images/s20.jpg", "/images/s4.jpg"],
    processHighlights: [
      "Comprehensive damage assessment and analysis",
      "Specialized crack filling with color-matched compounds",
      "Surface grinding and leveling techniques",
      "Multi-stage restoration with premium materials",
    ],
    keyBenefits: [
      "Restores marble to original condition",
      "Eliminates cracks, chips, and surface damage",
      "Extends marble lifespan by decades",
      "Cost-effective alternative to replacement",
    ],
  },
  {
    id: "marble-shining",
    title: "Marble Shining",
    description:
      "Professional marble shining services that restore the natural luster and brilliance of your marble surfaces with diamond polishing techniques.",
    icon: Zap,
    hoverBg: "group-hover:bg-gradient-to-br group-hover:from-[#00675b] group-hover:to-[#00a896]",
    details:
      "Using advanced diamond polishing compounds and techniques, we restore the mirror-like finish that makes marble surfaces truly spectacular.",
    videoUrl: "/videos/s22.mp4",
    videoDescription:
      "See the incredible transformation as we bring back the mirror-like shine to dull marble surfaces.",
    serviceImages: ["/images/s19.jpg", "/images/s7.jpg", "/images/s8.jpg"],
    processHighlights: [
      "Diamond powder polishing compounds application",
      "Progressive grit sequence for optimal shine",
      "High-speed buffing with professional equipment",
      "Final crystallization for lasting brilliance",
    ],
    keyBenefits: [
      "Achieves mirror-like reflective finish",
      "Enhances natural marble patterns and colors",
      "Creates stunning visual impact",
      "Professional showroom-quality results",
    ],
  },
  {
    id: "marble-grouting",
    title: "Marble Grouting",
    description:
      "Expert grouting services for marble installations, ensuring perfect sealing and long-lasting protection against moisture and stains.",
    icon: Brush,
    hoverBg: "group-hover:bg-gradient-to-br group-hover:from-[#1b1b1b] group-hover:to-[#4a4a4a]",
    details:
      "Professional grouting with premium sealants that protect your marble joints from water damage, staining, and deterioration.",
    videoUrl: "/videos/s23.mp4",
    videoDescription:
      "Learn about our precision grouting techniques that ensure long-lasting protection and perfect finishes.",
    serviceImages: ["/images/s10.jpg", "/images/s11.jpg", "/images/s12.jpg"],
    processHighlights: [
      "Premium epoxy and cement-based grout selection",
      "Precision application with professional tools",
      "Color-matching for seamless integration",
      "Waterproof sealing for maximum protection",
    ],
    keyBenefits: [
      "Prevents water damage and moisture infiltration",
      "Maintains structural integrity of installation",
      "Easy maintenance and cleaning",
      "Long-lasting protection for years",
    ],
  },
  {
    id: "marble-fixing",
    title: "Marble Fixing",
    description:
      "Professional marble installation and fixing services for floors, walls, countertops, and decorative elements with precision and care.",
    icon: Wrench,
    hoverBg: "group-hover:bg-gradient-to-br group-hover:from-[#c59d5f] group-hover:to-[#00675b]",
    details:
      "Expert installation services ensuring perfect alignment, proper support, and long-lasting durability for all marble applications.",
    videoUrl: "/videos/s24.mp4",
    videoDescription:
      "Watch our skilled craftsmen install marble with precision, ensuring perfect alignment and lasting beauty.",
    serviceImages: ["/images/s14.jpg", "/images/s18.jpg", "/images/s16.jpg"],
    processHighlights: [
      "Precise measurement and template creation",
      "Professional cutting and edge finishing",
      "Structural support assessment and reinforcement",
      "Perfect leveling and alignment techniques",
    ],
    keyBenefits: [
      "Flawless installation with perfect joints",
      "Structural integrity and long-term stability",
      "Custom fitting for any space or design",
      "Professional craftsmanship guarantee",
    ],
  },
  {
    id: "marble-polishing",
    title: "Marble Polishing",
    description:
      "Diamond polishing services that bring out the natural shine and beauty of marble surfaces with professional-grade equipment.",
    icon: Sparkles,
    hoverBg: "group-hover:bg-gradient-to-br group-hover:from-[#00675b] group-hover:to-[#00a896]",
    details:
      "Multi-stage polishing process using diamond pads and compounds to achieve the perfect mirror finish on all marble surfaces.",
    videoUrl: "/videos/s25.mp4",
    videoDescription:
      "Experience our multi-stage diamond polishing process that creates stunning mirror-like finishes.",
    serviceImages: ["/images/s6.jpg", "/images/s3.jpg", "/images/s15.jpg"],
    processHighlights: [
      "Multi-stage diamond pad progression (50-3000 grit)",
      "Wet polishing technique for dust-free operation",
      "Professional-grade polishing machines",
      "Final buffing for maximum gloss retention",
    ],
    keyBenefits: [
      "Achieves high-gloss mirror finish",
      "Removes scratches and surface imperfections",
      "Enhances marble's natural beauty",
      "Increases surface durability and longevity",
    ],
  },
  {
    id: "marble-cleaning",
    title: "Marble Cleaning",
    description:
      "Specialized cleaning services using marble-safe products and techniques to maintain the beauty and integrity of your surfaces.",
    icon: Droplets,
    hoverBg: "group-hover:bg-gradient-to-br group-hover:from-[#1b1b1b] group-hover:to-[#4a4a4a]",
    details:
      "Safe, effective cleaning methods that remove dirt, grime, and stains without damaging the marble's natural structure.",
    videoUrl: "/videos/s26.mp4",
    videoDescription:
      "Discover our safe and effective cleaning methods that preserve marble while removing stubborn stains.",
    serviceImages: ["/images/s1.jpg", "/images/s5.jpg", "/images/s9.jpg"],
    processHighlights: [
      "pH-neutral marble-safe cleaning solutions",
      "Specialized stain removal techniques",
      "Gentle scrubbing with soft-bristle brushes",
      "Thorough rinsing and drying procedures",
    ],
    keyBenefits: [
      "Preserves marble's natural composition",
      "Removes stains without surface damage",
      "Maintains original color and patterns",
      "Safe for food preparation areas",
    ],
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    description:
      "Intensive deep cleaning services that penetrate marble pores to remove embedded dirt, stains, and restore original appearance.",
    icon: Shield,
    hoverBg: "group-hover:bg-gradient-to-br group-hover:from-[#c59d5f] group-hover:to-[#e7c992]",
    details:
      "Comprehensive deep cleaning process that removes years of buildup and prepares surfaces for polishing and sealing treatments.",
    videoUrl: "/videos/s27.mp4",
    videoDescription: "See the dramatic before and after results of our intensive deep cleaning process.",
    serviceImages: ["/images/s13.jpg", "/images/s17.jpg", "/images/professional-cleaning.jpg"],
    processHighlights: [
      "High-pressure steam cleaning technology",
      "Specialized extraction of embedded contaminants",
      "Industrial-grade cleaning equipment",
      "Complete sanitization and deodorization",
    ],
    keyBenefits: [
      "Removes years of accumulated dirt and grime",
      "Prepares surface for optimal polishing results",
      "Eliminates bacteria and allergens",
      "Restores marble to near-original condition",
    ],
  },
]

const ServiceModal = ({ service, onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.loop = true;
      video.autoplay = true;
      video.playsInline = true;
      video.preload = "auto";
      video.play().catch(() => {});
    }
    return () => {
      document.body.style.overflow = "";
      if (video) video.pause();
    };
  }, [service]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden"
        style={{ maxHeight: "92vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-white text-black rounded-full z-10"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Video and Images */}
        <div className="flex flex-col md:flex-row gap-4 p-4 pb-0">
          {/* Video */}
          <div className="aspect-square w-full md:w-[340px] flex-shrink-0 rounded-xl overflow-hidden bg-black">
            <video
              ref={videoRef}
              src={service.videoUrl}
              poster={service.serviceImages[0]}
              muted
              loop
              autoPlay
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Images for desktop */}
          <div className="hidden md:flex md:flex-col gap-3 w-[100px]">
            {service.serviceImages.slice(0, 3).map((img, idx) => (
              <div key={idx} className="w-full aspect-square overflow-hidden rounded-md border">
                <img src={img} alt={`service-image-${idx}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Images for mobile */}
        <div className="flex md:hidden gap-2 px-4 pt-2">
          {service.serviceImages.slice(0, 3).map((img, idx) => (
            <div key={idx} className="w-1/3 aspect-square overflow-hidden rounded-md border">
              <img src={img} alt={`service-image-${idx}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-4 md:p-6 bg-white">
          <h3 className="text-xl md:text-2xl font-bold text-black mb-2">{service.title}</h3>
          <p className="italic text-gray-600 mb-4">{service.videoDescription}</p>

          <h4 className="font-semibold text-black mb-1">Service Details:</h4>
          <p className="text-sm text-gray-700 mb-4">{service.details}</p>

          <h5 className="font-semibold text-black mb-2">Process Highlights:</h5>
          <ul className="list-disc pl-5 text-sm text-gray-700 mb-4">
            {service.processHighlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h5 className="font-semibold text-black mb-2">Key Benefits:</h5>
          <ul className="list-disc pl-5 text-sm text-gray-700 mb-4">
            {service.keyBenefits.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-2">
            <Button
              onClick={() => {
                onClose();
                document.getElementById("book-consultation")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full bg-gradient-to-r from-yellow-500 to-teal-600 text-white rounded-full"
            >
              Book This Service
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="w-full border-gray-300 text-gray-700 rounded-full"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
