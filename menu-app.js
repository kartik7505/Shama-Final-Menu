/**
 * SHAMA DELUXE RESTAURANT - COMPLETE RESPONSIVE MENU ENGINE
 * Light Cream, Soft Gold, and Warm Brown Theme
 * 
 * Preserves authentic dishes, prices, portion sizes, restaurant details,
 * and integrates food reveal video player with accessible modal interactions.
 */

// Production Safe Error Boundaries
window.addEventListener('error', function(event) {
  console.warn('[Shama Production Trap] Handled UI Exception:', event.message);
});
window.addEventListener('unhandledrejection', function(event) {
  console.warn('[Shama Production Trap] Handled Promise Rejection:', event.reason);
});

// ==========================================================================
// 1. AUTHENTIC MENU DATA CATALOG
// ==========================================================================

const CATEGORIES = [
  {
    "id": "all",
    "name": "All Dishes",
    "icon": "✨"
  },
  {
    "id": "starters",
    "name": "Starters",
    "icon": "🍗"
  },
  {
    "id": "kababs",
    "name": "Kababs",
    "icon": "🍢"
  },
  {
    "id": "rice",
    "name": "Rice Specialities",
    "icon": "🍚"
  },
  {
    "id": "mocktails",
    "name": "Mocktails",
    "icon": "🍹"
  },
  {
    "id": "shakes",
    "name": "Shakes",
    "icon": "🧋"
  },
  {
    "id": "paneer",
    "name": "Paneer Dishes",
    "icon": "🧀"
  },
  {
    "id": "vegetables",
    "name": "Vegetables",
    "icon": "🥗"
  },
  {
    "id": "dal",
    "name": "Dal",
    "icon": "🥣"
  },
  {
    "id": "beverages",
    "name": "Beverages",
    "icon": "🥤"
  },
  {
    "id": "sundaes",
    "name": "Ice Cream Sundaes",
    "icon": "🍨"
  },
  {
    "id": "sweets",
    "name": "Sweets",
    "icon": "🍮"
  },
  {
    "id": "chicken-gravy",
    "name": "Chicken Gravy",
    "icon": "🍲"
  },
  {
    "id": "mutton-gravy",
    "name": "Mutton Gravy",
    "icon": "🍖"
  },
  {
    "id": "chinese",
    "name": "Chinese",
    "icon": "🥢"
  },
  {
    "id": "breads",
    "name": "Roti & Naan",
    "icon": "🫓"
  },
  {
    "id": "salad-raita",
    "name": "Salad & Raita",
    "icon": "🥒"
  }
];

