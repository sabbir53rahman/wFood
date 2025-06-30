import { MapPin, Phone, Mail, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
      {/* Main Footer Content */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Exclusive Subscribe */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Exclusive</h3>
                <h4 className="text-xl font-semibold mb-4">Subscribe</h4>
                <p className="text-purple-100 mb-6">
                  Get 10% off your first order
                </p>
              </div>

              <div className="w-[300px] items-center">
                <div className="flex w-full  items-center">
                  <Input
                    type="text"
                    className="!text-[18px] py-[20px] bg-white rounded-r-none border-purple-600 focus-visible:ring-0 focus-visible:ring-offset-0"
                    placeholder="search anything"
                  />

                  <Button
                    type="submit"
                    className="rounded-l-none text-black border-purple-600 border-l-0 py-[20px]"
                    variant="outline"
                  >
                    <Search className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Support</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-purple-200" />
                  <span className="text-purple-100">Rongpur, Bangladesh</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-200" />
                  <span className="text-purple-100">01788888966</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-200" />
                  <span className="text-purple-100">wfood@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Quick Link</h3>
              <div className="space-y-3">
                <Link
                  href="/about"
                  className="block text-purple-100 hover:text-white transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/privacy"
                  className="block text-purple-100 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="block text-purple-100 hover:text-white transition-colors"
                >
                  Terms And Conditions
                </Link>
                <Link
                  href="/return-policy"
                  className="block text-purple-100 hover:text-white transition-colors"
                >
                  Return and Cancellation Policy
                </Link>
                <Link
                  href="/contact"
                  className="block text-purple-100 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Follow Us */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Follow Us</h3>
              {/* <div className="space-y-3">
                <Link
                  href="#"
                  className="block text-purple-100 hover:text-white transition-colors"
                >
                  Facebook
                </Link>
                <Link
                  href="#"
                  className="block text-purple-100 hover:text-white transition-colors"
                >
                  Twitter
                </Link>
                <Link
                  href="#"
                  className="block text-purple-100 hover:text-white transition-colors"
                >
                  Instagram
                </Link>
                <Link
                  href="#"
                  className="block text-purple-100 hover:text-white transition-colors"
                >
                  LinkedIn
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto border-t border-white py-6 px-4">
        <div className=" flex flex-col md:flex-row justify-between items-center">
          <p className="text-purple-100 text-sm">
            © 2025 WFood. All Rights Reserved
          </p>
          <p className="text-purple-100 text-sm mt-2 md:mt-0">
            Design And Developed By WFood Team
          </p>
        </div>
      </div>
    </footer>
  );
}
