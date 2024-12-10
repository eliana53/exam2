export default function About() {
  return (
    <div className="flex flex-col items-center text-center space-y-6">
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <p className="text-lg font-serif">
        My Chinese Restaurant is a place where people can come to enjoy tasty
        Chinese food with family and friends.We’ve been cooking dishes that
        bring the real flavors of China to our community. Our chefs pick fresh
        ingredients and follow traditional recipes to make sure every meal
        tastes just right. We want everyone who visits to feel welcome and enjoy
        good food in a cozy setting.
      </p>
      <p className="text-lg font-mono">
        Our menu has lots of choices, from noodles to rice dishes, so there’s
        something for everyone to enjoy. If you like spicy, sweet, or savory
        flavors, you’ll find something that you like. At Golden Dragon, we work
        hard to make sure each guest has a good time and leaves happy.
      </p>
      <img
        src="./chinese-restaurant.jpeg"
        alt="Chinese Restaurant Logo"
        className="rounded-lg shadow-lg mt-4"
      />
      <p className="font-mono">
        Learn more about Chinese food
        <b className="italic font-sans">
          <a href="https://en.wikipedia.org/wiki/Chinese_cuisine">
            {' '}
            here at the wikipedia for it.
          </a>
        </b>
      </p>
    </div>
  );
}


