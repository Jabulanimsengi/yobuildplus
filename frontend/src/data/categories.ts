import { Category } from '@/types';

export const categories: Category[] = [
    {
        id: 'structural',
        slug: 'structural-core-construction',
        name: 'Structural & Core Construction',
        icon: '🏗️',
        description: 'The shell - main structure and stability of buildings',
        subcategories: [
            {
                id: 'general-building',
                slug: 'general-building',
                name: 'General Building & Contracting',
                parentId: 'structural',
                searchTerms: ['builder', 'contractor', 'new builds', 'extensions', 'renovations'],
            },
            {
                id: 'bricklaying',
                slug: 'bricklaying',
                name: 'Bricklaying & Masonry',
                parentId: 'structural',
                searchTerms: ['brick', 'mason', 'stone work', 'block work'],
            },
            {
                id: 'roofing',
                slug: 'roofing',
                name: 'Roofing',
                parentId: 'structural',
                searchTerms: ['roof repair', 'thatch', 'tiles', 'sheeting', 'roof leak'],
            },
            {
                id: 'waterproofing',
                slug: 'waterproofing',
                name: 'Waterproofing',
                parentId: 'structural',
                searchTerms: ['damp proofing', 'foundation seal', 'roof waterproof', 'leak prevention'],
            },
            {
                id: 'concreting',
                slug: 'concreting',
                name: 'Concreting & Foundations',
                parentId: 'structural',
                searchTerms: ['concrete', 'foundation', 'slab', 'cement work'],
            },
            {
                id: 'steel-construction',
                slug: 'steel-construction',
                name: 'Steel Construction & Structural Engineering',
                parentId: 'structural',
                searchTerms: ['steel frame', 'structural steel', 'metal buildings'],
            },
            {
                id: 'demolition',
                slug: 'demolition',
                name: 'Demolition & Excavation',
                parentId: 'structural',
                searchTerms: ['demolish', 'excavate', 'site clearing', 'rubble'],
            },
        ],
    },
    {
        id: 'electrical-plumbing',
        slug: 'electrical-plumbing-systems',
        name: 'Electrical, Plumbing & Systems',
        icon: '⚡',
        description: 'The guts - essential utilities and systems',
        subcategories: [
            {
                id: 'electricians',
                slug: 'electricians',
                name: 'Electricians',
                parentId: 'electrical-plumbing',
                searchTerms: ['electrical', 'wiring', 'power', 'lights', 'COC', 'certificate'],
            },
            {
                id: 'plumbing',
                slug: 'plumbing',
                name: 'Plumbing & Drainage',
                parentId: 'electrical-plumbing',
                searchTerms: ['plumber', 'pipes', 'drain', 'blocked', 'leak', 'tap', 'toilet'],
            },
            {
                id: 'solar',
                slug: 'solar-inverter',
                name: 'Solar & Inverter Installation',
                parentId: 'electrical-plumbing',
                searchTerms: ['solar panels', 'PV', 'battery backup', 'inverter', 'loadshedding'],
            },
            {
                id: 'hvac',
                slug: 'hvac',
                name: 'HVAC',
                parentId: 'electrical-plumbing',
                searchTerms: ['air conditioning', 'aircon', 'heating', 'ventilation', 'AC'],
            },
            {
                id: 'gas',
                slug: 'gas-fitting',
                name: 'Gas Fitting & Installation',
                parentId: 'electrical-plumbing',
                searchTerms: ['gas stove', 'gas geyser', 'fireplace', 'LPG'],
            },
            {
                id: 'geyser',
                slug: 'geyser-services',
                name: 'Geyser Installation & Repair',
                parentId: 'electrical-plumbing',
                searchTerms: ['geyser', 'hot water', 'solar geyser', 'geyser burst'],
            },
            {
                id: 'septic',
                slug: 'septic-systems',
                name: 'Septic Tank & Sewage Systems',
                parentId: 'electrical-plumbing',
                searchTerms: ['septic', 'sewage', 'conservancy tank'],
            },
        ],
    },
    {
        id: 'interiors',
        slug: 'interiors-finishing',
        name: 'Interiors & Finishing',
        icon: '🎨',
        description: 'The look - aesthetics and usability of interiors',
        subcategories: [
            {
                id: 'painting',
                slug: 'painting',
                name: 'Painting & Decorating',
                parentId: 'interiors',
                searchTerms: ['painter', 'paint', 'interior paint', 'exterior paint', 'spray paint'],
            },
            {
                id: 'tiling',
                slug: 'tiling',
                name: 'Tiling & Cladding',
                parentId: 'interiors',
                searchTerms: ['tiles', 'ceramic', 'porcelain', 'stone', 'cladding', 'backsplash'],
            },
            {
                id: 'plastering',
                slug: 'plastering',
                name: 'Plastering & Rhinolite',
                parentId: 'interiors',
                searchTerms: ['plaster', 'rhinolite', 'skim', 'render'],
            },
            {
                id: 'drywalling',
                slug: 'drywalling',
                name: 'Drywalling & Partitioning',
                parentId: 'interiors',
                searchTerms: ['drywall', 'partition', 'ceiling', 'office divider', 'gypsum'],
            },
            {
                id: 'carpentry',
                slug: 'carpentry',
                name: 'Carpentry & Joinery',
                parentId: 'interiors',
                searchTerms: ['carpenter', 'cabinets', 'cupboards', 'skirting', 'wood work'],
            },
            {
                id: 'kitchen-bathroom',
                slug: 'kitchen-bathroom',
                name: 'Kitchen & Bathroom Renovations',
                parentId: 'interiors',
                searchTerms: ['kitchen renovation', 'bathroom renovation', 'remodel'],
            },
            {
                id: 'flooring',
                slug: 'flooring',
                name: 'Flooring Specialists',
                parentId: 'interiors',
                searchTerms: ['flooring', 'laminate', 'vinyl', 'wood floor', 'carpet', 'carpeting', 'rugs', 'sanding', 'tiling'],
            },
            {
                id: 'glazing',
                slug: 'glazing',
                name: 'Glazing & Aluminium',
                parentId: 'interiors',
                searchTerms: ['glass', 'windows', 'sliding doors', 'mirrors', 'shower doors', 'aluminium', 'glass replacement'],
            },
        ],
    },
    {
        id: 'security-exterior',
        slug: 'security-exterior',
        name: 'Metalwork, Security & Exterior',
        icon: '🔒',
        description: 'The perimeter - security and external features',
        subcategories: [
            {
                id: 'welding',
                slug: 'welding',
                name: 'Welders & Metal Fabricators',
                parentId: 'security-exterior',
                searchTerms: ['welder', 'burglar bars', 'staircases', 'metal work', 'fabrication'],
            },
            {
                id: 'gate-automation',
                slug: 'gate-automation',
                name: 'Gate Automation & Garage Motors',
                parentId: 'security-exterior',
                searchTerms: ['gate motor', 'garage door', 'automation', 'remote', 'centurion'],
            },
            {
                id: 'fencing',
                slug: 'fencing',
                name: 'Fencing & Palisade',
                parentId: 'security-exterior',
                searchTerms: ['fence', 'palisade', 'electric fence', 'wall', 'boundary'],
            },
            {
                id: 'security-systems',
                slug: 'security-systems',
                name: 'Security Systems',
                parentId: 'security-exterior',
                searchTerms: ['CCTV', 'cameras', 'alarm', 'intercom', 'access control'],
            },
            {
                id: 'paving',
                slug: 'paving',
                name: 'Paving & Tarring',
                parentId: 'security-exterior',
                searchTerms: ['paving', 'driveway', 'tar', 'walkway', 'cobble'],
            },
            {
                id: 'decking',
                slug: 'decking',
                name: 'Decking & Balustrades',
                parentId: 'security-exterior',
                searchTerms: ['deck', 'balustrade', 'timber deck', 'composite'],
            },
            {
                id: 'guttering',
                slug: 'guttering',
                name: 'Guttering & Fascias',
                parentId: 'security-exterior',
                searchTerms: ['gutters', 'fascia', 'downpipes', 'drainage'],
            },
        ],
    },
    {
        id: 'landscaping',
        slug: 'landscaping-outdoor',
        name: 'Landscaping & Outdoor Living',
        icon: '🌿',
        description: 'The garden and leisure areas',
        subcategories: [
            {
                id: 'landscaping-design',
                slug: 'landscaping-design',
                name: 'Landscaping & Garden Design',
                parentId: 'landscaping',
                searchTerms: ['landscaper', 'garden', 'lawn', 'plants', 'design'],
            },
            {
                id: 'tree-felling',
                slug: 'tree-felling',
                name: 'Tree Felling & Stump Removal',
                parentId: 'landscaping',
                searchTerms: ['tree', 'stump', 'removal', 'pruning', 'arborist'],
            },
            {
                id: 'irrigation',
                slug: 'irrigation',
                name: 'Irrigation Systems & Boreholes',
                parentId: 'landscaping',
                searchTerms: ['irrigation', 'sprinkler', 'borehole', 'water'],
            },
            {
                id: 'swimming-pools',
                slug: 'swimming-pools',
                name: 'Swimming Pool Services',
                parentId: 'landscaping',
                searchTerms: ['pool', 'swimming pool', 'pump', 'maintenance', 'marbelite'],
            },
            {
                id: 'thatching',
                slug: 'thatching',
                name: 'Thatching & Lapas',
                parentId: 'landscaping',
                searchTerms: ['thatch', 'lapa', 'gazebo', 'outdoor structure'],
            },
        ],
    },
    {
        id: 'general-services',
        slug: 'general-services',
        name: 'General Services & Maintenance',
        icon: '🔧',
        description: 'Smaller jobs and specialized services',
        subcategories: [
            {
                id: 'handyman',
                slug: 'handyman',
                name: 'Handyman Services',
                parentId: 'general-services',
                searchTerms: ['handyman', 'odd jobs', 'repairs', 'maintenance', 'fix'],
            },
            {
                id: 'rubble-removal',
                slug: 'rubble-removal',
                name: 'Rubble Removal & Skip Hire',
                parentId: 'general-services',
                searchTerms: ['rubble', 'skip', 'waste', 'removal', 'cleanup'],
            },
            {
                id: 'pest-control',
                slug: 'pest-control',
                name: 'Pest Control & Fumigation',
                parentId: 'general-services',
                searchTerms: ['pest', 'fumigation', 'termites', 'rats', 'insects'],
            },
            {
                id: 'pressure-cleaning',
                slug: 'pressure-cleaning',
                name: 'High-Pressure Cleaning',
                parentId: 'general-services',
                searchTerms: ['pressure wash', 'cleaning', 'roof cleaning', 'driveway cleaning'],
            },
            {
                id: 'locksmiths',
                slug: 'locksmiths',
                name: 'Locksmiths',
                parentId: 'general-services',
                searchTerms: ['locksmith', 'keys', 'locks', 'emergency', '24/7'],
            },
            {
                id: 'cleaning-services',
                slug: 'cleaning-services',
                name: 'Cleaning Services',
                parentId: 'general-services',
                searchTerms: ['cleaning', 'domestic', 'commercial', 'carpet', 'window cleaning', 'deep clean', 'maid'],
            },
            {
                id: 'moving-storage',
                slug: 'moving-storage',
                name: 'Moving & Storage',
                parentId: 'general-services',
                searchTerms: ['movers', 'furniture removal', 'storage units', 'packaging', 'relocation', 'transport'],
            },
            {
                id: 'appliance-repair',
                slug: 'appliance-repair',
                name: 'Appliance Repair',
                parentId: 'general-services',
                searchTerms: ['fridge repair', 'washing machine', 'stove repair', 'oven', 'tumble dryer', 'microwave'],
            },
            {
                id: 'event-hire',
                slug: 'event-hire',
                name: 'Event & Site Hire',
                parentId: 'general-services',
                searchTerms: ['toilet hire', 'portable toilets', 'marquees', 'tents', 'fencing hire', 'events'],
            },
            {
                id: 'environmental',
                slug: 'environmental-services',
                name: 'Environmental Services',
                parentId: 'general-services',
                searchTerms: ['asbestos removal', 'environmental consulting', 'waste management', 'pollution control'],
            },
        ],
    },
    {
        id: 'professional-planning',
        slug: 'professional-planning',
        name: 'Professional Planning',
        icon: '📐',
        description: 'Planning and design professionals',
        subcategories: [
            {
                id: 'architects',
                slug: 'architects',
                name: 'Architects & Draughting',
                parentId: 'professional-planning',
                searchTerms: ['architect', 'plans', 'design', 'draughting', 'drawing'],
            },
            {
                id: 'interior-designers',
                slug: 'interior-designers',
                name: 'Interior Designers',
                parentId: 'professional-planning',
                searchTerms: ['interior design', 'decor', 'styling', 'space planning'],
            },
            {
                id: 'quantity-surveyors',
                slug: 'quantity-surveyors',
                name: 'Quantity Surveyors',
                parentId: 'professional-planning',
                searchTerms: ['QS', 'quantity surveyor', 'costing', 'BOQ'],
            },
            {
                id: 'building-inspectors',
                slug: 'building-inspectors',
                name: 'Building Inspectors',
                parentId: 'professional-planning',
                searchTerms: ['inspector', 'inspection', 'compliance', 'approval'],
            },
        ],
    },
    {
        id: 'materials-supplies',
        slug: 'materials-supplies',
        name: 'Building Materials & Supplies',
        icon: '🧱',
        description: 'Suppliers of raw materials and hardware',
        subcategories: [
            {
                id: 'sand-stone-cement',
                slug: 'sand-stone-cement',
                name: 'Sand, Stone & Cement',
                parentId: 'materials-supplies',
                searchTerms: ['sand', 'river sand', 'stone', 'cement', 'aggregates', 'crusher dust'],
            },
            {
                id: 'bricks-pavers',
                slug: 'bricks-pavers',
                name: 'Bricks & Pavers',
                parentId: 'materials-supplies',
                searchTerms: ['bricks', 'pavers', 'facebrick', 'stock brick', 'paving blocks'],
            },
            {
                id: 'roofing-supplies',
                slug: 'roofing-supplies',
                name: 'Roofing Supplies',
                parentId: 'materials-supplies',
                searchTerms: ['roof tiles', 'roof sheeting', 'slates', 'trusses', 'waterproofing supplies'],
            },
            {
                id: 'timber-lumber',
                slug: 'timber-lumber',
                name: 'Timber, Lumber & Boards',
                parentId: 'materials-supplies',
                searchTerms: ['timber', 'wooden beams', 'planks', 'boards', 'decking renovation materials'],
            },
            {
                id: 'hardware-tools',
                slug: 'hardware-tools',
                name: 'Hardware & Tools',
                parentId: 'materials-supplies',
                searchTerms: ['hardware store', 'tools', 'paint supplier', 'plumbing supplies', 'electrical supplies'],
            },
            {
                id: 'glass-aluminium-supply',
                slug: 'glass-aluminium-supply',
                name: 'Glass & Aluminium Supply',
                parentId: 'materials-supplies',
                searchTerms: ['glass sheets', 'aluminium profiles', 'window frames', 'hardware'],
            },
        ],
    },
];

// Helper function to get all subcategories flattened
export function getAllSubcategories() {
    return categories.flatMap((cat) => cat.subcategories);
}

// Helper function to find category by slug
export function getCategoryBySlug(slug: string) {
    return categories.find((cat) => cat.slug === slug);
}

// Helper function to find subcategory by slug
export function getSubcategoryBySlug(slug: string) {
    for (const category of categories) {
        const sub = category.subcategories.find((s) => s.slug === slug);
        if (sub) return { subcategory: sub, category };
    }
    return null;
}

// Smart search - find matching categories/subcategories by search term
export function searchCategories(query: string) {
    const lowerQuery = query.toLowerCase();
    const results: { subcategory: typeof categories[0]['subcategories'][0]; category: typeof categories[0] }[] = [];

    for (const category of categories) {
        for (const sub of category.subcategories) {
            const matchesName = sub.name.toLowerCase().includes(lowerQuery);
            const matchesTerms = sub.searchTerms.some((term) => term.toLowerCase().includes(lowerQuery));

            if (matchesName || matchesTerms) {
                results.push({ subcategory: sub, category });
            }
        }
    }

    return results;
}
