"use client";

import { Phone, Calendar, Star } from "lucide-react";
import clinicData from "@/config/clinicData";
import Image from "next/image";

export default function Hero() {
  return (
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09"
              alt="Clinic"
              fill
              priority
              className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 w-full text-center lg:text-left">

          {/* Badge */}
          <p className="text-xs uppercase tracking-widest text-blue-200 mb-4">
            Est. {clinicData.established} · {clinicData.city}
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl heading-xl  animate-fade-up-delay-1 font-semibold text-white leading-tight max-w-3xl mx-auto lg:mx-0">
            {clinicData.clinicName}
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-blue-200 mt-4 max-w-2xl mx-auto lg:mx-0">
            {clinicData.tagline}
          </p>

          {/* Sub */}
          <p className="text-sm md:text-base text-blue-100 mt-4 max-w-xl mx-auto lg:mx-0">
            {clinicData.subTagline}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mt-8">

            <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
            >
              <Calendar size={16} />
              Book Appointment
            </a>

            <a
                href={`tel:${clinicData.phone}`}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-sm border border-white text-white text-sm font-medium hover:bg-white hover:text-black transition"
            >
              <Phone size={16} />
              Call Now
            </a>

          </div>

          {/* Stats Row (NEW) */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0">

            {clinicData.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs text-blue-200">
                    {stat.label}
                  </p>
                </div>
            ))}

          </div>

          {/* Rating */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#fff" />
              ))}
            </div>
            <p className="text-sm text-blue-100">
              Trusted by {clinicData.stats[0].value} patients
            </p>
          </div>

        </div>
      </section>
  );
}