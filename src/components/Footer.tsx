export default function Footer() {
  return (
    <footer className="bg-white text-black py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-8 mb-12">
          <div className="flex gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Buildnow.ai</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                AI-powered video training platform that brings your content to
                life with intelligent avatars and multilingual support.
              </p>
              <div className="mt-4">
                <a
                  href="mailto:info@buildnow.ai"
                  className="text-gray-600 hover:text-black transition-colors text-sm"
                >
                  info@buildnow.ai
                </a>
              </div>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black transition-colors text-sm"
                  >
                    AI Video Trainer
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black transition-colors text-sm"
                  >
                    AI Video Generation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black transition-colors text-sm"
                  >
                    AI Phone Agent
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-600 text-sm">
                © 2024 Buildnow.ai. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors text-sm"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors text-sm"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
