export interface SeoKeyword {
    keyword: string;
    slug: string;
    targetCategory: string; // The existing category slug it maps to
    priority: number;
    titleTemplate?: string;
}

export const seoKeywords: SeoKeyword[] = [
    // === PLUMBING (1-50) ===
    { keyword: 'Plumbers Near Me', slug: 'plumbers-near-me', targetCategory: 'plumbing', priority: 1 },
    { keyword: 'Best Plumbers', slug: 'best-plumbers', targetCategory: 'plumbing', priority: 1 },
    { keyword: 'Emergency Plumber', slug: 'emergency-plumber', targetCategory: 'plumbing', priority: 1, titleTemplate: '24/7 Emergency Plumber in {{location}}' },
    { keyword: 'Cheap Plumbers', slug: 'cheap-plumbers', targetCategory: 'plumbing', priority: 1 },
    { keyword: 'Affordable Plumbing', slug: 'affordable-plumbing', targetCategory: 'plumbing', priority: 1 },
    { keyword: 'Blocked Drains', slug: 'blocked-drains', targetCategory: 'plumbing', priority: 1 },
    { keyword: 'Geyser Repair', slug: 'geyser-repair', targetCategory: 'geyser-services', priority: 1 },
    { keyword: 'Leak Detection', slug: 'leak-detection', targetCategory: 'plumbing', priority: 1 },
    { keyword: 'Plumbing Contractors', slug: 'plumbing-contractors', targetCategory: 'plumbing', priority: 2 },
    { keyword: 'Local Plumbers', slug: 'local-plumbers', targetCategory: 'plumbing', priority: 1 },
    { keyword: '24 Hour Plumber', slug: '24-hour-plumber', targetCategory: 'plumbing', priority: 1 },
    { keyword: 'Bathroom Plumbers', slug: 'bathroom-plumbers', targetCategory: 'plumbing', priority: 2 },
    { keyword: 'Kitchen Plumbers', slug: 'kitchen-plumbers', targetCategory: 'plumbing', priority: 2 },
    { keyword: 'Drain Cleaning', slug: 'drain-cleaning', targetCategory: 'plumbing', priority: 1 },
    { keyword: 'Hot Water Systems', slug: 'hot-water-systems', targetCategory: 'plumbing', priority: 2 },
    { keyword: 'Solar Geyser Installers', slug: 'solar-geyser-installers', targetCategory: 'geyser-services', priority: 1 },
    { keyword: 'Water Meter Installers', slug: 'water-meter-installers', targetCategory: 'plumbing', priority: 3 },
    { keyword: 'Tap Washers', slug: 'tap-washers', targetCategory: 'plumbing', priority: 3 },
    { keyword: 'Toilet Repairs', slug: 'toilet-repairs', targetCategory: 'plumbing', priority: 2 },
    { keyword: 'Certified Plumbers', slug: 'certified-plumbers', targetCategory: 'plumbing', priority: 2 },

    // === ELECTRICIANS (51-100) ===
    { keyword: 'Electrician Near Me', slug: 'electrician-near-me', targetCategory: 'electricians', priority: 1 },
    { keyword: 'Best Electricians', slug: 'best-electricians', targetCategory: 'electricians', priority: 1 },
    { keyword: 'Emergency Electrician', slug: 'emergency-electrician', targetCategory: 'electricians', priority: 1, titleTemplate: 'Emergency Electrician in {{location}} - Fast Response' },
    { keyword: 'Electrical Contractors', slug: 'electrical-contractors', targetCategory: 'electricians', priority: 1 },
    { keyword: 'Domestic Electricians', slug: 'domestic-electricians', targetCategory: 'electricians', priority: 2 },
    { keyword: 'Commercial Electricians', slug: 'commercial-electricians', targetCategory: 'electricians', priority: 2 },
    { keyword: 'Industrial Electricians', slug: 'industrial-electricians', targetCategory: 'electricians', priority: 2 },
    { keyword: 'COC Certificate', slug: 'coc-certificate', targetCategory: 'electricians', priority: 1 },
    { keyword: 'Electrical Certificate of Compliance', slug: 'electrical-certificate-of-compliance', targetCategory: 'electricians', priority: 1 },
    { keyword: 'Solar Installers', slug: 'solar-installers', targetCategory: 'solar-inverter', priority: 1 },
    { keyword: 'Inverter Installation', slug: 'inverter-installation', targetCategory: 'solar-inverter', priority: 1 },
    { keyword: 'Generator Installation', slug: 'generator-installation', targetCategory: 'electricians', priority: 2 },
    { keyword: 'DB Board Upgrades', slug: 'db-board-upgrades', targetCategory: 'electricians', priority: 2 },
    { keyword: 'Wiring and Rewiring', slug: 'wiring-rewiring', targetCategory: 'electricians', priority: 3 },
    { keyword: 'Power Tripping', slug: 'power-tripping', targetCategory: 'electricians', priority: 1 },
    { keyword: 'Stove Connection', slug: 'stove-connection', targetCategory: 'electricians', priority: 3 },
    { keyword: 'Gate Motor Repairs', slug: 'gate-motor-repairs', targetCategory: 'gate-automation', priority: 2 },
    { keyword: 'Prepaid Meter Installation', slug: 'prepaid-meter-installation', targetCategory: 'electricians', priority: 2 },
    { keyword: 'Lighting Installers', slug: 'lighting-installers', targetCategory: 'electricians', priority: 3 },
    { keyword: '24 Hour Electrician', slug: '24-hour-electrician', targetCategory: 'electricians', priority: 1 },

    // === BUILDERS & RENOVATIONS (101-150) ===
    { keyword: 'Builders Near Me', slug: 'builders-near-me', targetCategory: 'general-building', priority: 1 },
    { keyword: 'Building Contractors', slug: 'building-contractors', targetCategory: 'general-building', priority: 1 },
    { keyword: 'Home Renovations', slug: 'home-renovations', targetCategory: 'general-building', priority: 1 },
    { keyword: 'House Extensions', slug: 'house-extensions', targetCategory: 'general-building', priority: 2 },
    { keyword: 'Kitchen Renovations', slug: 'kitchen-renovations', targetCategory: 'kitchen-bathroom', priority: 1 },
    { keyword: 'Bathroom Renovations', slug: 'bathroom-renovations', targetCategory: 'kitchen-bathroom', priority: 1 },
    { keyword: 'Nhbrc Builders', slug: 'nhbrc-builders', targetCategory: 'general-building', priority: 1 },
    { keyword: 'Construction Companies', slug: 'construction-companies', targetCategory: 'general-building', priority: 1 },
    { keyword: 'Bricklayers', slug: 'bricklayers', targetCategory: 'bricklaying', priority: 2 },
    { keyword: 'Plastering Services', slug: 'plastering-services', targetCategory: 'plastering', priority: 3 },
    { keyword: 'Ceiling Installers', slug: 'ceiling-installers', targetCategory: 'drywalling', priority: 2 },
    { keyword: 'Drywall Installers', slug: 'drywall-installers', targetCategory: 'drywalling', priority: 2 },
    { keyword: 'Building Plans', slug: 'building-plans', targetCategory: 'architects', priority: 2 },
    { keyword: 'Architects Near Me', slug: 'architects-near-me', targetCategory: 'architects', priority: 2 },
    { keyword: 'Affordable Builders', slug: 'affordable-builders', targetCategory: 'general-building', priority: 1 },
    { keyword: 'Luxury Home Builders', slug: 'luxury-home-builders', targetCategory: 'general-building', priority: 2 },
    { keyword: 'Granny Flat Builders', slug: 'granny-flat-builders', targetCategory: 'general-building', priority: 2 },
    { keyword: 'Garage Builders', slug: 'garage-builders', targetCategory: 'general-building', priority: 3 },
    { keyword: 'Boundary Walls', slug: 'boundary-walls', targetCategory: 'bricklaying', priority: 2 },
    { keyword: 'Retaining Walls', slug: 'retaining-walls', targetCategory: 'bricklaying', priority: 3 },

    // === ROOFING (151-180) ===
    { keyword: 'Roofing Contractors', slug: 'roofing-contractors', targetCategory: 'roofing', priority: 1 },
    { keyword: 'Roof Repairs', slug: 'roof-repairs', targetCategory: 'roofing', priority: 1 },
    { keyword: 'Waterproofing', slug: 'waterproofing', targetCategory: 'waterproofing', priority: 1 },
    { keyword: 'Roof Leaks', slug: 'roof-leaks', targetCategory: 'roofing', priority: 1 },
    { keyword: 'New Roof Installation', slug: 'new-roof-installation', targetCategory: 'roofing', priority: 2 },
    { keyword: 'Tile Roof Repairs', slug: 'tile-roof-repairs', targetCategory: 'roofing', priority: 2 },
    { keyword: 'Zinc Roof Repairs', slug: 'zinc-roof-repairs', targetCategory: 'roofing', priority: 3 },
    { keyword: 'Roof Painting', slug: 'roof-painting', targetCategory: 'painting', priority: 2 },
    { keyword: 'Gutter Cleaning', slug: 'gutter-cleaning', targetCategory: 'guttering', priority: 2 },
    { keyword: 'Gutter Installation', slug: 'gutter-installation', targetCategory: 'guttering', priority: 2 },
    { keyword: 'Roof Truss Manufacturers', slug: 'roof-truss-manufacturers', targetCategory: 'roofing-supplies', priority: 3 },
    { keyword: 'Damp Proofing', slug: 'damp-proofing', targetCategory: 'waterproofing', priority: 1 },
    { keyword: 'Torch On Waterproofing', slug: 'torch-on-waterproofing', targetCategory: 'waterproofing', priority: 2 },
    { keyword: 'Flashings Repair', slug: 'flashings-repair', targetCategory: 'roofing', priority: 3 },

    // === PAINTING (181-200) ===
    { keyword: 'Painters Near Me', slug: 'painters-near-me', targetCategory: 'painting', priority: 1 },
    { keyword: 'Professional Painters', slug: 'professional-painters', targetCategory: 'painting', priority: 1 },
    { keyword: 'House Painters', slug: 'house-painters', targetCategory: 'painting', priority: 1 },
    { keyword: 'Interior Painters', slug: 'interior-painters', targetCategory: 'painting', priority: 2 },
    { keyword: 'Exterior Painters', slug: 'exterior-painters', targetCategory: 'painting', priority: 2 },
    { keyword: 'Roof Painting', slug: 'roof-painters', targetCategory: 'painting', priority: 2 },
    { keyword: 'Commercial Painters', slug: 'commercial-painters', targetCategory: 'painting', priority: 2 },
    { keyword: 'Painting Contractors', slug: 'painting-contractors', targetCategory: 'painting', priority: 1 },
    { keyword: 'Wall Coating', slug: 'wall-coating', targetCategory: 'painting', priority: 3 },
    { keyword: 'Gamazine Application', slug: 'gamazine-application', targetCategory: 'painting', priority: 2 },

    // === PAVING & TILING (201-230) ===
    { keyword: 'Paving Contractors', slug: 'paving-contractors', targetCategory: 'paving', priority: 1 },
    { keyword: 'Driveway Paving', slug: 'driveway-paving', targetCategory: 'paving', priority: 1 },
    { keyword: 'Pool Paving', slug: 'pool-paving', targetCategory: 'paving', priority: 2 },
    { keyword: 'Tilers Near Me', slug: 'tilers-near-me', targetCategory: 'tiling', priority: 1 },
    { keyword: 'Floor Tilers', slug: 'floor-tilers', targetCategory: 'tiling', priority: 2 },
    { keyword: 'Bathroom Tilers', slug: 'bathroom-tilers', targetCategory: 'tiling', priority: 2 },
    { keyword: 'Wall Tilers', slug: 'wall-tilers', targetCategory: 'tiling', priority: 2 },
    { keyword: 'Laminate Flooring', slug: 'laminate-flooring', targetCategory: 'flooring', priority: 2 },
    { keyword: 'Vinyl Flooring', slug: 'vinyl-flooring', targetCategory: 'flooring', priority: 2 },
    { keyword: 'Epoxy Flooring', slug: 'epoxy-flooring', targetCategory: 'flooring', priority: 2 },

    // === CLEANING (231-250) ===
    { keyword: 'Cleaning Services', slug: 'cleaning-services-near-me', targetCategory: 'cleaning-services', priority: 1 },
    { keyword: 'House Cleaning', slug: 'house-cleaning', targetCategory: 'cleaning-services', priority: 1 },
    { keyword: 'Office Cleaning', slug: 'office-cleaning', targetCategory: 'cleaning-services', priority: 2 },
    { keyword: 'Carpet Cleaning', slug: 'carpet-cleaning', targetCategory: 'cleaning-services', priority: 1 },
    { keyword: 'Window Cleaning', slug: 'window-cleaning', targetCategory: 'cleaning-services', priority: 2 },
    { keyword: 'Deep Cleaning', slug: 'deep-cleaning', targetCategory: 'cleaning-services', priority: 2 },
    { keyword: 'Move In Cleaning', slug: 'move-in-cleaning', targetCategory: 'cleaning-services', priority: 2 },
    { keyword: 'Post Construction Cleaning', slug: 'post-construction-cleaning', targetCategory: 'cleaning-services', priority: 2 },
    { keyword: 'Upholstery Cleaning', slug: 'upholstery-cleaning', targetCategory: 'cleaning-services', priority: 2 },
    { keyword: 'Maid Services', slug: 'maid-services', targetCategory: 'cleaning-services', priority: 1 },

    // === SECURITY (251-270) ===
    { keyword: 'Electric Fence Installers', slug: 'electric-fence-installers', targetCategory: 'fencing', priority: 1 },
    { keyword: 'CCTV Installers', slug: 'cctv-installers', targetCategory: 'security-systems', priority: 1 },
    { keyword: 'Alarm Installation', slug: 'alarm-installation', targetCategory: 'security-systems', priority: 1 },
    { keyword: 'Gate Motors', slug: 'gate-motors', targetCategory: 'gate-automation', priority: 1 },
    { keyword: 'Garage Door Motors', slug: 'garage-door-motors', targetCategory: 'gate-automation', priority: 2 },
    { keyword: 'Intercom Systems', slug: 'intercom-systems', targetCategory: 'security-systems', priority: 2 },
    { keyword: 'Burglar Bars', slug: 'burglar-bars', targetCategory: 'welding', priority: 2 },
    { keyword: 'Security Gates', slug: 'security-gates', targetCategory: 'welding', priority: 2 },
    { keyword: 'Access Control', slug: 'access-control', targetCategory: 'security-systems', priority: 3 },
    { keyword: 'Security Companies', slug: 'security-companies', targetCategory: 'security-systems', priority: 1 },

    // === HANDYMAN (271-280) ===
    { keyword: 'Handyman Near Me', slug: 'handyman-near-me', targetCategory: 'handyman', priority: 1 },
    { keyword: 'Odd Jobs', slug: 'odd-jobs', targetCategory: 'handyman', priority: 2 },
    { keyword: 'Furniture Assembly', slug: 'furniture-assembly', targetCategory: 'handyman', priority: 2 },
    { keyword: 'TV Mounting', slug: 'tv-mounting', targetCategory: 'handyman', priority: 2 },
    { keyword: 'Painting and Tiling', slug: 'painting-and-tiling', targetCategory: 'handyman', priority: 2 },
    { keyword: 'Door Hanging', slug: 'door-hanging', targetCategory: 'carpentry', priority: 3 },
    { keyword: 'Window Repairs', slug: 'window-repairs', targetCategory: 'glazing', priority: 2 },
    { keyword: 'Maintenance Services', slug: 'maintenance-services', targetCategory: 'handyman', priority: 1 },

    // === LANDSCAPING & OUTDOOR (281-310) ===
    { keyword: 'Landscapers Near Me', slug: 'landscapers-near-me', targetCategory: 'landscaping-design', priority: 1 },
    { keyword: 'Garden Services', slug: 'garden-services', targetCategory: 'landscaping-design', priority: 1 },
    { keyword: 'Tree Felling', slug: 'tree-felling', targetCategory: 'tree-felling', priority: 1 },
    { keyword: 'Tree Cutters', slug: 'tree-cutters', targetCategory: 'tree-felling', priority: 2 },
    { keyword: 'Stump Removal', slug: 'stump-removal', targetCategory: 'tree-felling', priority: 2 },
    { keyword: 'Palm Tree Pruning', slug: 'palm-tree-pruning', targetCategory: 'tree-felling', priority: 3 },
    { keyword: 'Pool Maintenance', slug: 'pool-maintenance', targetCategory: 'swimming-pools', priority: 1 },
    { keyword: 'Pool Pumps', slug: 'pool-pumps', targetCategory: 'swimming-pools', priority: 2 },
    { keyword: 'Pool Repairs', slug: 'pool-repairs', targetCategory: 'swimming-pools', priority: 2 },
    { keyword: 'Borehole Drilling', slug: 'borehole-drilling', targetCategory: 'irrigation', priority: 1 },
    { keyword: 'Irrigation Systems', slug: 'irrigation-systems', targetCategory: 'irrigation', priority: 1 },
    { keyword: 'Thatch Roof Repairs', slug: 'thatch-roof-repairs', targetCategory: 'thatching', priority: 2 },
    { keyword: 'Lapa Builders', slug: 'lapa-builders', targetCategory: 'thatching', priority: 2 },

    // === PEST CONTROL (311-320) ===
    { keyword: 'Pest Control Near Me', slug: 'pest-control-near-me', targetCategory: 'pest-control', priority: 1 },
    { keyword: 'Fumigation Services', slug: 'fumigation-services', targetCategory: 'pest-control', priority: 1 },
    { keyword: 'Termite Control', slug: 'termite-control', targetCategory: 'pest-control', priority: 1 },
    { keyword: 'Cockroach Removal', slug: 'cockroach-removal', targetCategory: 'pest-control', priority: 2 },
    { keyword: 'Rat Poisoning', slug: 'rat-control', targetCategory: 'pest-control', priority: 2 },
    { keyword: 'Bed Bug Removal', slug: 'bed-bug-removal', targetCategory: 'pest-control', priority: 2 },

    // === APPLIANCE REPAIR (321-340) ===
    { keyword: 'Appliance Repair', slug: 'appliance-repair', targetCategory: 'appliance-repair', priority: 1, titleTemplate: 'Same Day Appliance Repair in {{location}}' },
    { keyword: 'Fridge Repair', slug: 'fridge-repair', targetCategory: 'appliance-repair', priority: 1 },
    { keyword: 'Washing Machine Repair', slug: 'washing-machine-repair', targetCategory: 'appliance-repair', priority: 1 },
    { keyword: 'Stove Repair', slug: 'stove-repair', targetCategory: 'appliance-repair', priority: 1 },
    { keyword: 'Oven Repair', slug: 'oven-repair', targetCategory: 'appliance-repair', priority: 2 },
    { keyword: 'Tumble Dryer Repair', slug: 'tumble-dryer-repair', targetCategory: 'appliance-repair', priority: 2 },
    { keyword: 'Dishwasher Repair', slug: 'dishwasher-repair', targetCategory: 'appliance-repair', priority: 2 },
    { keyword: 'Samsung Fridge Repair', slug: 'samsung-fridge-repair', targetCategory: 'appliance-repair', priority: 2 },
    { keyword: 'Speed Queen Repair', slug: 'speed-queen-repair', targetCategory: 'appliance-repair', priority: 2 },
    { keyword: 'Defy Appliance Repair', slug: 'defy-appliance-repair', targetCategory: 'appliance-repair', priority: 2 },

    // === MOVING & STORAGE (341-350) ===
    { keyword: 'Furniture Removals', slug: 'furniture-removals', targetCategory: 'moving-storage', priority: 1 },
    { keyword: 'Moving Companies', slug: 'moving-companies', targetCategory: 'moving-storage', priority: 1 },
    { keyword: 'Office Movers', slug: 'office-movers', targetCategory: 'moving-storage', priority: 2 },
    { keyword: 'Long Distance Movers', slug: 'long-distance-movers', targetCategory: 'moving-storage', priority: 2 },
    { keyword: 'Storage Units', slug: 'storage-units', targetCategory: 'moving-storage', priority: 1 },
    { keyword: 'Mini Movers', slug: 'mini-movers', targetCategory: 'moving-storage', priority: 2 },

    // === GLASS & ALUMINIUM (351-360) ===
    { keyword: 'Glass Replacement', slug: 'glass-replacement', targetCategory: 'glazing', priority: 1 },
    { keyword: 'Window Repair', slug: 'window-repair', targetCategory: 'glazing', priority: 1 },
    { keyword: 'Aluminium Windows', slug: 'aluminium-windows', targetCategory: 'glazing', priority: 1 },
    { keyword: 'Aluminium Doors', slug: 'aluminium-doors', targetCategory: 'glazing', priority: 1 },
    { keyword: 'Shower Doors', slug: 'shower-doors', targetCategory: 'glazing', priority: 2 },
    { keyword: 'Sliding Door Repairs', slug: 'sliding-door-repairs', targetCategory: 'glazing', priority: 2 },

    // === FLOORING (361-370) ===
    { keyword: 'Carpet Installers', slug: 'carpet-installers', targetCategory: 'flooring', priority: 2 },
    { keyword: 'Floor Sanding', slug: 'floor-sanding', targetCategory: 'flooring', priority: 2 },
    { keyword: 'Wooden Flooring', slug: 'wooden-flooring', targetCategory: 'flooring', priority: 1 },
    { keyword: 'Laminate Flooring Installers', slug: 'laminate-flooring-installers', targetCategory: 'flooring', priority: 1 },

    // === GAS & HEATING (371-380) ===
    { keyword: 'Gas Installers', slug: 'gas-installers', targetCategory: 'gas-fitting', priority: 1 },
    { keyword: 'Gas Compliance Certificate', slug: 'gas-compliance-certificate', targetCategory: 'gas-fitting', priority: 1 },
    { keyword: 'Gas Stove Installation', slug: 'gas-stove-installation', targetCategory: 'gas-fitting', priority: 2 },
    { keyword: 'Gas Geyser Installers', slug: 'gas-geyser-installers', targetCategory: 'gas-fitting', priority: 1 },

    // === BUILDING MATERIALS (381-400) ===
    { keyword: 'Bricks for Sale', slug: 'bricks-for-sale', targetCategory: 'bricks-pavers', priority: 1 },
    { keyword: 'Paving Bricks', slug: 'paving-bricks', targetCategory: 'bricks-pavers', priority: 1 },
    { keyword: 'River Sand Near Me', slug: 'river-sand-near-me', targetCategory: 'sand-stone-cement', priority: 1 },
    { keyword: 'Building Sand', slug: 'building-sand', targetCategory: 'sand-stone-cement', priority: 1 },
    { keyword: 'Crusher Stone', slug: 'crusher-stone', targetCategory: 'sand-stone-cement', priority: 2 },
    { keyword: 'Cement Prices', slug: 'cement-prices', targetCategory: 'sand-stone-cement', priority: 1 },
    { keyword: 'Roof Tiles', slug: 'roof-tiles', targetCategory: 'roofing-supplies', priority: 2 },
    { keyword: 'IBR Sheeting', slug: 'ibr-sheeting', targetCategory: 'roofing-supplies', priority: 2 },
    { keyword: 'Gum Poles', slug: 'gum-poles', targetCategory: 'timber-lumber', priority: 2 },
    { keyword: 'Hardware Stores', slug: 'hardware-stores', targetCategory: 'hardware-tools', priority: 1 },
    { keyword: 'Buildware', slug: 'buildware', targetCategory: 'hardware-tools', priority: 2 },

    // === AIR CONDITIONING (401-420) ===
    { keyword: 'Aircon Installers', slug: 'aircon-installers', targetCategory: 'hvac', priority: 1 },
    { keyword: 'Air Conditioning Fitment', slug: 'air-conditioning-fitment', targetCategory: 'hvac', priority: 1 },
    { keyword: 'Aircon Regas', slug: 'aircon-regas', targetCategory: 'hvac', priority: 1, titleTemplate: 'Aircon Regas & Service in {{location}}' },
    { keyword: 'Aircon Repairs', slug: 'aircon-repairs', targetCategory: 'hvac', priority: 1 },
    { keyword: 'HVAC Contractors', slug: 'hvac-contractors', targetCategory: 'hvac', priority: 2 },
    { keyword: 'Ventilation Systems', slug: 'ventilation-systems', targetCategory: 'hvac', priority: 3 },

    // === WATER & BACKUP (421-430) ===
    { keyword: 'JoJo Tank Installers', slug: 'jojo-tank-installers', targetCategory: 'plumbing-contractors', priority: 1 },
    { keyword: 'Water Tank Installation', slug: 'water-tank-installation', targetCategory: 'plumbing-contractors', priority: 1 },
    { keyword: 'Borehole Pumps', slug: 'borehole-pumps', targetCategory: 'irrigation', priority: 2 },
    { keyword: 'Grey Water Systems', slug: 'grey-water-systems', targetCategory: 'plumbing-contractors', priority: 2 },
    { keyword: 'Backup Water Systems', slug: 'backup-water-systems', targetCategory: 'plumbing-contractors', priority: 2 },

    // === RUBBLE & WASTE (431-440) ===
    { keyword: 'Rubble Removal', slug: 'rubble-removal', targetCategory: 'rubble-removal', priority: 1 },
    { keyword: 'Skip Hire', slug: 'skip-hire', targetCategory: 'rubble-removal', priority: 1 },
    { keyword: 'Garden Refuse Removal', slug: 'garden-refuse-removal', targetCategory: 'rubble-removal', priority: 2 },
    { keyword: 'Waste Management', slug: 'waste-management', targetCategory: 'rubble-removal', priority: 2 },
    { keyword: 'Site Clearing', slug: 'site-clearing', targetCategory: 'demolition', priority: 2 },

    // === CARPENTRY & KITCHENS (441-450) ===
    { keyword: 'Kitchen Cupboards', slug: 'kitchen-cupboards', targetCategory: 'carpentry', priority: 1 },
    { keyword: 'Built In Cupboards', slug: 'built-in-cupboards', targetCategory: 'carpentry', priority: 1 },
    { keyword: 'BIC Installers', slug: 'bic-installers', targetCategory: 'carpentry', priority: 2 },
    { keyword: 'Kitchen Designers', slug: 'kitchen-designers', targetCategory: 'kitchen-bathroom', priority: 2 },
    { keyword: 'Carpenters Near Me', slug: 'carpenters-near-me', targetCategory: 'carpentry', priority: 1 },
    { keyword: 'Custom Furniture', slug: 'custom-furniture', targetCategory: 'carpentry', priority: 3 },
    { keyword: 'Decking Installers', slug: 'decking-installers', targetCategory: 'decking', priority: 2 },

    // === SPECIALIZED SOLAR (451-460) ===
    { keyword: 'Solar Panel Installers', slug: 'solar-panel-installers', targetCategory: 'solar-inverter', priority: 1 },
    { keyword: 'Sunsynk Installers', slug: 'sunsynk-installers', targetCategory: 'solar-inverter', priority: 2 },
    { keyword: 'Deye Inverter Installers', slug: 'deye-inverter-installers', targetCategory: 'solar-inverter', priority: 2 },
    { keyword: 'Solar Battery Backup', slug: 'solar-battery-backup', targetCategory: 'solar-inverter', priority: 1 },
    { keyword: 'Off Grid Solar', slug: 'off-grid-solar', targetCategory: 'solar-inverter', priority: 2 },

    // === HOME IMPROVEMENT (461-470) ===
    { keyword: 'Garage Door Repairs', slug: 'garage-door-repairs', targetCategory: 'gate-automation', priority: 1 },
    { keyword: 'Garage Door Installers', slug: 'garage-door-installers', targetCategory: 'gate-automation', priority: 1 },
    { keyword: 'Automation Specialists', slug: 'automation-specialists', targetCategory: 'gate-automation', priority: 2 },
    { keyword: 'Blind Installers', slug: 'blind-installers', targetCategory: 'interior-designers', priority: 2 },
];

export function getSeoKeywordBySlug(slug: string) {
    return seoKeywords.find(k => k.slug === slug);
}

export function getAllSeoKeywords() {
    return seoKeywords;
}
