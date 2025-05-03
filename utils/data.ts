

const categories = [
  {
      title: 'Popular',
      image: 'https://static8.depositphotos.com/1338574/831/i/600/depositphotos_8318731-stock-photo-gold-star.jpg'
  },
  {
      id: 1,
      title: 'Chair',
      image: 'https://www.red-dot.org/fileadmin/bilder/Kategorien_PD/PD_cat_01.jpg'
  },
  {
      id: 2,
      title: 'Table',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9zWCkZ4tvzBmsxyMCY1sMOqxHdAPY6oSRP-vy4FBxH50h86Q-kstU8Qp7WSeTtsIuZ6Y&usqp=CAU'
  },
  {
      id: 3,
      title: 'Armchair',
      image: 'https://asset1.cxnmarksandspencer.com/is/image/mands/__T65_9889D_FS__EC_CHR_ELLI_0'
  },
  {
      id: 4,
      title: 'Sofa',
      image: 'https://www.urbanconcepts.ph/wp/wp-content/uploads/2017/08/4202-1.jpg'
  },
  {
      id: 5,
      title: 'Bed',
      image: 'https://scandinaviandesigns.com/cdn/shop/products/S13_Bolig_Walnut_Full_02.jpg?v=1715217666'
  },
]

const products = [
  {
      id: 1,
      title: 'Loft Style Chair Vinge',
      image: 'https://classic.cdn.media.amplience.net/i/fv/LOFT_LIVING_FIRE?$content$&w=1200',
      images: [
        'https://classic.cdn.media.amplience.net/i/fv/LOFT_LIVING_FIRE?$content$&w=1200',
        'https://classic.cdn.media.amplience.net/i/fv/LOFT_LIVING_FIRE?$content$&w=1200',
        'https://classic.cdn.media.amplience.net/i/fv/LOFT_LIVING_FIRE?$content$&w=1200',
      ],
      category: 1,
      price: '$ 20.00'
  },
  {
      id: 2,
      title: 'Wood Mini Table',
      image: 'https://furniteam.com/wp-content/uploads/MF16660_1_Furniteam-occasional-table-Small-800x800.jpg',
      images: [
        'https://furniteam.com/wp-content/uploads/MF16660_1_Furniteam-occasional-table-Small-800x800.jpg',
        'https://furniteam.com/wp-content/uploads/MF16660_1_Furniteam-occasional-table-Small-800x800.jpg',
        'https://furniteam.com/wp-content/uploads/MF16660_1_Furniteam-occasional-table-Small-800x800.jpg',
      ],
      category: 2,
      price: '$ 25.00'
  },
  {
      id: 3,
      title: 'Luxe Yellow Armchair',
      image: 'https://www.woods-furniture.co.uk/images/products/standard/7706_8118.jpg',
      category: 3,
      price: '$ 45.00'
  },
  {
      id: 4,
      title: 'Very Cozy Sofa',
      image: 'https://www.urbanconcepts.ph/wp/wp-content/uploads/2017/08/4202-1.jpg',
      category: 3,
      price: '$ 280.00'
  },
  {
      id: 5,
      title: 'Velvet Sofa',
      image: 'https://images.sofology.co.uk/dpr_auto/f_auto,c_limit,w_1920,q_auto/ar_1.67,c_crop/productmedia/lifestyle/sku001018982.jpg',
      images: [
          'https://collinsandhayes-cdn-1.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/02/14101256/V7A1199-800x800.jpg',
          'https://images.sofology.co.uk/dpr_auto/f_auto,c_limit,w_1920,q_auto/ar_1.67,c_crop/productmedia/lifestyle/sku001018982.jpg',
          'https://media.sofa.com/thumbor/unsafe/https%3A%2F%2Fmedia.sofa.com%2Fmedias%2FSS22-Homepage-Category-Tiles-1-SOFAS.jpg%3Fcontext%3DbWFzdGVyfHJvb3R8MTM1MzYyfGltYWdlL2pwZWd8aDUyL2g0ZC84OTk4ODEwNTgzMDcwLmpwZ3xjNWUzZDYzMjY2NGNhNWJkYjUwNjg4MDlkNzBiZTFlYmNiNmE1YWEyNDEwMTFhYWRlYTI0OGMwZGVlZTE1OWE1',
      ],
      category: 4,
      price: '$ 120.00'
  },
]

export { products, categories };