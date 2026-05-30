import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TallyFormModal } from "./TallyFormModal";
import { Logo } from "./Logo";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground font-sans">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm" aria-label="Alunera Home" data-testid="link-logo">
            <Logo size="md" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      location === link.href ? "text-primary" : "text-muted-foreground"
                    }`}
                    data-testid={`link-nav-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button onClick={() => setIsModalOpen(true)} className="font-semibold px-6 shadow-sm hover:shadow-md transition-all" data-testid="button-nav-audit">
              Book Free Growth Audit
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 pt-24 px-4 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-2xl font-medium tracking-tight transition-colors ${
                location === link.href ? "text-primary" : "text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6">
            <Button size="lg" className="w-full text-lg" onClick={() => {
              setIsMobileMenuOpen(false);
              setIsModalOpen(true);
            }}>
              Book Free Growth Audit
            </Button>
          </div>
        </nav>
      </div>

      <main className="flex-1 flex flex-col pt-[80px]">
        {children}
      </main>

      <footer className="bg-secondary text-secondary-foreground py-12 border-t border-secondary-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-4">
                <Logo size="md" variant="light" />
              </Link>
              <p className="text-secondary-foreground/70 max-w-sm text-balance">
                Growth Systems for Service Businesses.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Navigation</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/50">
            <p>&copy; {new Date().getFullYear()} Alunera. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <TallyFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
