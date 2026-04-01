"use client";

import { CheckCircle } from "lucide-react";
import clinicData from "@/config/clinicData";
import Image from "next/image";

export default function AboutDoctor() {
    const { doctor } = clinicData;

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">

                {/* HEADER */}
                <div className="text-center mb-14">
                    <p className="text-xs uppercase tracking-widest text-blue-500 mb-2">
                        Meet Your Doctor
                    </p>
                    <h2 className=" heading-lg md:text-4xl font-semibold text-gray-900">
                        {doctor.name}
                    </h2>
                    <p className="text-blue-600 mt-2 text-sm font-medium">
                        {doctor.title}
                    </p>
                </div>

                {/* MAIN GRID */}
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* IMAGE */}
                    <div className="flex justify-center">
                        <div className="relative w-full max-w-sm aspect-4/5 rounded-sm overflow-hidden border border-gray-200">
                            {doctor.image ? (
                                <Image
                                    src={doctor.image}
                                    alt={doctor.name}
                                    fill
                                    sizes="(max-width: 640px) 100vw, 384px"
                                    className="object-cover"
                                    priority
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                                    No Image
                                </div>
                            )}

                            {/* Small Badge */}
                            <div className="absolute bottom-3 left-3 bg-white border border-gray-200 px-3 py-1 rounded-sm text-xs text-gray-600">
                                {doctor.experience}
                            </div>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div>

                        {/* Bio */}
                        <p className="text-gray-600 leading-relaxed text-sm mb-6">
                            {doctor.bio}
                        </p>

                        {/* Credentials */}
                        <div className="mb-8">
                            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                                Qualifications
                            </h3>

                            <ul className="space-y-2">
                                {doctor.credentials.map((cred) => (
                                    <li key={cred} className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-blue-600 mt-0.5" />
                                        <span className="text-sm text-gray-700">{cred}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
                        >
                            Book Consultation
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
}