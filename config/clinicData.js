const clinicData = {

    // Basic Information
    clinicName: "Mateshavri Dental Care",
    tagline: "Where Every Smile Tells a Story",
    subTagline:
        "Advanced dental care with a gentle touch. Trusted by 5,000+ families in Jodhpur.",
    established: "2010",

    // Doctor
    doctor: {
        name: "Dr. Dileep Mali",
        title: "BDS, MDS – Oral & Maxillofacial Surgery",
        experience: "14+ Years Experience",
        bio: "Dr. Dileep Mali is a highly qualified oral surgeon with over 14 years of experience in cosmetic and restorative dentistry. He completed his postgraduate studies from AIIMS New Delhi and has helped thousands of patients reclaim their confidence through exceptional dental care.",
        credentials: [
            "BDS – Rajasthan University",
            "MDS – AIIMS New Delhi",
            "Fellow, Indian Dental Association",
            "Certified Invisalign Provider",
        ],
        image: "/images/doctor.jpg",
    },

    // Contact Information
    phone: "+91-98765-43210",
    phoneDisplay: "+91 98765 43210",
    whatsapp: "919876543210",
    whatsappMessage: "Hello! I'd like to book an appointment at Mateshavri Dental Care.",
    email: "hello@mateshavri.in",

    // Location
    address: "12, Residency Road, Near Circuit House",
    city: "Jodhpur",
    state: "Rajasthan",
    pincode: "342001",
    mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.123456789!2d73.0243!3d26.2389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE0JzIwLjAiTiA3M8KwMDEnMjcuNSJF!5e0!3m2!1sen!2sin!4v1234567890",
    hours: [
        { day: "Mon – Sat", time: "9:00 AM – 8:00 PM" },
        { day: "Sunday", time: "10:00 AM – 2:00 PM" },
    ],

    // Services Offered
    services: [
        {
            id: "whitening",
            icon: "Sparkles",
            title: "Teeth Whitening",
            description:
                "Professional-grade whitening that removes years of stains in a single session. Up to 8 shades brighter.",
            highlight: "Most Popular",
            image: "https://images.unsplash.com/photo-1670250492416-570b5b7343b1?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: "orthodontics",
            icon: "AlignCenter",
            title: "Invisalign & Braces",
            description:
                "Straighten your teeth discreetly with clear aligners or traditional braces. Customised treatment plans.",
            highlight: null,
            image: "https://images.unsplash.com/photo-1694675236489-d73651370688?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: "implants",
            icon: "CircleDot",
            title: "Dental Implants",
            description:
                "Permanent tooth replacement that looks, feels, and functions exactly like your natural teeth.",
            highlight: "Premium",
            image: "https://images.unsplash.com/photo-1694345238872-323e773afc11?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: "rootcanal",
            icon: "Shield",
            title: "Root Canal Treatment",
            description:
                "Pain-free RCT using rotary endodontics. Save your tooth and eliminate pain in just 1–2 visits.",
            highlight: null,
            image: "https://images.unsplash.com/photo-1766338390573-ec092d69cdcb?q=80&w=1223&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: "cosmetic",
            icon: "Smile",
            title: "Cosmetic Dentistry",
            description:
                "Veneers, bonding, smile makeovers — crafted to enhance your unique facial aesthetics.",
            highlight: null,
            image: "https://images.unsplash.com/photo-1679136293900-05b227099221?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: "pediatric",
            icon: "Heart",
            title: "Kids' Dentistry",
            description:
                "A gentle, fun environment for children. We make every child's dental visit stress-free and positive.",
            highlight: null,
            image: "https://images.unsplash.com/photo-1512376125713-158d3de52286?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ],

    //   Reviews & Testimonials
    reviews: [
        {
            name: "Amit Rathore",
            location: "Jodhpur",
            rating: 5,
            text: "Dr. Dileep transformed my smile completely. The implants look so natural — even my family couldn't tell. Professional, painless, and worth every rupee.",
            treatment: "Dental Implants",
            avatar: "A",
        },
        {
            name: "Sunita Mehta",
            location: "Barmer",
            rating: 5,
            text: "I was terrified of dentists before visiting Mateshavri Dental Care. The team was so patient and caring. My teeth whitening results are stunning!",
            treatment: "Teeth Whitening",
            avatar: "S",
        },
        {
            name: "Raj Singhvi",
            location: "Jodhpur",
            rating: 5,
            text: "Brought my 7-year-old here and she actually enjoyed her visit! Dr. Dileep is amazing with kids. Highly recommend for families.",
            treatment: "Kids' Dentistry",
            avatar: "R",
        },
        {
            name: "Kavita Joshi",
            location: "Pali",
            rating: 5,
            text: "The Invisalign treatment changed my confidence at work. Everything was explained clearly and the results are exactly what I hoped for.",
            treatment: "Invisalign",
            avatar: "K",
        },
    ],

    //   Before & After
    beforeAfter: [
        {
            label: "Smile Makeover",
            description: "Veneers + whitening for a complete transformation",
            image1: "/images/before1.jpg",
            image2: "/images/after1.jpg",
        },
        {
            label: "Teeth Alignment",
            description: "12-month Invisalign treatment",
            image1: "/images/before2.jpg",
            image2: "/images/after2.jpg",
        },
        {
            label: "Implant Restoration",
            description: "Full arch restoration with implants",
            image1: "/images/before3.jpg",
            image2: "/images/after3.jpg",
        },
    ],

    //   Statistics
    stats: [
        { value: "5,000+", label: "Happy Patients" },
        { value: "14+", label: "Years Experience" },
        { value: "12", label: "Expert Team" },
        { value: "98%", label: "Success Rate" },
    ],

    //   Social Media
    social: {
        instagram: "https://instagram.com/brightsmile.dental",
        facebook: "https://facebook.com/brightsmile.dental",
        youtube: null,
    },

    //   SEO Metadata
    seo: {
        title: "BrightSmile Dental – Best Dental Clinic in Jodhpur",
        description:
            "Advanced dental care in Jodhpur. Teeth whitening, implants, Invisalign, root canal & more. Book your appointment today.",
        keywords:
            "dental clinic jodhpur, best dentist jodhpur, teeth whitening jodhpur, dental implants rajasthan",
    },
}

export default clinicData