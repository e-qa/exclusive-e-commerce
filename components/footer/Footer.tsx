import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary mt-20">
      <div className="container py-10 text-white">
        <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-20 w-full">
          <div className="w-full flex flex-col gap-0 lg:gap-10">
            <h4 className="my-5">About us</h4>
            <Link
              href={'/'}
              className="capitalize text-2xl lg:text-3xl flex flex-col font-bold"
            >
              exclusive
            </Link>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
              vestibulum magna, et dapibus lacus. Duis nec vestibulum magna, et
              dapibus lacus.
            </p>
          </div>
          <div className="w-full">
            <h4 className="my-5">Contact Info</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex flex-col">
                <span className="text-base">ADDRESS:</span>
                <span className="text-sm ">
                  456 Elm Street, Springfield, USA
                </span>
              </li>
              <li className="flex flex-col">
                <span className="text-base">Phone:</span>
                <span className="text-sm "> +944 123 456 67 89</span>
              </li>
              <li className="flex flex-col">
                <span className="text-base">Email:</span>
                <span className="text-sm ">mail@example.com</span>
              </li>
              <li className="flex flex-col">
                <span className="text-base">Business Hours:</span>
                <span className="text-sm ">
                  Monday - Saturday / 8:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <h4 className="my-5">Customer Service</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>Customer Support</li>
              <li>Track My Orders</li>
              <li>Shipping & Returns</li>
              <li>Order History</li>
              <li>Search Products</li>
              <li>Account Settings</li>
              <li>Join Our Team</li>
              <li>Our Story</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
