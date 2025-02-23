import category1 from "../assets/images/category/clothing.jpg";
import category2 from "../assets/images/category/grocery.jpg";
import category3 from "../assets/images/category/snacks.png";
import category4 from "../assets/images/category/beauty.jpg";
import items from "../assets/images/items.png";

export const categories = [
  {
    id: 1,
    category: "Clothing",
    image: category1,
    subCategories: [
      {
        id: 101,
        subCategory: "Men's Clothing",
        image: category1,
        items: [
          {
            id: 1001,
            name: "Men's Cotton T-Shirt",
            image: items,
            region: "India",
            information: "Soft and breathable cotton T-shirt for men.",
            disclaimer: "Color may vary slightly due to lighting conditions.",
            shelfLife: "N/A",
            sizes: ["S", "M", "L", "XL"],
            pricing: [
              { weight: "S", price: "₹200", originalRate: "₹250", discount: "20% off" },
              { weight: "M", price: "₹250", originalRate: "₹300", discount: "16% off" },
              { weight: "L", price: "₹300", originalRate: "₹350", discount: "14% off" },
              { weight: "XL", price: "₹350", originalRate: "₹400", discount: "12% off" },
            ],
           
          },
          {
            id: 1002,
            name: "Men's Denim Jeans",
            image: items,
            region: "USA",
            information: "High-quality denim jeans with a modern fit.",
            disclaimer: "Wash with similar colors to avoid fading.",
            shelfLife: "N/A",
            sizes: ["28", "30", "32", "34"],
            pricing: [
              { weight: "28", price: "₹1200", originalRate: "₹1500", discount: "20% off" },
              { weight: "30", price: "₹1250", originalRate: "₹1550", discount: "19% off" },
              { weight: "32", price: "₹1300", originalRate: "₹1600", discount: "18% off" },
              { weight: "34", price: "₹1350", originalRate: "₹1650", discount: "18% off" },
            ],
          
          },
        ],
      },
      {
        id: 102,
        subCategory: "Women's Clothing",
        image: category1,
        items: [
          {
            id: 1003,
            name: "Women's Silk Saree",
            image: items,
            region: "India",
            information: "Elegant silk saree with intricate designs.",
            disclaimer: "Dry clean only.",
            shelfLife: "N/A",
            sizes: ["Free Size"],
            pricing: [{ weight: "Free Size", price: "₹5000", originalRate: "₹6000", discount: "16% off" }],
    
          },
          {
            id: 1004,
            name: "Women's Casual Dress",
            image: items,
            region: "France",
            information: "Comfortable and stylish casual dress.",
            disclaimer: "Hand wash recommended.",
            shelfLife: "N/A",
            sizes: ["S", "M", "L"],
            pricing: [
              { weight: "S", price: "₹800", originalRate: "₹1000", discount: "20% off" },
              { weight: "M", price: "₹850", originalRate: "₹1050", discount: "19% off" },
              { weight: "L", price: "₹900", originalRate: "₹1100", discount: "18% off" },
            ],
      
          },
        ],
      },
    ],
  },
  {
    id: 2,
    category: "Grocery & Kitchen",
    image: category2,
    subCategories: [
      {
        id: 201,
        subCategory: "Fruits & Vegetables",
        image: category2,
        items: [
          {
            id: 2001,
            name: "Fresh Tomatoes",
            image: items,
            region: "Maharashtra, India",
            information: "Organic tomatoes, rich in flavor and nutrients.",
            disclaimer: "Store in a cool, dry place.",
            shelfLife: "7 days",
            availableWeights: ["1kg", "2kg", "5kg"],
            pricing: [
              { weight: "1kg", price: "₹40", originalRate: "₹50", discount: "20% off" },
              { weight: "2kg", price: "₹75", originalRate: "₹100", discount: "25% off" },
              { weight: "5kg", price: "₹180", originalRate: "₹250", discount: "28% off" },
            ],
     
          },
          {
            id: 2002,
            name: "Potatoes",
            image: items,
            region: "Punjab, India",
            information: "Fresh and firm potatoes, perfect for cooking.",
            disclaimer: "Avoid exposure to sunlight.",
            shelfLife: "10 days",
            availableWeights: ["1kg", "3kg", "5kg"],
            pricing: [
              { weight: "1kg", price: "₹30", originalRate: "₹40", discount: "25% off" },
              { weight: "3kg", price: "₹85", originalRate: "₹120", discount: "29% off" },
              { weight: "5kg", price: "₹140", originalRate: "₹200", discount: "30% off" },
            ],
      
          },
          {
            id: 2003,
            name: "Fresh Tomatoes",
            image: items,
            region: "Maharashtra, India",
            information: "Organic tomatoes, rich in flavor and nutrients.",
            disclaimer: "Store in a cool, dry place.",
            shelfLife: "7 days",
            availableWeights: ["1kg", "2kg", "5kg"],
            pricing: [
              { weight: "1kg", price: "₹40", originalRate: "₹50", discount: "20% off" },
              { weight: "2kg", price: "₹75", originalRate: "₹100", discount: "25% off" },
              { weight: "5kg", price: "₹180", originalRate: "₹250", discount: "28% off" },
            ],
     
          },
        ],
      },
      {
        id: 202,
        subCategory: "Atta, Rice & Dals",
        image: category2,
        items: [
          {
            id: 2003,
            name: "Basmati Rice",
            image: items,
            region: "Haryana, India",
            information: "Premium quality basmati rice with long grains.",
            disclaimer: "Store in an airtight container.",
            shelfLife: "1 year",
            availableWeights: ["5kg", "10kg", "25kg"],
            pricing: [
              { weight: "5kg", price: "₹500", originalRate: "₹600", discount: "16% off" },
              { weight: "10kg", price: "₹950", originalRate: "₹1200", discount: "20% off" },
              { weight: "25kg", price: "₹2200", originalRate: "₹3000", discount: "26% off" },
            ],

          },
          {
            id: 2004,
            name: "Wheat Atta",
            image: items,
            region: "Madhya Pradesh, India",
            information: "100% whole wheat atta for healthy rotis.",
            disclaimer: "Use within 6 months for best quality.",
            shelfLife: "6 months",
            availableWeights: ["5kg", "10kg"],
            pricing: [
              { weight: "5kg", price: "₹200", originalRate: "₹250", discount: "20% off" },
              { weight: "10kg", price: "₹380", originalRate: "₹500", discount: "24% off" },
            ],
          
          },
        ],
      },
    ],
  },
  {
    id: 3,
    category: "Snacks & Beverages",
    image: category3,
    subCategories: [
      {
        id: 301,
        subCategory: "Chips & Crisps",
        image: category3,
        items: [
          {
            id: 3001,
            name: "Potato Chips",
            image: items,
            region: "India",
            information: "Crunchy and flavorful potato chips.",
            disclaimer: "Contains artificial flavors.",
            shelfLife: "3 months",
            availableWeights: ["50g", "100g", "200g"],
            pricing: [
              { weight: "50g", price: "₹20", originalRate: "₹25", discount: "20% off" },
              { weight: "100g", price: "₹35", originalRate: "₹50", discount: "30% off" },
              { weight: "200g", price: "₹60", originalRate: "₹80", discount: "25% off" },
            ],

          },
        ],
      },
    ],
  },
  {
    id: 4,
    category: "Beauty & SkinCare",
    image: category4,
    subCategories: [
      {
        id: 401,
        subCategory: "Face Care",
        image: category4,
        items: [
          {
            id: 4001,
            name: "Aloe Vera Gel",
            image: items,
            region: "India",
            information: "100% pure aloe vera gel for soothing skin.",
            disclaimer: "For external use only.",
            shelfLife: "2 years",
            availableWeights: ["100ml", "250ml"],
            pricing: [
              { weight: "100ml", price: "₹150", originalRate: "₹200", discount: "25% off" },
              { weight: "250ml", price: "₹300", originalRate: "₹400", discount: "25% off" },
            ],
    
          },
        ],
      },
    ],
  },
];