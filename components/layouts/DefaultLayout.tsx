import React, { PropsWithChildren } from "react";
import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";
export default function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
