import Link from 'next/link';
import Image from 'next/image';

interface PageBannerProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageBanner({ title, breadcrumbs }: PageBannerProps) {
  return (
    <div className="relative bg-gray-900 pt-20 pb-4 md:pt-32 md:pb-16">
      <div className="absolute inset-0">
        <Image
          src="/images/shotokan_header.jpeg"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="relative container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        <div className="flex items-center gap-2 text-gray-400">
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex items-center gap-2">
              {index > 0 && <span className="text-red-600">//</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-red-600 transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-red-600">{crumb.label}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
