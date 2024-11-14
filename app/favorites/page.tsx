import EmptyState from "../components/EmptyState";
import getCurentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";

const FavoritesPage = async () => {
  const listings = await getFavoriteListings().catch((error) => {
    console.error(error);
    return []; // or handle the error as needed
  });
  const currentUser = await getCurentUser();

  if (listings.length === 0) {
    return (
      <>
        <EmptyState
          title="No Favorites found"
          subtitle="Looks like you have favorite listing"
        />
      </>
    );
  }

  return (
    <>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </>
  );
};

export default FavoritesPage;
