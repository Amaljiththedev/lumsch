import Image from 'next/image'

const navigation = {
  connect: [
    { name: 'Agency', href: 'https://luminarylines.com/' },
    { name: 'Instagram', href: 'https://www.instagram.com/luminarylines/' },
    { name: 'YouTube', href: 'https://youtube.com/@luminarylinesedit?si=usQQghoQZzX8z1tt' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/luminarylines/' },
    { name: 'WhatsApp', href: 'https://api.whatsapp.com/send/?phone=918089660028&text&type=phone_number&app_absent=0' },
  ],
}

const TwoColumnFooter = () => {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="font-inter w-full bg-transparent text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:items-start">
          {/* Logo and Description */}
          <div className="flex-shrink-0 text-center lg:text-left">
            <Image
              priority={true}
              width={50}
              height={50}
              src="/logo.svg"
              alt="logo"
              className="h-auto w-auto mx-auto lg:mx-0"
            />
            <p className="text-sm text-gray-300 mt-4">
              Made with ❤️ by{' '}
              <a
                href="https://www.ascensionwave.in/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gray-300 underline"
              >
                Ascension Wave
              </a>
              .
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-16 lg:grid-cols-1">
            {/* Connect Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-200">Connect</h3>
              <ul className="mt-4 space-y-2">
                {navigation.connect.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-white hover:text-gray-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-800 pt-4 text-center">
          <p className="text-xs text-gray-400">
            &copy; 2025 Ascension Wave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default TwoColumnFooter
