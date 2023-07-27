const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader = ('Content-Type', 'application/json');
	if (req.url === '/') {
		res.end(JSON.stringify({ message: 'Welcome to Men & Women Dummy Data' }));
	} else if (req.url === '/men') {
		const menProduct = [
			{
				id: 1,
				name: 'Classic Leather Watch',
				category: 'Accessories',
				price: 59.99,
				color: 'Black',
				material: 'Genuine Leather',
				description:
					'A timeless and elegant leather watch for men, featuring a black dial with silver accents and a genuine leather strap.',
				rating: 4.8,
				availability: true,
			},
			{
				id: 2,
				name: 'Slim Fit Denim Jeans',
				category: 'Apparel',
				price: 39.99,
				color: 'Blue',
				size: '32/34',
				description:
					'High-quality slim fit denim jeans with a modern design, perfect for casual and semi-formal occasions.',
				rating: 4.5,
				availability: true,
			},
			{
				id: 3,
				name: 'Classic Leather Wallet',
				category: 'Accessories',
				price: 29.99,
				color: 'Brown',
				material: 'Genuine Leather',
				description:
					'A practical and stylish leather wallet for men, featuring multiple card slots and a transparent ID window.',
				rating: 4.6,
				availability: true,
			},
			{
				id: 4,
				name: 'Sports Performance T-Shirt',
				category: 'Apparel',
				price: 24.99,
				color: 'Grey',
				size: 'L',
				description:
					'Moisture-wicking and breathable sports performance t-shirt for active men, ideal for workouts and sports activities.',
				rating: 4.7,
				availability: true,
			},
			{
				id: 5,
				name: 'Grooming Kit',
				category: 'Grooming',
				price: 49.99,
				description:
					'A comprehensive grooming kit for men, including a trimmer, razor, brush, and grooming products, all in a stylish case.',
				rating: 4.9,
				availability: true,
			},
			{
				id: 6,
				name: 'Leather Messenger Bag',
				category: 'Bags',
				price: 89.99,
				color: 'Dark Brown',
				material: 'Full Grain Leather',
				description:
					'A versatile and durable leather messenger bag, perfect for carrying essentials during work and travel.',
				rating: 4.8,
				availability: true,
			},
			{
				id: 7,
				name: 'Crew Neck Sweater',
				category: 'Apparel',
				price: 49.99,
				color: 'Navy',
				size: 'M',
				description:
					'A classic and cozy crew neck sweater for men, made from soft and warm fabric, suitable for colder weather.',
				rating: 4.5,
				availability: true,
			},
			{
				id: 8,
				name: 'Beard Oil',
				category: 'Grooming',
				price: 15.99,
				description:
					'Premium beard oil formulated to nourish and soften facial hair, leaving it with a pleasant scent and a healthy shine.',
				rating: 4.7,
				availability: true,
			},
			{
				id: 9,
				name: 'Leather Dress Shoes',
				category: 'Footwear',
				price: 79.99,
				color: 'Black',
				size: '10',
				description:
					'Elegant and comfortable leather dress shoes for men, suitable for formal events and business attire.',
				rating: 4.6,
				availability: true,
			},
			{
				id: 10,
				name: 'Duffel Bag',
				category: 'Bags',
				price: 64.99,
				color: 'Olive Green',
				description:
					'A spacious and sturdy duffel bag for men, perfect for weekend getaways and short trips.',
				rating: 4.8,
				availability: true,
			},
		];

		res.end(JSON.stringify({ Products: menProduct }));
	} else if (req.url === '/women') {
		const womenProduct = [
			{
				product_name: "Women's Classic Black Dress",
				brand: 'Fashionista',
				price: 49.99,
				color: 'Black',
				size: 'Medium',
				category: 'Apparel',
				rating: 4.7,
				in_stock: true,
			},
			{
				product_name: "Ladies' Leather Handbag",
				brand: 'Luxury Bags',
				price: 129.99,
				color: 'Brown',
				category: 'Accessories',
				rating: 4.9,
				in_stock: true,
			},
			{
				product_name: "Women's Athletic Sneakers",
				brand: 'FitZone',
				price: 79.99,
				color: 'White/Pink',
				size: 'US 8',
				category: 'Footwear',
				rating: 4.5,
				in_stock: true,
			},
			{
				product_name: 'Elegant Pearl Necklace',
				brand: 'Glamour Gems',
				price: 149.99,
				color: 'White',
				category: 'Jewelry',
				rating: 4.8,
				in_stock: true,
			},
			{
				product_name: "Women's Polarized Sunglasses",
				brand: 'SunGuard',
				price: 59.99,
				color: 'Black/Gold',
				category: 'Eyewear',
				rating: 4.6,
				in_stock: true,
			},
			{
				product_name: 'Cosmetic Makeup Set',
				brand: 'Glamourous Beauty',
				price: 39.99,
				color: 'Multi',
				category: 'Beauty',
				rating: 4.4,
				in_stock: true,
			},
			{
				product_name: "Women's Winter Coat",
				brand: 'CozyWear',
				price: 89.99,
				color: 'Navy Blue',
				size: 'Large',
				category: 'Outerwear',
				rating: 4.7,
				in_stock: true,
			},
			{
				product_name: "Stylish Women's Watch",
				brand: 'Timeless',
				price: 129.99,
				color: 'Rose Gold',
				category: 'Watches',
				rating: 4.9,
				in_stock: true,
			},
			{
				product_name: "Chic Women's Fedora Hat",
				brand: 'TrendSetter',
				price: 24.99,
				color: 'Black',
				category: 'Hats',
				rating: 4.5,
				in_stock: true,
			},
			{
				product_name: "Women's Leather Wallet",
				brand: 'LeatherCraft',
				price: 49.99,
				color: 'Cognac',
				category: 'Accessories',
				rating: 4.6,
				in_stock: true,
			},
		];

		res.end(JSON.stringify({ Products: womenProduct }));
	} else {
		res.statusCode = 500;
		res.setHeader = ('Content-Type', 'application/json');
		res.end(JSON.stringify({ message: 'Page not found' }));
	}
});
server.listen(port, () => {
	console.log(`Starting server on port ${port}`);
});
