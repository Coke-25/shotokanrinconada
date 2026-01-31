interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
      <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mb-4 mx-auto">
        {icon}
      </div>
      <h4 className="text-lg font-bold text-white mb-3 text-center">{title}</h4>
      <p className="text-gray-400 text-center text-sm leading-relaxed">{description}</p>
    </div>
  );
}
