import { ChevronRight } from 'lucide-react';

export const HOTMART_PURCHASE_URL = 'https://hotmart.com/es';

type PurchaseCtaButtonProps = {
  className?: string;
  /** Más pequeño para barra de navegación u otros huecos ajustados */
  compact?: boolean;
};

export function PurchaseCtaButton({
  className = '',
  compact = false,
}: PurchaseCtaButtonProps) {
  const sizeClasses = compact
    ? 'px-5 py-2.5 text-sm gap-1.5 rounded-full'
    : 'px-8 py-4 text-base sm:text-lg gap-2 rounded-[2rem]';

  return (
    <a
      href={HOTMART_PURCHASE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center font-bold text-black bg-[#FEFF33] hover:bg-[#FFF566] transition-transform hover:scale-[1.02] shadow-md hover:shadow-lg ${sizeClasses} ${className}`}
    >
      Quiero mi Sistema Maestro
      <ChevronRight
        className={compact ? 'w-4 h-4 shrink-0' : 'w-5 h-5 shrink-0'}
        aria-hidden
      />
    </a>
  );
}