const DISH_CATALOG = [
  {
    "id": "afghani-chicken",
    "name": "Afghani Chicken",
    "category": "starters",
    "diet": "non-veg",
    "badge": "Royal Tandoor",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 300
      },
      {
        "id": "full",
        "label": "Full",
        "price": 600
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Starters/Afghani Chicken.png",
    "description": "Tender chicken marinated in rich cashew cream, mild royal spices, and char-grilled to perfection.",
    "story": "Prepared in traditional charcoal clay tandoor using ancient Mughal-Afghan techniques.",
    "pairing": "Pairs best with Green Mint Chutney and Rumali Roti.",
    "video": "seperate videos/afghani chicken.mp4"
  },
  {
    "id": "chicken-tandoori",
    "name": "Chicken Tandoori",
    "category": "starters",
    "diet": "non-veg",
    "badge": "House Classic",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 200
      },
      {
        "id": "full",
        "label": "Full",
        "price": 400
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Starters/Chicken Tandoori.png",
    "description": "Classic bone-in chicken marinated in Kashmiri red chilies, thick curd, mustard oil, and roasted tandoori spices.",
    "story": "A Shama Deluxe favorite since 1998, smoked over slow red charcoal.",
    "pairing": "Enjoy with Onion Salad and fresh Butter Naan.",
    "video": "seperate videos/chicken tandoori.mp4"
  },
  {
    "id": "chicken-fry",
    "name": "Chicken Fry",
    "category": "starters",
    "diet": "non-veg",
    "badge": "Crispy Delight",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 200
      },
      {
        "id": "full",
        "label": "Full",
        "price": 400
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Starters/Chicken Fry.png",
    "description": "Golden crisp fried chicken seasoned with zesty house spices and chaat masala.",
    "story": "Double-fried for a crackling outer crust while keeping the meat juicy and tender.",
    "pairing": "Complements cold beverages and tangy mint dip.",
    "video": "seperate videos/chicken fry.mp4"
  },
  {
    "id": "chicken-tikka",
    "name": "Chicken Tikka",
    "category": "starters",
    "diet": "non-veg",
    "badge": "Clay Oven",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 250
      },
      {
        "id": "full",
        "label": "Full",
        "price": 500
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Starters/Chicken Tikka.png",
    "description": "Boneless chicken chunks marinated in spiced hung yogurt, skewered and roasted smoky in tandoor.",
    "story": "Hand-cut supreme chicken cubes infused with ginger-garlic essence.",
    "pairing": "Pairs wonderfully with Rumali Roti and lemon rings.",
    "video": "seperate videos/chicken tikka.mp4"
  },
  {
    "id": "chicken-malai-tikka",
    "name": "Chicken Malai Tikka",
    "category": "starters",
    "diet": "non-veg",
    "badge": "Melt-In-Mouth",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 300
      },
      {
        "id": "full",
        "label": "Full",
        "price": 600
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Starters/Chicken Malai Tikka.png",
    "description": "Creamy, silky chicken bites marinated in malai, cheese, cardamom, and subtle white spices.",
    "story": "A velvety delicacy adored by lovers of mild, aromatic Mughlai tandoor flavors.",
    "pairing": "Best paired with Butter Naan.",
    "video": "seperate videos/chicken malai tikka.mp4"
  },
  {
    "id": "chicken-butter-dip",
    "name": "Chicken Butter Dip",
    "category": "starters",
    "diet": "non-veg",
    "badge": "Rich & Savory",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 300
      },
      {
        "id": "full",
        "label": "Full",
        "price": 600
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Starters/Chicken Butter Dip.png",
    "description": "Succulent charcoal-grilled chicken skewers soaked in a sizzling dip of pure churned melted butter.",
    "story": "A legendary indulgence showcasing North Indian passion for pure desi makhan.",
    "pairing": "Superb with fresh Roomali Roti.",
    "video": "seperate videos/chicken butter dip.mp4"
  },
  {
    "id": "chicken-malai-roasted",
    "name": "Chicken Mala Roasted",
    "category": "starters",
    "diet": "non-veg",
    "badge": "Chef's Special",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 300
      },
      {
        "id": "full",
        "label": "Full",
        "price": 600
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Starters/Chicken Mala Roasted.png",
    "description": "Roasted tandoori chicken glazed with aromatic malai masala and slow-fired to golden perfection.",
    "story": "Combines the smoky roast of tandoor with rich clotted cream glaze.",
    "pairing": "Delicious with Garlic Naan.",
    "video": "seperate videos/chicken mala roasted.mp4"
  },
  {
    "id": "drums-of-heaven",
    "name": "Drums of Heaven",
    "category": "starters",
    "diet": "non-veg",
    "badge": "Popular",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 300
      },
      {
        "id": "full",
        "label": "Full",
        "price": 600
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Starters/Drums of Heaven.png",
    "description": "Crisp chicken wingettes tossed in sweet, spicy, and tangy Indo-Chinese garlic sauce.",
    "story": "An irresistible starter with bold crunch and vibrant oriental glazes.",
    "pairing": "Great companion to cold drinks and fried rice.",
    "video": "seperate videos/drums of heaven.mp4"
  },
  {
    "id": "mutton-burrah",
    "name": "Mutton Burrah",
    "category": "starters",
    "diet": "non-veg",
    "badge": "Royal Delicacy",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 350
      },
      {
        "id": "full",
        "label": "Full",
        "price": 700
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Starters/Mutton Burrah.png",
    "description": "Tender mutton ribs and chops double-marinated in malt vinegar and royal garam masala, flame-grilled on coal.",
    "story": "Ancestral Mughlai recipe handed down over generations for authentic smokiness.",
    "pairing": "Pairs exquisitely with Rumali Roti.",
    "video": "seperate videos/mutton burrah.mp4"
  },
  {
    "id": "chicken-stick",
    "name": "Chicken Stick",
    "category": "starters",
    "diet": "non-veg",
    "portions": [
      {
        "id": "standard",
        "label": "1 Stick",
        "price": 70
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Starters/Chicken Stick.png",
    "description": "Hand-threaded spiced chicken skewer fried crisp with golden breading.",
    "story": "Quick bite favorite popular for on-the-go Mughlai snacking.",
    "pairing": "Serve with spicy chutney.",
    "video": "seperate videos/chicken stick.mp4"
  },
  {
    "id": "pota-stick",
    "name": "Pota Stick",
    "category": "starters",
    "diet": "non-veg",
    "portions": [
      {
        "id": "standard",
        "label": "1 Stick",
        "price": 70
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Starters/Pota Stick.png",
    "description": "Seasoned and spiced pota skewers flash-fried with aromatic herbs.",
    "story": "Traditional countryside street starter loved for its distinctive texture and spices.",
    "pairing": "Goes with raw onion and lime.",
    "video": "seperate videos/pota stick.mp4"
  },
  {
    "id": "chicken-roll",
    "name": "Chicken Roll",
    "category": "starters",
    "diet": "non-veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 70
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Starters/Chicken Roll.png",
    "description": "Juicy shredded spiced chicken and crisp onions rolled inside a warm flatbread.",
    "story": "Street-style Kolkata & Mughlai roll wrapped hot with tangy sauces.",
    "pairing": "Perfect with fresh mint dip.",
    "video": "seperate videos/chicken roll.mp4"
  },
  {
    "id": "chicken-lollipop-wings",
    "name": "Chicken Lollipop & Wings",
    "category": "starters",
    "diet": "non-veg",
    "badge": "Crispy Hit",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 250
      },
      {
        "id": "full",
        "label": "Full",
        "price": 500
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Starters/Chicken Lollipop and Wings.png",
    "description": "Frenched chicken winglets tossed in fiery ginger-garlic sauce with crisp outer batter.",
    "story": "A restaurant best-seller loved by both young and old for its flavor punch.",
    "pairing": "Enjoy with Schezwan dip.",
    "video": "seperate videos/chicken lolipop.mp4"
  },
  {
    "id": "fish-fry",
    "name": "Fish Fry (only Winter)",
    "category": "starters",
    "diet": "non-veg",
    "badge": "Winter Special",
    "portions": [
      {
        "id": "seasonal",
        "label": "",
        "price": null
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Starters/Fish Fry.png",
    "description": "Seasonal fresh fish marinated with carom seeds (ajwain), lemon, and gram flour, deep fried crispy.",
    "story": "Special winter harvest freshwater fish prepared during northern cold months.",
    "pairing": "Tastes heavenly with green chutney."
  },
  {
    "id": "fish-fry-boneless",
    "name": "Fish Fry Boneless (only Winter)",
    "category": "starters",
    "diet": "non-veg",
    "badge": "Winter Special",
    "portions": [
      {
        "id": "per-kg",
        "label": "Per Kg",
        "price": 600
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Starters/Fish Fry Boneless.png",
    "description": "Delicate boneless fish fillets steeped in mustard paste and spices, batter fried to a golden crunch.",
    "story": "Boneless prime cuts crafted for a hassle-free seasonal seafood experience.",
    "pairing": "Complements Tartar sauce or spicy mint chutney."
  },
  {
    "id": "mutton-raan-starter",
    "name": "Mutton Raan* (Order Before 8 hours)",
    "category": "starters",
    "diet": "non-veg",
    "badge": "Order 8 Hrs Prior",
    "portions": [
      {
        "id": "full",
        "label": "Whole Leg",
        "price": 1500
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Starters/Mutton Raan.png",
    "description": "Whole leg of tender mutton marinated for 24 hours in saffron, papaya and spices, slow-roasted to fall-off-the-bone tenderness.",
    "story": "An imperial Mughal banquet showstopper prepared on advance order for royal gatherings.",
    "pairing": "Best savored with Shama Special Naan and Biryani.",
    "video": "seperate videos/mutton raan.mp4"
  },
  {
    "id": "chicken-kabab-roll",
    "name": "Chicken Kabab Roll",
    "category": "kababs",
    "diet": "non-veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 100
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Kababs/Chicken Kabab Roll.png",
    "description": "Tender chicken seekh kabab wrapped in soft paratha with zesty mint chutney and rings of onion.",
    "story": "Crafted on live tawa for an authentic, smoky handheld roll.",
    "pairing": "Serve with extra mint sauce.",
    "video": "seperate videos/chicken kabab roll.mp4"
  },
  {
    "id": "chicken-seekh-kabab",
    "name": "Chicken Seekh Kabab (4pc)",
    "category": "kababs",
    "diet": "non-veg",
    "badge": "Charcoal Skewer",
    "portions": [
      {
        "id": "standard",
        "label": "4 Pieces",
        "price": 160
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Kababs/Chicken Seekh Kabab (4pc).png",
    "description": "Finely minced chicken spiced with coriander, cumin, ginger, and green chilies, roasted on long metal skewers.",
    "story": "Clay tandoor smoked to retain all juices inside the minced meat.",
    "pairing": "Best with Butter Roti.",
    "video": "seperate videos/chicken seekh kabab.mp4"
  },
  {
    "id": "mutton-kabab-roll",
    "name": "Mutton Kabab Roll",
    "category": "kababs",
    "diet": "non-veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 120
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Kababs/Mutton Kabab Roll.png",
    "description": "Charcoal grilled mutton seekh kabab nestled in warm bread with lemon-spiced sliced onions.",
    "story": "Rich in flavor with juicy mutton textures in every single bite.",
    "pairing": "Great on the go.",
    "video": "seperate videos/mutton kabab roll.mp4"
  },
  {
    "id": "mutton-seekh-kabab",
    "name": "Mutton Seekh Kabab (4pc)",
    "category": "kababs",
    "diet": "non-veg",
    "badge": "Chef's Signature",
    "portions": [
      {
        "id": "standard",
        "label": "4 Pieces",
        "price": 200
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Kababs/Mutton Seekh Kabab (4pc).png",
    "description": "Premium minced mutton blended with ancestral Shama potli spices and charred to tender succulence.",
    "story": "A staple Mughlai recipe that has delighted guests in Haldwani since 1998.",
    "pairing": "Pairs with Rumali Roti.",
    "video": "seperate videos/mutton seekh kabab.mp4"
  },
  {
    "id": "chicken-malai-kabab",
    "name": "Chicken Malai Kabab",
    "category": "kababs",
    "diet": "non-veg",
    "badge": "Velvety Mild",
    "portions": [
      {
        "id": "standard",
        "label": "Standard Plate",
        "price": 250
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Kababs/Chicken Malai Kabab.png",
    "description": "Silken minced chicken patties infused with clotted dairy cream, mild cheese, and fragrant mace.",
    "story": "Designed for a delicate palate where creaminess and meat harmony take center stage.",
    "pairing": "Delicious with Garlic Naan.",
    "video": "seperate videos/chicken malai kabab.mp4"
  },
  {
    "id": "mutton-malai-kabab",
    "name": "Mutton Malai Kabab",
    "category": "kababs",
    "diet": "non-veg",
    "badge": "Rich & Royal",
    "portions": [
      {
        "id": "standard",
        "label": "Standard Plate",
        "price": 300
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Kababs/Mutton Malai Kabab.png",
    "description": "Ultra-fine minced mutton whipped with rich malai and saffron, char-grilled with utmost precision.",
    "story": "Melts softly on the tongue leaving notes of cardamom and ghee.",
    "pairing": "Enjoy with Shama Spl. Naan.",
    "video": "seperate videos/mutton malai kabab.mp4"
  },
  {
    "id": "shaami-kabab",
    "name": "Shaami Kabab",
    "category": "kababs",
    "diet": "non-veg",
    "portions": [
      {
        "id": "standard",
        "label": "1 Piece",
        "price": 40
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Kababs/Shaami Kabab.png",
    "description": "Traditional Awadhi pan-fried patty made with silky minced meat and chana dal simmered with whole spices.",
    "story": "Slow cooked till fiber-soft and browned on a flat heavy tawa.",
    "pairing": "Classic tea-time or starter companion.",
    "video": "seperate videos/shaami kabab.mp4"
  },
  {
    "id": "kali-mirch-chicken",
    "name": "Kali Mirch Chicken",
    "category": "chicken-gravy",
    "diet": "non-veg",
    "badge": "Peppery Signature",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 240
      },
      {
        "id": "full",
        "label": "Full",
        "price": 480
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Chicken-Gravy/Kali Mirch Chicken.png",
    "description": "Chicken steeped in freshly crushed Malabar black pepper, cashew paste, and aromatic light gravy.",
    "story": "A legendary dish famed for bold pepper warmth balanced by thick dairy cream.",
    "pairing": "Best with Butter Naan or Steamed Rice.",
    "video": "seperate videos/kali mirch chicken.mp4"
  },
  {
    "id": "butter-chicken",
    "name": "Butter Chicken",
    "category": "chicken-gravy",
    "diet": "non-veg",
    "badge": "All-Time Best Seller",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 250
      },
      {
        "id": "full",
        "label": "Full",
        "price": 500
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Chicken-Gravy/Butter Chicken.png",
    "description": "Tandoori chicken pieces simmered in silky tomato-butter gravy scented with kasuri methi and honey.",
    "story": "The iconic North Indian masterpiece, perfected over 25+ years in heavy copper handis.",
    "pairing": "Perfect with hot Garlic Naan or Rumali Roti.",
    "video": "seperate videos/butter chicken.mp4"
  },
  {
    "id": "changezi-chicken",
    "name": "Changezi Chicken",
    "category": "chicken-gravy",
    "diet": "non-veg",
    "badge": "Old Delhi Style",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 340
      },
      {
        "id": "full",
        "label": "Full",
        "price": 680
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Chicken-Gravy/Changezi Chicken.png",
    "description": "Roast chicken braised in a robust, tangy, and rich gravy of roasted onions, tomatoes, and milk curd.",
    "story": "Named after historic warrior tradition, loved for its deep crimson hue and intense spice aroma.",
    "pairing": "Pairs brilliantly with Tandoori Roti.",
    "video": "seperate videos/changezi chicken.mp4"
  },
  {
    "id": "akbari-chicken",
    "name": "Akbari Chicken",
    "category": "chicken-gravy",
    "diet": "non-veg",
    "badge": "Imperial Recipe",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 350
      },
      {
        "id": "full",
        "label": "Full",
        "price": 700
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Chicken-Gravy/Akbari Chicken.png",
    "description": "Royal Mughal gravy prepared with almonds, golden fried onions, saffron, and tender chicken morsels.",
    "story": "Refined court cuisine honoring Akbar the Great's grand feast kitchens.",
    "pairing": "Enjoy with Shama Spl. Naan.",
    "video": "seperate videos/akbari chicken.mp4"
  },
  {
    "id": "kadahi-chicken",
    "name": "Kadahi Chicken",
    "category": "chicken-gravy",
    "diet": "non-veg",
    "badge": "Wok Tossed",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 350
      },
      {
        "id": "full",
        "label": "Full",
        "price": 700
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Chicken-Gravy/Kadahi Chicken.png",
    "description": "Chicken wok-cooked with crunchy bell peppers, whole coriander seeds, dried red chilies, and onion cubes.",
    "story": "Sizzled in heavy cast iron kadhais to lock in smoky masala flavors.",
    "pairing": "Superb with Lacha Paratha.",
    "video": "seperate videos/kadhai chicken.mp4"
  },
  {
    "id": "chicken-aflatoon",
    "name": "Chicken Aflatoon",
    "category": "chicken-gravy",
    "diet": "non-veg",
    "badge": "Spicy Sensation",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 350
      },
      {
        "id": "full",
        "label": "Full",
        "price": 700
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Chicken-Gravy/Chicken Aflatoon.png",
    "description": "Fiery, robust chicken curry cooked with special crushed aromatic spices and thick roasted gravy.",
    "story": "A house creation designed for connoisseurs of deep, punchy northern flavors.",
    "pairing": "Pairs with Butter Roti.",
    "video": "seperate videos/chicken afatoon.mp4"
  },
  {
    "id": "chicken-badami",
    "name": "Chicken Badami",
    "category": "chicken-gravy",
    "diet": "non-veg",
    "badge": "Almond Cream",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 350
      },
      {
        "id": "full",
        "label": "Full",
        "price": 700
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Chicken-Gravy/Chicken Badami.png",
    "description": "Chicken simmered in rich sweet-savory almond puree, brown onions, and aromatic cardamom broth.",
    "story": "A luxurious nut-rich gravy traditionally reserved for festive gatherings.",
    "pairing": "Accompanies Plain Pulao or Naan.",
    "video": "seperate videos/chicken badami.mp4"
  },
  {
    "id": "chicken-korma",
    "name": "Chicken Korma",
    "category": "chicken-gravy",
    "diet": "non-veg",
    "badge": "Classic Mughlai",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 150
      },
      {
        "id": "full",
        "label": "Full",
        "price": 300
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Chicken-Gravy/Chicken Korma.png",
    "description": "Authentic slow-dum chicken korma with browned onions, whole spices, and fragrant kewra water.",
    "story": "Traditional Lucknowi and Rampuri style korma prepared with time-honored slow reduction.",
    "pairing": "Divine with Rumali Roti.",
    "video": "seperate videos/chicken korma.mp4"
  },
  {
    "id": "chicken-tikka-masala",
    "name": "Chicken Tikka Masala",
    "category": "chicken-gravy",
    "diet": "non-veg",
    "badge": "Smoky Curry",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 350
      },
      {
        "id": "full",
        "label": "Full",
        "price": 700
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Chicken-Gravy/Chicken Tikka Masala.png",
    "description": "Smoky char-grilled chicken tikka pieces folded into a spiced onion-tomato masala with fresh coriander.",
    "story": "The worldwide champion of British-Indian culinary crossover, done the royal way.",
    "pairing": "Delightful with Garlic Naan.",
    "video": "seperate videos/chicken tikka masala.mp4"
  },
  {
    "id": "chicken-palak",
    "name": "Chicken Palak",
    "category": "chicken-gravy",
    "diet": "non-veg",
    "badge": "Nutritious & Flavorful",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 250
      },
      {
        "id": "full",
        "label": "Full",
        "price": 500
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Chicken-Gravy/Chicken Palak.png",
    "description": "Fresh tender chicken simmered slowly in pureed garden spinach, garlic, and home-ground spices.",
    "story": "Nutritious and comforting, cooked with generous dollops of pure ghee.",
    "pairing": "Best paired with Missi Roti.",
    "video": "seperate videos/chicken palak.mp4"
  },
  {
    "id": "chicken-maharaja",
    "name": "Chicken Maharaja",
    "category": "chicken-gravy",
    "diet": "non-veg",
    "badge": "Grand Banquet",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 380
      },
      {
        "id": "full",
        "label": "Full",
        "price": 760
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Chicken-Gravy/Chicken Maharaja.png",
    "description": "Extravagant royal curry enriched with dried nuts, saffron, boiled egg, and succulent chicken cuts.",
    "story": "A feast dish crafted to make any dinner feel like a royal coronation.",
    "pairing": "Pairs with Stuff Naan.",
    "video": "seperate videos/chicken maharaja.mp4"
  },
  {
    "id": "chicken-be-nazeer",
    "name": "Chicken Be Nazeer",
    "category": "chicken-gravy",
    "diet": "non-veg",
    "badge": "Incomparable Taste",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 380
      },
      {
        "id": "full",
        "label": "Full",
        "price": 760
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Chicken-Gravy/Chicken Be Nazeer.png",
    "description": "True to its name ('Without Equal'), an exquisite chicken dish prepared with rare heritage spices.",
    "story": "An exclusive chef's creation blending sweet, tangy, and smoky spice layers.",
    "pairing": "Enjoy with Butter Naan.",
    "video": "seperate videos/chicken be nazeer.mp4"
  },
  {
    "id": "special-tawa-chicken",
    "name": "Special Tawa Chicken",
    "category": "chicken-gravy",
    "diet": "non-veg",
    "badge": "Live Tawa Special",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 350
      },
      {
        "id": "full",
        "label": "Full",
        "price": 700
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Chicken-Gravy/Special Tawa Chicken.png",
    "description": "Juicy chicken roasted live on a heavy concave tawa with crushed green chilies, tomatoes, and ginger juliennes.",
    "story": "Cooked at high heat to concentrate natural flavors into a semi-dry, clinging masala.",
    "pairing": "Best with Rumali Roti.",
    "video": "seperate videos/special tawa chicken.mp4"
  },
  {
    "id": "murg-musallam",
    "name": "Murg Musallam* (order Before 8 Hours)",
    "category": "chicken-gravy",
    "diet": "non-veg",
    "badge": "Order 8 Hrs Prior",
    "portions": [
      {
        "id": "full",
        "label": "Whole Chicken",
        "price": 1400
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Chicken-Gravy/Murg Musallam.png",
    "description": "Whole chicken stuffed with spiced boiled eggs and minced meat, slow-simmered in royal saffron-almond gravy.",
    "story": "Crown jewel of medieval Awadhi royal banquets, cooked on slow 'dum' over embers.",
    "pairing": "Serves an entire family with Biryani and Naans.",
    "video": "seperate videos/murg musallam.mp4"
  },
  {
    "id": "mutton-stew",
    "name": "Mutton Stew",
    "category": "mutton-gravy",
    "diet": "non-veg",
    "badge": "Whole Spices",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 250
      },
      {
        "id": "full",
        "label": "Full",
        "price": 500
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Mutton-Gravy/Mutton Stew.png",
    "description": "Tender goat meat slow braised with whole black pepper, cloves, dried red chilies, and sweet sliced onions.",
    "story": "Cooked without ground powders to let whole whole-spice botanicals perfume the meat naturally.",
    "pairing": "Outstanding with hot Rumali Roti.",
    "video": "seperate videos/mutton stew.mp4"
  },
  {
    "id": "mutton-korma",
    "name": "Mutton Korma",
    "category": "mutton-gravy",
    "diet": "non-veg",
    "badge": "Heritage Royal",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 250
      },
      {
        "id": "full",
        "label": "Full",
        "price": 500
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Mutton-Gravy/Mutton Korma.png",
    "description": "Slow-simmered mutton pieces in aromatic brown onion gravy with yogurt, mace, and green cardamom.",
    "story": "Our flagship mutton curry, prepared since 1998 in heavy traditional handis.",
    "pairing": "Heavenly with Butter Naan or Khamiri Roti.",
    "video": "seperate videos/mutton korma.mp4"
  },
  {
    "id": "mutton-keema",
    "name": "Mutton Keema",
    "category": "mutton-gravy",
    "diet": "non-veg",
    "badge": "Minced Richness",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 250
      },
      {
        "id": "full",
        "label": "Full",
        "price": 500
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Mutton-Gravy/Mutton Keema.png",
    "description": "Hand-minced mutton simmered with onions, green peas, garlic, and robust Mughlai masalas.",
    "story": "A comforting northern classic cooked till the oil separates and glistens.",
    "pairing": "Delicious with Tandoori Roti or Pav.",
    "video": "seperate videos/mutton keema.mp4"
  },
  {
    "id": "mutton-palak-gosht",
    "name": "Mutton Palak Gosht",
    "category": "mutton-gravy",
    "diet": "non-veg",
    "badge": "Classic Combination",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 300
      },
      {
        "id": "full",
        "label": "Full",
        "price": 600
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Mutton-Gravy/Mutton Palak Gosht.png",
    "description": "Tender mutton chunks slow-cooked with fresh puréed spinach, garlic, ginger, and aromatic desi ghee.",
    "story": "A nutritious, time-honored winter preparation that warms the soul.",
    "pairing": "Best paired with Missi Roti or Rice.",
    "video": "seperate videos/mutton palak gosht.mp4"
  },
  {
    "id": "mutton-rara",
    "name": "Mutton Rara",
    "category": "mutton-gravy",
    "diet": "non-veg",
    "badge": "Double Meat Treat",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 320
      },
      {
        "id": "full",
        "label": "Full",
        "price": 640
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Mutton-Gravy/Mutton Rara.png",
    "description": "Tender bone-in mutton pieces cooked in a rich, spicy gravy made with seasoned minced mutton (keema).",
    "story": "Famous Punjabi-Mughlai marriage offering two distinct mutton textures in every spoonful.",
    "pairing": "Goes wonderfully with Garlic Naan.",
    "video": "seperate videos/mutton rara.mp4"
  },
  {
    "id": "mutton-kadai",
    "name": "Mutton Kadai",
    "category": "mutton-gravy",
    "diet": "non-veg",
    "badge": "Wok Cooked",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 320
      },
      {
        "id": "full",
        "label": "Full",
        "price": 640
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Mutton-Gravy/Mutton Kadai.png",
    "description": "Mutton cooked with crushed coriander seeds, capsicum, tomatoes, and fiery red chili flakes in an iron wok.",
    "story": "Tossed over raging flames to produce a thick, coating masala.",
    "pairing": "Pairs with Lacha Paratha.",
    "video": "seperate videos/mutton kadai.mp4"
  },
  {
    "id": "mutton-kaleji",
    "name": "Mutton Kaleji",
    "category": "mutton-gravy",
    "diet": "non-veg",
    "badge": "Delicacy",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 250
      },
      {
        "id": "full",
        "label": "Full",
        "price": 500
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Mutton-Gravy/Mutton Kaleji.png",
    "description": "Tender mutton liver pieces sautéed with roasted spices, green chilies, and onion-tomato gravy.",
    "story": "Flash-cooked at high heat so the liver remains buttery soft and tender.",
    "pairing": "Best with hot Rumali Roti.",
    "video": "seperate videos/mutton kalezi.mp4"
  },
  {
    "id": "mutton-keema-kaleji",
    "name": "Mutton Keema Kaleji",
    "category": "mutton-gravy",
    "diet": "non-veg",
    "badge": "Gourmet Specialty",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 250
      },
      {
        "id": "full",
        "label": "Full",
        "price": 500
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Mutton-Gravy/Mutton Keema Kaleji.png",
    "description": "A harmonious combination of minced mutton and succulent liver cubes braised with ground spices.",
    "story": "A beloved Old Delhi delicacy made famous by royal bazaar street stalls.",
    "pairing": "Enjoy with Tandoori Butter Roti.",
    "video": "seperate videos/mutton keema kalezi.mp4"
  },
  {
    "id": "chilly-paneer",
    "name": "Chilly Paneer",
    "category": "chinese",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 250
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Chinese/Chilly Paneer.png",
    "description": "Crispy fried cottage cheese cubes tossed with bell peppers, onions, soy sauce, and green chilies.",
    "story": "A vibrant Indo-Chinese classic made with fresh dairy paneer.",
    "pairing": "Great with Veg Fried Rice.",
    "video": "seperate videos/chilly paneer.mp4"
  },
  {
    "id": "veg-fried-rice",
    "name": "Veg Fried Rice",
    "category": "chinese",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 200
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Chinese/Veg Fried Rice.png",
    "description": "Wok-tossed long grain basmati rice with finely chopped carrots, beans, spring onions, and oriental spices.",
    "story": "Prepared on high fire with smoky wok hei flavor.",
    "pairing": "Pairs with Chilly Paneer or Manchurian.",
    "video": "seperate videos/veg fried rice.mp4"
  },
  {
    "id": "chilly-chicken",
    "name": "Chilly Chicken",
    "category": "chinese",
    "diet": "non-veg",
    "badge": "Crowd Favorite",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 250
      },
      {
        "id": "full",
        "label": "Full",
        "price": 500
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Chinese/Chilly Chicken.png",
    "description": "Golden fried chicken chunks tossed in dark soy sauce, hot green chilies, garlic, and crisp bell peppers.",
    "story": "The quintessential Indian-Chinese fusion staple with an irresistible umami kick.",
    "pairing": "Best with Chicken Fried Rice.",
    "video": "seperate videos/chilly chicken.mp4"
  },
  {
    "id": "chicken-fried-rice",
    "name": "Chicken Fried Rice",
    "category": "chinese",
    "diet": "non-veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 250
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Chinese/Chicken Fried Rice.png",
    "description": "Fragrant basmati rice wok-tossed with egg, shredded chicken pieces, and scallions in light seasoning.",
    "story": "A balanced, satisfying meal with aromatic grains and tender chicken.",
    "pairing": "Accompanies Chilly Chicken.",
    "video": "seperate videos/chicken fried rice.mp4"
  },
  {
    "id": "shahi-paneer",
    "name": "Shahi Paneer",
    "category": "paneer",
    "diet": "veg",
    "badge": "Mughlai Royalty",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 250
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Shahi Paneer.png",
    "description": "Soft cottage cheese cubes cooked in a velvety tomato, cashew, and cream gravy with gentle spices.",
    "story": "A regal vegetarian centerpiece beloved across North Indian homes.",
    "pairing": "Superb with Butter Naan.",
    "video": "seperate videos/shahi paneer.mp4"
  },
  {
    "id": "kadhai-paneer",
    "name": "Kadhai Paneer",
    "category": "paneer",
    "diet": "veg",
    "badge": "Spiced Wok",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 250
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Kadhai Paneer.png",
    "description": "Cottage cheese wok-tossed with freshly pounded kadhai masala, capsicum, and thick onion gravy.",
    "story": "Packed with crunchy bell peppers and aromatic roasted coriander seeds.",
    "pairing": "Pairs with Lacha Paratha.",
    "video": "seperate videos/kadhai paneer.mp4"
  },
  {
    "id": "handi-paneer",
    "name": "Handi Paneer",
    "category": "paneer",
    "diet": "veg",
    "badge": "Clay Cooked",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 250
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Handi Paneer.png",
    "description": "Fresh paneer slow-cooked in a sealed earthen handi with rich onion-tomato sauce and royal herbs.",
    "story": "The earthen pot imparts an authentic rustic aroma to the rich dairy gravy.",
    "pairing": "Best with Rumali Roti.",
    "video": "seperate videos/handi paneer.mp4"
  },
  {
    "id": "matar-paneer",
    "name": "Matar Paneer",
    "category": "paneer",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 250
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Matar Paneer.png",
    "description": "Tender green peas and soft paneer cubes cooked in a homestyle spiced tomato-onion curry.",
    "story": "Timeless North Indian comfort food cooked with warmth and simple spices.",
    "pairing": "Great with Tandoori Roti or Zeera Rice.",
    "video": "seperate videos/matar paneer.mp4"
  },
  {
    "id": "palak-paneer",
    "name": "Palak Paneer",
    "category": "paneer",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 250
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Palak Paneer.png",
    "description": "Fresh cottage cheese bathed in vibrant green spinach purée tempered with garlic, ginger, and cumin.",
    "story": "Nutritious and delicious, finished with a hint of fresh dairy cream.",
    "pairing": "Pairs with Missi Roti.",
    "video": "seperate videos/palak paneer.mp4"
  },
  {
    "id": "khoya-paneer",
    "name": "Khoya Paneer",
    "category": "paneer",
    "diet": "veg",
    "badge": "Royal Richness",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 250
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Khoya Paneer.png",
    "description": "Soft paneer in a luxurious gravy made with reduced mawa (khoya), cashew cream, and cardamom.",
    "story": "A celebratory Awadhi wedding feast creation with subtle sweetness and unmatched richness.",
    "pairing": "Delicious with Shama Spl. Naan.",
    "video": "seperate videos/khoya paneer.mp4"
  },
  {
    "id": "paneer-lababdar",
    "name": "Paneer Lababdar",
    "category": "paneer",
    "diet": "veg",
    "badge": "Creamy Texture",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 250
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Paneer Lababdar.png",
    "description": "Paneer cubes and grated paneer folded into a luscious tomato-onion gravy seasoned with kasuri methi.",
    "story": "The double texture of grated and cubed paneer gives it a signature rich mouthfeel.",
    "pairing": "Pairs with Garlic Naan.",
    "video": "seperate videos/paneer lababdar.mp4"
  },
  {
    "id": "paneer-bhujia",
    "name": "Paneer Bhujia",
    "category": "paneer",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 250
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Paneer Bhujia.png",
    "description": "Freshly crumbled cottage cheese tossed on tawa with onions, green chilies, tomatoes, and cumin.",
    "story": "Quick, savory, and homestyle scrambled paneer cooked in pure desi ghee.",
    "pairing": "Enjoy with hot Butter Roti.",
    "video": "seperate videos/paneer bhujiya.mp4"
  },
  {
    "id": "shama-spl-stuff-paneer",
    "name": "Shama Spl. Stuff Paneer",
    "category": "paneer",
    "diet": "veg",
    "badge": "House Specialty",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 250
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Shama Spl. Stuff Paneer.png",
    "description": "Handcrafted paneer sandwiches stuffed with spiced nuts and khoya, simmered in a royal saffron sauce.",
    "story": "Our chef's signature vegetarian masterpiece developed exclusively for Shama Deluxe.",
    "pairing": "Best paired with Butter Naan.",
    "video": "seperate videos/shama spl. stuff paneer.mp4"
  },
  {
    "id": "mushroom-paneer",
    "name": "Mushroom Paneer",
    "category": "paneer",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 250
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Mushroom Paneer.png",
    "description": "Fresh button mushrooms and soft paneer cooked together in an aromatic spiced gravy.",
    "story": "Combines earthy mushrooms with tender dairy paneer for deep savory flavor.",
    "pairing": "Pairs with Lacha Paratha.",
    "video": "seperate videos/mushroom paneer.mp4"
  },
  {
    "id": "paneer-tikka-dry",
    "name": "Paneer Tikka Dry",
    "category": "paneer",
    "diet": "veg",
    "badge": "Tandoori Grill",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 300
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Paneer Tikka Dry.png",
    "description": "Chunky paneer cubes skewered with bell peppers and onions, marinated in tandoori masala and charred smoky.",
    "story": "The indisputable king of vegetarian tandoori starters.",
    "pairing": "Serve with Green Chutney and Onion rings.",
    "video": "seperate videos/paneer tikka dry.mp4"
  },
  {
    "id": "paneer-tikka-masala",
    "name": "Paneer Tikka Masala",
    "category": "paneer",
    "diet": "veg",
    "badge": "Smoky Gravy",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 280
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Paneer Tikka Masala.png",
    "description": "Charcoal grilled paneer tikka cubes bathed in a flavorful, spiced onion-tomato butter gravy.",
    "story": "Smoky edges of grilled paneer infused with velvety rich gravy.",
    "pairing": "Superb with Garlic Naan.",
    "video": "seperate videos/paneer tikka masala.mp4"
  },
  {
    "id": "kali-mirch-paneer",
    "name": "Kali Mirch Paneer",
    "category": "paneer",
    "diet": "veg",
    "badge": "Black Pepper",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 280
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Kali Mirch Paneer.png",
    "description": "Cottage cheese pieces in a velvety white cashew-cream sauce seasoned with freshly cracked black peppercorns.",
    "story": "An elegant, aromatic curry where black pepper gives a tingling aromatic kick without chili fire.",
    "pairing": "Pairs with Butter Roti.",
    "video": "seperate videos/kali mirch paneer.mp4"
  },
  {
    "id": "paneer-butter-masala",
    "name": "Paneer Butter Masala",
    "category": "paneer",
    "diet": "veg",
    "badge": "Popular Classic",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 250
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Paneer Butter Masala.png",
    "description": "Paneer cubes bathed in a mild, buttery, sweet and creamy tomato gravy with fenugreek leaves.",
    "story": "A beloved staple throughout India with silky texture and gentle warmth.",
    "pairing": "Delightful with Butter Naan.",
    "video": "seperate videos/paneer butter masala.mp4"
  },
  {
    "id": "paneer-angara",
    "name": "Paneer Angara",
    "category": "paneer",
    "diet": "veg",
    "badge": "Smoky Charcoal",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 280
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Paneer Angara.png",
    "description": "Smoky, spicy paneer curry infused with live coal smoke (dhungar) and coarse red spices.",
    "story": "Prepared with traditional smoke-infusion to give an authentic campfire aroma.",
    "pairing": "Best with Tandoori Roti.",
    "video": "seperate videos/paneer angara.mp4"
  },
  {
    "id": "mix-vegetable",
    "name": "Mix Vegetable",
    "category": "vegetables",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 200
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Mix Vegetable.png",
    "description": "Medley of seasonal cauliflower, carrots, beans, peas, and potatoes cooked in fragrant masala.",
    "story": "Homestyle vegetable curry packed with color, nutrition, and vibrant spices.",
    "pairing": "Enjoy with hot Tandoori Roti.",
    "video": "seperate videos/mix vegetable.mp4"
  },
  {
    "id": "aloo-gobhi",
    "name": "Aloo Gobhi",
    "category": "vegetables",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 180
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Aloo Gobhi.png",
    "description": "Golden potatoes and cauliflower florets sautéed with ginger, turmeric, and roasted cumin.",
    "story": "The quintessential North Indian home favorite cooked till fork-tender.",
    "pairing": "Pairs with Butter Roti.",
    "video": "seperate videos/aaloo gobhi.mp4"
  },
  {
    "id": "navrattan-korma",
    "name": "Navrattan Korma",
    "category": "vegetables",
    "diet": "veg",
    "badge": "Nine Jewels",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 250
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Navarattan Korma.png",
    "description": "Nine vegetable gems and dry fruits simmered in a mildly sweet, rich cashew and cream gravy.",
    "story": "An imperial Mughal creation representing Emperor Akbar's nine royal courtiers (Navratnas).",
    "pairing": "Delicious with Butter Naan.",
    "video": "seperate videos/navrattan korma.mp4"
  },
  {
    "id": "mushroom-masala",
    "name": "Mushroom Masala",
    "category": "vegetables",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 250
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Mushroom Masala.png",
    "description": "Plump button mushrooms cooked in a semi-dry onion, tomato, and ground garam masala gravy.",
    "story": "Earthy mushrooms absorb the deep flavors of slow-roasted spices.",
    "pairing": "Superb with Lacha Paratha.",
    "video": "seperate videos/mushroom masala.mp4"
  },
  {
    "id": "matar-mushroom",
    "name": "Matar Mushroom",
    "category": "vegetables",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 250
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Matar Mushroom.png",
    "description": "Green peas and fresh mushrooms in a hearty spiced gravy finished with coriander and ginger.",
    "story": "A classic North Indian pairing offering sweet pea burst and savory mushroom bite.",
    "pairing": "Great with Plain Naan.",
    "video": "seperate videos/matar mushroom.mp4"
  },
  {
    "id": "aloo-matar",
    "name": "Aloo Matar",
    "category": "vegetables",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 200
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Aloo Matar.png",
    "description": "Tender potatoes and sweet green peas simmered in a spiced cumin and tomato curry broth.",
    "story": "Comfort food that evokes warm memories of home kitchens across Uttarakhand.",
    "pairing": "Best with Tandoori Roti.",
    "video": "seperate videos/aloo matar.mp4"
  },
  {
    "id": "aloo-palak",
    "name": "Aloo Palak",
    "category": "vegetables",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 200
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Aloo Palak.png",
    "description": "Cubed potatoes gently braised in a pureed fresh spinach gravy with roasted garlic cloves.",
    "story": "Nutritious and wholesome, rich in iron and aromatic desi spices.",
    "pairing": "Pairs with Missi Roti.",
    "video": "seperate videos/aloo palak.mp4"
  },
  {
    "id": "aloo-zeera",
    "name": "Aloo Zeera",
    "category": "vegetables",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 180
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Aloo Zeera.png",
    "description": "Baby potatoes sautéed with toasted cumin seeds, fresh coriander, turmeric, and dry mango powder.",
    "story": "Crisp outer crust with soft potato core, bursting with cumin aroma.",
    "pairing": "Ideal side with Dal Tadka and Roti.",
    "video": "seperate videos/aloo zeera.mp4"
  },
  {
    "id": "chana-masala",
    "name": "Chana Masala",
    "category": "vegetables",
    "diet": "veg",
    "badge": "Peshawari Spiced",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 150
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Chana Masala.png",
    "description": "Chickpeas simmered in an aromatic dark tea-spice broth with pomegranate seeds and ginger juliennes.",
    "story": "Authentic Punjabi style chole with deep flavor, tangy notes, and rich masala gravy.",
    "pairing": "Pairs with Stuff Naan or Rice.",
    "video": "seperate videos/chana masala.mp4"
  },
  {
    "id": "malai-kofta",
    "name": "Malai Kofta",
    "category": "vegetables",
    "diet": "veg",
    "badge": "Mughlai Classic",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 250
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Malai Kofta.png",
    "description": "Crispy fried dumplings of paneer and khoya stuffed with raisins, served in a rich cashew-cream sauce.",
    "story": "Royalty on a platter: the koftas dissolve instantly on the tongue.",
    "pairing": "Pairs exquisitely with Butter Naan.",
    "video": "seperate videos/malai kofta.mp4"
  },
  {
    "id": "dal-ghee",
    "name": "Dal Ghee",
    "category": "dal",
    "diet": "veg",
    "badge": "Pure Ghee Tadka",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 200
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Dal Ghee.png",
    "description": "Yellow lentils tempered generously with sizzling pure desi cow ghee, cumin, garlic, and red chilies.",
    "story": "Simple, nourishing, and rich with the unmistakable aroma of hot clarified butter.",
    "pairing": "Divine with Plain Rice and Papad.",
    "video": "seperate videos/dal ghee.mp4"
  },
  {
    "id": "dal-makhni",
    "name": "Dal Makhni",
    "category": "dal",
    "diet": "veg",
    "badge": "Overnight Dum",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 150
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Dal Makhni.png",
    "description": "Whole black urad lentils and kidney beans slow-simmered overnight over charcoal with butter and cream.",
    "story": "Slow cooked for 12+ hours to achieve an incomparably creamy, velvety texture.",
    "pairing": "Best paired with Garlic Naan or Jeera Rice.",
    "video": "seperate videos/dal makhni.mp4"
  },
  {
    "id": "dal-fry",
    "name": "Dal Fry",
    "category": "dal",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 120
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Dal Fry.png",
    "description": "Golden toor dal fried with onions, tomatoes, green chilies, and fresh coriander leaves.",
    "story": "Dhaba style comforting yellow dal with punchy tadka flavors.",
    "pairing": "Perfect with Tandoori Roti.",
    "video": "seperate videos/dal fry.mp4"
  },
  {
    "id": "dal-tadka",
    "name": "Dal Tadka",
    "category": "dal",
    "diet": "veg",
    "badge": "Aromatic Tempering",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 150
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Vegetarian/Dal Tadka.png",
    "description": "Creamy yellow dal topped with an aromatic sizzle of roasted garlic, cumin, and Kashmiri dry red chilies.",
    "story": "Tempered right before serving so the crackling spices release maximum aroma.",
    "pairing": "Complements Zeera Rice and Butter Roti.",
    "video": "seperate videos/dal tadka.mp4"
  },
  {
    "id": "rumali-roti",
    "name": "Rumali Roti",
    "category": "breads",
    "diet": "veg",
    "badge": "Handkerchief Thin",
    "portions": [
      {
        "id": "standard",
        "label": "1 Pc",
        "price": 14
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Breads/Rumali Roti.png",
    "description": "Ultra-thin, soft, and handkerchief-like flatbread tossed in the air and baked on an inverted heated dome.",
    "story": "Mughal court specialty crafted by master bakers with dexterous aerial hand tosses.",
    "pairing": "The quintessential bread for Korma, Kebabs, and Handi gravies.",
    "video": "seperate videos/rumali roti.mp4"
  },
  {
    "id": "tandoori-roti",
    "name": "Tandoori Roti",
    "category": "breads",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "1 Pc",
        "price": 12
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Breads/Tandoori Roti.png",
    "description": "Wholesome whole wheat flatbread baked crisp inside the clay tandoor oven.",
    "story": "Earthy, wholesome, and baked fresh against hot clay walls.",
    "pairing": "Goes with any curry.",
    "video": "seperate videos/tandoori roti.mp4"
  },
  {
    "id": "butter-roti",
    "name": "Butter Roti",
    "category": "breads",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "1 Pc",
        "price": 20
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Breads/Butter Roti.png",
    "description": "Freshly baked clay oven whole-wheat roti brushed generously with pure butter.",
    "story": "Soft, flaky, and rich with molten butter gloss.",
    "pairing": "Pairs with Dal Makhni and gravies.",
    "video": "seperate videos/butter roti.mp4"
  },
  {
    "id": "missi-roti",
    "name": "Missi Roti",
    "category": "breads",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "1 Pc",
        "price": 30
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Breads/Missi Roti.png",
    "description": "Gram flour (besan) and wheat bread spiced with ajwain, onions, and kasuri methi, roasted in tandoor.",
    "story": "Traditional Rajasthani-Punjabi flatbread known for its nutty flavor and wholesome crunch.",
    "pairing": "Superb with Palak dishes and Dal Ghee.",
    "video": "seperate videos/missi roti.mp4"
  },
  {
    "id": "butter-naan",
    "name": "Butter Naan",
    "category": "breads",
    "diet": "veg",
    "badge": "Popular Favorite",
    "portions": [
      {
        "id": "standard",
        "label": "1 Pc",
        "price": 35
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Breads/Butter Naan.png",
    "description": "Pillowy soft leavened refined flour bread baked in tandoor and slathered with melted butter.",
    "story": "Light, stretchy, and baked to golden blistering in charcoal heat.",
    "pairing": "Ideal partner for Butter Chicken and Shahi Paneer.",
    "video": "seperate videos/butter naan.mp4"
  },
  {
    "id": "stuff-naan",
    "name": "Stuff Naan",
    "category": "breads",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "1 Pc",
        "price": 50
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Breads/Stuff Naan.png",
    "description": "Naan stuffed with a savory filling of spiced mashed potatoes, onions, and herbs.",
    "story": "Hearty and flavorful enough to enjoy on its own or with raita.",
    "pairing": "Enjoy with Chana Masala.",
    "video": "seperate videos/stuff naan.mp4"
  },
  {
    "id": "plain-naan",
    "name": "Plain Naan",
    "category": "breads",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "1 Pc",
        "price": 30
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Breads/Plain Naan.png",
    "description": "Classic soft tandoori naan baked without butter for a lighter bite.",
    "story": "Golden blistered on the outside, fluffy and tender within.",
    "pairing": "Great with rich curries.",
    "video": "seperate videos/plain naan.mp4"
  },
  {
    "id": "shama-spl-naan",
    "name": "Shama Spl. Naan",
    "category": "breads",
    "diet": "veg",
    "badge": "House Special",
    "portions": [
      {
        "id": "standard",
        "label": "1 Pc",
        "price": 70
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Breads/Shama Spl. Naan.png",
    "description": "Gourmet naan stuffed with cottage cheese, dry fruits, and aromatic herbs, glazed with butter.",
    "story": "A lavish celebration bread made to elevate your dining experience.",
    "pairing": "Pairs with Akbari Chicken or Navrattan Korma.",
    "video": "seperate videos/shama spl. naan.mp4"
  },
  {
    "id": "lacha-paratha",
    "name": "Lacha Paratha",
    "category": "breads",
    "diet": "veg",
    "badge": "Multi-Layered",
    "portions": [
      {
        "id": "standard",
        "label": "1 Pc",
        "price": 30
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Breads/Lacha Paratha.png",
    "description": "Multi-layered spiraled whole wheat bread cooked in tandoor with crispy, flaky rings.",
    "story": "Folded and rolled repeatedly to create distinct buttery layers.",
    "pairing": "Superb with Kadhai dishes.",
    "video": "seperate videos/lacha paratha.mp4"
  },
  {
    "id": "stuff-paratha",
    "name": "Stuff Paratha",
    "category": "breads",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "1 Pc",
        "price": 70
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Breads/Stuff Paratha.png",
    "description": "Crispy tandoori paratha loaded with spiced seasonal vegetable stuffing.",
    "story": "Wholesome, filling, and packed with traditional herbs.",
    "pairing": "Serve with curd or pickle.",
    "video": "seperate videos/stuff paratha.mp4"
  },
  {
    "id": "garlic-naan",
    "name": "Garlic Naan",
    "category": "breads",
    "diet": "veg",
    "badge": "Aromatic Hit",
    "portions": [
      {
        "id": "standard",
        "label": "1 Pc",
        "price": 50
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Breads/Garlic Naan.png",
    "description": "Soft naan topped with minced fresh garlic, coriander leaves, and brushed with hot butter.",
    "story": "The fragrant roasted garlic aroma wafts as soon as it exits the tandoor.",
    "pairing": "The ultimate pairing for Butter Chicken & Dal Makhni.",
    "video": "seperate videos/garlic naan.mp4"
  },
  {
    "id": "paneer-paratha",
    "name": "Paneer Paratha",
    "category": "breads",
    "diet": "veg",
    "badge": "Stuffed Cottage Cheese",
    "portions": [
      {
        "id": "standard",
        "label": "1 Pc",
        "price": 80
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Breads/Paneer Paratha.png",
    "description": "Golden tandoori paratha stuffed generously with seasoned grated cottage cheese and green chilies.",
    "story": "A royal breakfast and dinner bread beloved for its luscious paneer interior.",
    "pairing": "Tastes great with Mix Raita.",
    "video": "seperate videos/paneer paratha.mp4"
  },
  {
    "id": "green-salad",
    "name": "Green Salad",
    "category": "salad-raita",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 30
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Salads-Raitas-Papads/Green Salad.png",
    "description": "Crisp sliced cucumbers, red onions, tomatoes, and carrots served with fresh lemon wedges.",
    "story": "Fresh garden produce sliced fresh to cleanse the palate between rich bites.",
    "pairing": "Essential companion to biryanis and kebabs.",
    "video": "seperate videos/green salad.mp4"
  },
  {
    "id": "boondi-raita",
    "name": "Boondi Raita",
    "category": "salad-raita",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 90
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Salads-Raitas-Papads/Boondi Raita.png",
    "description": "Whipped chilled curd blended with crispy chickpea flour boondi pearls, roasted cumin, and black salt.",
    "story": "Cooling and refreshing, providing the perfect counterpoint to spicy gravies.",
    "pairing": "Pairs with Biryani and Pulao.",
    "video": "seperate videos/boondi raita.mp4"
  },
  {
    "id": "mix-raita",
    "name": "Mix Raita",
    "category": "salad-raita",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 100
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Salads-Raitas-Papads/Mix Raita.png",
    "description": "Chilled yogurt mixed with finely diced onions, cucumbers, tomatoes, and roasted spices.",
    "story": "Crisp vegetable crunch combined with smooth, creamy yogurt.",
    "pairing": "Complements rich mutton curries.",
    "video": "seperate videos/mix raita.mp4"
  },
  {
    "id": "fruit-cocktail-raita",
    "name": "Fruit Cocktail Raita",
    "category": "salad-raita",
    "diet": "veg",
    "badge": "Sweet & Tangy",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 120
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Salads-Raitas-Papads/Fruit Cocktail Raita.png",
    "description": "Creamy sweetened yogurt infused with diced seasonal fruits, pineapple, and pomegranate seeds.",
    "story": "A royal banquet side that doubles up as a delightful palate refresher.",
    "pairing": "Great with spicy tandoori starters.",
    "video": "seperate videos/fruit cocktail raita.mp4"
  },
  {
    "id": "pineapple-raita",
    "name": "Pine Apple Raita",
    "category": "salad-raita",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 120
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Salads-Raitas-Papads/Pine Apple Raita.png",
    "description": "Succulent pineapple tidbits folded in chilled sweet and mildly spiced curd.",
    "story": "Tropical sweetness meets traditional probiotic yogurt.",
    "pairing": "Pairs with Royal Biryani.",
    "video": "seperate videos/pineapple raita.mp4"
  },
  {
    "id": "plain-curd",
    "name": "Plain Curd",
    "category": "salad-raita",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 60
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Salads-Raitas-Papads/Plain Curd.png",
    "description": "Freshly set, wholesome thick dairy yogurt served chilled.",
    "story": "Natural probiotic nourishment to complete your meal.",
    "pairing": "Pairs with stuffed parathas.",
    "video": "seperate videos/plain curd.mp4"
  },
  {
    "id": "papad-fry",
    "name": "Papad Fry",
    "category": "salad-raita",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "1 Pc",
        "price": 25
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Salads-Raitas-Papads/Papad Fry.png",
    "description": "Crisp golden deep-fried spiced urad dal papad.",
    "story": "Delivers that essential crunch to every Indian dining spread.",
    "pairing": "Great with Dal Chawal.",
    "video": "seperate videos/papad fry.mp4"
  },
  {
    "id": "papad-dry",
    "name": "Papad Dry",
    "category": "salad-raita",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "1 Pc",
        "price": 15
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Salads-Raitas-Papads/Papad Dry.png",
    "description": "Lightly fire-roasted dry papad with smoky blisters and no oil.",
    "story": "Guilt-free crunch roasted directly over live coals.",
    "pairing": "Goes with any meal.",
    "video": "seperate videos/papad dry.mp4"
  },
  {
    "id": "masala-papad",
    "name": "Masala Papad",
    "category": "salad-raita",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "1 Pc",
        "price": 50
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Salads-Raitas-Papads/Masala Papad.png",
    "description": "Crispy roasted papad loaded with tangy diced onions, tomatoes, green chilies, chaat masala, and fresh coriander.",
    "story": "The ultimate restaurant appetizer before your meal arrives.",
    "pairing": "Pairs with cold drinks and mocktails.",
    "video": "seperate videos/masala papad.mp4"
  },
  {
    "id": "veg-biryani",
    "name": "Veg. Biryani",
    "category": "rice",
    "diet": "veg",
    "badge": "Dum Cooked",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 100
      },
      {
        "id": "full",
        "label": "Full",
        "price": 200
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Rice/Veg Biryani.png",
    "description": "Fragrant basmati rice layered with seasonal vegetables, fried onions, mint, saffron, and slow dum cooked in handi.",
    "story": "A fragrant vegetarian royal delicacy sealed with dough to trap the aromatics.",
    "pairing": "Best savored with Boondi Raita.",
    "video": "seperate videos/veg biryani.mp4"
  },
  {
    "id": "chicken-biryani",
    "name": "Chicken Biryani",
    "category": "rice",
    "diet": "non-veg",
    "badge": "Signature Royal",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 120
      },
      {
        "id": "full",
        "label": "Full",
        "price": 240
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Rice/Chicken Biryani.png",
    "description": "Aged long-grain basmati rice and marinated chicken slow cooked with saffron, whole spices, and caramelized onions.",
    "story": "Our most celebrated royal rice recipe since 1998, infused with natural rose and kewra essence.",
    "pairing": "Served with spiced gravy (salan) and chilled raita.",
    "video": "seperate videos/chicken biryani.mp4"
  },
  {
    "id": "mutton-biryani",
    "name": "Mutton Biryani",
    "category": "rice",
    "diet": "non-veg",
    "badge": "Awadhi Heritage",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 180
      },
      {
        "id": "full",
        "label": "Full",
        "price": 360
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Rice/Mutton Biryani.png",
    "description": "Tender goat meat layered with saffron basmati rice, mint leaves, and desi ghee, sealed and dum-cooked.",
    "story": "The crown jewel of Awadhi cuisine, simmered until meat falls off the bone.",
    "pairing": "Incredible with Green Salad and Raita.",
    "video": "seperate videos/mutton biryani.mp4"
  },
  {
    "id": "paneer-pulao",
    "name": "Paneer Pulao",
    "category": "rice",
    "diet": "veg",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 100
      },
      {
        "id": "full",
        "label": "Full",
        "price": 200
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Rice/Paneer Pulao.png",
    "description": "Aromatic basmati rice cooked with golden fried paneer cubes, whole spices, and green peas.",
    "story": "Light, fragrant, and gentle on the palate.",
    "pairing": "Enjoy with Dal Makhni.",
    "video": "seperate videos/paneer pulao.mp4"
  },
  {
    "id": "zeera-rice",
    "name": "Zeera Rice",
    "category": "rice",
    "diet": "veg",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 60
      },
      {
        "id": "full",
        "label": "Full",
        "price": 120
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Rice/Zeera Rice.png",
    "description": "Fluffy steamed long-grain basmati rice tempered with crackling roasted cumin seeds and desi ghee.",
    "story": "A fragrant classic that pairs effortlessly with all North Indian curries.",
    "pairing": "Perfect with Dal Tadka and gravies.",
    "video": "seperate videos/zeerra rice.mp4"
  },
  {
    "id": "plain-rice",
    "name": "Plain Rice",
    "category": "rice",
    "diet": "veg",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 50
      },
      {
        "id": "full",
        "label": "Full",
        "price": 100
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Rice/Plain Rice.png",
    "description": "Steamed fluffy long-grain basmati rice, tender and separate grains.",
    "story": "Pure basmati grains cooked to airy perfection.",
    "pairing": "Accompanies all gravies.",
    "video": "seperate videos/plain rice.mp4"
  },
  {
    "id": "plain-pulao",
    "name": "Plain Pulao",
    "category": "rice",
    "diet": "veg",
    "portions": [
      {
        "id": "half",
        "label": "Half",
        "price": 60
      },
      {
        "id": "full",
        "label": "Full",
        "price": 120
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Rice/Plain Pulao.png",
    "description": "Basmati rice mildly scented with whole cloves, bay leaves, and cardamom.",
    "story": "Traditional light pulao cooked with royal aromatics.",
    "pairing": "Pairs with Chicken Korma.",
    "video": "seperate videos/plain pulao.mp4"
  },
  {
    "id": "chicken-raan-biryani",
    "name": "Chicken Raan Biryani",
    "category": "rice",
    "diet": "non-veg",
    "badge": "Specialty",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 250
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Rice/Chicken Raan Biryani.png",
    "description": "Succulent whole chicken leg cut prepared with fragrant biryani spices and layered saffron rice.",
    "story": "A rich feast designed for dedicated chicken biryani aficionados.",
    "pairing": "Enjoy with chilled raita."
  },
  {
    "id": "raan-biryani",
    "name": "Raan Biryani* (order Before 8 Hours)",
    "category": "rice",
    "diet": "non-veg",
    "badge": "Order 8 Hrs Prior",
    "portions": [
      {
        "id": "full",
        "label": "Royal Platter",
        "price": 1800
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Rice/Raan Biryani.png",
    "description": "Whole spiced mutton raan roasted slow and bedded over an enormous mound of imperial dum biryani rice.",
    "story": "A monumental centerpiece created for family celebrations and royal gatherings.",
    "pairing": "Feeds a grand banquet table."
  },
  {
    "id": "mint-mojito",
    "name": "Mint Mojito",
    "category": "mocktails",
    "diet": "veg",
    "badge": "Refreshing",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 99
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Mocktails/Mint Mojito.png",
    "description": "Fresh garden mint muddled with lime chunks, sugar syrup, and fizzy sparkling soda over crushed ice.",
    "story": "The ultimate thirst quencher and palate reviver.",
    "pairing": "Superb alongside spicy tandoori starters.",
    "video": "seperate videos/mint mojito.mp4"
  },
  {
    "id": "blue-sky",
    "name": "Blue Sky",
    "category": "mocktails",
    "diet": "veg",
    "badge": "Vibrant",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 99
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Mocktails/Blue Sky.png",
    "description": "Blue curacao syrup shaken with lemon juice, sprite, and chilled crushed ice.",
    "story": "A dazzling azure mocktail with citrus notes.",
    "pairing": "Great with Chicken Tikka.",
    "video": "seperate videos/bluw sky.mp4"
  },
  {
    "id": "midnight-beauty",
    "name": "Midnight Beauty",
    "category": "mocktails",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 99
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Mocktails/Midnight Beauty.png",
    "description": "Deep berry and blackcurrant syrup blended with lime and carbonated soda.",
    "story": "Mysterious dark hues with rich sweet-tart berry bursts.",
    "pairing": "Enjoy before your meal.",
    "video": "seperate videos/midnight beauty.mp4"
  },
  {
    "id": "lichi-lemonade",
    "name": "Lichi Lemonade",
    "category": "mocktails",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 99
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Mocktails/Lichi Lemonade.png",
    "description": "Sweet exotic litchi nectar paired with freshly squeezed lemon and fizz.",
    "story": "Fruity, fragrant, and gentle on the palate.",
    "pairing": "Complements spicy Chinese starters.",
    "video": "seperate videos/lichi lemonade.mp4"
  },
  {
    "id": "orange-mojito",
    "name": "Orange Mojito",
    "category": "mocktails",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 150
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Mocktails/Orange Mojito.png",
    "description": "Fresh orange segments muddled with mint leaves, citrus syrup, and soda.",
    "story": "Packed with vitamin C and refreshing summer energy.",
    "pairing": "Pairs with Kebabs.",
    "video": "seperate videos/orange mojito.mp4"
  },
  {
    "id": "pina-colada",
    "name": "Pina Colada",
    "category": "mocktails",
    "diet": "veg",
    "badge": "Tropical",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 125
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Mocktails/Pina Colada.png",
    "description": "Creamy blend of rich coconut milk, pineapple juice, and crushed ice.",
    "story": "Classic tropical mocktail offering smooth, creamy dessert-like bliss.",
    "pairing": "Great after rich curries.",
    "video": "seperate videos/pina colada.mp4"
  },
  {
    "id": "masala-lemonade",
    "name": "Masala Lemonade",
    "category": "mocktails",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 125
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Mocktails/Masala Lemonade.png",
    "description": "Zesty lemon drink spiced with roasted cumin, black salt, and chaat spices.",
    "story": "Desi street lemonade crafted to aid digestion after rich feasts.",
    "pairing": "Best companion to Mutton gravies.",
    "video": "seperate videos/masala lemonade.mp4"
  },
  {
    "id": "watermelon-mojito",
    "name": "Watermelon Mojito",
    "category": "mocktails",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 125
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Mocktails/Watermelon Mojito.png",
    "description": "Sweet watermelon syrup muddled with mint, lemon, and chilled soda.",
    "story": "Hydrating, sweet, and bursting with watermelon flavor.",
    "pairing": "Pairs with Chicken Fry.",
    "video": "seperate videos/masala lemonade red.mp4"
  },
  {
    "id": "masala-coke",
    "name": "Masala Coke",
    "category": "mocktails",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 50
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Mocktails/Masala Coke.png",
    "description": "Chilled cola charged with fresh lime juice, black salt, and roasted cumin.",
    "story": "An Indian street-side favorite that turns ordinary soda into an irresistible digestive treat.",
    "pairing": "Classic pair with Biryani.",
    "video": "seperate videos/masala coke.mp4"
  },
  {
    "id": "mojito-tower",
    "name": "Mojito Tower (serve For 5)",
    "category": "mocktails",
    "diet": "veg",
    "badge": "Serves 5",
    "portions": [
      {
        "id": "standard",
        "label": "Tower (Serves 5)",
        "price": 499
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Mocktails/Mojito Tower.png",
    "description": "Giant party table tower filled with sparkling mint mojito, ice, and lime slices for the entire group.",
    "story": "Perfect centerpiece for family celebrations and gathering tables.",
    "pairing": "Shared by the whole table.",
    "video": "seperate videos/mojito tower.mp4"
  },
  {
    "id": "vanilla-shake",
    "name": "Vanilla Shake",
    "category": "shakes",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 149
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Shakes/Vanilla Shake.png",
    "description": "Creamy whole milk blended with pure Madagascar vanilla extract and sweet cream.",
    "story": "Simple, timeless, and soothingly sweet.",
    "pairing": "Add extra ice cream scoop for ₹30.",
    "video": "seperate videos/vanilla shake.mp4"
  },
  {
    "id": "strawberry-shake",
    "name": "Strawberry Shake",
    "category": "shakes",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 149
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Shakes/Strawberry Shake.png",
    "description": "Chilled milk blended with sweet strawberry puree and velvety dairy ice cream.",
    "story": "Vibrant pink indulgence loved by all ages.",
    "pairing": "Add ice cream scoop for ₹30.",
    "video": "seperate videos/strawberry shake.mp4"
  },
  {
    "id": "butter-scotch-shake",
    "name": "Butter Scotch Shake",
    "category": "shakes",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 149
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Shakes/Butter Scotch Shake.png",
    "description": "Rich shake with crunchy butterscotch praline and golden caramel swirl.",
    "story": "Buttery crunch meets thick chilled shake.",
    "pairing": "Add ice cream scoop for ₹30.",
    "video": "seperate videos/butter scotch shake.mp4"
  },
  {
    "id": "blue-berry-shake",
    "name": "Blue Berry Shake",
    "category": "shakes",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 149
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Shakes/Blue Berry Shake.png",
    "description": "Sweet and tangy wild blueberry pulp whipped with chilled creamy milk.",
    "story": "Exotic berry delight with a rich purple hue.",
    "pairing": "Add ice cream scoop for ₹30.",
    "video": "seperate videos/blue berry shake.mp4"
  },
  {
    "id": "banana-mango-shake",
    "name": "Banana/Mango Shake",
    "category": "shakes",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 149
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Shakes/Banana-Mango Shake.png",
    "description": "Tropical blend of sweet ripe mangoes and nourishing bananas with cold milk.",
    "story": "A thick, energy-packed fruit shake rich in natural sweetness.",
    "pairing": "Add ice cream scoop for ₹30.",
    "video": "seperate videos/banana shake.mp4"
  },
  {
    "id": "oreo-shake",
    "name": "Oreo Shake",
    "category": "shakes",
    "diet": "veg",
    "badge": "Best Seller",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 149
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Shakes/Oreo Shake.png",
    "description": "Crushed chocolate Oreo cookies blended with rich milk and chocolate sauce.",
    "story": "Thick, crunchy, and chocolatey in every single sip.",
    "pairing": "Add ice cream scoop for ₹30.",
    "video": "seperate videos/oreo shake.mp4"
  },
  {
    "id": "kitkat-shake",
    "name": "Kitkat Shake",
    "category": "shakes",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 149
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Shakes/Kitkat Shake.png",
    "description": "Crispy KitKat wafer chocolate fingers crushed into a thick chocolate milkshake.",
    "story": "Crisp wafer crunch mixed with velvety chocolate cream.",
    "pairing": "Add ice cream scoop for ₹30.",
    "video": "seperate videos/kitkat shake.mp4"
  },
  {
    "id": "cold-coffee",
    "name": "Cold Coffee",
    "category": "shakes",
    "diet": "veg",
    "badge": "Cafe Favorite",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 149
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Shakes/Cold Coffee.png",
    "description": "Strong roasted Arabica coffee whipped with chilled milk and chocolate drizzle.",
    "story": "The quintessential energizing creamy coffee shake.",
    "pairing": "Add ice cream scoop for ₹30.",
    "video": "seperate videos/cold coffee.mp4"
  },
  {
    "id": "assorted-cold-drink",
    "name": "Assorted Cold Drink",
    "category": "beverages",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 35
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Beverages/Assorted Cold Drink.png",
    "description": "Choice of chilled bottled carbonated soft drinks served fresh.",
    "story": "Classic dining accompaniment.",
    "pairing": "Goes with everything.",
    "video": "seperate videos/assorted cold drink.mp4"
  },
  {
    "id": "fresh-lime-soda",
    "name": "Fresh Lime Soda",
    "category": "beverages",
    "diet": "veg",
    "badge": "All-Time Refresher",
    "portions": [
      {
        "id": "standard",
        "label": "Sweet / Salted / Mix",
        "price": 45
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Beverages/Fresh Lime Soda.png",
    "description": "Freshly squeezed lemon juice topped with sparkling carbonated soda, served sweet, salted, or mixed.",
    "story": "The classic restaurant refresher that pairs seamlessly with North Indian cuisine.",
    "pairing": "Essential companion to spicy kebabs and curries.",
    "video": "seperate videos/fresh lime soda.mp4"
  },
  {
    "id": "fresh-lime-water",
    "name": "Fresh Lime Water",
    "category": "beverages",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 35
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Beverages/Fresh Lime Water.png",
    "description": "Chilled fresh lime juice with purified water, choice of sweet or salt.",
    "story": "Light, healthy, and hydrating citrus refresher.",
    "pairing": "Enjoy throughout the meal.",
    "video": "seperate videos/fresh lime water.mp4"
  },
  {
    "id": "lassi-sweet-salted",
    "name": "Lassi Sweet or Salted",
    "category": "beverages",
    "diet": "veg",
    "badge": "Thick & Frothy",
    "portions": [
      {
        "id": "standard",
        "label": "Tall Glass",
        "price": 60
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Beverages/Lassi Sweet or Salted.png",
    "description": "Traditional Punjabi yogurt churned thick and frothy, served sweet or lightly salted with roasted cumin.",
    "story": "Hand-churned in wooden mathanis to yield thick clotted froth.",
    "pairing": "Divine with spicy Mughlai handis.",
    "video": "seperate videos/lassi sweet or salted.mp4"
  },
  {
    "id": "fresh-juice",
    "name": "Fresh Juice",
    "category": "beverages",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Fresh Glass",
        "price": 99
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Beverages/Fresh Juice.png",
    "description": "Freshly pressed seasonal fruit juice served pure without artificial preservatives.",
    "story": "Pure vitamins and vitality straight from the season's fruit basket.",
    "pairing": "Refreshing start or finish.",
    "video": "seperate videos/fresh juice.mp4"
  },
  {
    "id": "hawaiian-fantasy",
    "name": "Hawaiian Fantasy",
    "category": "sundaes",
    "diet": "veg",
    "badge": "Grand Sundae",
    "portions": [
      {
        "id": "standard",
        "label": "Grand Bowl",
        "price": 350
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Ice-Cream/Hawaiian Fantasy.png",
    "description": "Tropical sundae with assorted ice creams, fruit cocktail, pineapple glaze, nuts, and whipped cream.",
    "story": "An extravagant multi-scoop creation designed to celebrate special occasions.",
    "pairing": "Perfect group dessert.",
    "video": "seperate videos/hawaiian fantasy.mp4"
  },
  {
    "id": "hot-chocolate-fudge",
    "name": "Hot Chocolate Fudge",
    "category": "sundaes",
    "diet": "veg",
    "badge": "Signature Sundae",
    "portions": [
      {
        "id": "standard",
        "label": "Standard Bowl",
        "price": 169
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Ice-Cream/Hot Chocolate Fudge.png",
    "description": "Creamy vanilla ice cream scoops smothered in hot, rich molten chocolate fudge and roasted peanuts.",
    "story": "The iconic hot-meets-cold dessert combination with deep cocoa luxury.",
    "pairing": "Sweet ending to any dinner.",
    "video": "seperate videos/hot chocolate frog.mp4"
  },
  {
    "id": "americano-banana-split",
    "name": "Americano Banana Split",
    "category": "sundaes",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Classic Split",
        "price": 225
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Ice-Cream/Americano Banana Split.png",
    "description": "Fresh split banana nestled with vanilla, strawberry, and chocolate scoops, dressed in sauces and cherries.",
    "story": "A vintage American diner classic perfected with gourmet ice creams.",
    "pairing": "Feeds two comfortably.",
    "video": "seperate videos/american banana split.mp4"
  },
  {
    "id": "tooti-frooti",
    "name": "Tooti-frooti",
    "category": "sundaes",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard",
        "price": 199
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Ice-Cream/Tooti-frooti.png",
    "description": "Colorful sundae loaded with glazed candied fruits, fruity syrups, and rich dairy ice cream.",
    "story": "Nostalgic sweet fruit gems bursting with retro flavor.",
    "pairing": "Delightful for dessert lovers.",
    "video": "seperate videos/tooti-frooti.mp4"
  },
  {
    "id": "kesar-pista",
    "name": "Kesar Pista",
    "category": "sundaes",
    "diet": "veg",
    "badge": "Royal Saffron",
    "portions": [
      {
        "id": "standard",
        "label": "Standard Scoop",
        "price": 100
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Ice-Cream/Kesar Pista.png",
    "description": "Pure Kashmiri saffron-infused ice cream loaded with crunchy Iranian pistachios.",
    "story": "Traditional royal dessert aroma carrying the scent of saffron fields.",
    "pairing": "Follows Mughlai banquets effortlessly.",
    "video": "seperate videos/kesar pista.mp4"
  },
  {
    "id": "butter-scotch",
    "name": "Butter Scotch",
    "category": "sundaes",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard Scoop",
        "price": 80
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Ice-Cream/Butter Scotch Ice Cream.png",
    "description": "Golden butterscotch ice cream studded with crunchy roasted caramel praline bits.",
    "story": "Sweet, crunchy, and buttery classic.",
    "pairing": "Light after-dinner treat.",
    "video": "seperate videos/butter scotch.mp4"
  },
  {
    "id": "vanilla",
    "name": "Vanilla",
    "category": "sundaes",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard Scoop",
        "price": 80
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Ice-Cream/Vanilla Ice Cream.png",
    "description": "Smooth, velvety ice cream crafted with real fragrant vanilla beans.",
    "story": "The pure standard of ice cream excellence.",
    "pairing": "Pairs with Hot Gulab Jamun.",
    "video": "seperate videos/vanilla.mp4"
  },
  {
    "id": "strawberry",
    "name": "Strawberry",
    "category": "sundaes",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard Scoop",
        "price": 80
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Ice-Cream/Strawberry Ice Cream.png",
    "description": "Chilled fruity strawberry ice cream made with sweet berry puree.",
    "story": "Sweet, fragrant, and refreshingly cold.",
    "pairing": "Enjoy anytime.",
    "video": "seperate videos/strawberry.mp4"
  },
  {
    "id": "mango-ice-cream",
    "name": "Mango Ice-cream",
    "category": "sundaes",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard Scoop",
        "price": 80
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Ice-Cream/Mango Ice Cream.png",
    "description": "Rich Alphonso mango ice cream carrying the glorious sunshine taste of the king of fruits.",
    "story": "Captures natural mango pulp in creamy frozen perfection.",
    "pairing": "Summer dining favorite.",
    "video": "seperate videos/mango ice cream.mp4"
  },
  {
    "id": "sundae-ice-cream",
    "name": "Sundae Ice-cream",
    "category": "sundaes",
    "diet": "veg",
    "portions": [
      {
        "id": "standard",
        "label": "Standard Bowl",
        "price": 149
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Ice-Cream/Sundae Ice Cream.png",
    "description": "Assorted ice cream scoops topped with mixed berry syrup, chocolate drizzle, and nuts.",
    "story": "A balanced sundae bowl offering a bit of every favorite flavor.",
    "pairing": "Great finish to your meal.",
    "video": "seperate videos/sundae ice cream.mp4"
  },
  {
    "id": "shama-special-kheer",
    "name": "Shama Special Kheer",
    "category": "sweets",
    "diet": "veg",
    "badge": "Heritage Dessert",
    "portions": [
      {
        "id": "standard",
        "label": "Earthen Bowl",
        "price": 30
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Sweets/Shama Special Kheer.png",
    "description": "Slow-simmered basmati rice pudding cooked with full-cream milk, saffron, cardamom, and sliced almonds in earthen bowls.",
    "story": "Prepared every morning since 1998, chilled in earthen pottery to absorb subtle clay aroma.",
    "pairing": "The quintessential Mughlai dining climax.",
    "video": "seperate videos/special shama kheer.mp4"
  },
  {
    "id": "gulab-jamun",
    "name": "Gulab Jamun (only Winters)",
    "category": "sweets",
    "diet": "veg",
    "badge": "Winter Special",
    "portions": [
      {
        "id": "standard",
        "label": "1 Piece",
        "price": 25
      }
    ],
    "image": "Shama-Deluxe-Menu-Images/Sweets/Gulab Jamun.png",
    "description": "Golden khoya dumplings fried in pure ghee and soaked in warm cardamom-rose sugar syrup.",
    "story": "Prepared hot exclusively during winter months to provide soothing sweet warmth.",
    "pairing": "Sensational with a scoop of Vanilla Ice Cream.",
    "video": "seperate videos/gullab jamun.mp4"
  }
];

// Fallback SVG data URI for dishes when an image fails to load
const PLACEHOLDER_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="260" viewBox="0 0 400 260" fill="%23F0E6D6"><rect width="100%" height="100%" fill="%23F0E6D6"/><path d="M200 80c-44 0-80 32-80 72h160c0-40-36-72-80-72zm-8 10h16v12h-16zm-76 72h168v10H116z" fill="%23B58A45" opacity="0.6"/><circle cx="200" cy="74" r="7" fill="%23B58A45" opacity="0.8"/></svg>`;

// ==========================================================================
// 2. STATE MANAGEMENT
// ==========================================================================

let activeCategory = 'all';
let activeDiet = 'all';
let searchQuery = '';
let diningMode = 'Dine-In';
let tableOrAddress = 'Table #4';
let currentModalDish = null;
let currentModalPortion = null;

let cart = [];

// Restore cart from localStorage if available
try {
  const savedCart = localStorage.getItem('shama_menu_cart');
  if (savedCart) cart = JSON.parse(savedCart);
} catch (e) {
  console.warn("Storage restricted", e);
}

// ==========================================================================
// 3. CATALOG RENDERING
// ==========================================================================

function filterDishes() {
  return DISH_CATALOG.filter(dish => {
    const matchesCategory = (activeCategory === 'all' || dish.category === activeCategory);
    const matchesDiet = (activeDiet === 'all' || dish.diet === activeDiet);
    
    const query = searchQuery.trim().toLowerCase();
    const searchTarget = `${dish.name} ${dish.description} ${dish.category} ${dish.badge || ''}`.toLowerCase();
    const matchesSearch = !query || searchTarget.includes(query);
    
    return matchesCategory && matchesDiet && matchesSearch;
  });
}

function renderCategoryTabs() {
  const container = document.getElementById('categoryTabsContainer');
  if (!container) return;
  
  container.innerHTML = '';
  
  CATEGORIES.forEach(cat => {
    const count = (cat.id === 'all') 
      ? DISH_CATALOG.length 
      : DISH_CATALOG.filter(d => d.category === cat.id).length;
    
    const btn = document.createElement('button');
    btn.className = `category-tab-btn ${activeCategory === cat.id ? 'active' : ''}`;
    btn.dataset.category = cat.id;
    btn.innerHTML = `
      <span>${cat.icon}</span>
      <span>${cat.name}</span>
      <span class="category-count-badge">${count}</span>
    `;
    
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', activeCategory === cat.id ? 'true' : 'false');

    btn.addEventListener('click', () => {
      activeCategory = cat.id;
      const allTabs = container.querySelectorAll('.category-tab-btn');
      allTabs.forEach(t => {
        const isActive = t.dataset.category === cat.id;
        t.classList.toggle('active', isActive);
        t.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
      renderMenu();
      
      // Smooth scroll the clicked button into view
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      if (typeof updateCatSliderButtons === 'function') {
        setTimeout(updateCatSliderButtons, 350);
      }
    });
    
    container.appendChild(btn);
  });

  if (typeof updateCatSliderButtons === 'function') {
    updateCatSliderButtons();
  }
}

// Category Slider Interactive Controls (Arrow Buttons, Drag & Mouse Wheel)
function updateCatSliderButtons() {
  const scroller = document.getElementById('categoryTabsContainer');
  const prevBtn = document.getElementById('catSliderPrevBtn');
  const nextBtn = document.getElementById('catSliderNextBtn');
  if (!scroller) return;
  
  const maxScrollLeft = Math.max(0, scroller.scrollWidth - scroller.clientWidth);
  if (prevBtn) {
    prevBtn.disabled = scroller.scrollLeft <= 4;
  }
  if (nextBtn) {
    nextBtn.disabled = scroller.scrollLeft >= maxScrollLeft - 4;
  }
}

function initCategorySliderControls() {
  const scroller = document.getElementById('categoryTabsContainer');
  const prevBtn = document.getElementById('catSliderPrevBtn');
  const nextBtn = document.getElementById('catSliderNextBtn');
  if (!scroller) return;
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      scroller.scrollBy({ left: -260, behavior: 'smooth' });
      setTimeout(updateCatSliderButtons, 320);
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      scroller.scrollBy({ left: 260, behavior: 'smooth' });
      setTimeout(updateCatSliderButtons, 320);
    });
  }
  
  // Mouse drag-to-scroll on desktop
  let isDown = false;
  let startX = 0;
  let scrollStart = 0;
  let dragThresholdPassed = false;
  
  scroller.addEventListener('mousedown', (e) => {
    isDown = true;
    dragThresholdPassed = false;
    startX = e.pageX - scroller.offsetLeft;
    scrollStart = scroller.scrollLeft;
  });
  
  window.addEventListener('mouseup', () => {
    isDown = false;
  });
  
  scroller.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    const x = e.pageX - scroller.offsetLeft;
    const walk = x - startX;
    if (Math.abs(walk) > 6) {
      dragThresholdPassed = true;
    }
    scroller.scrollLeft = scrollStart - walk;
    updateCatSliderButtons();
  });
  
  // Prevent category click if the user was dragging
  scroller.addEventListener('click', (e) => {
    if (dragThresholdPassed) {
      e.preventDefault();
      e.stopPropagation();
      dragThresholdPassed = false;
    }
  }, true);
  
  // Horizontal scroll on mouse wheel
  scroller.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      scroller.scrollLeft += e.deltaY;
      updateCatSliderButtons();
    }
  }, { passive: false });
  
  scroller.addEventListener('scroll', updateCatSliderButtons, { passive: true });
  window.addEventListener('resize', updateCatSliderButtons);
  
  setTimeout(updateCatSliderButtons, 150);
}

function renderMenu() {
  const container = document.getElementById('menuCatalogContainer');
  const emptyState = document.getElementById('emptyStateNotice');
  if (!container) return;
  
  const filteredDishes = filterDishes();
  container.innerHTML = '';
  
  if (filteredDishes.length === 0) {
    if (emptyState) emptyState.style.display = 'block';
    return;
  }
  
  if (emptyState) emptyState.style.display = 'none';
  
  // If activeCategory is 'all', group by categories
  if (activeCategory === 'all') {
    const categoriesWithDishes = CATEGORIES.filter(c => c.id !== 'all');
    
    categoriesWithDishes.forEach(cat => {
      const catDishes = filteredDishes.filter(d => d.category === cat.id);
      if (catDishes.length === 0) return;
      
      const groupEl = document.createElement('section');
      groupEl.className = 'menu-category-group';
      
      groupEl.innerHTML = `
        <div class="category-group-header">
          <h2 class="category-group-title">${cat.icon} ${cat.name}</h2>
          <div class="category-group-line"></div>
          <span class="category-group-count">${catDishes.length} items</span>
        </div>
        <div class="dishes-grid" id="grid-${cat.id}"></div>
      `;
      
      container.appendChild(groupEl);
      const grid = groupEl.querySelector(`#grid-${cat.id}`);
      catDishes.forEach(dish => {
        grid.appendChild(createDishCardElement(dish));
      });
    });
  } else {
    // Single category display
    const currentCatObj = CATEGORIES.find(c => c.id === activeCategory);
    const groupEl = document.createElement('section');
    groupEl.className = 'menu-category-group';
    
    groupEl.innerHTML = `
      <div class="category-group-header">
        <h2 class="category-group-title">${currentCatObj ? currentCatObj.icon : ''} ${currentCatObj ? currentCatObj.name : 'Selected Category'}</h2>
        <div class="category-group-line"></div>
        <span class="category-group-count">${filteredDishes.length} items</span>
      </div>
      <div class="dishes-grid" id="grid-active"></div>
    `;
    
    container.appendChild(groupEl);
    const grid = groupEl.querySelector('#grid-active');
    filteredDishes.forEach(dish => {
      grid.appendChild(createDishCardElement(dish));
    });
  }
}

function createDishCardElement(dish) {
  const card = document.createElement('article');
  card.className = 'dish-card';
  card.dataset.dishId = dish.id;
  
  const hasMultiplePortions = dish.portions && dish.portions.length > 1;
  const initialPortion = (dish.portions && dish.portions.length > 0) ? dish.portions[0] : { id: 'standard', label: '', price: null };
  const hasPrice = initialPortion && initialPortion.price !== null && initialPortion.price !== undefined && initialPortion.price !== '';
  
  card.dataset.selectedPortionId = initialPortion.id;
  card.dataset.selectedPrice = hasPrice ? initialPortion.price : '';
  
  // Spice representation
  let spiceDisplay = '';
  if (dish.spice > 0) {
    spiceDisplay = `<span class="spice-meter" title="Spice Level ${dish.spice} of 3">${'🌶️'.repeat(dish.spice)}</span>`;
  }
  
  // Video Reveal Tag
  let videoTag = '';
  if (dish.video) {
    videoTag = `<span class="video-pill-badge" title="Has Food Reveal Video">🎬 Food Reveal</span>`;
  }
  
  // Portion selector HTML
  let portionControls = '';
  if (hasMultiplePortions) {
    const buttons = dish.portions.map((p, idx) => {
      const pHasPrice = p.price !== null && p.price !== undefined && p.price !== '';
      return `
        <button 
          type="button" 
          class="portion-btn ${idx === 0 ? 'active' : ''}" 
          data-portion-id="${p.id}" 
          data-price="${pHasPrice ? p.price : ''}"
          onclick="handleCardPortionSelect('${dish.id}', '${p.id}', ${pHasPrice ? p.price : "''"}, this)"
        >
          ${p.label}${pHasPrice ? ` (₹${p.price})` : ''}
        </button>
      `;
    }).join('');
    portionControls = `<div class="portion-selector-row">${buttons}</div>`;
  } else if (initialPortion && initialPortion.label) {
    portionControls = `<div class="single-portion-label">${initialPortion.label}</div>`;
  } else {
    portionControls = '';
  }
  
  const priceDisplayHtml = hasPrice ? `
    <div class="dish-price-wrap">
      <span class="price-meta-label">${hasMultiplePortions ? 'Starting from' : 'Price'}</span>
      <span class="dish-price-amount" id="card-price-${dish.id}">₹${initialPortion.price}</span>
    </div>
  ` : `
    <div class="dish-price-wrap">
      <span class="price-meta-label"></span>
      <span class="dish-price-amount" id="card-price-${dish.id}"></span>
    </div>
  `;
  
  const webpSrc = dish.image ? dish.image.replace(/\.png$/i, '.webp') : '';
  const fallbackPngSrc = dish.image || '';

  card.innerHTML = `
    <div class="dish-card-visual" onclick="openDishModal('${dish.id}')">
      <img 
        src="${encodeURI(webpSrc)}" 
        alt="${dish.name}" 
        class="dish-card-img" 
        loading="lazy"
        decoding="async"
        onerror="if(!this.dataset.triedPng){ this.dataset.triedPng='1'; this.src='${encodeURI(fallbackPngSrc)}'; } else { this.onerror=null; this.src='${PLACEHOLDER_SVG}'; }"
      />
      <div class="card-top-badges">
        <span class="diet-icon-box ${dish.diet}" title="${dish.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span>
        ${dish.badge ? `<span class="authentic-tag">${dish.badge}</span>` : ''}
      </div>
      ${videoTag}
    </div>
    
    <div class="dish-card-body">
      <div class="dish-header-row">
        <h3 class="dish-name-title" onclick="openDishModal('${dish.id}')" style="cursor: pointer;">${dish.name}</h3>
        ${spiceDisplay}
      </div>
      
      <p class="dish-description-text">${dish.description || ''}</p>
      
      ${portionControls}
      
      <div class="dish-card-footer">
        ${priceDisplayHtml}
        
        <div class="dish-card-actions">
          <button 
            type="button" 
            class="btn-details-icon" 
            title="View Details & Story" 
            onclick="openDishModal('${dish.id}')"
            aria-label="View details for ${dish.name}"
          >
            🔍
          </button>
        </div>
      </div>
    </div>
  `;
  
  return card;
}

// Portion selection handler on the card
window.handleCardPortionSelect = function(dishId, portionId, price, btn) {
  const card = document.querySelector(`.dish-card[data-dish-id="${dishId}"]`);
  if (!card) return;
  
  const buttons = card.querySelectorAll('.portion-btn');
  buttons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  
  card.dataset.selectedPortionId = portionId;
  card.dataset.selectedPrice = price;
  
  const priceEl = document.getElementById(`card-price-${dishId}`);
  if (priceEl) {
    priceEl.innerText = (price !== null && price !== undefined && price !== '') ? `₹${price}` : '';
  }
};

// Add to Cart from Card
window.handleAddCardToCart = function(dishId) {
  const card = document.querySelector(`.dish-card[data-dish-id="${dishId}"]`);
  const dish = DISH_CATALOG.find(d => d.id === dishId);
  if (!dish) return;
  
  let portionId = dish.portions[0].id;
  let price = dish.portions[0].price;
  
  if (card) {
    portionId = card.dataset.selectedPortionId || portionId;
    price = parseInt(card.dataset.selectedPrice, 10) || price;
  }
  
  const portionObj = dish.portions.find(p => p.id === portionId) || dish.portions[0];
  addItemToCart(dish, portionObj);
};

// ==========================================================================
// 4. DISH DETAILS MODAL & FOOD REVEAL VIDEO PLAYER
// ==========================================================================

window.openDishModal = function(dishId) {
  const dish = DISH_CATALOG.find(d => d.id === dishId);
  if (!dish) return;
  
  currentModalDish = dish;
  currentModalPortion = dish.portions[0];
  
  const overlay = document.getElementById('dishModalOverlay');
  const heroImg = document.getElementById('modalHeroImg');
  const heroVideo = document.getElementById('modalHeroVideo');
  const videoOverlayBar = document.getElementById('modalVideoOverlayBar');
  const titleEl = document.getElementById('modalTitle');
  const tagsRow = document.getElementById('modalTagsRow');
  const descEl = document.getElementById('modalDesc');
  const storyBox = document.getElementById('modalStoryBox');
  const pairingNote = document.getElementById('modalPairingNote');
  const videoRow = document.getElementById('modalVideoRow');
  const portionSection = document.getElementById('modalPortionsSection');
  const totalPriceEl = document.getElementById('modalTotalPrice');
  
  // Media Visual: Video vs Image
  if (dish.video) {
    if (heroImg) {
      heroImg.style.display = 'none';
      heroImg.src = encodeURI(dish.image);
    }
    if (heroVideo) {
      heroVideo.style.display = 'block';
      heroVideo.src = encodeURI(dish.video);
      heroVideo.loop = false;
      heroVideo.removeAttribute('loop');
      heroVideo.muted = true;
      heroVideo.currentTime = 0;
      
      heroVideo._hasEnded = false;
      heroVideo._lastTime = 0;
      
      const replayBtn = document.getElementById('modalVideoReplayBtn');
      if (replayBtn) {
        replayBtn.classList.remove('ended');
        replayBtn.style.display = 'inline-flex';
      }
      
      const badge = document.getElementById('modalVideoStatusBadge');
      if (badge) {
        badge.classList.remove('completed');
        badge.innerHTML = '<span class="pulse-dot"></span> In Motion';
      }

      const playPromise = heroVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.log('Video autoplay prevented or awaiting interaction:', err);
        });
      }
    }
    if (videoOverlayBar) {
      videoOverlayBar.style.display = 'flex';
    }
  } else {
    if (heroVideo) {
      heroVideo.pause();
      heroVideo.removeAttribute('src');
      heroVideo.load();
      heroVideo.style.display = 'none';
    }
    if (videoOverlayBar) {
      videoOverlayBar.style.display = 'none';
    }
    if (heroImg) {
      heroImg.style.display = 'block';
      const modalWebpSrc = dish.image ? dish.image.replace(/\.png$/i, '.webp') : '';
      heroImg.src = encodeURI(modalWebpSrc);
      delete heroImg.dataset.triedPng;
      heroImg.onerror = function() {
        if (!heroImg.dataset.triedPng) {
          heroImg.dataset.triedPng = '1';
          heroImg.src = encodeURI(dish.image);
        } else {
          heroImg.onerror = null;
          heroImg.src = PLACEHOLDER_SVG;
        }
      };
    }
  }

  if (titleEl) titleEl.innerText = dish.name;
  if (descEl) descEl.innerText = dish.description || '';
  
  // Tags
  if (tagsRow) {
    let tags = `
      <span class="modal-diet-badge ${dish.diet}">
        <span class="dot-indicator ${dish.diet === 'veg' ? 'veg' : 'nonveg'}"></span>
        ${dish.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
      </span>
    `;
    if (dish.badge) {
      tags += `<span class="authentic-tag">${dish.badge}</span>`;
    }
    if (dish.spice > 0) {
      tags += `<span class="authentic-tag">${'🌶️'.repeat(dish.spice)} Spicy</span>`;
    }
    tagsRow.innerHTML = tags;
  }
  
  // Story
  if (storyBox) {
    if (dish.story) {
      storyBox.style.display = 'block';
      storyBox.innerHTML = `<strong>Heritage Tradition:</strong> ${dish.story}`;
    } else {
      storyBox.style.display = 'none';
    }
  }
  
  // Pairing
  if (pairingNote) {
    if (dish.pairing) {
      pairingNote.style.display = 'flex';
      pairingNote.innerHTML = `<span>💡</span> <span>${dish.pairing}</span>`;
    } else {
      pairingNote.style.display = 'none';
    }
  }
  
  // Interior video button hidden as video plays directly in the header media frame
  if (videoRow) {
    videoRow.style.display = 'none';
  }
  
  // Portions
  if (portionSection) {
    if (dish.portions && dish.portions.length > 1) {
      portionSection.innerHTML = `
        <div class="modal-portion-box">
          <div class="modal-portion-title">Select Portion:</div>
          <div class="modal-portion-options">
            ${dish.portions.map((p, idx) => {
              const pHasPrice = p.price !== null && p.price !== undefined && p.price !== '';
              return `
                <button 
                  type="button" 
                  class="modal-portion-btn ${idx === 0 ? 'active' : ''}" 
                  data-portion-id="${p.id}"
                  onclick="handleModalPortionSelect('${p.id}')"
                >
                  <span class="modal-portion-name">${p.label}</span>
                  <span class="modal-portion-price">${pHasPrice ? `₹${p.price}` : ''}</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>
      `;
    } else if (dish.portions && dish.portions.length === 1) {
      const p = dish.portions[0];
      const pHasPrice = p.price !== null && p.price !== undefined && p.price !== '';
      if (p.label || pHasPrice) {
        portionSection.innerHTML = `
          <div class="modal-portion-box">
            <div class="modal-portion-title">Portion:</div>
            <div style="font-size:0.9rem;color:var(--text-body);">${p.label || ''}${pHasPrice ? ` — <strong>₹${p.price}</strong>` : ''}</div>
          </div>
        `;
      } else {
        portionSection.innerHTML = '';
      }
    } else {
      portionSection.innerHTML = '';
    }
  }
  
  if (totalPriceEl) totalPriceEl.innerText = (currentModalPortion && currentModalPortion.price !== null && currentModalPortion.price !== undefined && currentModalPortion.price !== '') ? `₹${currentModalPortion.price}` : '';
  
  if (overlay) {
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
};

window.handleModalPortionSelect = function(portionId) {
  if (!currentModalDish) return;
  const portion = currentModalDish.portions.find(p => p.id === portionId);
  if (!portion) return;
  
  currentModalPortion = portion;
  
  const buttons = document.querySelectorAll('.modal-portion-btn');
  buttons.forEach(b => {
    b.classList.toggle('active', b.dataset.portionId === portionId);
  });
  
  const totalPriceEl = document.getElementById('modalTotalPrice');
  if (totalPriceEl) totalPriceEl.innerText = `₹${portion.price}`;
};

window.closeDishModal = function() {
  const overlay = document.getElementById('dishModalOverlay');
  const heroVideo = document.getElementById('modalHeroVideo');
  const videoOverlayBar = document.getElementById('modalVideoOverlayBar');
  const replayBtn = document.getElementById('modalVideoReplayBtn');
  const badge = document.getElementById('modalVideoStatusBadge');
  
  if (heroVideo) {
    heroVideo.pause();
    heroVideo.removeAttribute('src');
    heroVideo.load();
    heroVideo.style.display = 'none';
  }
  if (videoOverlayBar) {
    videoOverlayBar.style.display = 'none';
  }
  if (replayBtn) {
    replayBtn.classList.remove('ended');
  }
  if (badge) {
    badge.classList.remove('completed');
  }

  if (overlay) {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  currentModalDish = null;
  currentModalPortion = null;
};


window.handleModalHeroVideoEnded = function() {
  const heroVideo = document.getElementById('modalHeroVideo');
  if (!heroVideo) return;
  
  heroVideo._hasEnded = true;
  heroVideo.pause();
  heroVideo.loop = false;
  heroVideo.removeAttribute('loop');
  
  const replayBtn = document.getElementById('modalVideoReplayBtn');
  if (replayBtn) {
    replayBtn.classList.add('ended');
    replayBtn.style.display = 'inline-flex';
  }
  
  const badge = document.getElementById('modalVideoStatusBadge');
  if (badge) {
    badge.classList.add('completed');
    badge.innerHTML = '<span class="pulse-dot"></span> Replay Available';
  }
};

window.handleModalHeroVideoTimeUpdate = function(videoEl) {
  if (!videoEl || videoEl._hasEnded) return;
  
  // Guard 1: When reaching end of video duration (within 0.12s of end), freeze immediately
  if (videoEl.duration > 0 && videoEl.currentTime >= (videoEl.duration - 0.12)) {
    videoEl.pause();
    window.handleModalHeroVideoEnded();
    return;
  }
  
  // Guard 2: Detect unauthorized browser loop (jump back from >0.4s to start)
  if (typeof videoEl._lastTime === 'number' && videoEl._lastTime > 0.4 && videoEl.currentTime < (videoEl._lastTime - 0.2)) {
    videoEl.pause();
    videoEl.currentTime = videoEl.duration ? Math.max(0, videoEl.duration - 0.05) : videoEl._lastTime;
    window.handleModalHeroVideoEnded();
    return;
  }
  
  videoEl._lastTime = videoEl.currentTime;
};

window.replayModalHeroVideo = function(e) {
  if (e) {
    e.stopPropagation();
    e.preventDefault();
  }
  const heroVideo = document.getElementById('modalHeroVideo');
  const replayBtn = document.getElementById('modalVideoReplayBtn');
  const badge = document.getElementById('modalVideoStatusBadge');
  
  if (!heroVideo) return;
  
  heroVideo._hasEnded = false;
  heroVideo._lastTime = 0;
  heroVideo.loop = false;
  heroVideo.removeAttribute('loop');
  heroVideo.currentTime = 0;
  
  if (replayBtn) {
    replayBtn.classList.remove('ended');
    replayBtn.style.display = 'inline-flex';
  }
  if (badge) {
    badge.classList.remove('completed');
    badge.innerHTML = '<span class="pulse-dot"></span> In Motion';
  }
  
  heroVideo.play().catch(err => {
    console.log('Video play error on replay:', err);
  });
};

window.toggleModalVideoPlay = function() {
  const heroVideo = document.getElementById('modalHeroVideo');
  if (!heroVideo) return;
  
  if (heroVideo._hasEnded || heroVideo.ended) {
    window.replayModalHeroVideo();
    return;
  }
  
  if (heroVideo.paused) {
    heroVideo.play().catch(() => {});
  } else {
    heroVideo.pause();
  }
};

window.replayFoodRevealVideo = function(e) {
  if (e) {
    e.stopPropagation();
    e.preventDefault();
  }
  const player = document.getElementById('foodRevealVideoPlayer');
  const replayBtn = document.getElementById('foodRevealReplayBtn');
  if (!player) return;
  player.loop = false;
  player.currentTime = 0;
  if (replayBtn) {
    replayBtn.classList.remove('ended');
    replayBtn.style.display = 'none';
  }
  player.play().catch(() => {});
};

window.handleAddModalToCart = function() {
  if (!currentModalDish || !currentModalPortion) return;
  addItemToCart(currentModalDish, currentModalPortion);
  closeDishModal();
};

// Food Reveal Video Modal (Optional Fullscreen)
window.openFoodRevealVideo = function(dishId) {
  const dish = DISH_CATALOG.find(d => d.id === dishId);
  if (!dish || !dish.video) return;
  
  const videoOverlay = document.getElementById('videoModalOverlay');
  const videoTitle = document.getElementById('videoModalTitle');
  const videoEl = document.getElementById('foodRevealVideoPlayer');
  const replayBtn = document.getElementById('foodRevealReplayBtn');
  
  if (videoTitle) videoTitle.innerText = `${dish.name} • Food Reveal`;
  
  if (replayBtn) {
    replayBtn.style.display = 'none';
    replayBtn.classList.remove('ended');
  }

  if (videoEl) {
    videoEl.loop = false;
    videoEl.removeAttribute('loop');
    videoEl.src = encodeURI(dish.video);
    videoEl.load();
  }
  
  if (videoOverlay) {
    videoOverlay.classList.add('active');
    videoOverlay.setAttribute('aria-hidden', 'false');
  }
};

window.closeFoodRevealVideo = function() {
  const videoOverlay = document.getElementById('videoModalOverlay');
  const videoEl = document.getElementById('foodRevealVideoPlayer');
  
  if (videoEl) {
    videoEl.pause();
    videoEl.removeAttribute('src'); // Unload to free memory
    videoEl.load();
  }
  
  if (videoOverlay) {
    videoOverlay.classList.remove('active');
    videoOverlay.setAttribute('aria-hidden', 'true');
  }
};

// ==========================================================================
// 5. CART & ORDERING ENGINE
// ==========================================================================

function addItemToCart(dish, portion) {
  const cartItemId = `${dish.id}-${portion.id}`;
  const existing = cart.find(item => item.id === cartItemId);
  
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: cartItemId,
      dishId: dish.id,
      name: dish.name,
      portionId: portion.id,
      portionLabel: portion.label,
      price: portion.price,
      quantity: 1,
      image: dish.image
    });
  }
  
  saveCart();
  updateCartUI();
  showToast(`Added ${dish.name} (${portion.label}) to order`);
}

window.updateCartItemQty = function(cartItemId, delta) {
  const itemIndex = cart.findIndex(i => i.id === cartItemId);
  if (itemIndex === -1) return;
  
  cart[itemIndex].quantity += delta;
  if (cart[itemIndex].quantity <= 0) {
    cart.splice(itemIndex, 1);
  }
  
  saveCart();
  updateCartUI();
};

function saveCart() {
  try {
    localStorage.setItem('shama_menu_cart', JSON.stringify(cart));
  } catch (e) {
    console.warn("Storage restricted", e);
  }
}

function updateCartUI() {
  const headerCount = document.getElementById('headerCartCount');
  const dock = document.getElementById('floatingOrderDock');
  const dockCount = document.getElementById('dockBadgeCount');
  const dockPrice = document.getElementById('dockTotalPrice');
  const dockMeta = document.getElementById('dockCountMeta');
  
  const drawerList = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const gstEl = document.getElementById('cartGst');
  const totalEl = document.getElementById('cartTotal');
  
  let totalItems = 0;
  let subtotal = 0;
  
  cart.forEach(item => {
    totalItems += item.quantity;
    subtotal += (item.price * item.quantity);
  });
  
  const gst = Math.round(subtotal * 0.05); // 5% GST
  const grandTotal = subtotal + gst;
  
  // Header Counter
  if (headerCount) headerCount.innerText = totalItems;
  
  // Floating Dock
  if (dock) {
    if (totalItems > 0) {
      dock.classList.add('visible');
      if (dockCount) dockCount.innerText = totalItems;
      if (dockPrice) dockPrice.innerText = `₹${grandTotal}`;
      if (dockMeta) dockMeta.innerText = `${totalItems} dish${totalItems > 1 ? 'es' : ''} in order`;
    } else {
      dock.classList.remove('visible');
    }
  }
  
  // Cart Drawer Items List
  if (drawerList) {
    if (cart.length === 0) {
      drawerList.innerHTML = `
        <div style="text-align:center;padding:3rem 1rem;color:var(--text-muted);">
          <div style="font-size:2.8rem;margin-bottom:0.75rem;">🍽️</div>
          <h4 style="font-family:var(--font-serif);color:var(--text-heading);margin-bottom:0.35rem;">Your order is empty</h4>
          <p style="font-size:0.85rem;">Select dishes from the menu to build your royal order.</p>
        </div>
      `;
    } else {
      drawerList.innerHTML = cart.map(item => `
        <div class="cart-item-card">
          <div class="cart-item-details">
            <span class="cart-item-name">${item.name}</span>
            <span class="cart-item-portion">${item.portionLabel}</span>
            <span class="cart-item-price">₹${item.price * item.quantity}</span>
          </div>
          <div class="cart-qty-group">
            <button type="button" class="cart-qty-btn" onclick="updateCartItemQty('${item.id}', -1)" aria-label="Decrease quantity">−</button>
            <span class="cart-qty-val">${item.quantity}</span>
            <button type="button" class="cart-qty-btn" onclick="updateCartItemQty('${item.id}', 1)" aria-label="Increase quantity">+</button>
          </div>
        </div>
      `).join('');
    }
  }
  
  if (subtotalEl) subtotalEl.innerText = `₹${subtotal}`;
  if (gstEl) gstEl.innerText = `₹${gst}`;
  if (totalEl) totalEl.innerText = `₹${grandTotal}`;
}

window.toggleCartDrawer = function(open = null) {
  const overlay = document.getElementById('cartDrawerOverlay');
  if (!overlay) return;
  
  if (open === true) {
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  } else if (open === false) {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  } else {
    const isActive = overlay.classList.contains('active');
    toggleCartDrawer(!isActive);
  }
};

// Dispatch WhatsApp Order to authentic restaurant number (+91 97591 00786)
window.dispatchWhatsAppOrder = function() {
  if (cart.length === 0) {
    alert("Please add dishes to your order first.");
    return;
  }
  
  const locationInput = document.getElementById('orderLocationInput');
  const instructionsInput = document.getElementById('orderNotesInput');
  
  const locationVal = (locationInput && locationInput.value.trim()) ? locationInput.value.trim() : tableOrAddress;
  const notesVal = (instructionsInput && instructionsInput.value.trim()) ? instructionsInput.value.trim() : 'None';
  
  let subtotal = 0;
  let itemsText = '';
  
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    itemsText += `• ${item.quantity}x ${item.name} (${item.portionLabel}) — ₹${itemTotal}\n`;
  });
  
  const gst = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + gst;
  
  const message = 
    `⚜️ *SHAMA DELUXE RESTAURANT - ORDER* ⚜️\n` +
    `📍 Dining Mode: *${diningMode}* (${locationVal})\n` +
    `📅 Date: ${new Date().toLocaleDateString('en-IN')}\n` +
    `----------------------------------------\n` +
    `*ITEMS ORDERED:*\n${itemsText}` +
    `----------------------------------------\n` +
    `💵 Subtotal: ₹${subtotal}\n` +
    `🧾 GST (5%): ₹${gst}\n` +
    `🔥 *TOTAL AMOUNT: ₹${grandTotal}*\n` +
    `----------------------------------------\n` +
    `📝 Special Cooking Notes: ${notesVal}\n\n` +
    `_Namaste! Please confirm this order and preparation time._`;
  
  const encoded = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/919759100786?text=${encoded}`;
  
  window.open(whatsappUrl, '_blank');
};

// ==========================================================================
// 6. TOAST NOTIFICATIONS
// ==========================================================================

let toastTimer;
function showToast(text) {
  const toast = document.getElementById('luxuryToastNotice');
  const toastText = document.getElementById('toastNoticeText');
  if (!toast || !toastText) return;
  
  toastText.innerText = text;
  toast.classList.add('active');
  
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('active');
  }, 2600);
}

// ==========================================================================
// 6B. TABLE QR MODAL CONTROLS
// ==========================================================================

window.openQrModal = function() {
  const overlay = document.getElementById('qrModalOverlay');
  if (overlay) {
    const input = document.getElementById('customQrUrlInput');
    if (input && window.location.href) {
      input.value = window.location.origin + window.location.pathname;
    }
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
};

window.closeQrModal = function() {
  const overlay = document.getElementById('qrModalOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
};

window.copyMenuLink = function() {
  const input = document.getElementById('customQrUrlInput');
  const url = (input && input.value) ? input.value : window.location.href;
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => {
      showToast("Menu link copied to clipboard!");
    }).catch(() => {
      prompt("Copy this menu URL:", url);
    });
  } else {
    prompt("Copy this menu URL:", url);
  }
};

// ==========================================================================
// 7. INITIALIZATION & EVENT LISTENERS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  renderCategoryTabs();
  initCategorySliderControls();
  renderMenu();
  updateCartUI();

  // Modal Hero Video - Stop after 1 play and enable right lower replay button
  const heroVideo = document.getElementById('modalHeroVideo');
  if (heroVideo) {
    heroVideo.loop = false;
    heroVideo.removeAttribute('loop');
    
    heroVideo.addEventListener('ended', () => {
      window.handleModalHeroVideoEnded();
    });

    heroVideo.addEventListener('timeupdate', () => {
      window.handleModalHeroVideoTimeUpdate(heroVideo);
    });

    heroVideo.addEventListener('play', () => {
      const replayBtn = document.getElementById('modalVideoReplayBtn');
      if (replayBtn && !heroVideo._hasEnded) replayBtn.classList.remove('ended');
      
      const badge = document.getElementById('modalVideoStatusBadge');
      if (badge && !heroVideo._hasEnded) {
        badge.classList.remove('completed');
        badge.innerHTML = '<span class="pulse-dot"></span> In Motion';
      }
    });
  }

  // Food Reveal Video Player - Stop after 1 play and enable replay button
  const foodPlayer = document.getElementById('foodRevealVideoPlayer');
  if (foodPlayer) {
    foodPlayer.loop = false;
    foodPlayer.removeAttribute('loop');
    
    foodPlayer.addEventListener('ended', () => {
      foodPlayer.pause();
      const replayBtn = document.getElementById('foodRevealReplayBtn');
      if (replayBtn) {
        replayBtn.style.display = 'inline-flex';
        replayBtn.classList.add('ended');
      }
    });

    foodPlayer.addEventListener('play', () => {
      const replayBtn = document.getElementById('foodRevealReplayBtn');
      if (replayBtn && !foodPlayer.ended) {
        replayBtn.classList.remove('ended');
        replayBtn.style.display = 'none';
      }
    });
  }
  
  // Search Input
  const searchInput = document.getElementById('dishSearchInput');
  const clearBtn = document.getElementById('searchClearBtn');
  
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearBtn) {
        clearBtn.style.display = searchQuery ? 'flex' : 'none';
      }
      renderMenu();
    });
  }
  
  if (clearBtn && searchInput) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearBtn.style.display = 'none';
      renderMenu();
    });
  }
  
  // Clear Filters button in empty state
  const clearFiltersBtn = document.getElementById('clearFiltersBtn');
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', () => {
      searchQuery = '';
      activeCategory = 'all';
      activeDiet = 'all';
      if (searchInput) searchInput.value = '';
      if (clearBtn) clearBtn.style.display = 'none';
      
      const dietPills = document.querySelectorAll('.diet-pill');
      dietPills.forEach(p => p.classList.toggle('active', p.dataset.diet === 'all'));
      
      renderCategoryTabs();
      renderMenu();
    });
  }
  
  // Dietary Filter Pills
  const dietPills = document.querySelectorAll('.diet-pill');
  dietPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      dietPills.forEach(p => p.classList.remove('active'));
      const clicked = e.currentTarget;
      clicked.classList.add('active');
      activeDiet = clicked.dataset.diet || 'all';
      renderMenu();
    });
  });
  
  // Dining Mode Selector in Cart Drawer
  const modeChips = document.querySelectorAll('.dining-mode-chip');
  modeChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      modeChips.forEach(c => c.classList.remove('active'));
      const clicked = e.currentTarget;
      clicked.classList.add('active');
      diningMode = clicked.dataset.mode;
      
      const locInput = document.getElementById('orderLocationInput');
      if (locInput) {
        if (diningMode === 'Dine-In') locInput.placeholder = 'Enter Table Number (e.g. Table #4)';
        else if (diningMode === 'Takeaway') locInput.placeholder = 'Takeaway Pickup Name';
        else locInput.placeholder = 'Delivery Full Address & Landmark';
      }
    });
  });
  
  // Sticky nav shadow trigger
  const stickyNav = document.getElementById('menuStickyNav');
  if (stickyNav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 120) {
        stickyNav.classList.add('scrolled');
      } else {
        stickyNav.classList.remove('scrolled');
      }
    }, { passive: true });
  }
  
  // Keyboard Accessibility: Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const qrOverlay = document.getElementById('qrModalOverlay');
      if (qrOverlay && qrOverlay.classList.contains('active')) {
        closeQrModal();
        return;
      }

      const videoOverlay = document.getElementById('videoModalOverlay');
      if (videoOverlay && videoOverlay.classList.contains('active')) {
        closeFoodRevealVideo();
        return;
      }
      
      const dishOverlay = document.getElementById('dishModalOverlay');
      if (dishOverlay && dishOverlay.classList.contains('active')) {
        closeDishModal();
        return;
      }
      
      const cartOverlay = document.getElementById('cartDrawerOverlay');
      if (cartOverlay && cartOverlay.classList.contains('active')) {
        toggleCartDrawer(false);
      }
    }
  });
});



