import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";

interface NavItem {
  href: string;
  label: string;
}

export function MenuBar({
  navLinks,
  navButtons,
}: {
  navLinks: NavItem[];
  navButtons: NavItem[];
}) {
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="ghost" size="icon-lg">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="z-100 bg-background/30 backdrop-blur-2xl"
        side="left"
      >
        <SheetHeader>
          <Logo className="mx-auto w-[96px]" />
          <SheetTitle className="text-center">Portal Studio</SheetTitle>
          <SheetDescription className="text-center">
            Menu de navigation
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="p-4 hover:bg-foreground/10 border border-transparent hover:border-foreground backdrop-xl"
            >
              <a href={link.href}>{link.label}</a>
            </div>
          ))}
        </div>

        <div className="p-4">
          {navButtons.map((button) => (
            <Button className="w-full">
              <a key={button.href} className="w-full" href={button.href}>
                {button.label}
              </a>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
