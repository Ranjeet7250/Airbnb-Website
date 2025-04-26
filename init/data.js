const sampleListings = [
    {
        title: "Cory Beachfront Cottage",
        description: "This is a charming cottage for a relaxing getaway. Enjoy the ocean breeze and stunning views.",
        image: {
            filename:"listingimage",
            url:"https://res.cloudinary.com/dqpztoeqw/image/upload/v1744792470/Wanderlust_DEV/phjomu4qcsejlwzmxnxp.png"
        },
        price: 1500,
        location: "Goa",
        country: "India"
    },
    {
        title: "Mountain Retreat",
        description: "Experience the tranquility of the mountains in this cozy retreat. Perfect for hiking and nature lovers.",
        image: {
            filename:"listingimage",
            url:"https://res.cloudinary.com/dqpztoeqw/image/upload/v1744792470/Wanderlust_DEV/phjomu4qcsejlwzmxnxp.png"
        },
        price: 2000,
        location: "Himachal Pradesh",
        country: "India"
    },
    {
        title: "City Apartment",
        description: "Stay in the heart of the city with this modern apartment. Close to all major attractions.",
        image: {
            filename:"listingimage",
            url:"https://res.cloudinary.com/dqpztoeqw/image/upload/v1744792470/Wanderlust_DEV/phjomu4qcsejlwzmxnxp.png"
        },
        price: 2500,
        location: "Mumbai",
        country: "India"
    }
    ,
    {
        title: "Countryside Villa",
        description: "Enjoy the peaceful countryside in this spacious villa. Ideal for families and large groups.",
        image: {
            filename:"listingimage",
            url:"https://res.cloudinary.com/dqpztoeqw/image/upload/v1744792470/Wanderlust_DEV/phjomu4qcsejlwzmxnxp.png"
        },
        price: 3000,
        location: "Pondicherry",
        country: "India"
    },
    {
        title: "Luxury Resort",
        description: "Indulge in luxury at this high-end resort. Enjoy spa treatments, fine dining, and breathtaking views.",
        image: {
            filename:"listingimage",
            url:"https://res.cloudinary.com/dqpztoeqw/image/upload/v1744792470/Wanderlust_DEV/phjomu4qcsejlwzmxnxp.png"
        },
        price: 5000,
        location: "Kerala",
        country: "India"
    }
    ,
    {
        title: "Desert Camp",
        description: "Experience the magic of the desert in this unique camp. Enjoy stargazing and traditional meals.",
        image: {
            filename:"listingimage",
            url:"https://res.cloudinary.com/dqpztoeqw/image/upload/v1744792470/Wanderlust_DEV/phjomu4qcsejlwzmxnxp.png"
        },
        price: 1800,
        location: "Rajasthan",
        country: "India"
    },
    {
        title: "Lake House",
        description: "Relax by the lake in this beautiful house. Perfect for fishing, boating, and family gatherings.",
        image: {
            filename:"listingimage",
            url:"https://res.cloudinary.com/dqpztoeqw/image/upload/v1744792470/Wanderlust_DEV/phjomu4qcsejlwzmxnxp.png"
        },
        price: 2200,
        location: "Karnataka",
        country: "India"
    },
    {
        title: "Historic Castle",
        description: "Stay in a historic castle and experience royal living. Explore the grounds and enjoy guided tours.",
        image: {
            filename:"listingimage",
            url:"https://res.cloudinary.com/dqpztoeqw/image/upload/v1744792470/Wanderlust_DEV/phjomu4qcsejlwzmxnxp.png"
        },
        price: 4000,
        location: "Uttar Pradesh",
        country: "India"
    },
    {
        title: "Cory Beachfront Cottage",
        description: "This is a charming cottage for a relaxing getaway. Enjoy the ocean breeze and stunning views.",
        image: {
            filename:"listingimage",
            url:"https://res.cloudinary.com/dqpztoeqw/image/upload/v1744792470/Wanderlust_DEV/phjomu4qcsejlwzmxnxp.png"
        },
        price: 1500,
        location: "Goa",
        country: "India"
    },
    {
        title: "Mountain Retreat",
        description: "Experience the tranquility of the mountains in this cozy retreat. Perfect for hiking and nature lovers.",
        image: {
            filename:"listingimage",
            url:"https://res.cloudinary.com/dqpztoeqw/image/upload/v1744792470/Wanderlust_DEV/phjomu4qcsejlwzmxnxp.png"
        },
        price: 2000,
        location: "Himachal Pradesh",
        country: "India"
    },
    {
        title: "City Apartment",
        description: "Stay in the heart of the city with this modern apartment. Close to all major attractions.",
        image: {
            filename:"listingimage",
            url:"https://res.cloudinary.com/dqpztoeqw/image/upload/v1744792470/Wanderlust_DEV/phjomu4qcsejlwzmxnxp.png"
        },
        price: 2500,
        location: "Mumbai",
        country: "India"
    }
    ,
    {
        title: "Countryside Villa",
        description: "Enjoy the peaceful countryside in this spacious villa. Ideal for families and large groups.",
        image: {
            filename:"listingimage",
            url:"https://res.cloudinary.com/dqpztoeqw/image/upload/v1744792470/Wanderlust_DEV/phjomu4qcsejlwzmxnxp.png"
        },
        price: 3000,
        location: "Pondicherry",
        country: "India"
    },
    {
        title: "Luxury Resort",
        description: "Indulge in luxury at this high-end resort. Enjoy spa treatments, fine dining, and breathtaking views.",
        image: {
            filename:"listingimage",
            url:"https://res.cloudinary.com/dqpztoeqw/image/upload/v1744792470/Wanderlust_DEV/phjomu4qcsejlwzmxnxp.png"
        },
        price: 5000,
        location: "Kerala",
        country: "India"
    }
    ,
    {
        title: "Desert Camp",
        description: "Experience the magic of the desert in this unique camp. Enjoy stargazing and traditional meals.",
        image: {
            filename:"listingimage",
            url:"https://res.cloudinary.com/dqpztoeqw/image/upload/v1744792470/Wanderlust_DEV/phjomu4qcsejlwzmxnxp.png"
        },
        price: 1800,
        location: "Rajasthan",
        country: "India"
    },
    {
        title: "Lake House",
        description: "Relax by the lake in this beautiful house. Perfect for fishing, boating, and family gatherings.",
        image: {
            filename:"listingimage",
            url:"https://res.cloudinary.com/dqpztoeqw/image/upload/v1744792470/Wanderlust_DEV/phjomu4qcsejlwzmxnxp.png"
        },
        price: 2200,
        location: "Karnataka",
        country: "India"
    },
    {
        title: "Historic Castle",
        description: "Stay in a historic castle and experience royal living. Explore the grounds and enjoy guided tours.",
        image: {
            filename:"listingimage",
            url:"https://res.cloudinary.com/dqpztoeqw/image/upload/v1744792470/Wanderlust_DEV/phjomu4qcsejlwzmxnxp.png"
        },
        price: 4000,
        location: "Uttar Pradesh",
        country: "India"
    },
    
];

module.exports = {data: sampleListings};