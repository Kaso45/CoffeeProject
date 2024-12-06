const products = [
  {
    category: `beans`,
    image: `/public/images/aromacraft.png`,
    name: `AromaCraft`,
    rating: 4.5,
    priceCent: 1500,
    de: `AromaCraft offers a premium coffee experience, crafted from high-altitude beans roasted to highlight complex flavors of caramel, cocoa, and subtle fruitiness. Designed for both connoisseurs and casual drinkers, it delivers a rich, smooth taste that's perfect for any occasion. The coffee comes in freshness-sealed packaging, ensuring peak flavor with every sip.`
  },

  {
    category: `beans`,
    image: `/public/images/bitbrew.png`,
    name: `BitBrew`,
    rating: 4.0,
    priceCent: 1500,
    de: `BitBrew Kenya Dark Roast blends tradition and innovation, with beans sourced from Kenya's highlands and roasted to enhance bold, intense flavors of citrus and cocoa. The smooth finish offers an energizing experience, perfect for a digital-age lifestyle.`
  },

  {
    category: `beans`,
    image: `/public/images/casa.png`,
    name: `Casa`,
    rating: 4.0,
    priceCent: 2000,
    de: `Casa coffee generally refers to a coffee blend or brand that focuses on providing a cozy, homey, and comforting coffee experience. The term "Casa" (Spanish for "house") often evokes warmth and familiarity, so coffee labeled as "Casa" might emphasize smooth, approachable flavors designed for everyday enjoyment.`
  },

  {
    category: `beans`,
    image: `/public/images/koko.png`,
    name: `Koko`,
    rating: 5.0,
    priceCent: 2200,
    de: `KoKo Coffee is a smooth, medium roast that combines the rich flavors of cocoa and coffee in perfect harmony. Sourced from lush, tropical farms, its beans are carefully roasted to highlight notes of chocolate, caramel, and a hint of vanilla.`
  },

  {
    category: `beans`,
    image: `/public/images/navy.png`,
    name: `Navy Brew`,
    rating: 4.0,
    priceCent: 2300,
    de:`Navy Brew is a robust dark roast coffee inspired by the adventurous spirit of the seas. Sourced from coastal regions, its beans are carefully roasted to develop a rich, smoky flavor with subtle notes of sea salt and dark chocolate. Each cup delivers a strong, invigorating taste`
  },

  {
    category: `beans`,
    image: `/public/images/zenbean.png`,
    name: `ZenBean`,
    rating: 5.0,
    priceCent: 2000,
    de:`ZenBean is likely a coffee brand or blend that emphasizes a calming, balanced coffee experience, aligning with the idea of zen or mindfulness. Although there isn't a widely known global brand by this name, the term "ZenBean" suggests a focus on quality, smoothness, and relaxation.`
  },

  {
    category: `capsules`,
    image: `/public/images/capsules1.png`,
    name: `Espresso`,
    rating: 4.5,
    priceCent: 3200,
    de:`ZenBean is likely a coffee brand or blend that emphasizes a calming, balanced coffee experience, aligning with the idea of zen or mindfulness. Although there isn't a widely known global brand by this name, the term "ZenBean" suggests a focus on quality, smoothness, and relaxation.`
  },

  {
    category: `capsules`,
    image: `/public/images/capsules2.png`,
    name: `Buno`,
    rating: 4.0,
    priceCent: 2800,
    de:`ZenBean is likely a coffee brand or blend that emphasizes a calming, balanced coffee experience, aligning with the idea of zen or mindfulness. Although there isn't a widely known global brand by this name, the term "ZenBean" suggests a focus on quality, smoothness, and relaxation.`
  },

  {
    category: `capsules`,
    image: `/public/images/capsules3.png`,
    name: `HeartBlend`,
    rating: 4.5,
    priceCent: 3100,
    de:`ZenBean is likely a coffee brand or blend that emphasizes a calming, balanced coffee experience, aligning with the idea of zen or mindfulness. Although there isn't a widely known global brand by this name, the term "ZenBean" suggests a focus on quality, smoothness, and relaxation.`
  },

  {
    category: `capsules`,
    image: `/public/images/capsules4.png`,
    name: `Cosmo`,
    rating: 5.0,
    priceCent: 3300,
    de:`ZenBean is likely a coffee brand or blend that emphasizes a calming, balanced coffee experience, aligning with the idea of zen or mindfulness. Although there isn't a widely known global brand by this name, the term "ZenBean" suggests a focus on quality, smoothness, and relaxation.`
  },

  {
    category: `capsules`,
    image: `/public/images/capsules5.png`,
    name: `Pike`,
    rating: 3.5,
    priceCent: 1800,
    de:`ZenBean is likely a coffee brand or blend that emphasizes a calming, balanced coffee experience, aligning with the idea of zen or mindfulness. Although there isn't a widely known global brand by this name, the term "ZenBean" suggests a focus on quality, smoothness, and relaxation.`
  },

  {
    category: `capsules`,
    image: `/public/images/capsules6.png`,
    name: `Velvet`,
    rating: 3.0,
    priceCent: 1600,
    de:`ZenBean is likely a coffee brand or blend that emphasizes a calming, balanced coffee experience, aligning with the idea of zen or mindfulness. Although there isn't a widely known global brand by this name, the term "ZenBean" suggests a focus on quality, smoothness, and relaxation.`
  },

  {
    category: `grounds`,
    image: `/public/images/aromacraft.png`,
    name: `AromaCraft (Grounds)`,
    rating: 4.5,
    priceCent: 1500,
    de: `AromaCraft offers a premium coffee experience, crafted from high-altitude beans roasted to highlight complex flavors of caramel, cocoa, and subtle fruitiness. Designed for both connoisseurs and casual drinkers, it delivers a rich, smooth taste that's perfect for any occasion. The coffee comes in freshness-sealed packaging, ensuring peak flavor with every sip.`
  },

  {
    category: `grounds`,
    image: `/public/images/bitbrew.png`,
    name: `BitBrew (Grounds)`,
    rating: 4.0,
    priceCent: 1500,
    de: `BitBrew Kenya Dark Roast blends tradition and innovation, with beans sourced from Kenya's highlands and roasted to enhance bold, intense flavors of citrus and cocoa. The smooth finish offers an energizing experience, perfect for a digital-age lifestyle.`
  },

  {
    category: `grounds`,
    image: `/public/images/casa.png`,
    name: `Casa (Grounds)`,
    rating: 4.0,
    priceCent: 2000,
    de: `Casa coffee generally refers to a coffee blend or brand that focuses on providing a cozy, homey, and comforting coffee experience. The term "Casa" (Spanish for "house") often evokes warmth and familiarity, so coffee labeled as "Casa" might emphasize smooth, approachable flavors designed for everyday enjoyment.`
  },

  {
    category: `grounds`,
    image: `/public/images/koko.png`,
    name: `Koko (Grounds)`,
    rating: 5.0,
    priceCent: 2200,
    de: `KoKo Coffee is a smooth, medium roast that combines the rich flavors of cocoa and coffee in perfect harmony. Sourced from lush, tropical farms, its beans are carefully roasted to highlight notes of chocolate, caramel, and a hint of vanilla.`
  },

  {
    category: `grounds`,
    image: `/public/images/navy.png`,
    name: `Navy Brew (Grounds)`,
    rating: 4.0,
    priceCent: 2300,
    de:`Navy Brew is a robust dark roast coffee inspired by the adventurous spirit of the seas. Sourced from coastal regions, its beans are carefully roasted to develop a rich, smoky flavor with subtle notes of sea salt and dark chocolate. Each cup delivers a strong, invigorating taste`
  },

  {
    category: `grounds`,
    image: `/public/images/zenbean.png`,
    name: `ZenBean (Grounds)`,
    rating: 5.0,
    priceCent: 2000,
    de:`ZenBean is likely a coffee brand or blend that emphasizes a calming, balanced coffee experience, aligning with the idea of zen or mindfulness. Although there isn't a widely known global brand by this name, the term "ZenBean" suggests a focus on quality, smoothness, and relaxation.`
  },
];