const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">
          © 2024 Arun Shopping Products. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <span className="hover:text-gray-400">Privacy Policy</span>
          <span className="hover:text-gray-400">Terms of Service</span>
          <span className="hover:text-gray-400">Contact Us</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
