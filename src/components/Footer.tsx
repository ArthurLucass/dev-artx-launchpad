import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { translations } = useLanguage();
  return (
    <footer className="py-12 px-4 md:px-6 bg-secondary text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <span className="text-xl md:text-2xl font-bold text-white">
                Dev
                <span className="relative">
                  Artx
                  <span className="absolute -bottom-1 left-0 w-full h-1 gradient-bg rounded-full"></span>
                </span>
              </span>
            </a>
            <p className="mt-2 text-white/80">{translations.footer.tagline}</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/wtfarthur_/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
              <span className="sr-only">{translations.footer.instagram}</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/arthurlucass/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
              <span className="sr-only">{translations.footer.linkedin}</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://github.com/ArthurLucass" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
              <span className="sr-only">{translations.footer.github}</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.5.49.09.66-.213.66-.472 0-.23-.01-1.022-.015-1.86-2.782.605-3.369-1.343-3.369-1.343-.446-1.13-1.09-1.43-1.09-1.43-.89-.608.07-.596.07-.596.98.07 1.497 1.014 1.497 1.014.87 1.49 2.28 1.06 2.836.81.09-.63.34-1.06.616-1.305-2.166-.248-4.444-1.083-4.444-4.83 0-1.068.38-1.942 1.003-2.625-.1-.248-.434-1.24.094-2.587 0 0 .82-.263 2.68 1.003A9.42 9.42 0 0112 6.67c.83.004 1.66.115 2.44.337 1.86-1.266 2.677-1.003 2.677-1.003.53 1.347.197 2.34.098 2.587.625.683 1.002 1.557 1.002 2.625 0 3.758-2.28 4.58-4.45 4.822.35.308.656.916.656 1.847 0 1.33-.012 2.403-.012 2.73 0 .26.168.565.666.47C19.137 20.194 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="mailto:arrtxweb@gmail.com" className="text-white/80 hover:text-white transition-colors">
              <span className="sr-only">{translations.footer.email}</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <p className="text-white/60 text-center">
            {translations.footer.copyright}
          </p>
          <p className="text-white/60 text-center mt-2">
            {translations.footer.builtBy}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
