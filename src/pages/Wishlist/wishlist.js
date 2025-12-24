import { Fragment } from "react";
import { Navbar, HotelCard } from "../../components";
import { useWishlist } from "../../Context";

export const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <Fragment>
      <Navbar />

      <div className="container my-4">
        <h1 className="text-center mb-4"> Your Wishlist</h1>

        <section className="d-flex flex-wrap justify-content-center gap-4">
          {wishlist &&
            wishlist.map((hotel) => (
              <HotelCard key={hotel._id} hotel={hotel} />
            ))}
        </section>
      </div>
    </Fragment>
  );
};
