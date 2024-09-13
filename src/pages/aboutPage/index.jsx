const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        About Our Project
      </h1>
      <p className="text-gray-700 text-lg mb-4">
        Welcome to our ReactJS-based e-commerce platform! This website is a
        modern, responsive shopping experience designed with the latest web
        technologies.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Key Features:
      </h2>

      <ul className="list-disc list-inside text-gray-700 text-lg mb-4">
        <li>
          <strong>ReactJS:</strong> The core of our application, enabling a
          fast, scalable, and dynamic user interface.
        </li>
        <li>
          <strong>Cart Functionality:</strong> Our cart system is fully
          integrated, allowing users to add, remove, and manage their items with
          ease.
        </li>
        <li>
          <strong>React Router DOM:</strong> Seamless navigation throughout the
          site, providing a smooth user experience without page reloads.
        </li>
        <li>
          <strong>React Context:</strong> State management across the
          application, ensuring that data flows efficiently between components,
          especially in handling the cart.
        </li>
        <li>
          <strong>React Hooks:</strong> Leveraging hooks for handling state,
          side effects, and other React features, making the codebase cleaner
          and more maintainable.
        </li>
        <li>
          <strong>TailwindCSS:</strong> A utility-first CSS framework that
          allows us to create a beautiful, responsive design with minimal
          effort.
        </li>
      </ul>

      <p className="text-gray-700 text-lg mb-4">
        Our goal is to deliver a user-friendly and efficient shopping
        experience. Whether you're browsing products, managing your cart, or
        checking out, our platform is designed to make the process as intuitive
        as possible.
      </p>

      <p className="text-gray-700 text-lg">
        Thank you for visiting our site. We hope you enjoy your shopping
        experience!
      </p>
    </div>
  );
};

export default About;
