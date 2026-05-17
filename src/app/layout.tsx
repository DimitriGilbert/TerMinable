import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ThemeProvider, ThemeToggle } from "~/components/theme-provider";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Terminable, a fake terminal for shadcn/ui",
  description: "A terminal simulator component for shadcn/ui documentation sites",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <ThemeProvider>
          <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/80 px-4 py-1.5 backdrop-blur-md">
            <div className="mx-auto max-w-7xl">
              <NavigationMenu>
                <NavigationMenuList className="flex justify-center">
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/"
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/docs"
                      className={navigationMenuTriggerStyle()}
                    >
                      Docs
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <ThemeToggle />
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </nav>
          <div>
            {children}
            <footer className="border-t border-border/50 p-4 pb-8 pt-8">
              <div className="mx-auto max-w-7xl">
                <p className="text-muted-foreground">
                  Site built with{" "}
                  <Link href="https://butt3r.dev" className="text-primary">
                    ButT3r
                  </Link>
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
