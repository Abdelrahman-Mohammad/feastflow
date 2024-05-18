document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("story-modal");
  const closeButton = document.querySelector(".close-button");
  const modalTitle = document.getElementById("modal-title");
  const modalContent = document.getElementById("modal-content");

  const stories = {
    "The Fitness Enthusiast": {
      title: "The Fitness Enthusiast",
      content: `
        As someone who is deeply committed to fitness and maintaining a healthy lifestyle, meal planning has always been a critical component of my daily routine. Before discovering FeastFlow, I often found myself spending countless hours planning and prepping my meals to ensure they aligned with my fitness goals. The process was time-consuming and sometimes overwhelming, especially when balancing work, workouts, and social life.
  
        Everything changed when I started using FeastFlow. The app's comprehensive database of recipes, complete with detailed nutritional information, has made it incredibly easy to plan meals that meet my specific dietary needs. Whether I'm looking to increase my protein intake, reduce carbs, or find the perfect post-workout meal, FeastFlow has a recipe for every requirement.
  
        One of the features I appreciate most is the ability to customize meal plans based on my weekly workout schedule. FeastFlow allows me to plan high-protein meals on strength training days and lighter, carb-rich meals on cardio days. This level of customization ensures that my nutrition supports my training, helping me to achieve optimal performance and recovery.
  
        The grocery list generation feature has also been a game-changer. With FeastFlow, I can quickly generate a shopping list based on my meal plan, ensuring I have all the ingredients I need for the week. This has significantly reduced the time I spend grocery shopping and has helped me stick to my budget by preventing impulse buys.
  
        Another aspect of FeastFlow that has enriched my fitness journey is the community. I've connected with other fitness enthusiasts who share their meal prep tips, favorite recipes, and even their progress. This sense of community and support has been motivating and has provided me with new ideas to keep my meals exciting and varied.
  
        Since using FeastFlow, I've noticed significant improvements in my energy levels, workout performance, and overall health. The app's reminders and notifications ensure that I never miss a meal or forget to prep for the next day, keeping me on track with my nutrition goals.
  
        One of the most enjoyable aspects of my journey with FeastFlow has been discovering new recipes and cuisines. The app has introduced me to a variety of healthy, delicious meals that I might never have tried otherwise. This culinary exploration has kept my diet interesting and enjoyable, making it easier to stick to my fitness plan.
  
        Looking ahead, I'm excited to continue using FeastFlow to support my fitness goals. The app's constant updates and new features promise to make meal planning even more efficient and personalized. With FeastFlow, I feel confident that I can achieve my fitness aspirations and maintain a healthy, balanced lifestyle.
      `,
    },
    "The Culinary Explorer": {
      title: "The Culinary Explorer",
      content: `
        As someone with a passion for cooking and exploring new cuisines, FeastFlow has been an invaluable resource. The app's extensive recipe database has introduced me to a world of flavors and cooking techniques that I might never have discovered otherwise. 
  
        FeastFlow's curated recipes from different cultures have expanded my culinary repertoire, allowing me to recreate authentic dishes from around the globe in my own kitchen. From Thai curries to Italian pastas, I've been able to experiment with a variety of ingredients and cooking styles. 
  
        One of the most exciting features is the ability to save and organize my favorite recipes. I've created personalized collections for different types of cuisine, making it easy to find the perfect recipe for any occasion. The app's step-by-step instructions and video tutorials have also been incredibly helpful, especially when trying out complex dishes for the first time.
  
        The social features of FeastFlow have connected me with other food enthusiasts who share my love for cooking. We exchange tips, share our own recipes, and even challenge each other to try new ingredients or cooking methods. This sense of community has not only enriched my cooking experience but also provided endless inspiration and motivation.
  
        FeastFlow's meal planning and grocery list generation tools have made it simple to organize my weekly cooking adventures. By planning my meals in advance, I can ensure that I have all the necessary ingredients on hand and reduce food waste. The app's integration with local grocery stores has also helped me discover new, high-quality ingredients that enhance my dishes.
  
        One of the most enjoyable aspects of using FeastFlow is hosting themed dinner parties for my friends and family. I've been able to create memorable dining experiences by preparing multi-course meals that showcase different cuisines. FeastFlow's wine pairing suggestions have also been a hit, adding an extra layer of sophistication to my gatherings.
  
        Looking ahead, I'm excited to continue exploring the world of cooking with FeastFlow. The app's constant updates and new features promise to keep my culinary adventures fresh and exciting. With FeastFlow, the possibilities are endless, and I can't wait to see what new flavors and techniques I'll discover next.
      `,
    },
    "The Budget-Conscious Shopper": {
      title: "The Budget-Conscious Shopper",
      content: `
        As someone who is always looking for ways to save money while still enjoying delicious meals, FeastFlow has been a game-changer. The app's grocery list generation feature has helped me plan my shopping trips more efficiently and stick to my budget.
  
        Before using FeastFlow, I often found myself overspending on groceries and wasting food. The app's meal planning tools have made it easy to plan my meals for the week and ensure that I only buy what I need. This has significantly reduced my grocery bill and food waste.
  
        One of the most useful features of FeastFlow is the ability to search for recipes based on ingredients I already have at home. This has helped me make the most of my pantry staples and avoid unnecessary trips to the store. The app's suggestions for using up leftovers have also been incredibly helpful in reducing food waste and saving money.
  
        FeastFlow's integration with local grocery stores has made it easy to find the best deals on ingredients. The app's price comparison tool allows me to see which stores have the best prices on the items I need, helping me make informed shopping decisions. This has been especially useful for finding discounts on fresh produce and other perishable items.
  
        The app's budget-friendly meal plans have introduced me to a variety of affordable recipes that are both nutritious and delicious. I've been able to create healthy, balanced meals without breaking the bank. FeastFlow's nutritional information has also helped me make healthier choices and ensure that I'm getting the nutrients I need.
  
        Since using FeastFlow, I've noticed a significant improvement in my overall financial health. By sticking to a budget and planning my meals in advance, I've been able to save money and reduce my stress levels. The app's reminders and notifications ensure that I never forget to plan my meals or go grocery shopping.
  
        One of the most enjoyable aspects of using FeastFlow is discovering new, budget-friendly recipes. The app's curated collections of affordable meals have introduced me to a variety of dishes that I might never have tried otherwise. I've been able to expand my cooking repertoire and enjoy delicious meals without spending a fortune.
  
        Looking ahead, I'm excited to continue using FeastFlow to support my budget-conscious lifestyle. The app's constant updates and new features promise to make meal planning and grocery shopping even more efficient and affordable. With FeastFlow, I feel confident that I can achieve my financial goals and enjoy delicious, nutritious meals on a budget.
      `,
    },
    "The Health-Conscious Individual": {
      title: "The Health-Conscious Individual",
      content: `
        After deciding to prioritize my health and adopt a healthier lifestyle, FeastFlow has been an indispensable tool. The app's comprehensive database of nutritious recipes has made it easy to find meals that align with my dietary goals and preferences.
  
        Before using FeastFlow, I often struggled to find healthy recipes that were both delicious and easy to prepare. The app's curated collections of nutritious meals have introduced me to a variety of dishes that are both satisfying and good for my body. The detailed nutritional information for each recipe has also helped me make informed choices and ensure that I'm getting the nutrients I need.
  
        One of the features I appreciate most is the ability to filter recipes based on specific dietary needs. Whether I'm looking for low-carb, high-protein, or gluten-free options, FeastFlow has a wide range of recipes to choose from. This has made it easy to stick to my dietary goals and enjoy a diverse array of meals.
  
        FeastFlow's meal planning tools have been incredibly helpful in maintaining a healthy eating routine. By planning my meals in advance, I can ensure that I have a balanced diet and avoid unhealthy impulse purchases. The app's grocery list generation feature has also made it easy to shop for nutritious ingredients and stay on track with my health goals.
  
        Another aspect of FeastFlow that has enriched my healthy eating journey is the community. I've connected with other health-conscious individuals who share their tips, favorite recipes, and success stories. This sense of community and support has been motivating and has provided me with new ideas to keep my meals exciting and varied.
  
        Since using FeastFlow, I've noticed significant improvements in my energy levels, mood, and overall well-being. The app's reminders and notifications ensure that I never miss a meal or forget to prep for the next day, keeping me on track with my nutrition goals.
  
        One of the most enjoyable aspects of using FeastFlow is discovering new, healthy recipes. The app's curated collections of nutritious meals have introduced me to a variety of dishes that I might never have tried otherwise. I've been able to expand my cooking repertoire and enjoy delicious meals that support my health goals.
  
        Looking ahead, I'm excited to continue using FeastFlow to support my healthy lifestyle. The app's constant updates and new features promise to make meal planning and healthy eating even more efficient and enjoyable. With FeastFlow, I feel confident that I can achieve my health goals and enjoy a balanced, nutritious diet.
      `,
    },
    "The Vegan Adventurer": {
      title: "The Vegan Adventurer",
      content: `
        Transitioning to a vegan lifestyle was a decision I made to improve my health and reduce my environmental impact. However, finding diverse and exciting plant-based recipes was initially a challenge. That changed when I discovered FeastFlow.
  
        FeastFlow's extensive database of vegan recipes has been a treasure trove of delicious and creative meals. The app has introduced me to a variety of plant-based dishes that are both nutritious and satisfying. From hearty stews to vibrant salads, I've been able to enjoy a diverse array of meals that keep my diet exciting and balanced.
  
        One of the features I appreciate most is the ability to filter recipes based on specific dietary preferences. FeastFlow's vegan recipe collection includes options for every meal of the day, making it easy to plan a complete and varied diet. The app's detailed nutritional information has also helped me ensure that I'm getting all the essential nutrients I need on a plant-based diet.
  
        FeastFlow's meal planning tools have been incredibly helpful in maintaining my vegan lifestyle. By planning my meals in advance, I can ensure that I have a balanced diet and avoid unhealthy impulse purchases. The app's grocery list generation feature has also made it easy to shop for plant-based ingredients and stay on track with my health goals.
  
        Another aspect of FeastFlow that has enriched my vegan journey is the community. I've connected with other vegans who share their tips, favorite recipes, and success stories. This sense of community and support has been motivating and has provided me with new ideas to keep my meals exciting and varied.
  
        Since using FeastFlow, I've noticed significant improvements in my energy levels, mood, and overall well-being. The app's reminders and notifications ensure that I never miss a meal or forget to prep for the next day, keeping me on track with my nutrition goals.
  
        One of the most enjoyable aspects of using FeastFlow is discovering new, plant-based recipes. The app's curated collections of vegan meals have introduced me to a variety of dishes that I might never have tried otherwise. I've been able to expand my cooking repertoire and enjoy delicious meals that support my vegan lifestyle.
  
        Looking ahead, I'm excited to continue using FeastFlow to support my plant-based journey. The app's constant updates and new features promise to make vegan meal planning and cooking even more efficient and enjoyable. With FeastFlow, I feel confident that I can achieve my health goals and enjoy a balanced, nutritious vegan diet.
      `,
    },
    "The College Student": {
      title: "The College Student",
      content: `
        As a college student with a busy schedule and limited budget, meal planning and cooking can be challenging. FeastFlow has been a lifesaver, helping me navigate the complexities of cooking for myself with simple, affordable, and nutritious recipes.
  
        Before using FeastFlow, I often found myself relying on fast food and unhealthy snacks due to time constraints and lack of cooking skills. The app's easy-to-follow recipes and meal planning tools have made it incredibly easy to prepare healthy meals that fit my budget and schedule.
  
        One of the features I appreciate most is the ability to search for recipes based on the ingredients I already have. This has helped me make the most of my pantry staples and avoid unnecessary trips to the store. The app's suggestions for using up leftovers have also been incredibly helpful in reducing food waste and saving money.
  
        FeastFlow's grocery list generation feature has made it easy to plan my shopping trips and stick to my budget. By planning my meals in advance, I can ensure that I have all the ingredients I need for the week and avoid impulse purchases. This has significantly reduced my grocery bill and helped me save money.
  
        Another aspect of FeastFlow that has enriched my college experience is the community. I've connected with other students who share their tips, favorite recipes, and success stories. This sense of community and support has been motivating and has provided me with new ideas to keep my meals exciting and varied.
  
        Since using FeastFlow, I've noticed significant improvements in my energy levels, mood, and overall well-being. The app's reminders and notifications ensure that I never miss a meal or forget to prep for the next day, keeping me on track with my nutrition goals.
  
        One of the most enjoyable aspects of using FeastFlow is discovering new, budget-friendly recipes. The app's curated collections of affordable meals have introduced me to a variety of dishes that I might never have tried otherwise. I've been able to expand my cooking repertoire and enjoy delicious meals without breaking the bank.
  
        Looking ahead, I'm excited to continue using FeastFlow to support my college journey. The app's constant updates and new features promise to make meal planning and cooking even more efficient and enjoyable. With FeastFlow, I feel confident that I can achieve my academic and health goals while enjoying nutritious, affordable meals.
      `,
    },
    "The Gluten-Free Gourmand": {
      title: "The Gluten-Free Gourmand",
      content: `
        Finding delicious, gluten-free options has never been easier since I started using FeastFlow. The app's tailored recipes meet my dietary needs without compromising on taste, making it an indispensable tool for anyone following a gluten-free diet.
  
        Before discovering FeastFlow, I often struggled to find gluten-free recipes that were both satisfying and easy to prepare. The app's comprehensive database of gluten-free meals has introduced me to a variety of dishes that are both nutritious and delicious. From gluten-free pastas to hearty soups, I've been able to enjoy a diverse array of meals that keep my diet exciting and balanced.
  
        One of the features I appreciate most is the ability to filter recipes based on specific dietary needs. FeastFlow's gluten-free recipe collection includes options for every meal of the day, making it easy to plan a complete and varied diet. The app's detailed nutritional information has also helped me ensure that I'm getting all the essential nutrients I need.
  
        FeastFlow's meal planning tools have been incredibly helpful in maintaining my gluten-free lifestyle. By planning my meals in advance, I can ensure that I have a balanced diet and avoid unhealthy impulse purchases. The app's grocery list generation feature has also made it easy to shop for gluten-free ingredients and stay on track with my health goals.
  
        Another aspect of FeastFlow that has enriched my gluten-free journey is the community. I've connected with other individuals who share their tips, favorite recipes, and success stories. This sense of community and support has been motivating and has provided me with new ideas to keep my meals exciting and varied.
  
        Since using FeastFlow, I've noticed significant improvements in my energy levels, mood, and overall well-being. The app's reminders and notifications ensure that I never miss a meal or forget to prep for the next day, keeping me on track with my nutrition goals.
  
        One of the most enjoyable aspects of using FeastFlow is discovering new, gluten-free recipes. The app's curated collections of gluten-free meals have introduced me to a variety of dishes that I might never have tried otherwise. I've been able to expand my cooking repertoire and enjoy delicious meals that support my gluten-free lifestyle.
  
        Looking ahead, I'm excited to continue using FeastFlow to support my gluten-free journey. The app's constant updates and new features promise to make gluten-free meal planning and cooking even more efficient and enjoyable. With FeastFlow, I feel confident that I can achieve my health goals and enjoy a balanced, nutritious gluten-free diet.
      `,
    },
    "The Aspiring Chef": {
      title: "The Aspiring Chef",
      content: `
        As someone who is passionate about cooking and constantly looking to improve my skills, FeastFlow has been an invaluable resource. The app's advanced techniques and gourmet recipes have turned my kitchen into a chef's paradise, allowing me to elevate my cooking to new heights.
  
        Before using FeastFlow, I often relied on basic recipes and found it challenging to expand my culinary repertoire. The app's extensive database of gourmet meals has introduced me to a variety of dishes that challenge my skills and inspire creativity. From intricate desserts to multi-course meals, I've been able to push my boundaries and explore new cooking techniques.
  
        One of the features I appreciate most is the ability to save and organize my favorite recipes. I've created personalized collections for different types of cuisine, making it easy to find the perfect recipe for any occasion. The app's step-by-step instructions and video tutorials have also been incredibly helpful, especially when trying out complex dishes for the first time.
  
        FeastFlow's meal planning tools have been incredibly helpful in organizing my cooking adventures. By planning my meals in advance, I can ensure that I have all the necessary ingredients on hand and reduce food waste. The app's integration with local grocery stores has also helped me discover new, high-quality ingredients that enhance my dishes.
  
        Another aspect of FeastFlow that has enriched my cooking journey is the community. I've connected with other aspiring chefs who share their tips, favorite recipes, and even their tweaks to the existing database of dishes on FeastFlow. This sense of community and support has been motivating and has provided endless inspiration and motivation.
  
        Since using FeastFlow, I've noticed significant improvements in my cooking skills and confidence in the kitchen. The app's reminders and notifications ensure that I never miss a meal or forget to prep for the next day, keeping me on track with my culinary goals.
  
        One of the most enjoyable aspects of using FeastFlow is hosting themed dinner parties for my friends and family. I've been able to create memorable dining experiences by preparing multi-course meals that showcase different cuisines. FeastFlow's wine pairing suggestions have also been a hit, adding an extra layer of sophistication to my gatherings.
  
        Looking ahead, I'm excited to continue using FeastFlow to support my culinary journey. The app's constant updates and new features promise to keep my cooking adventures fresh and exciting. With FeastFlow, the possibilities are endless, and I can't wait to see what new flavors and techniques I'll discover next.
      `,
    },
    "The Senior Enthusiast": {
      title: "The Senior Enthusiast",
      content: `
        Embracing retirement with energy, FeastFlow has tailored meals that fit perfectly with my active lifestyle, keeping me healthy and vibrant. As a senior enthusiast, I've found FeastFlow to be an indispensable tool in maintaining a nutritious and balanced diet.
  
        Before using FeastFlow, I often struggled to find recipes that catered to my dietary needs and preferences. The app's comprehensive database of meals has introduced me to a variety of dishes that are both delicious and easy to prepare. From heart-healthy options to nutrient-dense salads, I've been able to enjoy a diverse array of meals that keep my diet exciting and balanced.
  
        One of the features I appreciate most is the ability to filter recipes based on specific dietary needs. FeastFlow's collection includes options for low-sodium, high-fiber, and diabetic-friendly meals, making it easy to plan a diet that supports my health goals. The app's detailed nutritional information has also helped me make informed choices and ensure that I'm getting the nutrients I need.
  
        FeastFlow's meal planning tools have been incredibly helpful in maintaining my active lifestyle. By planning my meals in advance, I can ensure that I have a balanced diet and avoid unhealthy impulse purchases. The app's grocery list generation feature has also made it easy to shop for nutritious ingredients and stay on track with my health goals.
  
        Another aspect of FeastFlow that has enriched my retirement is the community. I've connected with other seniors who share their tips, favorite recipes, and success stories. This sense of community and support has been motivating and has provided me with new ideas to keep my meals exciting and varied.
  
        Since using FeastFlow, I've noticed significant improvements in my energy levels, mood, and overall well-being. The app's reminders and notifications ensure that I never miss a meal or forget to prep for the next day, keeping me on track with my nutrition goals.
  
        One of the most enjoyable aspects of using FeastFlow is discovering new, healthy recipes. The app's curated collections of nutritious meals have introduced me to a variety of dishes that I might never have tried otherwise. I've been able to expand my cooking repertoire and enjoy delicious meals that support my active lifestyle.
  
        Looking ahead, I'm excited to continue using FeastFlow to support my journey into retirement. The app's constant updates and new features promise to make meal planning and healthy eating even more efficient and enjoyable. With FeastFlow, I feel confident that I can achieve my health goals and enjoy a balanced, nutritious diet that keeps me vibrant and active.
      `,
    },
  };

  function openModal(storyTitle) {
    const story = stories[storyTitle];
    modalTitle.textContent = story.title;
    modalContent.innerHTML = story.content;
    modal.style.display = "flex";
    body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.style.display = "none";
    body.style.overflow = "auto";
  }

  closeButton.addEventListener("click", closeModal);
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.querySelectorAll(".story-item .button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const storyTitle = event.target
        .closest(".story-item")
        .querySelector("h4").textContent;
      openModal(storyTitle);
    });
  });
});
