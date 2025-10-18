import { AnimatedTestimonials } from "../components/ui/animated-testimonials";

export function DemoAnimatedTestimonials() {
  const testimonials = [
    {
      quote: "The attention to detail and innovative features have completely transformed our home search. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Home Buyer at Urban Living",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable for property hunting.",
      name: "Michael Rodriguez",
      designation: "Real Estate Investor",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "This solution has significantly improved our team's productivity in finding listings. The intuitive interface makes complex searches simple.",
      name: "Emily Watson",
      designation: "Property Manager at Skyline Realty",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Outstanding support and robust features for real estate. It's rare to find a platform that delivers on all its promises.",
      name: "James Kim",
      designation: "Agent at Prime Properties",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "The scalability and performance have been game-changing for our property portfolio. Highly recommend to any growing investor.",
      name: "Lisa Thompson",
      designation: "VP of Acquisitions at Elite Estates",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Found our dream home effortlessly thanks to the detailed listings and smart matching.",
      name: "David Lee",
      designation: "First-Time Buyer",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Exceptional agent connections and verified properties made selling a breeze.",
      name: "Anna Patel",
      designation: "Seller at Coastal Homes",
      src: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "The app's neighborhood insights are invaluable for relocation decisions.",
      name: "Carlos Mendoza",
      designation: "Relocating Executive",
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
    },
    {
      quote: "Comprehensive market data helped us make informed investment choices.",
      name: "Rachel Green",
      designation: "Investor Analyst",
      src: "https://images.unsplash.com/photo-1512920827867-7d7f7f7f5b47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "User-friendly design and quick support turned a stressful process into a smooth one.",
      name: "Tom Wilson",
      designation: "Renter at City Dwellers",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}