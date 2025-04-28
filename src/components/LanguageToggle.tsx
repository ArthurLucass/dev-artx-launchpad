
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const LanguageToggle = () => {
  const { language, setLanguage, translations } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4" />
      <ToggleGroup 
        type="single"
        value={language}
        onValueChange={(value) => {
          if (value) setLanguage(value as 'pt' | 'en');
        }}
        className="border border-gray-200 rounded-md"
      >
        <ToggleGroupItem value="pt" aria-label="Toggle Portuguese" className="px-2 py-1 text-xs">
          {translations.languageToggle.pt}
        </ToggleGroupItem>
        <ToggleGroupItem value="en" aria-label="Toggle English" className="px-2 py-1 text-xs">
          {translations.languageToggle.en}
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default LanguageToggle;
