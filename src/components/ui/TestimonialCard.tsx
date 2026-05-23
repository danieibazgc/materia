import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <article className="border border-gray-200 rounded-xl p-6 bg-white hover:border-brand/30 transition-colors">
      <p className="italic text-gray-500 text-sm leading-relaxed mb-6">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand-light text-brand-dark flex items-center justify-center text-xs font-medium shrink-0">
          {testimonial.initials}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
          <p className="text-xs text-gray-400">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
