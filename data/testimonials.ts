export interface Testimonial {
  id: number
  name: string
  role: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Irini S.",
    role: "Local Bar Owner",
    quote: "Once you go InnerPath, there is no other Path.",
  },
  {
    id: 2,
    name: "Jonathan D.",
    role: "E-commerce founder",
    quote:
      "InnerPath completely rebuilt our website, and within weeks we saw a 42% increase in conversions. What stood out wasn't just the design - it was how fast and intentional everything felt. They don't waste time.",
  },
  {
    id: 3,
    name: "Adam A.",
    role: "Hotel Manager",
    quote: "Before InnerPath, our site looked like a potato.",
  },
]
