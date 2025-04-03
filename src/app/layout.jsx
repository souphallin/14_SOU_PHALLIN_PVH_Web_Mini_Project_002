import "./globals.css";
import Logo from "@/components/logo";

export const metadata = {
  title: {
    template: "%s | Monster",
    default: "Todo List | Monster",
  },
  description: "Homework 006 - Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-charcoal">
        {/* <div className="container mx-auto my-12 pl-15">
          <Logo />
        </div> */}

        {children}
      </body>
    </html>
  );
}
