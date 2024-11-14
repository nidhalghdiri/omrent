import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import RentModal from "./components/modals/RentModal";
import LoginModal from "./components/modals/LoginModal";
import ToasterProvider from "./providers/ToasterProvider";
import getCurentUser from "./actions/getCurrentUser";
import SearchModal from "./components/modals/SearchModal";
import { Suspense } from "react";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OmanRent - Booking & Rent Website",
  description:
    "Oman is a Marketplace where you can find the perfect house for you and make Reservation.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
          <div className="pb-20 pt-28">{children}</div>
        </Suspense>
      </body>
    </html>
  );
}
