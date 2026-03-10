"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroSplitTestimonial from "@/components/sections/hero/HeroSplitTestimonial";
import FeatureCardTwentyFour from "@/components/sections/feature/FeatureCardTwentyFour";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterCard from "@/components/sections/footer/FooterCard";
import { CheckCircle, Sparkles, Zap, HelpCircle, Star, Instagram, Facebook, Twitter } from "lucide-react";

export default function RendorasPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="mediumSmall"
      sizing="large"
      background="aurora"
      cardStyle="gradient-radial"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="Rendoras"
          navItems={[
            { name: "Product", id: "product-features" },
            { name: "Benefits", id: "key-benefits" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" },
            { name: "Shop", id: "product-details" },
          ]}
          bottomLeftText="Cozy Warmth Awaits"
          bottomRightText="hello@rendoras.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitTestimonial
          title="Stay Warm. Stay Cozy. Stay You."
          description="Wrap yourself in luxury comfort with Rendoras heated blanket. Lightweight, wearable, and USB-powered—your perfect companion for home, office, or travel."
          tag="Perfect for Cold-Sensitive People"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          imageSrc="http://img.b2bpic.net/free-photo/woman-holding-cup-coffee-while-being-covered-with-blanket_23-2148821621.jpg?_wi=1"
          imageAlt="Rendoras heated blanket wearable hoodie"
          imagePosition="right"
          mediaAnimation="blur-reveal"
          testimonials={[
            {
              name: "Sarah Johnson",              handle: "CEO, Remote Work Pro",              testimonial: "This blanket changed my work-from-home setup. I stay warm without overheating the office!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/cute-young-woman-outdoor_624325-2565.jpg"},
            {
              name: "Michael Chen",              handle: "Travel Blogger",              testimonial: "Perfect for long flights and train rides. Lightweight and so easy to pack. Can't travel without it now!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/purposeful-young-businessman-looking-away_1262-3609.jpg"},
          ]}
          testimonialRotationInterval={5000}
          buttons={[
            { text: "Buy Now", href: "#product-details" },
            { text: "Learn More", href: "#product-features" },
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="product-features" data-section="product-features">
        <FeatureCardTwentyFour
          title="Why Choose Rendoras?"
          description="Experience the perfect blend of comfort, portability, and innovation."
          tag="Premium Features"
          tagIcon={Zap}
          tagAnimation="slide-up"
          features={[
            {
              id: "1",              title: "Feather-Light Design",              author: "Comfort First",              description: "Weighing just 1.2 lbs, our heated blanket is lighter than traditional blankets but offers superior warmth retention. Wear it like a hoodie or drape it over your shoulders.",              tags: ["Lightweight", "Portable"],
              imageSrc: "http://img.b2bpic.net/free-photo/hiker-have-short-respite-his-way-forest_613910-9443.jpg",              imageAlt: "Lightweight heated blanket design"},
            {
              id: "2",              title: "USB-Powered Convenience",              author: "Tech Smart",              description: "Charge from any USB power bank, laptop, or outlet adapter. Compatible with all standard USB devices. No proprietary cables—just universal compatibility.",              tags: ["Universal", "Eco-Friendly"],
              imageSrc: "http://img.b2bpic.net/free-photo/usb-cable-type-c-white-isolated-background_58702-4480.jpg",              imageAlt: "USB power charging capability"},
            {
              id: "3",              title: "Adjustable Heat Settings",              author: "Your Control",              description: "Three customizable heat levels: Low (98°F), Medium (104°F), High (110°F). Find your perfect temperature and enjoy up to 8 hours of continuous warmth per charge.",              tags: ["Smart Control", "Long-lasting"],
              imageSrc: "http://img.b2bpic.net/free-vector/smart-home-app-interface_23-2148623183.jpg",              imageAlt: "Adjustable heat control settings"},
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="key-benefits" data-section="key-benefits">
        <FeatureCardTwentyFour
          title="Real Benefits for Real People"
          description="Transform how you experience warmth and comfort every day."
          tag="Customer-Approved"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          features={[
            {
              id: "1",              title: "Warm Office Bliss",              author: "Office Workers",              description: "Say goodbye to office AC that freezes you out. Stay productively warm at your desk without affecting your workspace temperature. Perfect for those who run cold.",              tags: ["Productivity", "Comfort"],
              imageSrc: "http://img.b2bpic.net/free-photo/image-young-female-entrepreneur-office-worker-sits-casual-clothes-works-with-laptop-drinks_1258-195313.jpg?_wi=1",              imageAlt: "Person working comfortably with heated blanket"},
            {
              id: "2",              title: "Traveler's Dream",              author: "On-The-Go",              description: "Pack light, stay warm. From airplanes to hotels to car rides, your portable heated blanket is always there. Take comfort with you everywhere.",              tags: ["Travel-Friendly", "Portable"],
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-happy-fitness-woman-leaning-rail_171337-6247.jpg?_wi=1",              imageAlt: "Travel comfort with portable heated blanket"},
            {
              id: "3",              title: "Home Comfort Zone",              author: "Relaxation Time",              description: "Curl up for movie nights, reading sessions, or just lazy Sundays. Create your personal comfort zone without cranking up the heat for the whole house.",              tags: ["Relaxation", "Energy-Saving"],
              imageSrc: "http://img.b2bpic.net/free-photo/still-life-home-atmosphere-interior-with-book-candles-table-cozy-bedspreads_169016-1308.jpg?_wi=1",              imageAlt: "Cozy home relaxation with heated blanket"},
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="product-details" data-section="product-details">
        <ProductCardThree
          title="Shop Rendoras Heated Blanket"
          description="Choose your size and color. Add to cart and experience cozy warmth today."
          tag="Limited Stock - Order Now"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          products={[
            {
              id: "1",              name: "Rendoras Heated Blanket - Standard (Blue)",              price: "$79.99",              imageSrc: "http://img.b2bpic.net/free-photo/woman-holding-cup-coffee-while-being-covered-with-blanket_23-2148821621.jpg?_wi=2",              imageAlt: "Rendoras heated blanket standard size blue",              initialQuantity: 1,
            },
            {
              id: "2",              name: "Rendoras Heated Blanket - Standard (Gray)",              price: "$79.99",              imageSrc: "http://img.b2bpic.net/free-photo/woman-holding-cup-coffee-while-being-covered-with-blanket_23-2148821621.jpg?_wi=3",              imageAlt: "Rendoras heated blanket standard size gray",              initialQuantity: 1,
            },
            {
              id: "3",              name: "Rendoras Heated Blanket - XL (Navy)",              price: "$99.99",              imageSrc: "http://img.b2bpic.net/free-photo/woman-holding-cup-coffee-while-being-covered-with-blanket_23-2148821621.jpg?_wi=4",              imageAlt: "Rendoras heated blanket XL size navy",              initialQuantity: 1,
            },
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="Loved by Thousands"
          description="Real customers share their cozy stories with Rendoras."
          tag="Customer Reviews"
          tagIcon={Star}
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",              name: "Emily Rodriguez, Student",              date: "Date: 15 January 2025",              title: "Game-changer for my dorm room!",              quote: "My dorm room is freezing in winter. This blanket is a lifesaver. I can finally study comfortably without layers of sweaters. Plus, it packs away easily for breaks.",              tag: "Student",              avatarSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-man-posing_23-2148563424.jpg",              avatarAlt: "Emily Rodriguez",              imageSrc: "http://img.b2bpic.net/free-photo/still-life-home-atmosphere-interior-with-book-candles-table-cozy-bedspreads_169016-1308.jpg?_wi=2",              imageAlt: "Cozy home relaxation"},
            {
              id: "2",              name: "Jennifer Walsh, Remote Worker",              date: "Date: 10 January 2025",              title: "My productivity boost!",              quote: "Working from home was miserable because I was always cold. Now I wear this blanket like a hoodie during video calls and stay warm. My energy bills dropped too!",              tag: "Office Worker",              avatarSrc: "http://img.b2bpic.net/free-photo/young-woman-sitting-library_273609-15839.jpg",              avatarAlt: "Jennifer Walsh",              imageSrc: "http://img.b2bpic.net/free-photo/image-young-female-entrepreneur-office-worker-sits-casual-clothes-works-with-laptop-drinks_1258-195313.jpg?_wi=2",              imageAlt: "Office worker comfort"},
            {
              id: "3",              name: "Robert Thompson, Senior",              date: "Date: 5 January 2025",              title: "Perfect comfort solution!",              quote: "At 72, I feel the cold more than I used to. This heated blanket is so comfortable and easy to use. I've recommended it to all my friends.",              tag: "Elderly",              avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-with-smartwatch_23-2149046200.jpg",              avatarAlt: "Robert Thompson",              imageSrc: "http://img.b2bpic.net/free-photo/still-life-home-atmosphere-interior-with-book-candles-table-cozy-bedspreads_169016-1308.jpg?_wi=3",              imageAlt: "Home comfort"},
            {
              id: "4",              name: "David Park, Frequent Traveler",              date: "Date: 28 December 2024",              title: "Never travel without it now!",              quote: "I travel internationally 3 times a month. This blanket is compact, lightweight, and keeps me warm on every flight. Worth every penny.",              tag: "Traveler",              avatarSrc: "http://img.b2bpic.net/free-vector/male-workers-avatars-with-flat-design_23-2147665877.jpg",              avatarAlt: "David Park",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-happy-fitness-woman-leaning-rail_171337-6247.jpg?_wi=2",              imageAlt: "Travel comfort"},
            {
              id: "5",              name: "Maria Garcia, Cold-Sensitive",              date: "Date: 20 December 2024",              title: "Finally, I can be comfortable!",              quote: "I've always struggled with feeling cold. My partner can wear shorts while I'm shivering. This blanket gave me independence in my own home.",              tag: "Health",              avatarSrc: "http://img.b2bpic.net/free-photo/young-woman-sitting-library_273609-15839.jpg",              avatarAlt: "Maria Garcia",              imageSrc: "http://img.b2bpic.net/free-photo/still-life-home-atmosphere-interior-with-book-candles-table-cozy-bedspreads_169016-1308.jpg?_wi=4",              imageAlt: "Home comfort"},
            {
              id: "6",              name: "James Murphy, Office Manager",              date: "Date: 12 December 2024",              title: "Transformed my workplace!",              quote: "We bought several for our office. Employees are happier, more productive, and we've reduced our heating costs. Best workplace investment ever.",              tag: "Corporate",              avatarSrc: "http://img.b2bpic.net/free-vector/male-workers-avatars-with-flat-design_23-2147665877.jpg",              avatarAlt: "James Murphy",              imageSrc: "http://img.b2bpic.net/free-photo/image-young-female-entrepreneur-office-worker-sits-casual-clothes-works-with-laptop-drinks_1258-195313.jpg?_wi=3",              imageAlt: "Office environment"},
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about your Rendoras heated blanket."
          tag="Support"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "Is the blanket safe to use while sleeping?",              content: "<p>Yes, absolutely! Rendoras heated blanket is designed with multiple safety features including automatic shut-off after 8 hours of continuous use, overheat protection, and premium fireproof materials. However, we recommend not sleeping under the blanket while plugged in. Use it to warm your bed, then unplug before sleeping for safety.</p>"},
            {
              id: "2",              title: "Can I wash the heated blanket?",              content: "<p>Yes! Remove the USB cord and heating elements (they are detachable). Hand wash or machine wash on gentle cycle in cold water with mild detergent. Air dry completely before reconnecting the heating components. We recommend washing every 2-3 months for regular use. Do NOT dry clean or use high heat.</p>"},
            {
              id: "3",              title: "What USB power banks are compatible?",              content: "<p>The Rendoras heated blanket works with ANY standard USB power bank, phone charger, laptop charger, or outlet adapter with USB output. We recommend using a power bank with at least 10,000 mAh capacity for 6-8 hours of continuous warmth. Most modern power banks work perfectly. Compatible with both USB-A and USB-C adapters.</p>"},
            {
              id: "4",              title: "How long does a charge last?",              content: "<p>On Low setting: 8-10 hours. On Medium setting: 6-8 hours. On High setting: 4-6 hours. Battery life depends on your power bank capacity. A 20,000 mAh power bank can run the blanket for extended periods. Test with your specific power bank for exact timing.</p>"},
            {
              id: "5",              title: "Is the blanket waterproof?",              content: "<p>The fabric is water-resistant (not waterproof) and can handle light moisture. However, the USB heating elements should never be submerged. Keep the cord connections dry. The blanket is perfect for humid environments but avoid direct water exposure to the heating components.</p>"},
            {
              id: "6",              title: "What sizes are available?",              content: "<p>We offer two sizes: Standard (50\"x60\") perfect for individual use or draping over shoulders, and XL (70\"x80\") ideal for couples or complete coverage. Both sizes are lightweight and packable. Choose based on your intended use and body size.</p>"},
            {
              id: "7",              title: "Does the blanket work in cold climates?",              content: "<p>Yes! The Rendoras blanket is tested for use in temperatures as low as 32°F (-0°C). It maintains consistent heat output regardless of ambient temperature. Perfect for outdoor activities, travel to cold destinations, or extremely cold indoor spaces.</p>"},
            {
              id: "8",              title: "What's your return policy?",              content: "<p>We offer a 30-day money-back guarantee on all Rendoras products. If you're not completely satisfied, return it within 30 days for a full refund, no questions asked. We also provide a 2-year warranty on manufacturing defects. Customer satisfaction is our priority.</p>"},
          ]}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Get Cozy?"
          description="Have questions or ready to order? We're here to help. Reach out to our friendly team and we'll respond within 24 hours."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
          ]}
          textarea={{
            name: "message",            placeholder: "Tell us your question or inquiry...",            rows: 5,
            required: true,
          }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/still-life-home-atmosphere-interior-with-book-candles-table-cozy-bedspreads_169016-1308.jpg?_wi=5"
          imageAlt="Cozy moment with Rendoras heated blanket"
          mediaAnimation="blur-reveal"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Rendoras"
          copyrightText="© 2025 Rendoras | Cozy Warmth for Everyone"
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com/rendoras", ariaLabel: "Instagram" },
            { icon: Facebook, href: "https://facebook.com/rendoras", ariaLabel: "Facebook" },
            { icon: Twitter, href: "https://twitter.com/rendoras", ariaLabel: "Twitter" },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
