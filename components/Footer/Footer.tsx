import Image from 'next/image'

const navigation = {
  connect: [
    { name: 'Book Meeting', href: '' },
    { name: 'Twitter', href: 'https://twitter.com/justansub' },
    { name: 'Github', href: 'https://www.youtube.com/@SpeedyBrand-SEO' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/speedy-brand-inc/' },
  ],
  company: [
    { name: 'Blogs', href: '/' },
    { name: 'Pricing', href: '/' },
    { name: 'Affiliate Partner', href: '/' },
    { name: 'AI For Enterprise', href: '/' },
  ],
}

const TwoColumnFooter = () => {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="font-inter w-full bg-transparent relative"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="absolute top-0 right-0 w-32 h-32 bg-no-repeat bg-contain" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
          {/* Logo and Description */}
          <div className="flex-shrink-0 space-y-4">
            <Image
              priority={true}
              width={100}
              height={40}
              src="/logo.png"
              alt="logo"
              className="h-10 w-auto"
            />
            <p className="text-sm leading-6 text-gray-300 max-w-xs">
              Not your average Video Editing Cohort.
            </p>
            <p className="text-sm text-gray-300">Made with ❤️ by Ascension Wave.</p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:gap-16">
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

            {/* Company Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-200">Company</h3>
              <ul className="mt-4 space-y-2">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
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
