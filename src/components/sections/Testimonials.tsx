import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/ui/TestimonialCard";

const Testimonials = () => {
  return (
    <section
      className="py-24 px-4 md:px-10 max-w-[1440px] mx-auto bg-gray-50/30"
      aria-labelledby="testimonials-title"
    >
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2
          id="testimonials-title"
          className="text-3xl font-medium text-gray-900 tracking-tight mb-4"
        >
          Lo que dicen nuestros usuarios
        </h2>
        <p className="text-base text-gray-500">
          Marcas y proveedores que ya están transformando su cadena de
          suministro.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
