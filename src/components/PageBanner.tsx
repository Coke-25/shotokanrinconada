import Link from 'next/link';

interface PageBannerProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageBanner({ title, breadcrumbs }: PageBannerProps) {
  return (
    <div className="relative bg-black pt-32 pb-16">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1920')" }}
      />
      <div className="relative container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        <div className="flex items-center gap-2 text-gray-300">
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex items-center gap-2">
              {index > 0 && <span className="text-red-500">//</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-red-500 transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-red-500">{crumb.label}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
